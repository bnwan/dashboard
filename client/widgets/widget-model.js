var AmpersandState = require('ampersand-state');

module.exports = AmpersandState.extend({
	props: {
		type: 'string',
		name: 'string',
		index: 'number',
		iconStyle: 'string',
		content: 'object'
	}
});