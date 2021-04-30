"use strict";

require('../configure');
const opsgenie = require('../../');

let identifier = {
    identifier: "f2860485-996d-43d3-9569-289bfcb4de07", // should be custom to your created incident
    identifierType: "id"
};

opsgenie.incident.getResponderAlerts(identifier, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("Get Incident Responder Alert Ids Response");
        console.log(incident);
    }
});