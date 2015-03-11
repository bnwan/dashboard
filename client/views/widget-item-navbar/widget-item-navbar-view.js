require('./style/style.scss');
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-item-navbar-template.html');

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
	events: {
		'click [data-hook=settings]':  'settings',
		'click [data-hook=close]':  'close'
	},
	
	settings: function(){
		this.trigger('settings');
	},
	
	close: function(){		
		this.trigger('close');		
	}
});