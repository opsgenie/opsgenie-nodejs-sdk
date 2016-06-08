"use strict";

var opsgenie = require('../../');
require('../configure');

opsgenie.alert.count(function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Count Alert Response");
        console.log(alert);
    }
});
