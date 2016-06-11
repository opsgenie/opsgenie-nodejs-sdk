"use strict";

var expect = require('chai').expect;
var nock = require('nock');
var waterfall = require("async/waterfall");

var opsgenie = require('../');
require('./configure');

describe('ALERT_API_TEST', function () {

    // for HTTP Server mocking
    if (process.env.NOCK_OFF !== 'true') {
        require('./mocks/alert');
    }

    var timeInMs = Date.now();

    function increaseTestDoneInterval(self, time, done) {
        self.timeout(time);
        setTimeout(done, time);
    }

    /**
     * covers create, get actions
     */
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

    /**
     * covers create, get and close actions
     */
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

    /**
     * covers create, acknowledge
     */
    it('create and acknowledge success', function (done) {

        var create_alert_json = {
            "message": "Acknowledge and list alert notes test",
            "tags": ["tag2"],
            "description": "This is the description of the Acknowledge and list alert notes test",
            "details": {"prop1": "prop1Value", "prop2": "prop2Value"},
            "note": "A Note for testing note listing"
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

    // nock.recorder.rec();
});