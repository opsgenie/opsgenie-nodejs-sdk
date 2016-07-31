'use strict';
console.log('Loading function');

let opsgenie = require('opsgenie-sdk');

opsgenie.configure({
    'api_key': 'your_opsgenie_api_key'
});

exports.handler = (event, context, callback) => {
    console.log('Received event:', event);

    const action = event.action;

    switch (action) {
        case 'opened':
            var create_alert_json = {
                "message": event.issue.title
            };
            opsgenie.alert.create(create_alert_json, function (error, alert) {
                if (error) {
                    callback(new Error(error));
                } else {
                    callback(null, "Alert created with id: " + alert.id);
                }
            });
            break;
        default:
            callback(new Error('Unrecognized action "${action}"'));
    }
};