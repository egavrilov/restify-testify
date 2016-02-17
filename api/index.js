// api/index.js
const fs = require('fs'),
    validFileTypes = ['js'];

function requireFiles(directory, app) {
  fs.readdirSync(directory).forEach((fileName) => {
    // Recurse if directory
    if(fs.lstatSync(directory + '/' + fileName).isDirectory()) {
      requireFiles(directory + '/' + fileName, app);
    } else {

      // Skip schemas
      if(!fileName.includes('controller')) return;

      // Skip unknown filetypes
      if(validFileTypes.indexOf(fileName.split('.').pop()) === -1) return;

      // Require the file.
      require(directory + '/' + fileName)(app);
    }
  })
}

module.exports = function (app) {
  requireFiles(__dirname, app);
}
