'use strict';

var app = require('ampersand-app');
var storageProvider = require('./storage-provider');

var key = app.clientConfig.dashboardItemsLocalStorageKey;

module.exports = {
	save: function () {
		var data = app.activeWidgetCollection.map(function (m) {
			return {
				name: m.name				
			};
		});

		storageProvider.save(key, JSON.stringify(data));
	},

	retrive: function () {
		return JSON.parse(storageProvider.retrive(key));
	}
};