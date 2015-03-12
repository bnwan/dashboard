'use strict';

var app = require('ampersand-app');

var each = require('amp-each');
var find = require('amp-find');
var WidgetModel = require('../../widgets/widget-model');
var WidgetCollection = require('../../widgets/widget-collection');
var widgetList = require('../../widgets');

var collection = new WidgetCollection();

module.exports = {
	getWidgets: function () {

		if (collection.length !== 0) {
			return collection;
		}

		each(widgetList, function (Widget, index) {

			var widgetInstance = new Widget();

			var model = new WidgetModel({
				index: index,
				name: widgetInstance.name,
				iconStyle: widgetInstance.iconStyle,
				content: widgetInstance
			});

			collection.add(model);
		});

		return collection;
	}
};

//remove widget
app.on('widget:remove', function (widgetModel) {
	app.activeWidgetCollection.remove(widgetModel);	
});

//add widget
app.on('widget:add', function (name) {

	var list = widgetList.map(function (Widget) {
		var w = new Widget();
		if (w.name === name) {
			return w;
		}
	});

	var widgetInstance = find(list, function (w) {
		return w;
	});

	var model = new WidgetModel({
		name: widgetInstance.name,
		iconStyle: widgetInstance.iconStyle,
		content: widgetInstance
	});

	app.activeWidgetCollection.add(model);	
});