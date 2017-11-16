"use strict";

var utils = require('./utils');
var configuration = require('./configure');
var request = require('requestretry');
var qs = require('querystring');

exports.get = function executeGetRequest(path, http_options, cb) {
    execute('GET', path, null, http_options, cb);
};

exports.post = function executePostRequest(path, data, http_options, cb) {
    execute('POST', path, data, http_options, cb);
};

exports.delete = function executeDeleteRequest(path, http_options, cb) {
    execute('DELETE', path, null, http_options, cb);
};

exports.patch = function executePostRequest(path, data, http_options, cb) {
    execute('PATCH', path, data, http_options, cb);
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
    var apiKey = configuration.default_options.api_key;
    configuration.default_http_options.headers['Authorization'] = 'GenieKey ' + apiKey;

    if (!http_options) {
        http_options = utils.merge({}, configuration.default_http_options, true);
    } else {
        http_options = utils.merge(http_options, configuration.default_http_options, true);
    }

    http_options.host = getHost();
    return http_options;
}

function getPathWithIdentifier(path, params, actionPath) {
    var pathParams;
    var actPath = actionPath ? actionPath : "";

    if (typeof params !== 'string') {
        pathParams = params["identifier"] + actPath;
        if (params["identifierType"] != null) {
            pathParams += "?identifierType=" + params["identifierType"];
        }
    } else {
        pathParams = params;
    }

    return params ? (path + pathParams) : (path);
}

exports.getPath = function (path, params, actionPath) {
    return getPathWithIdentifier(path, params, actionPath)
};

exports.getPathWithData = function (path, params, actionPath, data) {
    var pathWithData = getPathWithIdentifier(path, params, actionPath);
    var dataParam = "";
    if (typeof data !== 'string') {
        dataParam = qs.stringify(data);
    } else {
        dataParam = data;
    }

    return data ? (pathWithData + "&" + dataParam) : pathWithData;
};

exports.getPathWithListParams = function (path, params) {
    if (typeof params !== 'string') {
        params = qs.stringify(params);
    }

    return params ? (path + "?" + params) : path;
};

function execute(method, path, data, http_options, cb) {
    setRetryPolicy();
    if (typeof http_options === "function") {
        cb = http_options;
        http_options = null;
    }

    http_options = getBasicHttpOptions(http_options);
    http_options.method = method;

    if (method === 'GET' || method === 'DELETE') {
        http_options.uri = http_options.host + path;
        http_options.json = true
    } else {
        http_options.uri = http_options.host + path;
        http_options.body = data;
        http_options.json = true
    }
    request(http_options, function (error, response, body) {
        handleResponse(error, response, body, cb)
    });
}

function handleResponse(error, response, body, cb) {
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
        err = JSON.parse(JSON.stringify(body));
        err.httpStatusCode = response.statusCode;
        response = null;
    } else {
        var bodyJson = JSON.stringify(body);
        res = JSON.parse(bodyJson);
    }

    cb(err, res);
}

