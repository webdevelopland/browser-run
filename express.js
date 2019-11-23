const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('./src'), (req, res, next) => {
  next();
});

app.get('*', (req, res) => {
  const indexPath = path.join(process.cwd(), 'src', 'index.html');
  fs.exists(indexPath, (exists) => {
    if (exists) {
      res.sendFile(indexPath);
    } else {
      res.send('404');
    }
  });
});

const port = 8200;
const server = app.listen(port, () => {
  console.log('Express is started: ' + port);
});