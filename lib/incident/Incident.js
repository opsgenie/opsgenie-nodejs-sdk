"use strict";

const restApi = require('../restApi');

function incident() {
    let baseURL = '/v1/incidents/';
    let ops = {
        baseURL: baseURL,
        /**
         * @param data
         * @param config
         * @param cb
         */
        create: function (data, config, cb) {
            restApi.post(this.baseURL + 'create', data, config, cb);
        },
        delete: function (data, config, cb) {
            let path = restApi.getPath(baseURL, data, null);
            restApi.delete(path, config, cb);
        },
        get: function (data, config, cb) {
            let path = restApi.getPath(baseURL, data, null);
            restApi.get(path, config, cb);
        },
        list: function (params, config, cb) {
            var path = restApi.getPathWithListParams(baseURL, params);
            restApi.get(path, config, cb)
        },
        close: function (identifier, data, config, cb) {

            let path = restApi.getPath(this.baseURL, identifier, "/close");
            restApi.post(path, data, config, cb)
        },
        reopen: function (identifier, data, config, cb) {

            let path = restApi.getPath(this.baseURL, identifier, "/reopen");
            restApi.post(path, data, config, cb)
        },
        addNote: function (identifier, data, config, cb) {

            let path = restApi.getPath(this.baseURL, identifier, "/notes");
            restApi.post(path, data, config, cb)
        },
        updatePriority: function (identifier, data, config, cb) {

            let path = restApi.getPath(this.baseURL, identifier, "/priority");
            restApi.post(path, data, config, cb)
        },
        listNotes: function (params, identifier, config, cb) {

            let path = restApi.getPathWithListParams(restApi.getPath(this.baseURL, identifier, "/notes"), params);
            restApi.get(path, config, cb)
        },
        listLogs: function (params, identifier, config, cb) {

            let path = restApi.getPathWithListParams(restApi.getPath(this.baseURL, identifier, "/logs"), params);
            restApi.get(path, config, cb)
        },
        addResponder: function (identifier, data, config, cb) {
            let path = restApi.getPath(this.baseURL, identifier, "/responders");
            restApi.post(path, data, config, cb)
        },
        resolve: function (identifier, data, config, cb) {
            let path = restApi.getPath(this.baseURL, identifier, "/resolve");
            restApi.post(path, data, config, cb)
        },
        getAssociatedAlerts: function (data, config, cb) {
            let path = restApi.getPath(this.baseURL, data, "/associated-alert-ids");
            restApi.get(path, data, config, cb);
        },
        getResponderAlerts: function (data, config, cb) {
            let path = restApi.getPath(this.baseURL, data, "/responder-alert-ids");
            restApi.get(path, data, config, cb);
        },
        getRequestStatus: function (data, config, cb) {
            let path = restApi.getPath(this.baseURL + "requests/", data);
            restApi.get(path, data, config, cb);
        },
    };

    return ops;
}

module.exports = incident;