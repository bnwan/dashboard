'use strict';

var storage = window.localStorage;

module.exports = {
	save: function(key, jsonString){
		storage.setItem(key, jsonString);
	},
	
	retrive: function(key){
		return storage.getItem(key);
	}
};