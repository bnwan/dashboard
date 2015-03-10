require('./style/style.scss');
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-item-navbar-template.html');

module.exports = AmpersandView.extend({	
	template: template,
	bindings: {
		'model.name': {
			hook: 'name'
		}
	},
	events: {
		'click [data-hook=close]':  'close'
	},
	
	close: function(){		
		this.trigger('close');		
	}
});