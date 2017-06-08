"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var update_saved_search_identifier = {
    identifier: "open_and_acked", // should be custom to your created saved search
    identifierType : "name"
};

var update_savedSearch_data = {
    name : "open_and_acked",
    query : "status: open and acknowledged: true",
    description : "Will be used to display the alerts that are open and acknowledged."
};

opsgenie.alertV2.updateSavedSearch(update_saved_search_identifier, update_savedSearch_data, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Update Saved Search Response");
        console.log(result);
    }
});