"use strict";

require('../configure');
const opsgenie = require('../../');

let get_incident_identifier = {
    identifier: "f2860485-996d-43d3-9569-289bfcb4de07", // should be custom to your created incident
    identifierType: "id"
};

opsgenie.incident.get(get_incident_identifier, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("Get Incident Response for id:" + incident.data.id);
        console.log(incident);
    }
});