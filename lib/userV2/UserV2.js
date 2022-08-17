"use strict";

var api = require('./../restApi');

/**
 * User API v2. For more information: https://www.opsgenie.com/docs/rest-api/user-api
 * To see mandatory and optional parameter checkout the alert api web page
 *
 * Also, you can check samples under /samples/userV2 for examples.
 *
 * @return {Object} order functions
 */

function userV2() {
    var baseURL = '/v2/users/';
    var contactsActionPath = "/contacts/";
    return {
        /**
         * Gets a specific user from opsgenie based on id or email address
         */
        get: function (identifier, config, cb) {
            var path = api.getPath(baseURL, identifier, null);
            api.get(path, config, cb);
        },

        list: function (params, config, cb) {
            var path = api.getPathWithListParams(baseURL, params);
            api.get(path, config, cb)
        },

        /*
         * This request is to create Users in Opsgenie.
         * Please check new alert api documentation for available fields here:
         * https://www.opsgenie.com/docs/rest-api/user-api#section-create-user
         *
         * Also, you can check /samples/userV2/create.js for a complete example.
         *
         * */
        create: function (data, config, cb) {
            api.post(baseURL, data, config, cb)
        },

        /*
         * This request is to delete a User in Opsgenie.
         * identifier parameter should be specified
         * */
        delete: function (identifier, config, cb) {
            var path = api.getPath(baseURL, identifier, null);
            api.delete(path, config, cb)
        },

        /*
         * This request is to get contacts of the user
         * (ie. voice/sms/email)
         * 
         * */
        contacts: function (identifier, data, config, cb) {
            var path = api.getPath(baseURL, identifier + contactsActionPath);
            api.get(path, data, config, cb)
        },


    };
}

module.exports = userV2;
