var ls = require('./ls')


ls(process.argv[2], process.argv[3], function (err, files) {
	console.log(files.join('\n'))
})
