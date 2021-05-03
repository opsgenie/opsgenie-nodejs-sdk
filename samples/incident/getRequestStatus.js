"use strict";

require('../configure');
const opsgenie = require('../../');

let identifier = {
    identifier: "6543784c-e744-49e5-ad26-4183e8549aec", // should be custom to your created incident
};

opsgenie.incident.getRequestStatus(identifier, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("Get Incident Request Status Response");
        console.log(incident);
    }
});