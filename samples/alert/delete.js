"use strict";

var opsgenie = require('../../');
require('../configure');

var delete_alert_json = {
    "id": "42c5ba9d-e2b0-4ca7-89d4-b28e9549581e"
};

opsgenie.alert.delete(delete_alert_json, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Delete Alert Response for id:" + delete_alert_json.id);
        console.log(alert);
    }
});
