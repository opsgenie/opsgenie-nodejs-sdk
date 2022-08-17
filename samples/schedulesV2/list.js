"use strict";

var opsgenie = require('../../');
require('../configure');

opsgenie.schedulesV2.list({}, {}, function (error, schedules) {
    if (error) {
        console.error(error);
    } else {
        console.log(schedules)
    }
})

