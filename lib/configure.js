"use strict";

var utils = require('./utils');

exports.sdkVersion = require('../package').version;

var def_options = {
    'mode': 'live',
    'schema': 'https',
    'headers': {}
};

exports.default_options = def_options;

var configure = exports.configure = function configure(options) {
    if (options !== undefined && typeof options === 'object') {
        def_options = utils.merge(def_options, options);
    }
};