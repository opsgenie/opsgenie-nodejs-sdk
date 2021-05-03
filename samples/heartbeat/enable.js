"use strict";

require('../configure');
var opsgenie = require('../../');

let identifier = {
    identifier: "HeartbeatName", // should be custom to your created incident
};

opsgenie.heartbeat.enable(identifier, function (error, heartbeat) {
    if (error) {
        console.error(error);
    } else {
        console.log("heartbeat enabled");
        console.log(heartbeat);
    }
});