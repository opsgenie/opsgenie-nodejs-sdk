"use strict";

const opsgenie = require('../../');
require('../configure');

let create_incident_json = {
    "message": "Some Message",
    "serviceId": "Server_ID"
};

opsgenie.incident.create(create_incident_json, function (error, alert) {
    if (error) {
        console.error(error);
    } else {
        console.log("Create Incident Response");
        console.log(alert);
    }
});