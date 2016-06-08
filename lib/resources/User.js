"use strict";

var generate = require('../generate');
var client = require('../client');

function user() {
    var baseURL = '/v1/json/user/';
    var defaultOperations = ['create', 'update', 'get', 'list', 'delete', 'deleteById'];

    var operations = {
        baseURL: baseURL

        // copyNotificationRules
    };
    operations = generate.attach(operations, defaultOperations);
    return operations;
}

module.exports = user;
