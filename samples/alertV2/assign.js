"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var assign_alert_identifier = {
    identifier: "5", // should be custom to your created alert
    identifierType : "tiny"
};

var assign_alert_data = {
    note : "some note for assign action",
    user : "user@opsgenie.com",
    source : "source of the assign request",
    owner : {
        username : "user@opsgenie.com"
    }
};

opsgenie.alertV2.assign(assign_alert_identifier, assign_alert_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Assign Alert Response");
        console.log(result);
    }
});