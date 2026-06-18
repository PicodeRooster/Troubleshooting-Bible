# Troubleshooting Bible

The Troubleshooting Bible is a portable, offline-first central reference documentation tool designed to support busy I.T. professionals and system administrators. It is a collection proven diagnostic methods, frequently encountered errors, in-depth analyzes and practical fixes in one searchable master guide. This living document can viewed in the browser, or downloaded into multiple reading formats directly from the launch site. It is an ongoing project that relies on the support and collaboration of technicians from around the world.

Using the `file://` URI scheme, `index.html` has all project articles inserted as variables. The entire project's content is baked into the HTML and JavaScript files during the build step, before the zip is packaged. When a user opens index.html, everything is already there." The navigation is repeated across each of the five pages to browse more efficiently. 

Use the the Home page to search for all indexed content in the Bible. The search box will display a list of relevant results based on your input, without populating the home page. Selecting an article from the dropdown list will navigate to the page that article is located. 
Users can narrow their search results further by visiting specific pages, and only searching articles within this page. For example, typing "antivirus" displays the E

Documents are loaded by running . This pre-loads all documents in each page. 
## Tools

`tree | grep -i "<string>"`

`tree` - list directories, sub-directories and files
`grep` - search for string patterns in each file, outputs each line that matches a pattern
`-i`  - ignore  case  sensitive characters 

| Tool              | Usage |
| ----------------- | ----- |
| `Obsidian`        |       |
| `Claude`          |       |
| `Claude Code`     |       |
| `Node`            |       |
| `tb-tracker.html` |       |
| `cp`              |       |
| `ls`              |       |
| `mv`              |       |
| `grep`            |       |
| `tree`            |       |
```
index.html --> encyclopedia.html --> Antivirus(AV).html

index.html - parses entire project content
<page>.html - parses content within the current location, links to individual articles as HTML pages

```

### Additional Resources

The formatting in HTML looks like so:

```
<a href="www.microsoftlearn.com"><h5>Microsoft Learn</h5></a><p>Provides detailed documentation and training guides for Microsoft products.</p>
```

The main build script updates: `dictionary.html`, `encyclopedia.html`, `how-to-guides.html`.
The file for `bibliography.html` is built by `sources.json`.
The file `resources.html` is manually built and updated.