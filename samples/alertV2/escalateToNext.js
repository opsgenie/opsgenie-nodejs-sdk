"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var escalateToNext_identifier = {
    identifier: "5", // should be custom to your created alert
    identifierType : "tiny"
};

var escalateToNext_data = {
    note : "some note for escalate to next action",
    user : "user@opsgenie.com",
    source : "source of the escalate to next request",
    escalation : {
        name : "ops_team_escalation"
    }
};

opsgenie.alertV2.escalateToNext(escalateToNext_identifier, escalateToNext_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Escalate To Next Response");
        console.log(result);
    }
});