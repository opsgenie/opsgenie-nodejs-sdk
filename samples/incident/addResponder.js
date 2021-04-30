"use strict";

require('../configure');
const opsgenie = require('../../');

let identifier = {
    identifier: "686db572-d4de-4950-90d3-1a43e8969b29", // should be custom to your created incident
    identifierType: "id"
};

let body = {
    note: "testing responder",
    responder: [
        {
            id: "a4e3df8d-7044-470d-ac6a-97719e954e96",
            type: "team"
        }
    ]
};

opsgenie.incident.addResponder(identifier, body, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("Add Responder to Incident Response");
        console.log(incident);
    }
});