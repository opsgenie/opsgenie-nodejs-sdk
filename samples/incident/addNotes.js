"use strict";

require('../configure');
const opsgenie = require('../../');

let identifier = {
    identifier: "686db572-d4de-4950-90d3-1a43e8969b29", // should be custom to your created incident
    identifierType: "id"
};

let body = {
    note: "testing note",
};

opsgenie.incident.addNote(identifier, body, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("Add Incident Note Response");
        console.log(incident);
    }
});