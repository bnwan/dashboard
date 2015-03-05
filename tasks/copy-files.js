var cpy = require('cpy');

cpy([
	'app.json',
	'index.html',
	'vendor/uikit/**/*.js',
	'vendor/uikit/**/*.css',
	'vendor/modernizr-*.min.js'
], './build/', {
	cwd: './client'
}, function () {
	console.log('files copied');
});