"use strict";

require('../configure');
var opsgenie = require('../../');

opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var create_savedSearch_data = {
    name : "open_and_acked",
    query : "status: open and acknowledged: true",
    owner : {
        username : "user@opsgenie.com"
    },
    description : "Will be used to display the alerts that are closed before someone acknowledges.",
    teams : [
        {
            name : "ops_team"
        }
    ]
};

opsgenie.alertV2.createSavedSearch(create_savedSearch_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create Saved Search Response");
        console.log(result);
    }
});