"use strict";

var opsgenie = require('../../');
require('../configure');

var create_alert_json = {
    "message": "Hello world my alert :)"
};

opsgenie.alert.create(create_alert_json, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create Alert Response");
        console.log(alert);
    }
});
