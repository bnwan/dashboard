var AmpersandView = require('ampersand-view');
var template = require('./templates/container-template.html');
var WidgetControllerView = require('../widget');


var WidgetCollection = require('../../models/widget-collection');
var wCollection = new WidgetCollection();

var WidgetModel = require('../../models/widget-model');

for (var i = 1; i <= 20; i++) {
	var wModel = new WidgetModel({
		name: i.toString()
	});
	
	wCollection.add(wModel);
}

module.exports = AmpersandView.extend({
	template: template,
	render: function () {
		this.renderWithTemplate(this);

		var widgetController = new WidgetControllerView({
			el: this.queryByHook('container-body'),
			collection: wCollection
		}).render();			

		return this;
	}
});