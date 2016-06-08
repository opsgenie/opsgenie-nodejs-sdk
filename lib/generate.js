"use strict";

var client = require('./client');

/**
 * Attach REST operations from restOperations
 */
function attach(destObject, operations) {
    operations.forEach(function (property) {
        destObject[property] = restOperations[property];
    });
    return destObject;
}

/**
 * Pre-defined general rest operations
 */
var restOperations = {
    /**
     * For now, there are no difference between a get and list request.
     * The difference is that in get, you need to provide id (or alias etc.)
     *
     * @param data
     * @param config
     * @param cb
     */
    get: function get(data, config, cb) {
        client.executeHttp('GET', this.baseURL, data, config, cb);
    },
    /**
     * Returns an array
     *
     * @param data
     * @param config
     * @param cb
     */
    list: function (data, config, cb) {
        client.executeHttp('GET', this.baseURL, data, config, cb);
    },
    /**
     *
     * @param data
     * @param config
     * @param cb
     */
    create: function create(data, config, cb) {
        client.executeHttp('POST', this.baseURL, data, config, cb);
    },
    /**
     *
     * @param data
     * @param config
     * @param cb
     */
    delete: function (data, config, cb) {
        client.executeHttp('DELETE', this.baseURL, data, config, cb);
    },
    /**
     * id is a String parameter, not an object
     *
     * @param id
     * @param config
     * @param cb
     */
    deleteById: function (id, config, cb) {
        client.executeHttp('DELETE', this.baseURL, {id: id}, config, cb);
    },
    /**
     * For now, it is the same with create, but needs id parameter in data
     *
     * @param data
     * @param config
     * @param cb
     */
    update: function (data, config, cb) {
        client.executeHttp('POST', this.baseURL, data, config, cb);
    }
};

module.exports.attach = attach;
