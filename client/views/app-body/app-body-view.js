'use strict';

var app = require('ampersand-app');
var widgetService = require('../../services/widget-service');

var AmpersandView = require('ampersand-view');
var template = require('./templates/container-template.html');
var WidgetControllerView = require('../widget');
var AppNavBar = require('../navbar');

module.exports = AmpersandView.extend({
	template: template,
	render: function () {
		this.renderWithTemplate(this);

		var navBar = new AppNavBar({
			el: this.query('.app-navbar'),
			collection: widgetService.getWidgets()
		}).render();

		var widgetController = new WidgetControllerView({
			el: this.query('.widget-grid'),
			collection: widgetService.getWidgets()
		}).render();			

		return this;
	}
});