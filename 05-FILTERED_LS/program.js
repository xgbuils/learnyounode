var fs   = require('fs')
var path = require('path')

var dirPath   = process.argv[2]
var extension = process.argv[3]

function ls (err, files) {
  if (err) {
    throw err
  }

  var filesString = files
    .filter(function (file) {
      return !extension || path.extname(file) === '.' + extension
    })
    .join('\n')
    console.log(filesString)
}

fs.readdir(dirPath, ls)