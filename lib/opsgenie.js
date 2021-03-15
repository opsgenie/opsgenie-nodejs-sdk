"use strict";

var configuration = require('./configure');

module.exports = function () {

    function configure(options) {
        configuration.configure(options);
    }

    function headers(headers) {
        configuration.headers(headers);
    }

    return {
        version: configuration.sdkVersion,
        configure: configure,
        headers: headers,
        configuration: configuration.default_options,
        alertV2: require('./alertV2/AlertV2')(),
        user: require('./resources/User')(),
        group: require('./resources/Group')(),
        team: require('./resources/Team')()
    };
};
