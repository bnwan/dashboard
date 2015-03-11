'use strict';

var openfin = require('./launch-openfin');
var exec = require('child_process').exec;
var es = require('event-stream');

var server = exec('npm run server');
var browser = exec('npm run browser');

es.child(server)
	.pipe(process.stdout);

setTimeout(function () {

	es.child(browser)
		.pipe(process.stdout);
}, 1000);

openfin.init();