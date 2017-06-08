"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var snooze_alert_identifier = {
    identifier: "myAlias", // should be custom to your created alert
    identifierType : "alias"
};

var snooze_alert_data = {
    note : "some note for snooze action",
    user : "user@opsgenie.com",
    source : "source of the snooze request",
    endTime : "2017-06-09T08:30:50.894Z"
};

opsgenie.alertV2.snooze(snooze_alert_identifier, snooze_alert_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Snooze Alert Response");
        console.log(result);
    }
});