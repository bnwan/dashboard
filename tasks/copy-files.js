var cpy = require('cpy');

cpy([
	'app.json',
	'index.html',		
	'vendor/**/*.js',
	'vendor/modernizr-*.min.js'
], './build/', {
	cwd: './client'
}, function () {
	console.log('files copied');
});