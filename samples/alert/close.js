"use strict";

var opsgenie = require('../../');
require('../configure');

var close_alert_json = {
    id: "a4130a35-32cb-4b76-aa9a-9ded6fdb5a3d" // should be custom to your created alert
};

opsgenie.alert.close(close_alert_json, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Close Alert Response for id:" + close_alert_json.id);
        console.log(alert);
    }
});
