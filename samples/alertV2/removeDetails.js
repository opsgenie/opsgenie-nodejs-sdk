"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var removeDetails_request_identifier = {
    identifier: "5", // should be custom to your created alert
    identifierType : "tiny"
};

var removeDetails_data = {
    note : "some note for remove details action",
    user : "user@opsgenie.com",
    source : "source of the remove details request",
    keys : "key1, key2"
};

opsgenie.alertV2.removeDetails(removeDetails_request_identifier, removeDetails_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Remove Details of Alert Response");
        console.log(result);
    }
});