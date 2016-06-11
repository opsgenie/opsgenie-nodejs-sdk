"use strict";

var nock = require('nock');

nock('https://api.opsgeni.us:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"Test alert1","tags":["tag1","tag2"],"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":221,"code":200,"alertId":"64196c35-505c-4ca6-a426-ce383036f817","message":"alert created","status":"successful"}, { date: 'Sat, 11 Jun 2016 13:45:46 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=da50c2e887b3097cb62d4ff93801c88731465652745; expires=Sun, 11-Jun-17 13:45:45 GMT; path=/; domain=.opsgeni.us; HttpOnly' ],
        took: '221',
        server: 'cloudflare-nginx',
        'cf-ray': '2b158159c1c1047f-FRA' });

nock('https://api.opsgeni.us:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/')
    .query({"id":"64196c35-505c-4ca6-a426-ce383036f817","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"owner":"","took":17,"acknowledged":false,"teams":[],"count":1,"description":"","source":"144.122.26.157","message":"Test alert1","isSeen":false,"tags":["tag1","tag2"],"createdAt":1465652745859000300,"systemData":{"integrationType":"API","integrationName":"Default API","integrationId":"616f9d46-d46d-475c-ae5a-1d77e866747f"},"recipients":[],"tinyId":"299","alias":"64196c35-505c-4ca6-a426-ce383036f817","details":{},"id":"64196c35-505c-4ca6-a426-ce383036f817","actions":[],"entity":"","updatedAt":1465652746136000300,"status":"open"}, { date: 'Sat, 11 Jun 2016 13:45:47 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d9937e631ab2a66b8656518f4813958e81465652746; expires=Sun, 11-Jun-17 13:45:46 GMT; path=/; domain=.opsgeni.us; HttpOnly' ],
        took: '17',
        server: 'cloudflare-nginx',
        'cf-ray': '2b1581614df20f3f-FRA' });


nock('https://api.opsgeni.us:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"Test3","tags":["tag3"],"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":194,"code":200,"alertId":"67274c50-357a-45f2-95f4-ea40f5084c43","message":"alert created","status":"successful"}, { date: 'Sat, 11 Jun 2016 13:45:48 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d9b1311ca259ac53038837ecf719bd2661465652747; expires=Sun, 11-Jun-17 13:45:47 GMT; path=/; domain=.opsgeni.us; HttpOnly' ],
        took: '194',
        server: 'cloudflare-nginx',
        'cf-ray': '2b1581677e580f3f-FRA' });


nock('https://api.opsgeni.us:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/')
    .query({"id":"67274c50-357a-45f2-95f4-ea40f5084c43","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"owner":"","took":15,"acknowledged":false,"teams":[],"count":1,"description":"","source":"144.122.26.157","message":"Test3","isSeen":false,"tags":["tag3"],"createdAt":1465652748019000300,"systemData":{"integrationType":"API","integrationName":"Default API","integrationId":"616f9d46-d46d-475c-ae5a-1d77e866747f"},"recipients":[],"tinyId":"300","alias":"67274c50-357a-45f2-95f4-ea40f5084c43","details":{},"id":"67274c50-357a-45f2-95f4-ea40f5084c43","actions":[],"entity":"","updatedAt":1465652748285000200,"status":"open"}, { date: 'Sat, 11 Jun 2016 13:45:49 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=dcf11bd6c6d9946bc3af684b8a8be311f1465652748; expires=Sun, 11-Jun-17 13:45:48 GMT; path=/; domain=.opsgeni.us; HttpOnly' ],
        took: '19',
        server: 'cloudflare-nginx',
        'cf-ray': '2b15816dfc3626d8-FRA' });


nock('https://api.opsgeni.us:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/close', {"id":"67274c50-357a-45f2-95f4-ea40f5084c43","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":106,"code":200,"status":"successful"}, { date: 'Sat, 11 Jun 2016 13:45:50 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d8833100c709ae18fca8f3e424f8042f01465652750; expires=Sun, 11-Jun-17 13:45:50 GMT; path=/; domain=.opsgeni.us; HttpOnly' ],
        took: '107',
        server: 'cloudflare-nginx',
        'cf-ray': '2b158179f4662324-FRA' });

nock('https://api.opsgeni.us:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"Acknowledge and list alert notes test","tags":["tag2"],"description":"This is the description of the Acknowledge and list alert notes test","details":{"prop1":"prop1Value","prop2":"prop2Value"},"note":"A Note for testing note listing","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":189,"code":200,"alertId":"0bcd92e2-336f-4059-b870-cc268beebebb","message":"alert created","status":"successful"}, { date: 'Sat, 11 Jun 2016 13:45:51 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d1740932355425283e762e012e9d648be1465652750; expires=Sun, 11-Jun-17 13:45:50 GMT; path=/; domain=.opsgeni.us; HttpOnly' ],
        took: '189',
        server: 'cloudflare-nginx',
        'cf-ray': '2b15817d66a3047f-FRA' });


nock('https://api.opsgeni.us:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/acknowledge', {"id":"0bcd92e2-336f-4059-b870-cc268beebebb","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":70,"code":200,"status":"successful"}, { date: 'Sat, 11 Jun 2016 13:45:52 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=dcb7bdbb12a5ad8c8de7f934f1f6b03b31465652752; expires=Sun, 11-Jun-17 13:45:52 GMT; path=/; domain=.opsgeni.us; HttpOnly' ],
        took: '70',
        server: 'cloudflare-nginx',
        'cf-ray': '2b158187ac8e047f-FRA' });

