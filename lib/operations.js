"use strict";

var client = require('./client');

/**
 * This method adds requested defaultOperations to the provided ops and returns the full api functions including default operations
 */
module.exports.attach = function attach(ops, defaultOperations) {
    defaultOperations.forEach(function (property) {
        ops[property] = genericOperations[property];
    });
    return ops;
};

/**
 * Pre-defined general operations
 */
var genericOperations = {
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