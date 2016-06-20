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
    .reply(200, {"took":82,"code":200,"alertId":"cf74a7af-5c88-4e78-a36e-572e62465c7e","message":"alert created","status":"successful"}, { date: 'Sun, 19 Jun 2016 17:13:41 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=dc934ffda16f40b72e89dad2fff6f0b3e1466356420; expires=Mon, 19-Jun-17 17:13:40 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '82',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589cecc01215d7-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/recipient', {"id":"cf74a7af-5c88-4e78-a36e-572e62465c7e","recipient":"user1@opsgenie.com","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":44,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 17:13:41 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d4b6baeec19f575a3dd348e8f798999e21466356421; expires=Mon, 19-Jun-17 17:13:41 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '44',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589cf32f4015d7-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/team', {"id":"cf74a7af-5c88-4e78-a36e-572e62465c7e","team":"team1","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":62,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 17:13:43 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d7c417365e94a1dbb960ee9f39b03a06e1466356423; expires=Mon, 19-Jun-17 17:13:43 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '62',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589cfc54d52354-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/tags', {"id":"cf74a7af-5c88-4e78-a36e-572e62465c7e","tags":"tag1, tag2","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":81,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 17:14:03 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d4547690aa7227c5256d5ee6c1addb0291466356443; expires=Mon, 19-Jun-17 17:14:03 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '81',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d79dc2e15a7-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/details', {"id":"cf74a7af-5c88-4e78-a36e-572e62465c7e","details":{"prop1":"val1","prop2":"val2"},"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":63,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 17:14:03 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=de7d027368cf9ceb47c8a798c3cbbac601466356443; expires=Mon, 19-Jun-17 17:14:03 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '63',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d7ce4e02768-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/recipient')
    .query({"id":"cf74a7af-5c88-4e78-a36e-572e62465c7e","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":17,"groups":{},"users":[{"method":"","state":"notactive","stateChangedAt":1466356421867,"username":"user1@opsgenie.com"}]}, { date: 'Sun, 19 Jun 2016 17:14:04 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d556a12830808e7a614c6b53d31eb37fa1466356444; expires=Mon, 19-Jun-17 17:14:04 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '17',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d7f619f2354-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/takeOwnership', {"id":"cf74a7af-5c88-4e78-a36e-572e62465c7e","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":45,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 17:14:04 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d1300197333e03e687bce4a77089ca5f51466356444; expires=Mon, 19-Jun-17 17:14:04 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '45',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d818dd426de-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/')
    .query({"id":"cf74a7af-5c88-4e78-a36e-572e62465c7e","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"owner":"System","took":9,"acknowledged":false,"teams":["team1"],"count":1,"description":"","source":"144.122.26.157","message":"Long list of adding test","isSeen":true,"tags":["tag1","tag2"],"createdAt":1466356421227000300,"systemData":{"integrationType":"API","integrationName":"Default API","integrationId":"616f9d46-d46d-475c-ae5a-1d77e866747f"},"recipients":["user1@opsgenie.com"],"tinyId":"435","alias":"cf74a7af-5c88-4e78-a36e-572e62465c7e","details":{"prop1":"val1","prop2":"val2"},"id":"cf74a7af-5c88-4e78-a36e-572e62465c7e","actions":[],"entity":"","updatedAt":1466356444512000300,"status":"open"}, { date: 'Sun, 19 Jun 2016 17:14:04 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d8a234e7dc356f16e06f74012fa9a806d1466356444; expires=Mon, 19-Jun-17 17:14:04 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '10',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d83d1322798-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"remove tags details and assign testing","tags":["tag1","tag2","tag3","tag4"],"description":"This is the description of the remove test","details":{"prop1":"val1","prop2":"val2","prop3":"val3","prop4":"val4"},"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":73,"code":200,"alertId":"3ebaba07-9266-4c8f-a1fc-32e21265afc1","message":"alert created","status":"successful"}, { date: 'Sun, 19 Jun 2016 17:14:05 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d0783a071dab67e077602ad42fd02d7fb1466356445; expires=Mon, 19-Jun-17 17:14:05 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '73',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d85ed5726de-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .delete('/v1/json/alert/tags')
    .query({"id":"3ebaba07-9266-4c8f-a1fc-32e21265afc1","tags":["tag1", "tag2"],"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":52,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 17:14:05 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d84dffea1a0802c7fd87b8164aeb5c7c21466356445; expires=Mon, 19-Jun-17 17:14:05 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '52',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d8885970f45-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .delete('/v1/json/alert/details')
    .query({"id":"3ebaba07-9266-4c8f-a1fc-32e21265afc1","keys":["prop1","prop2"],"apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":103,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 17:14:06 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=ddc3489a2cc848fac5267b4eb8316f4d61466356446; expires=Mon, 19-Jun-17 17:14:06 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '103',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d8b8973232a-FRA' });

nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/assign', {"id":"3ebaba07-9266-4c8f-a1fc-32e21265afc1","owner":"user1@opsgenie.com","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":119,"code":200,"status":"successful"}, { date: 'Sun, 19 Jun 2016 17:14:07 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=de3690a88a4401f5c0b6b068f166e23701466356446; expires=Mon, 19-Jun-17 17:14:06 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '120',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d8ea8f42768-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .get('/v1/json/alert/')
    .query({"id":"3ebaba07-9266-4c8f-a1fc-32e21265afc1","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"owner":"user1@opsgenie.com","took":7,"acknowledged":false,"teams":[],"count":1,"description":"This is the description of the remove test","source":"144.122.26.157","message":"remove tags details and assign testing","isSeen":false,"tags":["tag3","tag4"],"createdAt":1466356445208000300,"systemData":{"integrationType":"API","integrationName":"Default API","integrationId":"616f9d46-d46d-475c-ae5a-1d77e866747f"},"recipients":["user1@opsgenie.com"],"tinyId":"436","alias":"3ebaba07-9266-4c8f-a1fc-32e21265afc1","details":{"prop3":"val3","prop4":"val4"},"id":"3ebaba07-9266-4c8f-a1fc-32e21265afc1","actions":[],"entity":"","updatedAt":1466356447105000400,"status":"open"}, { date: 'Sun, 19 Jun 2016 17:14:08 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d8f7153bd5069579a8a0ae934b2eb3ae91466356447; expires=Mon, 19-Jun-17 17:14:07 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '7',
        server: 'cloudflare-nginx',
        'cf-ray': '2b589d9504002798-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/', {"message":"renotify test alert","recipients":"user1@opsgenie.com, team1","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":145,"code":200,"alertId":"503a8dc2-1c29-4850-b442-fd5f4aca0b15","message":"alert created","status":"successful"}, { date: 'Mon, 20 Jun 2016 20:58:03 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=d8c10a95a3782c04a587db8ea1870250a1466456282; expires=Tue, 20-Jun-17 20:58:02 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '146',
        server: 'cloudflare-nginx',
        'cf-ray': '2b6222f686602798-FRA' });


nock('https://api.***REMOVED***:443', {"encodedQueryParams":true})
    .post('/v1/json/alert/renotify', {"id":"503a8dc2-1c29-4850-b442-fd5f4aca0b15","recipients":"user1@opsgenie.com","apiKey":"91e58022-8be4-4590-a4f0-0d4030bd9b0d"})
    .reply(200, {"took":37,"code":200,"status":"successful"}, { date: 'Mon, 20 Jun 2016 20:58:05 GMT',
        'content-type': 'application/json; charset=UTF-8',
        'transfer-encoding': 'chunked',
        connection: 'close',
        'set-cookie': [ '__cfduid=dfd7380ec48dfeddbee324d141356c6a61466456284; expires=Tue, 20-Jun-17 20:58:04 GMT; path=/; domain=.***REMOVED***; HttpOnly' ],
        took: '37',
        server: 'cloudflare-nginx',
        'cf-ray': '2b622303dd35270e-FRA' });

