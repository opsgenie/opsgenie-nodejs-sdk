"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var addTeam_request_identifier = {
    identifier: "5", // should be custom to your created alert
    identifierType : "tiny"
};

var addTeam_data = {
    note : "some note for add team action",
    user : "user@opsgenie.com",
    source : "source of the add team request",
    team : {
        name : "ops_team"
    }
};

opsgenie.alertV2.addTeam(addTeam_request_identifier, addTeam_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Add Team to Alert Response");
        console.log(result);
    }
});