"use strict";

require('../configure');
const opsgenie = require('../../');


var list_params = {
    query: "status : open",
    offset: 2,
    limit: 1,
    sort: "createdAt",
    order: "desc"
};

opsgenie.incident.list(list_params, function (error, incident) {
    if (error) {
        console.error(error);
    } else {
        console.log("List Incident Response");
        console.log(incident);
    }
});