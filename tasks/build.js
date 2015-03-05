var build = require('build-module');

build.bundle({
	output: './build/app-defaults.bundle.js',
	root: './client/app-defaults.js',
	transforms: ['cssify']
});

build.bundle({
	output: './build/app.bundle.js',
	root: './client/app.js',
	transforms: ['sassify', 'html2js-browserify']
});