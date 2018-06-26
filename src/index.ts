import * as AWS from "aws-sdk";

export class DynamoDBClient {
    localRegionName: string;
    localEndpoint: string;
    constructor(localRegionName: string = "localhost", localEndpoint: string = "http://localhost:8000") {

    }

    private static applyEnvironment(options: any = {}): any {
        let responseOptions = { ...options };
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
    static getDocumentClient(options: any = {}): AWS.DynamoDB.DocumentClient {
        return new AWS.DynamoDB.DocumentClient(DynamoDBClient.applyEnvironment(options));
    }

    /**
     * @static getClient
     * @param options AWS.DynamoDB.ClientConfiguration
     * @returns AWS.DynamoDB
     * @memberof DynamoDBClient
     */
    static getClient(options: any = {}): AWS.DynamoDB {
        return new AWS.DynamoDB(DynamoDBClient.applyEnvironment(options));
    }
}