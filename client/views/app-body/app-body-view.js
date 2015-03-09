var AmpersandView = require('ampersand-view');
var template = require('./templates/container-template.html');
var WidgetControllerView = require('../widget');


var WidgetCollection = require('../../models/widget-collection');
var wCollection = new WidgetCollection();

var WidgetModel = require('../../models/widget-model');

var AppNavBar = require('../navbar');

for (var i = 1; i <= 8; i++) {
	var wModel = new WidgetModel({
		name: i.toString()
	});

	wCollection.add(wModel);
}

module.exports = AmpersandView.extend({
	template: template,
	render: function () {
		this.renderWithTemplate(this);

//		var navBar = new AppNavBar({
//			el: this.query('.app-navbar')
//		}).render();

		var widgetController = new WidgetControllerView({
			el: this.query('.widget-grid'),
			collection: wCollection
		}).render();

		return this;
	}
});