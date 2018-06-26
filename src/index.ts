import * as AWS from "aws-sdk";

const DEFAULT_REGION: string = "localhost";
const DEFAULT_ENDPOINT: string = "http://localhost:8000";

export class DynamoDBClient {
    localRegion: string;
    localEndpoint: string;

    constructor(localRegion: string = DEFAULT_REGION, localEndpoint: string = DEFAULT_ENDPOINT) {
        this.localEndpoint = localEndpoint;
        this.localRegion = localRegion;
    }

    private applyEnvironment(options: any = {}): any {
        let responseOptions = { ...options };
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
    getDocumentClient(options: any = {}): AWS.DynamoDB.DocumentClient {
        return new AWS.DynamoDB.DocumentClient(this.applyEnvironment(options));
    }

    /**
     * @static getClient
     * @param options AWS.DynamoDB.ClientConfiguration
     * @returns AWS.DynamoDB
     * @memberof DynamoDBClient
     */
    getClient(options: any = {}): AWS.DynamoDB {
        return new AWS.DynamoDB(this.applyEnvironment(options));
    }
}