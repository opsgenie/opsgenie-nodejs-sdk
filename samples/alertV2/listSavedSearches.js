"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

opsgenie.alertV2.listSavedSearches(function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Saved Searches Response");
        console.log(result);
    }
});