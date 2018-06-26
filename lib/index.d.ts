import * as AWS from "aws-sdk";
export declare class DynamoDBClient {
    localRegionName: string;
    localEndpoint: string;
    constructor(localRegionName?: string, localEndpoint?: string);
    private static applyEnvironment;
    /**
     * @static getDocumentClient
     * @param options AWS.DynamoDB.DocumentClient.DocumentClientOptions & ServiceConfigurationOptions & AWS.DynamoDB.ClientApiVersions
     * @returns AWS.DynamoDB.DocumentClient
     * @memberof DynamoDBClient
     */
    static getDocumentClient(options?: any): AWS.DynamoDB.DocumentClient;
    /**
     * @static getClient
     * @param options AWS.DynamoDB.ClientConfiguration
     * @returns AWS.DynamoDB
     * @memberof DynamoDBClient
     */
    static getClient(options?: any): AWS.DynamoDB;
}
