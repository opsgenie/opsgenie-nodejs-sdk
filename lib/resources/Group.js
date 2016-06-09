"use strict";

var operations = require('../operations');
var client = require('../client');

function group() {
    var baseURL = '/v1/json/group/';
    var defaultOperations = ['create', 'update', 'get', 'list', 'delete', 'deleteById'];

    var ops = {
        baseURL: baseURL

        // add member and remove member is missing
    };
    ops = operations.attach(ops, defaultOperations);
    return ops;
}

module.exports = group;
