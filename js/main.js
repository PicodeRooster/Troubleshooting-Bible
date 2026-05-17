(function () {
  const section = document.body.dataset.section || 'Home';
  const isNav   = document.body.dataset.isNav === 'true';

  // Expects global `manifest` array inlined by the build step.
  // Until the build step exists, pages must inject `window.manifest` before loading this script.
  if (typeof manifest === 'undefined') return;

  // id → entry lookup for hydrating Lunr result refs
  const manifestById = {};
  manifest.forEach(function (entry) { manifestById[entry.id] = entry; });

  // Build Lunr index from inlined manifest (titles + tags only)
  const idx = lunr(function () {
    this.ref('id');
    this.field('title', { boost: 10 });
    this.field('tags',  { boost: 5 });
    manifest.forEach(function (doc) { this.add(doc); }, this);
  });

  // --- Query helpers ---

  function buildLunrQuery(raw) {
    return raw.trim().split(/\s+/).map(function (t) { return t + '*'; }).join(' ');
  }

  function runSearch(query) {
    if (!query || query.length < 2) return null;

    var raw = [];
    try { raw = idx.search(buildLunrQuery(query)); } catch (e) { raw = []; }
    if (raw.length === 0) try { raw = idx.search(query + '~1'); } catch (e) { raw = []; }
    if (raw.length === 0) try { raw = idx.search(query + '~2'); } catch (e) { raw = []; }

    var all = raw.map(function (r) { return manifestById[r.ref]; }).filter(Boolean);
    var inScope    = all.filter(function (r) { return r.path.startsWith(section + '/'); });
    var outOfScope = all.filter(function (r) { return !r.path.startsWith(section + '/'); });

    return { all: all, inScope: inScope, outOfScope: outOfScope, noResultsAnywhere: all.length === 0 };
  }

  // --- Rendering ---

  function clearDropdown() {
    var el = document.getElementById('search-dropdown');
    if (el) { el.innerHTML = ''; el.hidden = true; }
  }

  function renderDropdown(results) {
    var el = document.getElementById('search-dropdown');
    if (!el) return;

    if (!results || results.noResultsAnywhere) {
      el.innerHTML = '<li class="no-results">No results</li>';
      el.hidden = false;
      return;
    }

    var inScope    = results.inScope;
    var outOfScope = results.outOfScope;
    var slots = inScope.concat(outOfScope).slice(0, 3);

    var html = slots.map(function (r) {
      var sectionLabel = r.path.split('/')[0];
      return '<li class="dropdown-item">' +
        '<a href="#" data-path="' + r.path + '" class="result-link">' + r.title + '</a>' +
        '<span class="result-section">' + sectionLabel + '</span>' +
        '</li>';
    }).join('');

    if (section !== 'Home' && inScope.length === 0 && outOfScope.length > 0) {
      var hint = outOfScope[0].path.split('/')[0];
      html += '<li class="did-you-mean">Did you mean to search in ' + hint + '?</li>';
    }

    el.innerHTML = html;
    el.hidden = false;
  }

  function renderPageBody(inScope) {
    var container = document.getElementById('search-results');
    if (!container) return;

    if (!inScope || inScope.length === 0) {
      container.innerHTML = '<p class="no-results">No results in ' + section + '</p>';
      return;
    }

    container.innerHTML = inScope.map(function (r) {
      return '<div class="result-entry">' +
        '<a href="#" data-path="' + r.path + '" class="result-link">' + r.title + '</a>' +
        '<span class="result-type">' + r.type + '</span>' +
        '</div>';
    }).join('');
  }

  // --- loadArticle: shared replacement for per-page inline fetch/parse/render blocks ---

  function loadArticle(path) {
    var el = document.getElementById('article');
    if (!el || typeof marked === 'undefined') return;

    // Resolve docs/ prefix relative to the current page location
    var atRoot = window.location.pathname.indexOf('/pages/') === -1;
    var docsPrefix = atRoot ? 'docs/' : '../docs/';

    fetch(docsPrefix + path)
      .then(function (r) { return r.text(); })
      .then(function (md) { el.innerHTML = marked.parse(md); })
      .catch(function () { el.innerHTML = '<p class="load-error">Article not found.</p>'; });
  }

  window.loadArticle = loadArticle;

  // Delegated click handler for all result links (dropdown + page body)
  document.addEventListener('click', function (e) {
    var link = e.target.closest('.result-link');
    if (!link) return;
    e.preventDefault();
    var path = link.dataset.path;
    if (path) loadArticle(path);
    clearDropdown();
  });

  // --- Debounced input listener ---

  var debounceTimer;
  var input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    var query = this.value.trim();

    if (query.length < 2) {
      clearDropdown();
      if (isNav && section !== 'Home') {
        var container = document.getElementById('search-results');
        if (container) container.innerHTML = '';
      }
      return;
    }

    var self = this;
    debounceTimer = setTimeout(function () {
      var results = runSearch(self.value.trim());

      if (!results || results.noResultsAnywhere) {
        renderDropdown(null);
        if (isNav && section !== 'Home') renderPageBody([]);
        return;
      }

      if (section === 'Home') {
        // Global top-3 dropdown, no scope filter, no "did you mean"
        var el = document.getElementById('search-dropdown');
        if (el) {
          var slots = results.all.slice(0, 3);
          el.innerHTML = slots.map(function (r) {
            var sectionLabel = r.path.split('/')[0];
            return '<li class="dropdown-item">' +
              '<a href="#" data-path="' + r.path + '" class="result-link">' + r.title + '</a>' +
              '<span class="result-section">' + sectionLabel + '</span>' +
              '</li>';
          }).join('');
          el.hidden = false;
        }
        return;
      }

      renderDropdown(results);
      if (isNav) renderPageBody(results.inScope);
    }, 150);
  });

}());
