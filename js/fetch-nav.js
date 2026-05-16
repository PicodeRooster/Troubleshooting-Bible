fetch("../docs/Dictionary.md")
      .then(r => r.text())
      .then(md => {
        document.getElementById("article").innerHTML = marked.parse(md);
      });