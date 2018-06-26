"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=./index.js.map
require('source-map-support').install();
const AWS = require("aws-sdk");
class DynamoDBClient {
    constructor(localRegionName = "localhost", localEndpoint = "http://localhost:8000") {
    }
    static applyEnvironment(options = {}) {
        let responseOptions = Object.assign({}, options);
        if (process.env.IS_OFFLINE) {
            responseOptions.region = "localhost";
            responseOptions.endpoint = "http://localhost:8000";
        }
        return responseOptions;
    }
    /**
     * @static getDocumentClient
     * @param options AWS.DynamoDB.DocumentClient.DocumentClientOptions & ServiceConfigurationOptions & AWS.DynamoDB.ClientApiVersions
     * @returns AWS.DynamoDB.DocumentClient
     * @memberof DynamoDBClient
     */
    static getDocumentClient(options = {}) {
        return new AWS.DynamoDB.DocumentClient(DynamoDBClient.applyEnvironment(options));
    }
    /**
     * @static getClient
     * @param options AWS.DynamoDB.ClientConfiguration
     * @returns AWS.DynamoDB
     * @memberof DynamoDBClient
     */
    static getClient(options = {}) {
        return new AWS.DynamoDB(DynamoDBClient.applyEnvironment(options));
    }
}
exports.DynamoDBClient = DynamoDBClient;
