ViewerJS for node
=================

## Changes

Compared to the original (http://viewerjs.org/) this fork:

- Will show a warning message if the document is not supported
- Can play video files (thanks to https://github.com/Ryusei217/ViewerJS)
- Can show image files (thanks to https://github.com/Ryusei217/ViewerJS)
- Can be build with node (instead of make/cmake)
- Is easier to use with node-js/express-js
- No inline style and inline script tags in index.html
- Can be found on NPM (node-viewerjs)

## Changes 2

- HTML viewer (can be used for docx with [mammoth](https://github.com/mwilliamson/mammoth.js))
- Text viewer

## Changes 3

- Merge fixes and features from [h44z](https://github.com/h44z/ViewerJS), [Ryusei217](https://github.com/Ryusei217/ViewerJS), [Illkkah](https://github.com/ilkkah/node-viewerjs-ilkkah), [vendernorth](https://github.com/vandernorth/ViewerJS), [boris-petrov](https://github.com/cozy/ViewerJS), [cozy](https://github.com/cozy/ViewerJS), [giftnuss](https://github.com/giftnuss/ViewerJS), [putuyuwono](https://github.com/putuyuwono/ViewerJS).
- Update pdf.js and video.js.
- Add OpenDocument test files (from https://webodf.org).
- Allow to use argument "?file=my-file.odt" instead of the hash "#my-file.odt" to specify the file to display.

## How to compile the release

```sh
npm install
npm run build
````

# How to test

Once installed and build, run `npm run test`, then go to http://localhost:5581/index.html#/files/text.odt.

## How to use with express

```javascript
var express = require('express'),
    app     = express();

app.use('/viewer', express.static('node_modules/node-viewerjs/release'));
```

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Original Readme

The viewer uses HTML, CSS, and icons derived from the Mozilla PDF.js project.
Some icons are derived from the http://www.iconsweets.com/ project under a Creative Commons Attribution 3.0 Unported license.

## ViewerJS

ViewerJS combines a number of excellent open source tools that are built on HTML and javascript. ViewerJS was funded by [NLnet foundation](https://nlnet.nl) and developed by KO GmbH.

The heavy lifting in ViewerJS is done by these awesome projects:

### WebODF

WebODF is a JavaScript library created by KO GmbH. It was started by Jos van den Oever at KO and is now developed by a growing team including external collaborators. It makes it easy to add Open Document Format (ODF) support to your website and to your mobile or desktop applications. It uses HTML and CSS to display ODF documents.

### PDF.js

PDF.js is a library created by Andreas Gal and others at Mozilla Labs. It is an HTML5 technology experiment that explores building a faithful and efficient Portable Document Format (PDF) renderer without native code assistance.

### Examples and more

You can find additional information, some usage guides, and live examples at [the project homepage](http://viewerjs.org).

### Building

ViewerJS uses [`cmake`](http://cmake.org/). Just follow these steps:

```bash
git clone http://github.com/kogmbh/ViewerJS.git
mkdir build
cd build
cmake ../ViewerJS
make
```

You will find the following two products in the build directory if everything goes well:
- `viewerjs-{x.y.z}.zip`
- `viewerjs-wordpress-{x.y.z}.zip`

... where `{x.y.z}` denotes the version.

### License

ViewerJS is a Free Software project. All code is available under the AGPL.

If you are interested in using ViewerJS in your commercial product
(and do not want to disclose your sources / obey AGPL),
contact [license@viewerjs.org](mailto:license@viewerjs.org) for a commercial license.
