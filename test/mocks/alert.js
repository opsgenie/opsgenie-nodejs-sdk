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

