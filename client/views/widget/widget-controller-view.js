var $ = window.jQuery;
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-controller-template.html');

var WidgetView = require('./widget-view');

module.exports = AmpersandView.extend({
	template: template,
	render: function () {
		this.renderWithTemplate(this);
		
		this.renderCollection(this.collection, WidgetView);
		
		$('.sortable').sortable();
				
		return this;
	}	
});