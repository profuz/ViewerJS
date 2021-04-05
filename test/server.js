"use strict";

const express = require('express'),
      app     = express();

app.use('/', express.static('./release'));
app.use('/files', express.static('./test/files'));
app.listen(5581);

console.log(`Listening on port 5581.
 Try one of the following tests:
  - http://localhost:5581/index.html#/files/pdf-test.pdf
  - http://localhost:5581/index.html#/files/small.mp4
  - http://localhost:5581/index.html#/files/small.webm
  - http://localhost:5581/index.html#/files/test.png
  - http://localhost:5581/index.html#/files/text.txt
  - http://localhost:5581/index.html#/files/unknown.zfx

`);
