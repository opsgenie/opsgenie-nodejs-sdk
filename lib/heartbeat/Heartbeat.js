"use strict";

const restApi = require('../restApi');
var operations = require('../operations');

function heartbeat() {
    let baseURL = '/v2/heartbeats/';
    let ops = {
        baseURL: baseURL,
        /**
         * @param data
         * @param config
         * @param cb
         */
        create: function (data, config, cb) {
            restApi.post(baseURL ,data, config, cb);
        },
        list: function (data, config, cb) {
            restApi.get(baseURL, config, cb);
        },
        delete: function (data, config, cb) {
            let path = restApi.getPath(baseURL, data, null);
            restApi.delete(path, config, cb);
        },
        get: function (data, config, cb) {
            let path = restApi.getPath(baseURL, data, null);
            restApi.get(path, config, cb);
        },
        update: function (identifier, data, config, cb) {
            let path = restApi.getPath(this.baseURL, identifier, null);
            restApi.patch(path, data, config, cb)
        },
        ping: function (identifier, data, config, cb) {
            let path = restApi.getPath(this.baseURL, identifier, "/ping");
            restApi.get(path, data, config, cb)
        },
        enable: function (identifier, config, cb) {
            let path = restApi.getPath(this.baseURL, identifier, "/enable");
            restApi.post(path,null, config, cb)
        },
        disable: function (identifier, config, cb) {
            let path = restApi.getPath(this.baseURL, identifier, "/disable");
            restApi.post(path, null, config, cb)
        },
    };
    return ops;
}

module.exports = heartbeat;