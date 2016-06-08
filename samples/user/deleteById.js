"use strict";

var opsgenie = require('../../');
require('../configure');

opsgenie.user.deleteById("29ec7145-a78f-4002-a8e5-0fd5831b5329", function (error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("DeleteById User Response");
        console.log(user);
    }
});
