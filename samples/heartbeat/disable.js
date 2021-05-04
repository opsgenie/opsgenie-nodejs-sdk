"use strict";

require('../configure');
var opsgenie = require('../../');

let identifier = {
    identifier: "HeartbeatName", // should be custom to your created incident
};

opsgenie.heartbeat.disable(identifier, function (error, heartbeat) {
    if (error) {
        console.error(error);
    } else {
        console.log("heartbeat disabled");
        console.log(heartbeat);
    }
});