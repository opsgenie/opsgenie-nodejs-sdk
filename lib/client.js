"use strict";

var utils = require('./utils');
var request = require('requestretry');
var querystring = require('querystring');
var configuration = require('./configure');

/**
 * Wraps the http client, handles request parameters, populates request headers, handles response
 *
 * @param http_method
 * @param path
 * @param data
 * @param http_options
 * @param cb
 * @type {exports.executeHttp}
 */
var executeHttpRequest = function executeHttp(http_method, path, data, http_options, cb) {

// if http_options is a function, meaning that client used this field as cb
    if (typeof http_options === "function") {
        cb = http_options;
        http_options = null;
    }

    if (!http_options) {
        http_options = configuration.default_options;
    } else {
        http_options = utils.merge(http_options, configuration.default_options, true);
    }

    //Get host endpoint using mode
    http_options.host = utils.getDefaultApiEndpoint(http_options.mode) || http_options.host;

    var request_data = data;


    if (http_method === 'GET' || http_method === 'DELETE') {
        //format object parameters into GET request query string
        if (typeof request_data !== 'string') {
            request_data = querystring.stringify(request_data);
        }
        if (request_data) {
            path = path + "?" + request_data + "&apiKey=" + http_options.api_key;
            request_data = "";
        } else {
            // add api key to request
            path += "?apiKey=" + http_options.api_key;
        }


    } else if (typeof request_data !== 'string') {
        // add api key to request
        request_data.apiKey = http_options.api_key;
        request_data = JSON.stringify(request_data);
    }

    http_options = JSON.parse(JSON.stringify(http_options));

    request.defaults({
        json: true,
        maxAttempts: 5,   // (default) try 5 times
        retryDelay: 5000,  // (default) wait for 5s before trying again
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError
    });

    var options = {
        url: http_options.host + http_options.path,
        headers: http_options.headers
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
        }
        cb(error, JSON.parse(body));
    }

    request(options, callback);
};

exports.executeHttp = executeHttpRequest;