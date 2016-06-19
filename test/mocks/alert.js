"use strict";

var nock = require('nock');

nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"Test alert1","tags":["tag1","tag2"],"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":216,"code":200,"alertId":"9e1cc077-25a7-49f3-84f5-813853015456","message":"alert created","status":"successful"}, { date: 'Sat, 11 Jun 2016 23:04:37 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=d9b99859a36a2e8c0edee6071a6c7329e1465686276; expires=Sun, 11-Jun-17 23:04:36 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '216',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b3fea2b226d8-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/')
    .query({"id":"9e1cc077-25a7-49f3-84f5-813853015456","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"owner":"","took":8,"acknowledged":false,"teams":[],"count":1,"description":"","source":"144.122.108.176","message":"Test alert1","isSeen":false,"tags":["tag1","tag2"],"createdAt":1465686277596000300,"systemData":{"integrationType":"API","integrationName":"Default API","integrationId":"616f9d46-d46d-475c-ae5a-1d77e866747f"},"recipients":[],"tinyId":"321","alias":"9e1cc077-25a7-49f3-84f5-813853015456","details":{},"id":"9e1cc077-25a7-49f3-84f5-813853015456","actions":[],"entity":"","updatedAt":1465686277874000100,"status":"open"}, { date: 'Sat, 11 Jun 2016 23:04:38 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=d28755e661e7985ca12000e1d50953e251465686278; expires=Sun, 11-Jun-17 23:04:38 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '9',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b406508908b7-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"Test3","tags":["tag3"],"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":104,"code":200,"alertId":"2098f33c-4333-45d0-adb3-79d5cb8237ff","message":"alert created","status":"successful"}, { date: 'Sat, 11 Jun 2016 23:04:40 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=d0315b1e6f30ddc660f3f76cd747f096a1465686279; expires=Sun, 11-Jun-17 23:04:39 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '105',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b40c9a86237e-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/')
    .query({"id":"2098f33c-4333-45d0-adb3-79d5cb8237ff","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"owner":"","took":6,"acknowledged":false,"teams":[],"count":1,"description":"","source":"144.122.108.176","message":"Test3","isSeen":false,"tags":["tag3"],"createdAt":1465686279828000300,"systemData":{"integrationType":"API","integrationName":"Default API","integrationId":"616f9d46-d46d-475c-ae5a-1d77e866747f"},"recipients":[],"tinyId":"322","alias":"2098f33c-4333-45d0-adb3-79d5cb8237ff","details":{},"id":"2098f33c-4333-45d0-adb3-79d5cb8237ff","actions":[],"entity":"","updatedAt":1465686279981000200,"status":"open"}, { date: 'Sat, 11 Jun 2016 23:04:40 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=dc8497af4d5d7dc16a4479eb73ed3d6ec1465686280; expires=Sun, 11-Jun-17 23:04:40 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '6',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b413953f15d1-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/close', {"id":"2098f33c-4333-45d0-adb3-79d5cb8237ff","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":58,"code":200,"status":"successful"}, { date: 'Sat, 11 Jun 2016 23:04:41 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=d4831429207bec8794af3117fcf7fc37d1465686280; expires=Sun, 11-Jun-17 23:04:40 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '59',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b4166eeb2792-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"Acknowledge and list alert notes test","tags":["tag2"],"description":"This is the description of the Acknowledge and list alert notes test","details":{"prop1":"prop1Value","prop2":"prop2Value"},"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":82,"code":200,"alertId":"a2309af8-0b66-4fd1-9412-8bedcfa3ffc5","message":"alert created","status":"successful"}, { date: 'Sat, 11 Jun 2016 23:04:41 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=da4c72278db065dee673d2946271799711465686281; expires=Sun, 11-Jun-17 23:04:41 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '82',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b41a3cb815d1-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/acknowledge', {"id":"a2309af8-0b66-4fd1-9412-8bedcfa3ffc5","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":48,"code":200,"status":"successful"}, { date: 'Sat, 11 Jun 2016 23:04:42 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=d8eda875a30a756522562cdd09eaef01a1465686282; expires=Sun, 11-Jun-17 23:04:42 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '48',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b41dfc9a2324-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"create, add note, list notes success","tags":["listTag","logTag"],"description":"This is the description of the create, add note, list notes success test","details":{"importance":"critic","department":"operations"},"note":"A Note for testing note listing","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":96,"code":200,"alertId":"21d9d49c-77cc-4372-b1ad-3abd884f18ab","message":"alert created","status":"successful"}, { date: 'Sat, 11 Jun 2016 23:04:42 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=d40b28f57d6c62ad54fe926631232c2471465686282; expires=Sun, 11-Jun-17 23:04:42 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '96',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b421709e15a1-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/note', {"id":"21d9d49c-77cc-4372-b1ad-3abd884f18ab","note":"custom note","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":35,"code":200,"status":"successful"}, { date: 'Sat, 11 Jun 2016 23:04:43 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=d5c3346edad15f24d388f0082767b50f01465686283; expires=Sun, 11-Jun-17 23:04:43 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '35',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b42536bf26d8-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/note')
    .query({"id":"21d9d49c-77cc-4372-b1ad-3abd884f18ab","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":13,"notes":[{"owner":"System","createdAt":1465686282737,"note":"A Note for testing note listing"},{"owner":"System","createdAt":1465686283263,"note":"custom note"}],"lastKey":"1465686283263000280"}, { date: 'Sat, 11 Jun 2016 23:04:51 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=dfe696ed4f6f6d113b1580dd7006749d61465686283; expires=Sun, 11-Jun-17 23:04:43 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '13',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b42899230f69-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/log')
    .query({"id":"21d9d49c-77cc-4372-b1ad-3abd884f18ab","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":13,"lastKey":"1465686283273_1465686283273000148","logs":[{"logType":"system","owner":"System","createdAt":1465686282667,"log":"Alert created via API[Default API-Create Alert] with tiny id [324] id [21d9d49c-77cc-4372-b1ad-3abd884f18ab]"},{"logType":"comment","owner":"System","createdAt":1465686282746,"log":"Commented via API[Default API-Create Alert]"},{"logType":"comment","owner":"System","createdAt":1465686283273,"log":"Commented via API[Default API-Add Note]"}]}, { date: 'Sat, 11 Jun 2016 23:04:52 GMT',
            'content-type': 'application/json; charset=UTF-8',
            'transfer-encoding': 'chunked',
            connection: 'close',
            'set-cookie': [ '__cfduid=d0d2fe083559023102ad191f88689b4871465686292; expires=Sun, 11-Jun-17 23:04:52 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
            took: '13',
            server: 'cloudflare-nginx',
            'cf-ray': '2b18b45d53450f69-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"Long list of adding test","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":201,"code":200,"alertId":"f6f14723-5340-4f90-aeba-44229dedbb82","message":"alert created","status":"successful"}, { date: 'Sun, 19 Jun 2016 13:33:44 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=dbe483a63e06a0e9280ac2c2fc7e2320e1466343223; expires=Mon, 19-Jun-17 13:33:43 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '201',
        server: 'cloudflare-nginx',
        'cf-ray': '2b575aba881115d7-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/recipient', {"id":"f6f14723-5340-4f90-aeba-44229dedbb82","recipient":"user1@opsgenie.com","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":74,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 13:33:44 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d7bf466826d00651369b9ddb793ffe7801466343224; expires=Mon, 19-Jun-17 13:33:44 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '74',
        server: 'cloudflare-nginx',
        'cf-ray': '2b575ac127202666-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/team', {"id":"f6f14723-5340-4f90-aeba-44229dedbb82","team":"team1","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":84,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 13:33:45 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=dc3e6d1b98e8aaf875243f741103cdeb91466343225; expires=Mon, 19-Jun-17 13:33:45 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '84',
        server: 'cloudflare-nginx',
        'cf-ray': '2b575ac550d12666-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/tags', {"id":"f6f14723-5340-4f90-aeba-44229dedbb82","tags":"tag1, tag2","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":50,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 13:33:46 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=dfa48c12666d4e8b5358eb02b85f0b97d1466343226; expires=Mon, 19-Jun-17 13:33:46 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '50',
        server: 'cloudflare-nginx',
        'cf-ray': '2b575acc4dbb0f45-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/details', {"id":"f6f14723-5340-4f90-aeba-44229dedbb82","details":{"prop1":"val1","prop2":"val2"},"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":50,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 13:33:47 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=dafc1787e37b7decfe03204da5b7686ad1466343227; expires=Mon, 19-Jun-17 13:33:47 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '50',
        server: 'cloudflare-nginx',
        'cf-ray': '2b575ad2dad5270e-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/recipient', {"id":"f6f14723-5340-4f90-aeba-44229dedbb82","details":{"prop1":"val1","prop2":"val2"},"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .query({"id":"f6f14723-5340-4f90-aeba-44229dedbb82","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":27,"groups":{},"users":[{"method":"","state":"notactive","stateChangedAt":1466343224780,"username":"user1@opsgenie.com"}]}, { date: 'Sun, 19 Jun 2016 13:33:47 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=ddf65e563068c2eaf338faf3f1c5347401466343227; expires=Mon, 19-Jun-17 13:33:47 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '27',
        server: 'cloudflare-nginx',
        'cf-ray': '2b575ad5961b2798-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/takeOwnership', {"id":"f6f14723-5340-4f90-aeba-44229dedbb82","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":43,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 13:33:49 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=deae5b9df7e817e39433ae73b200fd55e1466343229; expires=Mon, 19-Jun-17 13:33:49 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '44',
        server: 'cloudflare-nginx',
        'cf-ray': '2b575add621e26b4-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/', {"id":"f6f14723-5340-4f90-aeba-44229dedbb82","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .query({"id":"f6f14723-5340-4f90-aeba-44229dedbb82","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"owner":"System","took":11,"acknowledged":false,"teams":["team1"],"count":1,"description":"","source":"144.122.26.157","message":"Long list of adding test","isSeen":true,"tags":["tag1","tag2"],"createdAt":1466343224033000200,"systemData":{"integrationType":"API","integrationName":"Default API","integrationId":"616f9d46-d46d-475c-ae5a-1d77e866747f"},"recipients":["user1@opsgenie.com"],"tinyId":"380","alias":"f6f14723-5340-4f90-aeba-44229dedbb82","details":{"prop1":"val1","prop2":"val2"},"id":"f6f14723-5340-4f90-aeba-44229dedbb82","actions":[],"entity":"","updatedAt":1466343229132000300,"status":"open"}, { date: 'Sun, 19 Jun 2016 13:33:49 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d8ab501db2a7e3805918fa86bac86fa3c1466343229; expires=Mon, 19-Jun-17 13:33:49 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '11',
        server: 'cloudflare-nginx',
        'cf-ray': '2b575adfc3d015a7-FRA' });
