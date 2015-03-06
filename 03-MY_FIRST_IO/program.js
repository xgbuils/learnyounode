var fs = require('fs')

var filePath = process.argv[2]

var nl = fs
  .readFileSync(filePath, 'utf8')
  .split('\n')
  .length - 1

console.log(nl)