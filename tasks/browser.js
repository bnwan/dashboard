var open = require('open');
var config = require('../config');

var url = 'http://localhost:' + config.server.port;

open(url);