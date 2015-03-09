require('./style/style.scss');

var AmpersandView = require('ampersand-view');
var template = require('./templates/navbar-template.html');

module.exports = AmpersandView.extend({
	template: template
});