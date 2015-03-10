var cpy = require('cpy');

cpy([
	'app.json',
	'index.html',		
	'vendor/foundation-icons/**',
	'vendor/modernizr-*.min.js'
], './build/', {
	cwd: './client'
}, function () {
	console.log('files copied');
});