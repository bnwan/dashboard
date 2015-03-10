'use strict';

require('./style/style.scss');
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-dropdown-list-item-template.html');

module.exports = AmpersandView.extend({
	template: template,
	bindings: {
		'model.name': {
			hook: 'name'
		},
		'model.iconStyle': {
			type: 'attribute',
			name: 'class',
			hook: 'iconStyle'
		}
	},
});