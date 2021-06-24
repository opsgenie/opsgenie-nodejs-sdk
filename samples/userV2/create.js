"use strict";

var opsgenie = require('../../');
require('../configure');

var create_user_json = {
    "username": "test@space48.com",
    "fullName": "Test McTestFace",
    "role": { id: 'test' }
};

opsgenie.userV2.create(create_user_json, function (error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create User Response");
        console.log(user);
    }
});
