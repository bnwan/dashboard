require('./style/style.scss');

var AmpersandView = require('ampersand-view');
var template = require('./templates/navbar-template.html');

var WidgetDropdownList = require('../widget-dropdown-list');

module.exports = AmpersandView.extend({
	template: template,
	subviews: {
		widgetList: {
			container: '[data-hook=widget-list]',
			prepareView: function (el) {
				var view = this.subviews.widgetList.view = new WidgetDropdownList({
					el: el,
					collection: this.collection
				});
				return view;
			}
		}
	},
});