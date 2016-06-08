"use strict";

var opsgenie = require('../../');
require('../configure');

opsgenie.user.list({}, function (error, users) {
    if (error) {
        console.error(error);
    } else {
        console.log("List User Response");
        console.log(users);
    }
});
