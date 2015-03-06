var fs = require('fs')

function countNewLines (err, data) {
  if (err) {
  	throw err
  }

  var nl = data
    .split('\n')
    .length - 1
  console.log(nl)
}

var filePath = process.argv[2]
fs.readFile(filePath, 'utf8', countNewLines)
  
