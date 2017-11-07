"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var list_params = {
    query : "status : open",
    searchIdentifier : "custom_saved_search",
    searchIdentifierType : "name",
    offset : 0,
    limit : 10,
    sort : "alias",
    order : "desc"
};

opsgenie.alertV2.list(list_params, function (error, alerts) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Alert Response");
        console.log(alerts);
    }
});
