"use strict";


var api = require('./../restApi');

function schedulesV2() {
    let baseURL = '/v2/schedules/';
    var oncallActionPath = "/on-calls/";
    var timelineActionPath = "/timeline";

    return {

        create: function (data, config, cb) {
            api.post(this.baseURL + 'create', data, config, cb);
        },
        delete: function (data, config, cb) {
            let path = api.getPath(baseURL, data, null);
            api.delete(path, config, cb);
        },
        get: function (data, config, cb) {
            let path = api.getPath(baseURL, data, null);
            api.get(path, config, cb);
        },
        list: function (params, config, cb) {
            var path = api.getPathWithListParams(baseURL, params);
            api.get(path, config, cb)
        },

        getTimeline: function (identifier, params, config, cb) {
            var path = api.getPathWithListParams(baseURL + identifier + timelineActionPath, params);
            api.get(path, config, cb)
        },

        oncalls: function (identifier, config, cb) {
            var path = api.getPath(baseURL, identifier + oncallActionPath);
            api.get(path, config, cb)
        },

        export: function (params ,config, cb) {
            throw (new Error('Not yet supported'));
        },
    };
}

module.exports = schedulesV2;