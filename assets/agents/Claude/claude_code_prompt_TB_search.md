# Troubleshooting Bible — Search & main.js Implementation Brief

## Project identity

This project is called the **Troubleshooting Bible (TB)**. It is a self-contained offline knowledge base distributed as a zip file, runnable from a USB drive or phone with no server or internet connection. The only runtime dependency is a browser. All file access occurs under the `file://` protocol.

---

## File structure

```
Troubleshooting Bible/ (root)
├── index.html                  ← Home (nav page)
├── main.js                     ← Shared runtime module (to be built)
├── docs/
│   ├── manifest.json           ← Build-time generated, consumed at runtime
│   ├── Dictionary/
│   │   └── *.md
│   ├── Encyclopedia/
│   │   └── *.md
│   ├── How-To Guides/
│   │   └── *.md
│   ├── Resources/
│   │   └── *.md
│   └── Bibliography/
│       └── *.md
└── pages/
    ├── dictionary.html         ← Nav page
    ├── encyclopedia.html       ← Nav page
    ├── how-to-guides.html      ← Nav page
    ├── resources.html          ← Nav page
    └── bibliography.html       ← Nav page
```

---

## Architecture constraints (file:// protocol)

- `fetch()` and `XMLHttpRequest` are BLOCKED under `file://`
- Standard HTML linking (`<a href>`, `<script src>`, `<link href>`, `<img src>`) works fine
- Lunr search index MUST be inlined as a JS variable at build time — do NOT attempt to fetch it at runtime
- All build-time baking (manifest, search index, citations, timestamps) must be embedded before the zip is generated
- `<script src="...">` tags silently ignore any inline code inside them — external load and inline logic must be separate `<script>` tags
- All `<script>` tags must be placed at the bottom of `<body>`

---

## Article format

All content is authored in Markdown with YAML frontmatter. Mandatory frontmatter fields:

```yaml
---
title: string
type: vocabulary | encyclopedia | how-to
tags: [array, of, strings]
source: citation_key
created: YYYY-MM-DD
---
```

A separate existing script handles parsing `.md` files and rendering them into the page via `marked.js`. Do not replace or conflict with this script. The markdown parser fetches a `.md` file by path and renders its content into a container `<div>`. Search feeds it a path; it handles rendering.

---

## Page taxonomy

There are two page types. This distinction controls search behavior.

### Nav pages (body population ON)
Pages accessible from the navigation bar. Each is a section index — they list entries, not article content.

```html
<a href="./index.html">Home</a>
<a href="./pages/dictionary.html">Dictionary</a>
<a href="./pages/encyclopedia.html">Encyclopedia</a>
<a href="./pages/how-to-guides.html">How-To Guides</a>
<a href="./pages/resources.html">Resources</a>
<a href="./pages/bibliography.html">Bibliography</a>
```

**Exception**: `index.html` (Home) is a nav page but opts out of body population. Dropdown only.

### Article pages
Any rendered article (markdown content displayed in the page). Body population is OFF. Dropdown only.

Each page declares its own identity via `data-` attributes on `<body>`:

```html
<!-- dictionary.html -->
<body data-section="Dictionary" data-is-nav="true">

<!-- index.html -->
<body data-section="Home" data-is-nav="false">
```

`main.js` reads these at load time:

```js
const section = document.body.dataset.section;
const isNav   = document.body.dataset.isNav === 'true';
```

---

## manifest.json

Generated at build time by walking `docs/`. Consumed at runtime by `main.js`. Structure:

```json
[
  {
    "id": "Dictionary/RAM",
    "path": "Dictionary/RAM.md",
    "title": "RAM",
    "type": "vocabulary",
    "tags": ["memory", "hardware", "ram"]
  }
]
```

`id` is the path without extension, used as the Lunr document reference.

---

## Lunr search index

Built at **page load time** from the inlined manifest. NOT fetched at runtime.

```js
const idx = lunr(function() {
  this.ref('id');
  this.field('title', { boost: 10 });
  this.field('tags',  { boost: 5 });
  manifest.forEach(doc => this.add(doc));
});
```

Lunr searches titles and tags only. It does not search markdown body content.

---

## Search behavior specification

### Query preprocessing

Every query term must have `*` appended for prefix matching:

```js
function buildLunrQuery(raw) {
  return raw.trim().split(/\s+/).map(t => t + '*').join(' ');
}
```

Rationale: Lunr stems tokens at index time (e.g. `Windows` → `window`). Without `*`, a query of `win` does not match `window`. With `win*`, it does. Note: wildcard queries bypass the stemmer — this is acceptable for search-as-you-type.

### Fuzzy fallback

If prefix query returns 0 results, retry with edit distance fuzzy matching:

```js
let results = idx.search(buildLunrQuery(query));

if (results.length === 0) {
  results = idx.search(query + '~1');  // edit distance 1
}
if (results.length === 0) {
  results = idx.search(query + '~2');  // edit distance 2
}
// If still 0: true no results
```

