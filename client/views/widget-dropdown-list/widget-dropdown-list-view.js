'use strict';

require('./style/style.scss');
var AmpersandView = require('ampersand-view');
var template = require('./templates/widget-dropdown-list-template.html');

var WidgetListItem = require('./widget-dropdown-list-item-view');

module.exports = AmpersandView.extend({
	template: template,
	render: function () {
		this.renderWithTemplate(this);

		this.renderCollection(this.collection, WidgetListItem);

		return this;
	}
});