"use strict";

require('../configure');
var opsgenie = require('../../');

let identifier = {
    identifier: "HeartbeatName", // should be custom to your created incident
};

opsgenie.heartbeat.ping(identifier, function (error, heartbeat) {
    if (error) {
        console.error(error);
    } else {
        console.log("heartbeat pinged");
        console.log(heartbeat);
    }
});