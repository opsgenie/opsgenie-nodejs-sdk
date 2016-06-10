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
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        listAlertNotes: function (data, config, cb) {
            client.executeHttp('GET', this.baseURL + 'note', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        listAlertLogs: function (data, config, cb) {
            client.executeHttp('GET', this.baseURL + 'log', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        listAlertRecipients: function (data, config, cb) {
            client.executeHttp('GET', this.baseURL + 'recipient', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        acknowledge: function (data, config, cb) {
            client.executeHttp('POST', this.baseURL + 'acknowledge', data, config, cb);
        },
        /**
         * One of id or alias parameters should be specified with snooze alert request. Alias option can only be used for open alerts
         * Also, endDate param should be provided - "endDate": ""2016-01-28 08:00""
         */
        snooze: function (data, config, cb) {
            client.executeHttp('POST', this.baseURL + 'snooze', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        renotify: function (data, config, cb) {
            client.executeHttp('POST', this.baseURL + 'renotify', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        takeOwnership: function (data, config, cb) {
            client.executeHttp('POST', this.baseURL + 'takeOwnership', data, config, cb);
        },
        /**
         * One of id or alias parameters should be specified with assign request. Alias option can only be used for open alerts
         * Also, owner param should be provided "owner":"john.smith@ifountain.com"
         */
        assign: function (data, config, cb) {
            client.executeHttp('POST', this.baseURL + 'assign', data, config, cb);
        }
        // addTeam
        // addRecipient
        // addNote
        // addTags
        // removeTags
        // addDetails
        // removeDetails
        // executeAction (predefined actions)
        // attachFile
    };
    ops = operations.attach(ops, defaultOperations);
    return ops;
}

module.exports = alert;
