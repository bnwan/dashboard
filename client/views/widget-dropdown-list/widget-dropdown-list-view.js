'use strict';

require('./style/style.scss');
var app = require('ampersand-app');
var each = require('amp-each');
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-dropdown-list-template.html');

var WidgetListItem = require('./widget-dropdown-list-item-view');

module.exports = AmpersandView.extend({
	template: template,	
	render: function () {
		this.renderWithTemplate(this);

		this.collectionView = this.renderCollection(this.collection, WidgetListItem);
		
		each(this.collectionView.views, this.setupCollectionViewEvents, this);			

		return this;
	},
	
	setupCollectionViewEvents: function(view){
		this.listenTo(view, 'select', this.select);
	},
	
	select: function(widgetModel){
		app.trigger('widget:add', widgetModel);
	}
});