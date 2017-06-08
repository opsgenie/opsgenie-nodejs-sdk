"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var close_alert_identifier = {
    identifier: "5", // should be custom to your created alert
    identifierType : "tiny"
};

var close_alert_data = {
    note : "some note for close action",
    user : "user@opsgenie.com",
    source : "source of the close request"
};

opsgenie.alertV2.close(close_alert_identifier, close_alert_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Close Alert Response");
        console.log(result);
    }
});