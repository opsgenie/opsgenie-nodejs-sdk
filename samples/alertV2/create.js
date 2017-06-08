"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var create_alert_json = {
    message : "this is an alert message again ",
    alias : "this is the alias",
    description : "here is a description",
    teams: [
        {
            name : "test_team"
        },
        {
            id: "c8c43a3d-3ec1-41c4-8408-6133f9440714"
        }
    ],
    visibleTo: [
        {
            name : "ops_team",
            type : "team"
        },
        {
            username : "user@opsgenie.com",
            type : "user"
        }
    ],
    actions : ["newCustomAction", "anotherNewCustomAction"],
    tags: ["tag1", "tag2"],
    details : {
        "key1" : "value1",
        "key2" : "value2"
    },
    entity : "some important server",
    priority : "P1"
};

opsgenie.alertV2.create(create_alert_json, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create Alert Response:");
        console.log(alert);
    }
});