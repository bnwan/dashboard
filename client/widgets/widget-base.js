'use strict';

var AmpersandView = require('ampersand-view');
var defaultTemplate = require('./default-template.html');

module.exports = AmpersandView.extend({
	template: defaultTemplate,	
	bindings: {
		name: '[data-hook=name]'
	},
});