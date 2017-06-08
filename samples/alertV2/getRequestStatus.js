"use strict";

require('../configure');
var opsgenie = require('../../');



opsgenie.configure({
    'host': 'https://api.opsgenie.com',
    'api_key': "yourApiKey"
});

var requestId = "yourRequestId";

opsgenie.alertV2.getRequestStatus(requestId, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Request Status :" );
        console.log(JSON.parse(result).data);
    }
});