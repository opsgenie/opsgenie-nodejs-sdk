"use strict";

const opsgenie = require('../../');
require('../configure');

let delete_incident_json = {
    identifier: "cf6de3ed-a789-4941-8bc1-b5eb3b24003a", // should be custom to your created incident
    identifierType: "id"
};

opsgenie.incident.delete(delete_incident_json, function (error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("Delete Incident Response");
        console.log(user);
    }
});
