var AmpersandCollection = require('ampersand-collection');

var dashboardStorageService = require('./services/dashboard-storage-service');
var each = require('amp-each');
var find = require('amp-find');

var widgetList = require('./widgets');
var WidgetModel = require('./widgets/widget-model');

module.exports = AmpersandCollection.extend({
	model: WidgetModel,
	initialize: function () {

		var data = dashboardStorageService.retrive();			

		each(data, function (d) {

			this.fetch(d);
		}, this);
		
		this.on('add', this.save);
		this.on('remove', this.save);
	},

	fetch: function (d) {
		var list = widgetList.map(function (Widget) {
			var w = new Widget();
			if (w.name === d.name) {
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

		this.add(model);
	},
	
	save: function(){
		dashboardStorageService.save();		
	}
});