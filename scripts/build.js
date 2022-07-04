const fs = require('fs');
const path = require('path');

const copiedPath = path.join(__dirname, '../404.html');
const resultPath = path.join(__dirname, '../dist/404.html');

fs.promises
  .copyFile(copiedPath, resultPath)
  .then(() => {
    console.log('404 html moved success');
  })
  .catch(err => {
    console.log(err);
  });
