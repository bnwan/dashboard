'use strict';

var each = require('amp-each');
var WidgetModel = require('../../widgets/widget-model');
var WidgetCollection = require('../../widgets/widget-collection');
var widgetList = require('../../widgets');

var collection = new WidgetCollection();

module.exports = {
	getWidgets: function(){		
		
		if(collection.length !== 0){
			return collection;
		}				
		
		each(widgetList, function(Widget, index){				
			
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