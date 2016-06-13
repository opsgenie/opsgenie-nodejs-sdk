"use strict";

var opsgenie = require('../../');
require('../configure');

// data as {} or for ex, {createdAfter: timeInMs * 1000000}
opsgenie.alert.count({}, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Count Alert Response");
        console.log(alert);
    }
});
