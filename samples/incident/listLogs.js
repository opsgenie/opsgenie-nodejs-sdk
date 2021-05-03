"use strict";

require('../configure');
const opsgenie = require('../../');

let identifier = {
    identifier: "686db572-d4de-4950-90d3-1a43e8969b29", // should be custom to your created incident
};

var list_params = {
    query: "status : open",
    offset: 2,
    limit: 10,
    sort: "createdAt",
    order: "desc"
};

opsgenie.incident.listLogs(list_params, identifier, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Incident Logs Response");
        console.log(incident);
    }
});