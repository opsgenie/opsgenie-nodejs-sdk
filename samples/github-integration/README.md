# OpsGenie - GitHub Integration

This is a very simple working script you can use with AWS Lambda and Gateway.

## Aim and Scope

This script creates an alert when an issue opened in your repository.

## Installation

* Add latest version of OpsGenie Node.js SDK to package.json file and execute `npm install opsgenie-sdk` command.
* Select index.js and node_modules folder and compress as ZIP file
* Create Lambda Funtion on AWS Lambda Console
* Upload ZIP file from Code Tab on Lambda Console
* Paste your AWS Gateway endpoint to GitHub Webhook page