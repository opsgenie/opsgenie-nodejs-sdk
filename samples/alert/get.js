"use strict";

var opsgenie = require('../../');
require('../configure');

var get_alert_json = {
    id: "d456dc6c-1b3b-432f-a9ab-92b8fc2c62eb" // should be custom to your created alert
};

opsgenie.alert.get(get_alert_json, function (error, alert) {
    if (error) {
        console.log("Error status: " + error.httpStatusCode);
        console.error(error);
    } else {
        console.log("Get Alert Response for id:" + get_alert_json.id);
        console.log(alert);
    }
});
