# OpsGenie Node.js SDK

CI Status: [![Build Status](https://travis-ci.com/srhtcn/opsgenie-nodejs-sdk.svg?token=QTDpPBArevfhSpyxWwwz&branch=master)](https://travis-ci.com/srhtcn/opsgenie-nodejs-sdk)

This is the repository for Node.js SDK of OpsGenie. 

## Aim and Scope

OpsGenie Node.js SDK aims to access OpsGenie Web API through HTTP calls from Node.js applications.

OpsGenie Node.js SDK covers:

* Alert API (TODO: only attachFile method is missing)
* User API
* Group API
* Team API
* Escalation API (TODO: will be available soon)
* Schedule API (TODO: will be available soon)
* Schedule Override API (TODO: will be available soon)
* Forwarding Rule API (TODO: will be available soon)
* Heartbeat API (TODO: will be available soon)
* Integration API (TODO: will be available soon)
* Policy API (TODO: will be available soon)

Future releases are subject to be delivered for packing more APIs soon.

## Installation
Node.js version >=0.6.x is required.

`npm install opsgenie-sdk`

## Getting Started

```js
var opsgenie = require('opsgenie-sdk');

opsgenie.configure({
    'api_key': 'd1871497-38bc-4222-9063-32062fc6f2f4'
});
```

```js
opsgenie.alert.get({id: "request_alert_id"}, function (error, alert) {
    if (error) {
        // handle error
    } else {
        console.log("Alert data received", alert);
    }
});
```
