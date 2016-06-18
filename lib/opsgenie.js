"use strict";

var configuration = require('./configure');

module.exports = function () {

    function configure(options) {
        configuration.configure(options);
    }

    return {
        version: configuration.sdkVersion,
        configure: configure,
        configuration: configuration.default_options,
        alert: require('./resources/Alert')(),
        user: require('./resources/User')(),
        group: require('./resources/Group')(),
        team: require('./resources/Team')()
    };
};
