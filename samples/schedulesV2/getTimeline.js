"use strict";

var opsgenie = require('../../');
require('../configure');


var schedule_identifier = '77caa918-3b8e-4aa8-86fb-b0bf3ef56a0f';

opsgenie.schedulesV2.getTimeline(schedule_identifier, {}, function (error, schedules) {
    if (error) {
        console.error(error);
    } else {
        console.log(schedules)
    }
})

