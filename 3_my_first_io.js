var fs = require('fs');
var path = process.argv[2];
var str = fs.readFileSync(path, 'utf8');
var arr = str.split('\n');

console.log(arr.length-1);
