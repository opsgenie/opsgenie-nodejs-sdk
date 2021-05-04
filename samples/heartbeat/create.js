"use strict";

require('../configure');
var opsgenie = require('../../');

var get_heartbeat_identifier = {
    name : "HeartbeatName",
    description: "Sample heartbeat description",
    intervalUnit : "minutes",
    interval : 10,
    enabled : true,
    ownerTeam: {
        name:"Team 1"
    }
};

opsgenie.heartbeat.create(get_heartbeat_identifier, function (error, heartbeat) {
    if (error) {
        console.error(error);
    } else {
        console.log("heartbeat created");
        console.log(JSON.stringify(heartbeat));
    }
});