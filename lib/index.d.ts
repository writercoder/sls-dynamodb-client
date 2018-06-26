import * as AWS from "aws-sdk";
export declare class DynamoDBClient {
    localRegion: string;
    localEndpoint: string;
    constructor(localRegion?: string, localEndpoint?: string);
    private applyEnvironment;
    /**
     * @static getDocumentClient
     * @param options AWS.DynamoDB.DocumentClient.DocumentClientOptions & ServiceConfigurationOptions & AWS.DynamoDB.ClientApiVersions
     * @returns AWS.DynamoDB.DocumentClient
     * @memberof DynamoDBClient
     */
    getDocumentClient(options?: any): AWS.DynamoDB.DocumentClient;
    /**
     * @static getClient
     * @param options AWS.DynamoDB.ClientConfiguration
     * @returns AWS.DynamoDB
     * @memberof DynamoDBClient
     */
    getClient(options?: any): AWS.DynamoDB;
}
