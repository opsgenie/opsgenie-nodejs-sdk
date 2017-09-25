"use strict";

var utils = require('./utils');
var configuration = require('./configure');
var request = require('requestretry');
var qs = require('querystring');

exports.get = function executeGetRequest(path, data, http_options, cb) {
    execute('GET', path, data, http_options, cb);
};

exports.post = function executePostRequest(path, data, http_options, cb) {
    execute('POST', path, data, http_options, cb);
};

exports.delete = function executeDeleteRequest(path, data, http_options, cb) {
    execute('DELETE', path, data, http_options, cb);
};

function setRetryPolicy() {
    request.defaults({
        json: true,
        maxAttempts: configuration.default_options.maxAttempts,
        retryDelay: configuration.default_options.retryDelay,
        retryStrategy: configuration.default_options.retryStrategy
    });
}

function getHost() {
    return configuration.default_options.host;
}

function getBasicHttpOptions(http_options) {
    if (!http_options) {
        http_options = utils.merge({}, configuration.default_http_options, true);
    } else {
        http_options = utils.merge(http_options, configuration.default_http_options, true);
    }

    http_options.host = getHost();
    return http_options;
}

function getPathWithParams(path, params, api_key) {
    if (typeof params !== 'string') {
        params = qs.stringify(params);
    }

    return params ? (path + "?" + params + "&apiKey=" + api_key) : (path + "?apiKey=" + api_key);
}

function getBody(data, apiKey) {
    if (typeof data !== 'string') {
        // add api key to request
        data.apiKey = apiKey;
        return JSON.stringify(data);
    }
}

function execute(method, path, data, http_options, cb) {
    setRetryPolicy();

    if (typeof http_options === "function") {
        cb = http_options;
        http_options = null;
    }

    http_options = getBasicHttpOptions(http_options);
    http_options.method = method;

    if (method === 'GET' || method === 'DELETE') {
        http_options.uri = http_options.host + getPathWithParams(path, data, configuration.default_options.api_key);
        http_options.body = null;
    } else {
        http_options.uri = http_options.host + path;
        http_options.body = getBody(data, configuration.default_options.api_key);
    }
    request(http_options, function (error, response, body) {

        if (error) {
            console.log('Problem with request: ', error);
            cb(error, null);
            return;
        }

        var err = null, res = null;
        if (response.statusCode < 200 || response.statusCode >= 300) {
            if (process.env.NODE_ENV === 'development') {
                err.response_stringified = JSON.stringify(response);
            }
            err = JSON.parse(body);
            err.httpStatusCode = response.statusCode;
            response = null;
        } else {
            res = JSON.parse(body);
            res.httpStatusCode = response.statusCode;
        }

        cb(err, res);
    });
}