# OpsGenie Node.js SDK

[![npm version](https://badge.fury.io/js/opsgenie-sdk.svg)](https://badge.fury.io/js/opsgenie-sdk)

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
    'api_key': 'your_api_key'
});
```

```js
opsgenie.alert.get({id: "alert_id"}, function (error, alert) {
    if (error) {
        // handle error
    } else {
        console.log("Alert data received", alert);
    }
});
```
