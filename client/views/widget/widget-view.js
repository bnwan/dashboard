require('./style/style.scss');
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-template.html');

module.exports = AmpersandView.extend({
	template: template,
	bindings: {
		'model.name': {
			hook: 'name'
		}
	}	
});