sls-dynamodb-client
=================================

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

A module to make dynamodb client creation environment agnostic.

* Use the same DynamoDB client code for local development and on AWS Lambda.
* Pass options to DynamoDB or DocumentClient
* Use a custom endpoint for dynamodb-local

## Dependencies

*  [serverless-offline](https://github.com/dherault/serverless-offline) - Required to detect offline/online status
*  [serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local) - Required to run dynamodb locally during development

## Installation

`npm install --save @kartikrao/sls-dynamodb-client`

## Usage

```
const ddb = require('sls-dynamodb-client')();

// Get a DocumentClient - AWS.DynamoDB.DocumentClient()
let docClient = ddb.getDocumentClient();

// Get the low level client - AWS.DynamoDB()
let dynamodb = ddb.getClient();

```

## Custom local endpoint
```
const ddb = require('sls-dynamodb-client')("customregion", "http://customhost:customport/");

// DocumentClient requests will go to "customhost:customport"
let docClient = ddb.getDocumentClient();

// DynamoDB client requests will go to "customhost:customport"
let dynamodb = ddb.getClient();
```

## Passing Options
```
const ddb = require('sls-dynamodb-client')("customregion", "http://customhost:customport/");
let options = {"convertEmptyValues": true};
let docClient = ddb.getDocumentClient(options);
```

## References
* [Dynamodb Documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html)
