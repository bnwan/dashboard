var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-controller-template.html');

require('../../vendor/uikit/js/components/grid.min');

var WidgetView = require('./widget-view');

module.exports = AmpersandView.extend({
	template: template,
	render: function () {
		this.renderWithTemplate(this);
		
		this.renderCollection(this.collection, WidgetView);

		var widgetGrid = UIkit.grid(this.queryByHook('widget-grid'), {
			gutter: 20
		});
		
		return this;
	}
});