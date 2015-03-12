'use strict';

require('./app-base');
var domready = require('domready');
var config = require('./client-config');
var app = window.app = require('ampersand-app');

app.extend({
	clientConfig: config
});

var ActiveWidgetCollection = require('./active-widget-collection');

require('./app-service-events');

var AppBody = require('./views/app-body');

app.extend({	
	activeWidgetCollection: new ActiveWidgetCollection(),
	init: function () {
		
		var appBodyView = new AppBody({
			el: document.body
		});
		appBodyView.render();
	}
});

domready(function () {
	
	app.init();
});