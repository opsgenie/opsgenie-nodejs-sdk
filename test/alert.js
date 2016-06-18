"use strict";

var expect = require('chai').expect;
var nock = require('nock');
var waterfall = require("async/waterfall");

var opsgenie = require('../');
require('./configure');

/**
 * As this some of these tests contain methods need to be executed in sync way, async lib's waterfall function is used
 * to avoid callback hell problem
 */
describe('ALERT_API_TEST', function () {

    this.timeout(60000);

    // use NOCK_OFF=true mocha -t 60000 for testing against real server
    /*if (process.env.NOCK_OFF !== 'true') {
        require('./mocks/alert');
    } else {

    }*/

    var timeInMs = Date.now();

    it('create and get success', function (done) {

        var create_alert_json = {
            "message": "Test alert1",
            "tags": ["tag1", "tag2"]
        };

        opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
            expect(error).equal(null);

            // TODO: create a method for getById(id, function)
            opsgenie.alert.get({"id": alertCreateSuccess.alertId}, function (error, alert) {
                expect(error).equal(null);
                expect(alert.message).to.contain("Test alert1");
                done();
            });
        });
    });

    it('create and close success', function (done) {

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

    it('create and acknowledge success', function (done) {

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

    it('create, add note, list notes, list alert logs success', function (done) {

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

    //nock.recorder.rec();
});