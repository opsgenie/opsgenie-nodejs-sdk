"use strict";

var opsgenie = require('../../');

opsgenie.configure({
    'api_key': 'your_api_key'
});

// optional for dev purposes
/*opsgenie.headers({

});*/

opsgenie.alert.get({id: "your_alert_id"}, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Alert Response: ", alert);
    }
});
