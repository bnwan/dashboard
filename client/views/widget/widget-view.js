require('./style/style.scss');
var app = require('ampersand-app');
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-template.html');

var WidgetNavBar = require('../widget-item-navbar');

module.exports = AmpersandView.extend({
	template: template,
	bindings: {
		'model.index': {
			hook: 'index'
		}
	},
	subviews: {
		navbar: {
			container: '[data-hook=navbar]',			
			prepareView: function (el) {
				this.subviews.navbar.view = new WidgetNavBar({
					el: el,
					model: this.model
				});
				
				return this.subviews.navbar.view;
			}
		},
		widgetContent: {
			container: '[data-hook=content]',
			prepareView: function (el) {
				var content = this.subviews.widgetContent.view = this.model.content;
				content.el = el;
				return content;
			}
		}
	},
	render: function(){
		this.renderWithTemplate(this);
		
		this.listenTo(this.subviews.navbar.view, 'close', this.close);			
		
		return this;
	},
	
	close: function(){
		app.trigger('widget:remove', this.model);
	}
});