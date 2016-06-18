"use strict";

var utils = require('./utils');
var http = require('http');
var https = require('https');
var querystring = require('querystring');
var configuration = require('./configure');

/**
 * Wraps the http client, handles request parameters, populates request headers, handles response
 *
 * @type {exports.executeHttp}
 */
exports.executeHttp = function executeHttp(http_method, path, data, http_options, cb) {
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

    var client = (http_options.schema === 'http') ? http : https;

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

    if (http_options) {

        http_options = JSON.parse(JSON.stringify(http_options));

        if (!http_options.headers) {
            http_options.headers = {};
        }
        http_options.path = path;
        http_options.method = http_method;
        if (request_data) {
            http_options.headers['Content-Length'] = Buffer.byteLength(request_data, 'utf-8');
        }

        if (!http_options.headers.Accept) {
            http_options.headers.Accept = 'application/json';
        }

        if (!http_options.headers['Content-Type']) {
            http_options.headers['Content-Type'] = 'application/json';
        }
    }

    // Enable full request response logging in development/non-production environment only
    if (configuration.default_options.mode !== 'live' && process.env.NODE_ENV === 'development') {
        console.dir(JSON.stringify(http_options.headers));
        console.dir(request_data);
    }

    // client is http or https library
    var req = client.request(http_options);
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
        cb(e, null);
    });

    req.on('response', function (res) {
        var response = '';

        //do not setEndcoding with browserify
        if (res.setEncoding) {
            res.setEncoding('utf8');
        }

        res.on('data', function (chunk) {
            response += chunk;
        });

        res.on('end', function () {
            var err = null;

            try {
                if (process.env.NODE_ENV === 'development') {
                    console.dir("Development request log:");
                    console.dir(JSON.stringify(res.headers));
                    console.dir(response);
                }

                //Set response to be parsed JSON object if data received is json
                //expect that content-type header has application/json when it
                //returns data
                if (typeof res.headers['content-type'] === "string" && res.headers['content-type'].match(/^application\/json(?:;.*)?$/) !== null) {
                    response = JSON.parse(response);
                }
                //Set response to an empty object if no data was received
                if (response === '') {
                    response = {};
                }
                response.httpStatusCode = res.statusCode;
            } catch (e) {
                err = new Error('Invalid JSON Response Received.');
                err.error = {
                    name: 'Invalid JSON Response Received, JSON Parse Error.'
                };
                err.response = response;
                err.httpStatusCode = res.statusCode;
                response = null;
            }

            if (!err && (res.statusCode < 200 || res.statusCode >= 300)) {
                err = new Error('Response Status : ' + res.statusCode);
                err.response = response;
                if (process.env.NODE_ENV === 'development') {
                    err.response_stringified = JSON.stringify(response);
                }
                err.httpStatusCode = res.statusCode;
                response = null;
            }
            cb(err, response);
        });
    });

    if (request_data) {
        req.write(request_data);
    }
    req.end();
};
