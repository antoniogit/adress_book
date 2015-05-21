var fs = require('fs')
var options = { encoding: 'utf-8' }
function notifyReadComplete(err, data){
	console.log(data)
}

fs.readFile('./data.json', options, notifyReadComplete)
console.log(1+1)