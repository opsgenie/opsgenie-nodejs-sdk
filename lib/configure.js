"use strict";

var utils = require('./utils');

exports.sdkVersion = require('../package').version;

var def_options = {
    'mode': 'live',
    'host': 'https://api.opsgenie.com',
    'retryCount': 3
};

var def_http_options = {
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

exports.default_options = def_options;

var configure = exports.configure = function configure(options) {
    if (options !== undefined && typeof options === 'object') {
        def_options = utils.merge(def_options, options);
    }
};

exports.default_http_options = def_http_options;

var headers = exports.headers = function (http_options) {
    if (http_options !== undefined && typeof http_options === 'object') {
        def_http_options = utils.merge(def_http_options, http_options);
    }
};