This handles transpositions (`WINDWOS` → `WINDOWS`) and minor typos. Completely unrelated strings (e.g. `RAVGFDCTYSA`) correctly return 0 results after all fallbacks.

### Debounce

Apply 150ms debounce to the input event handler before invoking search.

### Minimum query length

Gate search at 2 characters minimum. Below 2 chars: clear results, do nothing.

---

## Search result structure

```js
function search(query, section, isNav) {
  if (!query || query.length < 2) return null;

  let raw = idx.search(buildLunrQuery(query));
  if (raw.length === 0) raw = idx.search(query + '~1');
  if (raw.length === 0) raw = idx.search(query + '~2');

  const all = raw.map(r => manifestById[r.ref]);

  const inScope    = all.filter(r => r.path.startsWith(section + '/'));
  const outOfScope = all.filter(r => !r.path.startsWith(section + '/'));

  return {
    inScope,
    outOfScope,
    dropdown: buildDropdown(inScope, outOfScope),
    noResultsAnywhere: all.length === 0
  };
}
```

---

## Dropdown behavior (all pages)

Always rendered. Always global. Shows top 3 results, in-scope prioritized:

```js
function buildDropdown(inScope, outOfScope) {
  const slots = [...inScope, ...outOfScope].slice(0, 3);
  return slots;
}
```

### Dropdown display rules

| Condition | Dropdown shows |
|---|---|
| `inScope` has results | In-scope results first, pad to 3 with out-of-scope |
| `inScope` empty, `outOfScope` has results | Out-of-scope results + "Did you mean to search in [section]?" prompt |
| All results empty after fuzzy fallback | "No results" |

The "Did you mean" prompt appears when `inScope.length === 0 && outOfScope.length > 0`. Display the section name of the top out-of-scope result.

---

## Page body population (nav pages only, except Home)

Fires only when `isNav === true && section !== 'Home'`.

- Renders a **list of matched manifest entries** (title + type badge, each a link) — NOT full markdown content
- Updates live on every debounced keystroke
- Scope: `inScope` only
- If `inScope` is empty: display "No results in [section]" inside the page body
- Clicking a result passes the article path to the existing markdown parser script

```js
function renderPageBody(inScope, section, container) {
  if (!inScope || inScope.length === 0) {
    container.innerHTML = `<p class="no-results">No results in ${section}</p>`;
    return;
  }
  container.innerHTML = inScope.map(r => `
    <div class="result-entry">
      <a href="#" data-path="${r.path}" class="result-link">${r.title}</a>
      <span class="result-type">${r.type}</span>
    </div>
  `).join('');
}
```

Result links should invoke the existing markdown parser, not navigate to a new page.

---

## Home page behavior

`data-section="Home"`, `data-is-nav="false"`.

- Dropdown: global results, top 3, relevance ranked, no scope filter
- Page body: untouched

```js
if (section === 'Home') {
  const all = raw.map(r => manifestById[r.ref]).slice(0, 3);
  renderDropdown(all, null);  // null section = no "did you mean" logic
  return;
}
```

---

## Full decision tree

```
Input event fires
    │
    ├── query.length < 2 → clear UI, return
    │
    ▼
Run search(query, section, isNav)
    │
    ├── noResultsAnywhere → show "No results" in dropdown, clear body
    │
    ├── section === 'Home'
    │     └── render top 3 global in dropdown only
    │
    └── section !== 'Home'
          ├── render dropdown (in-scope first, pad to 3, "did you mean" if inScope empty)
          └── isNav === true
                └── render page body (inScope only, "No results in X" if empty)
```

---

## main.js responsibilities (complete list)

1. **Read page context** from `data-section` and `data-is-nav` on `<body>`
2. **Build Lunr index** from inlined `manifest` variable on page load
3. **Build `manifestById` lookup** (`id → manifest entry`) for hydrating Lunr results
4. **Attach debounced input listener** to `#search-input`
5. **Run search** with prefix + fuzzy fallback pipeline
6. **Render dropdown** under `#search-dropdown` (always)
7. **Render page body** into `#search-results` (nav pages only, not Home)
8. **Wire result links** to the existing markdown parser (do not replace it)
9. **Expose `loadArticle(path)`** as a shared function replacing all per-page inline fetch/parse/render blocks

---

## What NOT to do

- Do not fetch `manifest.json` at runtime — inline it as a JS variable
- Do not fetch the Lunr index at runtime — build it from the inlined manifest
- Do not replace the existing markdown parser script
- Do not use `fetch()` or `XMLHttpRequest` anywhere in the runtime layer
- Do not place `<script>` tags in `<head>` or mid-`<body>`
- Do not put inline logic inside a `<script src="...">` tag
- Do not use `localStorage` or `sessionStorage`
- Do not implement URL-based routing (`?doc=`) — this is deferred
