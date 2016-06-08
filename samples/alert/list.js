"use strict";

var opsgenie = require('../../');
require('../configure');

var list_alert_json = {};

opsgenie.alert.list(list_alert_json, function (error, alerts) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Alert Response");
        console.log(alerts);
    }
});
