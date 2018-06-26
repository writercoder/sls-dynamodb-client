"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const DEFAULT_REGION = "localhost";
const DEFAULT_ENDPOINT = "http://localhost:8000";
class DynamoDBClient {
    constructor(localRegion = DEFAULT_REGION, localEndpoint = DEFAULT_ENDPOINT) {
        this.localEndpoint = localEndpoint;
        this.localRegion = localRegion;
    }
    applyEnvironment(options = {}) {
        let responseOptions = Object.assign({}, options);
        if (process.env.IS_OFFLINE) {
            responseOptions.region = this.localRegion;
            responseOptions.endpoint = this.localEndpoint;
        }
        return responseOptions;
    }
    /**
     * @static getDocumentClient
     * @param options AWS.DynamoDB.DocumentClient.DocumentClientOptions & ServiceConfigurationOptions & AWS.DynamoDB.ClientApiVersions
     * @returns AWS.DynamoDB.DocumentClient
     * @memberof DynamoDBClient
     */
    getDocumentClient(options = {}) {
        return new AWS.DynamoDB.DocumentClient(this.applyEnvironment(options));
    }
    /**
     * @static getClient
     * @param options AWS.DynamoDB.ClientConfiguration
     * @returns AWS.DynamoDB
     * @memberof DynamoDBClient
     */
    getClient(options = {}) {
        return new AWS.DynamoDB(this.applyEnvironment(options));
    }
}
exports.DynamoDBClient = DynamoDBClient;
