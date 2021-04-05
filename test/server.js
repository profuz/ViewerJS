"use strict";

const express = require('express'),
      app     = express();

app.use('/', express.static('./release'));
app.use('/files', express.static('./test/files'));
app.listen(5581);

console.log(`Listening on port 5581.
 Try one of the following tests:
  - http://localhost:5581/index.html#/files/image.png
  - http://localhost:5581/index.html#/files/pdf.pdf
  - http://localhost:5581/index.html#/files/presentation.odp
  - http://localhost:5581/index.html#/files/spreadsheet.ods
  - http://localhost:5581/index.html#/files/text.odt
  - http://localhost:5581/index.html#/files/text.txt
  - http://localhost:5581/index.html#/files/video.mp4
  - http://localhost:5581/index.html#/files/video.webm
  - http://localhost:5581/index.html#/files/unknown.zfx

`);
