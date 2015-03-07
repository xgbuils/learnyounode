var fs   = require('fs')
var path = require('path')

module.exports = function ls (dirPath, extension, cb) {
  fs.readdir(dirPath, function (err, files) {
    if (!err) {
      filteredFiles = files
        .filter(function (file) {
          return !extension || path.extname(file) === '.' + extension
        })
        cb(err, filteredFiles)
    } else {
    	cb(err)
    }
    
  })
}