"use strict";

var operations = require('../operations');

function user() {
    var baseURL = '/v1/json/user/';
    var defaultOperations = ['create', 'update', 'get', 'list', 'delete', 'deleteById'];

    var ops = {
        baseURL: baseURL

        // copyNotificationRules is missing
    };
    ops = operations.attach(ops, defaultOperations);
    return ops;
}

module.exports = user;
