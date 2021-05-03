"use strict";

require('../configure');
const opsgenie = require('../../');

let resolve_incident_identifier = {
    identifier: "a1187507-3012-4942-95e7-2a7286759ec1",     // should be custom to your created incident
    identifierType: "id"
};

let body = {
    note: "testing",
};

opsgenie.incident.resolve(resolve_incident_identifier, body, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("Resolve Incident Response");
        console.log(incident);
    }
});