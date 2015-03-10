var WidgetBase = require('../widget-base');
var template = require('./templates/grid-template.html');

module.exports = WidgetBase.extend({
	name: 'Grid',	
	iconStyle: 'fi-list',
	template: template
});