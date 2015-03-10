'use strict';

var AmpersandView = require('ampersand-view');
var defaultTemplate = require('./default-template.html');

//var AmpersandState = require('ampersand-state');
//
//var DefaultModel = new AmpersandState({
//	props: {
//		name: 'string'
//	}
//});

module.exports = AmpersandView.extend({
	template: defaultTemplate,	
	bindings: {
		name: '[data-hook=name]'
	},
});