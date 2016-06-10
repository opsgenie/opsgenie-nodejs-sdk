"use strict";

var chai = require('chai'),
    expect = chai.expect;

var nock = require('nock');

var opsgenie = require('../');
require('./configure');

describe('ALERT_API_TEST', function () {

    // TODO: for mocking HTTP Server

    //if (process.env.NOCK_OFF !== 'true') {
    //    require('./mocks/invoice');
    //}

    var timeInMs = Date.now();
    var alerts = [];

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
                alerts.push(alert);
                done();
            });
        });
    });

    it('create and list success', function (done) {
        var create_alert_json = {
            "message": "Test2",
            "tags": ["tag2"]
        };
        opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
            expect(error).equal(null);
            expect(alertCreateSuccess.httpStatusCode).to.equal(200);

            opsgenie.alert.get({"id": alertCreateSuccess.alertId}, function (error, alert) {
                expect(error).equal(null);
                expect(alert.message).to.contain("Test2");
                alerts.push(alert);
                done();
            });
        });
    });

    it('create and close success', function (done) {
        var create_alert_json = {
            "message": "Test3",
            "tags": ["tag3"]
        };
        opsgenie.alert.create(create_alert_json, function (error, alertCreateSuccess) {
            expect(error).equal(null);
            expect(alertCreateSuccess.httpStatusCode).to.equal(200);

            opsgenie.alert.get({"id": alertCreateSuccess.alertId}, function (error, alert) {
                expect(error).equal(null);
                expect(alert.message).to.contain("Test3");
                alerts.push(alert);

                opsgenie.alert.close({"id": alert.id}, function (error, closeResult) {
                    expect(error).equal(null);
                    expect(closeResult.httpStatusCode).to.equal(200);
                    done();
                });
            });
        });
    });

    it('list and delete all created alerts', function (done) {
        opsgenie.alert.list({createdAfter: timeInMs * 1000000}, function (error, listAlerts) {
            expect(error).equal(null);
            expect(listAlerts.alerts.length).to.equal(alerts.length);

            var deleteSuccess = function (error, deleteResult) {
                expect(error).equal(null);
                expect(deleteResult.code).to.equal(200);
                doneCount++;

                if (doneCount === alertsLength) {
                    done();
                }
            };
            
            var doneCount = 0;
            var alertsLength = alerts.length;
            for (var i = 0; i < alertsLength; i++) {
                opsgenie.alert.deleteById(alerts[i].id, deleteSuccess);
            }

        });
    });


});