"use strict";

var configuration = require('./configure');
var client = require('./client');

module.exports = function () {

    function configure(options) {
        client.configure(options);
    }

    return {
        version: configuration.sdkVersion,
        configure: configure,
        configuration: configuration.default_options,
        alert: require('./resources/Alert')(),
        user: require('./resources/User')(),
        group: require('./resources/Group')()
    };
};
