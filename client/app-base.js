'user strict';

require('./style/base.scss');
var app = require('ampersand-app');

app.extend({
	request: function(target, callback){
		
		this.trigger(target, callback);
	}
});