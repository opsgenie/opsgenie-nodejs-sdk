"use strict";

var operations = require('../operations');
var api = require('../api');

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
            api.post(this.baseURL + 'close', data, config, cb);
        },
        /**
         * Count alerts request is used to counts alerts in OpsGenie
         */
        count: function (data, config, cb) {
            api.get(this.baseURL + 'count', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        listAlertNotes: function (data, config, cb) {
            api.get(this.baseURL + 'note', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        listAlertLogs: function (data, config, cb) {
            api.get(this.baseURL + 'log', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        listAlertRecipients: function (data, config, cb) {
            api.get(this.baseURL + 'recipient', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        acknowledge: function (data, config, cb) {
            api.post(this.baseURL + 'acknowledge', data, config, cb);
        },
        /**
         * One of id or alias parameters should be specified with snooze alert request. Alias option can only be used for open alerts
         * Also, endDate param should be provided - "endDate": ""2016-01-28 08:00""
         */
        snooze: function (data, config, cb) {
            api.post(this.baseURL + 'snooze', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        renotify: function (data, config, cb) {
            api.post(this.baseURL + 'renotify', data, config, cb);
        },
        /**
         * data should be either {id: 'id1'} or {alias: 'alias1'}
         */
        takeOwnership: function (data, config, cb) {
            api.post(this.baseURL + 'takeOwnership', data, config, cb);
        },
        /**
         * One of id or alias parameters should be specified with assign request. Alias option can only be used for open alerts
         * Also, owner param should be provided "owner":"john.smith@ifountain.com"
         */
        assign: function (data, config, cb) {
            api.post(this.baseURL + 'assign', data, config, cb);
        },
        /**
         * Add team request is used to add new teams to alerts in OpsGenie. It takes the following parameters
         * One of id or alias parameters should be specified with add team request. Alias option can only be used for open alerts
         * Also, the new team that will be added should be added to parameters as "team": "operations"
         */
        addTeam: function (data, config, cb) {
            api.post(this.baseURL + 'team', data, config, cb);
        },
        /**
         * Add recipient request is used to add new recipients(user or group) to alerts in OpsGenie
         * One of id or alias parameters should be specified with add recipient request. Alias option can only be used for open alerts
         * Also, the new recipient that will be added as "recipient":"john.smith@ifountain.com"
         */
        addRecipient: function (data, config, cb) {
            api.post(this.baseURL + 'recipient', data, config, cb);
        },
        /**
         * Add note request is used to add notes to alerts in OpsGenie
         * One of id or alias parameters should be specified with add note request. Alias option can only be used for open alerts
         * Also, note param is mandatory as "note": "custom note"
         */
        addNote: function (data, config, cb) {
            api.post(this.baseURL + 'note', data, config, cb);
        },
        /**
         * Add tags request is used to add tags to alerts in OpsGenie
         * One of id or alias parameters should be specified with add tags request. Alias option can only be used for open alerts
         * Also, tags param is mandatory as "tags": "emergency, delay"
         *
         */
        addTags: function (data, config, cb) {
            api.post(this.baseURL + 'tags', data, config, cb);
        },
        /**
         * Remove tags request is used to remove tags from alerts in OpsGenie
         * One of id or alias parameters should be specified with add tags request. Alias option can only be used for open alerts
         * Also, tags param is mandatory as "tags": "emergency, delay"
         */
        /*removeTags: function (data, config, cb) {
            if (data.tags === undefined) {
                return new Error("tags param can not be empty.");
            }
            api.delete(this.baseURL, data, config, cb);
        },*/
        /**
         * Add details request is used to add details to alerts in OpsGenie
         * One of id or alias parameters should be specified with add details request. Alias option can only be used for open alerts
         * Also, details param is mandatory as "details": {"prop1" : "val1", "prop2" : "val2"}
         *
         */
        addDetails: function (data, config, cb) {
            api.post(this.baseURL + 'details', data, config, cb);
        },
        /**
         * Remove details request is used to remove details from alerts in OpsGenie
         * One of id or alias parameters should be specified with add details request. Alias option can only be used for open alerts
         * Also, details param is mandatory as "keys" : { "prop1", "prop2" }
         */
        /*removeDetails: function (data, config, cb) {
            if (data.keys === undefined) {
                return new Error("details param can not be empty.");
            }
            api.delete(this.baseURL, data, config, cb);
        },*/
        /**
         * Execute action request is used to execute predefined actions on alerts in OpsGenie
         * One of id or alias parameters should be specified with execute action request. Alias option can only be used for open alerts
         * Also, action param is mandatory as "action": "acknowledge"
         */
        executeAction: function (data, config, cb) {
            api.post(this.baseURL + 'executeAction', data, config, cb);
        }
        /**
         * Attach file request is used to attach files to alerts in OpsGenie. It should be sent as multipart HTTP request
         * One of id or alias parameters should be specified with attach file request. Alias option can only be used for open alerts
         * TODO: will be implemented
         */
        /*attachFile: function (data, config, cb) {
         api.post(this.baseURL + 'attachFile', data, config, cb);
         }*/
    };
    ops = operations.attach(ops, defaultOperations);
    return ops;
}

module.exports = alert;
