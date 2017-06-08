"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var delete_alert_identifier = {
    identifier: "0f91e341-db66-4e8f-a49c-359f1cc0cf9b" ,        // should be custom to your alert
    identifierType : "id"
};

opsgenie.alertV2.delete(delete_alert_identifier, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Delete Alert Response:");
        console.log(result);
    }
});