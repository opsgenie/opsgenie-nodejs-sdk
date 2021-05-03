"use strict";

require('../configure');
const opsgenie = require('../../');

let identifier = {
    identifier: "8f63000b-9a77-45d0-8898-edf2f8026448", // should be custom to your created incident
    identifierType: "id"
};

let body = {
    note: "testing",
};

opsgenie.incident.close(identifier, body, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("Close Incident Response");
        console.log(incident);
    }
});