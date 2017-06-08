"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var get_alert_identifier = {
    identifier: "5", // should be custom to your created alert
    identifierType : "tiny"
};

opsgenie.alertV2.get(get_alert_identifier, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Get Alert Response for id:" + JSON.parse(alert).data.id);
        console.log(alert);
    }
});