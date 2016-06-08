"use strict";

var opsgenie = require('../');
// var api_key = require('./config').api_key;

opsgenie.configure({
    'mode': 'lab',
    'api_key': "91e58022-8be4-4590-a4f0-0d4030bd9b0d"
    // 'api_key': api_key
});

// sample conf for localhost
/*
{
    'mode': 'localhost',
    'host': 'localhost',
    'post': '9000',
    'api_key': 'local_key'
}*/
