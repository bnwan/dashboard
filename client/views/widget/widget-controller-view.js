'use strict';

var app = require('ampersand-app');
var Sortable = require('../../vendor/js/Sortable.min');
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-controller-template.html');

var storageProvider = require('../../services/dashboard-storage-service/storage-provider');

var WidgetView = require('./widget-view');

module.exports = AmpersandView.extend({
	template: template,
	render: function () {
		this.renderWithTemplate(this);

		this.renderCollection(this.collection, WidgetView);

		this.initSortable();

		return this;
	},

	initSortable: function () {
		this.sortable = Sortable.create(this.el, {
			ghostClass: 'ghost',
			key: app.clientConfig.dashboardItemsOrderLocalStorageKey,			
			store: {
				get: function (sortable) {
					var order = storageProvider.retrive(sortable.options.key);
					return order ? order.split('|') : [];
				},

				set: function (sortable) {
					var order = sortable.toArray();
					storageProvider.save(sortable.options.key, order.join('|'));
				}
			}
		});
		
		this.listenTo(this.collection, 'add', this.saveSortableOrder);
		this.listenTo(this.collection, 'remove', this.saveSortableOrder);
	},
	
	saveSortableOrder: function(){
		this.sortable.save();
	}
});