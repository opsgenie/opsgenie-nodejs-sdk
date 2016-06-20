"use strict";

var expect = require('chai').expect;
var nock = require('nock');
var waterfall = require("async/waterfall");

var opsgenie = require('../');
require('./configure');

/**
 * Tested alert methods;
 * get, list, create, delete, deleteById, close, acknowledge, addNote, listAlertNotes, listAlertLogs
 * count, addRecipient, addTeam, addTags, addDetails, listAlertRecipient, takeOwnership
 *
 * As this some of these tests contain methods need to be executed in sync way, async lib's waterfall function is used
 * to avoid callback hell problem
 */
describe('ALERT_API_TEST', function () {
    this.timeout(60000);

    // use NOCK_OFF=true mocha -t 60000 for testing against real server
    if (process.env.NOCK_OFF !== 'true') {
        require('./mocks/alert');
    }

    var timeInMs = Date.now();

    it('create and get success', function (done) {

        var create_alert_json = {
            "message": "Test alert1",
            "tags": ["tag1", "tag2"]
        };

        opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
            expect(error).equal(null);

            opsgenie.alert.get({"id": alertCreateSuccess.alertId}, function (error, alert) {
                expect(error).equal(null);
                expect(alert.message).to.contain("Test alert1");
                done();
            });
        });
    });

    it('close success', function (done) {

        var create_alert_json = {
            "message": "Test3",
            "tags": ["tag3"]
        };

        waterfall([
            function (callback) {
                opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
                    expect(error).equal(null);
                    expect(alertCreateSuccess.httpStatusCode).to.equal(200);
                    callback(null, alertCreateSuccess);
                });
            },
            function (alertCreateSuccess, callback) {
                opsgenie.alert.get({"id": alertCreateSuccess.alertId}, function (error, alert) {
                    expect(error).equal(null);
                    expect(alert.message).to.contain("Test3");
                    callback(null, alert);
                });
            },
            function (alert, callback) {
                opsgenie.alert.close({"id": alert.id}, function (error, closeResult) {
                    expect(error).equal(null);
                    expect(closeResult.httpStatusCode).to.equal(200);
                    callback(null, 'done');
                });
            }
        ], function (err, result) {
            expect(err).equal(null);
            if (result === "done") {
                done();
            }
        });
    });

    it('acknowledge success', function (done) {

        var create_alert_json = {
            "message": "Acknowledge and list alert notes test",
            "tags": ["tag2"],
            "description": "This is the description of the Acknowledge and list alert notes test",
            "details": {"prop1": "prop1Value", "prop2": "prop2Value"},
        };

        opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
            expect(error).equal(null);
            expect(alertCreateSuccess.httpStatusCode).to.equal(200);

            opsgenie.alert.acknowledge({id: alertCreateSuccess.alertId}, function (error, acknowledgeSuccess) {
                expect(error).equal(null);
                expect(acknowledgeSuccess.code).to.equal(200);
                done();
            });
        });
    });

    it('addNote, listAlertNotes, listAlertLogs success', function (done) {

        var create_alert_json = {
            "message": "create, add note, list notes success",
            "tags": ["listTag", "logTag"],
            "description": "This is the description of the create, add note, list notes success test",
            "details": {
                "importance": "critic",
                "department": "operations"
            },
            "note": "A Note for testing note listing"
        };

        waterfall([
            function (callback) {
                opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
                    expect(error).equal(null);
                    expect(alertCreateSuccess.httpStatusCode).to.equal(200);
                    callback(null, alertCreateSuccess);
                });
            },
            function (alertCreateSuccess, callback) {
                var add_note_json = {
                    "id": alertCreateSuccess.alertId,
                    "note": "custom note"
                };

                opsgenie.alert.addNote(add_note_json, function (error, addNoteSuccess) {
                    expect(error).equal(null);
                    expect(addNoteSuccess.code).to.equal(200);
                    callback(null, alertCreateSuccess.alertId);
                });
            },
            function (alertId, callback) {
                opsgenie.alert.listAlertNotes({id: alertId}, function (error, listAlertNotesSuccess) {
                    expect(error).equal(null);
                    expect(listAlertNotesSuccess.notes.length).to.equal(2);
                    callback(null, alertId);
                });
            },
            function (alertId, callback) {
                opsgenie.alert.listAlertLogs({id: alertId}, function (error, listAlertLogsSuccess) {
                    expect(error).equal(null);
                    expect(listAlertLogsSuccess.logs.length).to.equal(3);
                    callback(null, 'done');
                });
            }
        ], function (err, result) {
            expect(err).equal(null);
            if (result === "done") {
                done();
            }
        });

    });

    it('addRecipient, addTeam, addTags, addDetails, listAlertRecipient, takeOwnership success', function (done) {

        var create_alert_json = {
            "message": "Long list of adding test"
        };

        waterfall([
            function (callback) {
                opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
                    expect(error).equal(null);
                    expect(alertCreateSuccess.httpStatusCode).to.equal(200);
                    callback(null, alertCreateSuccess);
                });
            },
            function (alertCreateSuccess, callback) { // Add Recipient
                var add_recipient = {
                    "id": alertCreateSuccess.alertId,
                    "recipient": "user1@opsgenie.com"
                };

                opsgenie.alert.addRecipient(add_recipient, function (error, addRecipientSuccess) {
                    expect(error).equal(null);
                    expect(addRecipientSuccess.code).to.equal(200);
                    callback(null, alertCreateSuccess.alertId);
                });
            },
            function (alertId, callback) { // Add Team
                var add_team = {
                    "id": alertId,
                    "team": "team1"
                };

                opsgenie.alert.addTeam(add_team, function (error, addTeamSuccess) {
                    expect(error).equal(null);
                    expect(addTeamSuccess.code).to.equal(200);
                    callback(null, alertId);
                });
            },
            function (alertId, callback) { // Add Tags
                var add_tags = {
                    "id": alertId,
                    "tags": "tag1, tag2"
                };

                opsgenie.alert.addTags(add_tags, function (error, addTagsSuccess) {
                    expect(error).equal(null);
                    expect(addTagsSuccess.code).to.equal(200);
                    callback(null, alertId);
                });
            },
            function (alertId, callback) { // Add Details
                var add_details = {
                    "id": alertId,
                    "details": {"prop1": "val1", "prop2": "val2"}
                };

                opsgenie.alert.addDetails(add_details, function (error, addDetailsSuccess) {
                    expect(error).equal(null);
                    expect(addDetailsSuccess.code).to.equal(200);
                    callback(null, alertId);
                });
            },
            function (alertId, callback) { // List Alert Recipients

                opsgenie.alert.listAlertRecipients({"id": alertId}, function (error, listAlertRecipientSuccess) {
                    expect(error).equal(null);
                    expect(listAlertRecipientSuccess.httpStatusCode).to.equal(200);
                    expect(listAlertRecipientSuccess.users.length).to.equal(1);
                    expect(listAlertRecipientSuccess.users[0].username).to.equal("user1@opsgenie.com");
                    callback(null, alertId);
                });
            },
            function (alertId, callback) { // Take Ownership

                opsgenie.alert.takeOwnership({"id": alertId}, function (error, takeOwnershipSuccess) {
                    expect(error).equal(null);
                    expect(takeOwnershipSuccess.code).to.equal(200);
                    callback(null, alertId);
                });
            },
            function (alertId, callback) {

                opsgenie.alert.get({"id": alertId}, function (error, alert) {
                    expect(error).equal(null);
                    expect(alert.message).to.equal("Long list of adding test");
                    expect(alert.teams.length).to.equal(1);
                    expect(alert.teams[0]).to.equal("team1");
                    expect(alert.recipients.length).to.equal(1);
                    expect(alert.recipients[0]).to.equal("user1@opsgenie.com");
                    expect(alert.details.prop1).to.equal("val1");
                    expect(alert.details.prop2).to.equal("val2");
                    expect(alert.tags.length).to.equal(2);
                    expect(alert.tags[0]).to.equal("tag1");
                    expect(alert.tags[1]).to.equal("tag2");
                    expect(alert.owner).to.equal("System");
                    callback(null, 'done');
                });
            }
        ], function (err, result) {
            expect(err).equal(null);
            if (result === "done") {
                done();
            }
        });

    });

    it('removeTags, removeDetails, assign success', function (done) {

        var create_alert_json = {
            "message": "remove tags details and assign testing",
            "tags": ["tag1", "tag2", "tag3", "tag4"],
            "description": "This is the description of the remove test",
            "details": {
                "prop1": "val1",
                "prop2": "val2",
                "prop3": "val3",
                "prop4": "val4"
            }
        };

        waterfall([
            function (callback) {
                opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
                    expect(error).equal(null);
                    expect(alertCreateSuccess.httpStatusCode).to.equal(200);
                    callback(null, alertCreateSuccess.alertId);
                });
            },
            function (alertId, callback) { // Remove Tags
                var remove_tags_json = {
                    "id": alertId,
                    "tags": ["tag1", "tag2"]
                };

                opsgenie.alert.removeTags(remove_tags_json, function (error, removeTagsSuccess) {
                    expect(error).equal(null);
                    expect(removeTagsSuccess.code).to.equal(200);
                    callback(null, alertId);
                });
            },
            function (alertId, callback) { // Remove Details
                var remove_details_json = {
                    "id": alertId,
                    "keys": ["prop1", "prop2"]
                };

                opsgenie.alert.removeDetails(remove_details_json, function (error, removeDetailsSuccess) {
                    expect(error).equal(null);
                    expect(removeDetailsSuccess.code).to.equal(200);
                    callback(null, alertId);
                });
            },
            function (alertId, callback) { // Assign
                var assign_json = {
                    "id": alertId,
                    "owner": "user1@opsgenie.com"
                };

                opsgenie.alert.assign(assign_json, function (error, assignSuccess) {
                    expect(error).equal(null);
                    expect(assignSuccess.code).to.equal(200);
                    callback(null, alertId);
                });
            },
            function (alertId, callback) {

                opsgenie.alert.get({"id": alertId}, function (error, alert) {
                    expect(error).equal(null);
                    expect(alert.message).to.equal("remove tags details and assign testing");
                    expect(alert.details).to.have.all.keys('prop3', 'prop4');
                    expect(alert.details.prop1).to.equal(undefined);
                    expect(alert.details.prop2).to.equal(undefined);
                    expect(alert.tags.length).to.equal(2);
                    expect(alert.tags[0]).to.equal("tag3");
                    expect(alert.tags[1]).to.equal("tag4");
                    expect(alert.owner).to.equal("user1@opsgenie.com");
                    callback(null, 'done');
                });
            }
        ], function (err, result) {
            expect(err).equal(null);
            if (result === "done") {
                done();
            }
        });
    });

    it('renotify', function (done) {

        var create_alert_json = {
            "message": "renotify test alert",
            "recipients": "user1@opsgenie.com, team1"
        };

        opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
            expect(error).equal(null);

            var renotify_json = {
                "id": alertCreateSuccess.alertId,
                "recipients": "user1@opsgenie.com"
            };

            opsgenie.alert.renotify(renotify_json, function (error, renotifySuccess) {
                expect(error).equal(null);
                expect(renotifySuccess.code).to.equal(200);
                done();
            });
        });

    });

    // TODO: snooze and executeAction tests should be written

    /**
     * this test is useful when executed against real service. It cleans up all created alerts
     */
    if (process.env.NOCK_OFF === 'true') {
        it('count, list and delete all alerts created until now', function (done) {
            opsgenie.alert.count({createdAfter: timeInMs * 1000000}, function (error, countAlerts) {
                expect(error).equal(null);
                var alertCount = countAlerts.count;

                opsgenie.alert.list({createdAfter: timeInMs * 1000000}, function (error, listAlerts) {
                    expect(error).equal(null);
                    var alerts = listAlerts.alerts;
                    expect(alerts.length).to.equal(alertCount);

                    var deleteSuccess = function (error, deleteResult) {
                        expect(error).equal(null);
                        expect(deleteResult.code).to.equal(200);
                        doneCount++;

                        if (doneCount === alertCount) {
                            done();
                        }
                    };

                    var doneCount = 0;
                    for (var i = 0; i < alerts.length; i++) {
                        opsgenie.alert.deleteById(alerts[i].id, deleteSuccess);
                    }

                });
            });
        });
    }

    // nock.recorder.rec();
});