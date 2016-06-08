"use strict";

var operations = require('../operations');
var client = require('../client');

/**
 * Alert api. For more information: https://www.opsgenie.com/docs/web-api/alert-api
 * To see mandatory and optional parameter checkout the alert api web page
 *
 * @return {Object} order functions
 */
function alert() {
    var baseURL = '/v1/json/alert/';
    var defaultOperations = ['get', 'list', 'create', 'delete', 'deleteById'];

    var ops = {
        baseURL: baseURL,

        /**
         * One of id or alias parameters should be specified with close alert request.
         * Alias option can only be used for open alerts
         *
         * example data: {id: 'id1'} or {alias: 'alias1'} etc.
         */
        close: function (data, config, cb) {
            client.executeHttp('POST', this.baseURL + 'close', data, config, cb);
        },
        /**
         * Count alerts request is used to counts alerts in OpsGenie
         */
        count: function (config, cb) {
            client.executeHttp('GET', this.baseURL + 'count', {}, config, cb);
        }
    };
    ops = operations.attach(ops, defaultOperations);
    return ops;
}

module.exports = alert;
