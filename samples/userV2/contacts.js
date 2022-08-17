"use strict";

var opsgenie = require('../../');
require('../configure');


var user_identifier = 'eb387227-4d7c-4ceb-b970-c4ba728af5d0';

opsgenie.userV2.contacts(user_identifier, null , function (error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log(user);
    }
});



