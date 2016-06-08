"use strict";

var opsgenie = require('../../');
require('../configure');

var create_user_json = {
    "username": "serhat@example.com",
    "fullname": "Serhat Can",
    "role": "user"
};

opsgenie.user.create(create_user_json, function (error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create User Response");
        console.log(user);
    }
});
