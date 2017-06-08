"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var unacknowledge_alert_identifier = {
    identifier: "5", // should be custom to your created alert
    identifierType : "tiny"
};

var unacknowledge_alert_data = {
    note : "some note for unacknowledge action",
    user : "user@opsgenie.com",
    source : "source of the unacknowledge request"
};

opsgenie.alertV2.unacknowledge(unacknowledge_alert_identifier, unacknowledge_alert_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Unacknowledge Alert Response");
        console.log(result);
    }
});