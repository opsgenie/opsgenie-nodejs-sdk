"use strict";

require('../configure');
var opsgenie = require('../../');

opsgenie.heartbeat.list(null, function (error, heartbeat) {
    if (error) {
        console.error(error);
    } else {
        console.log("heartbeat list");
        console.log(JSON.stringify(heartbeat));
    }
});