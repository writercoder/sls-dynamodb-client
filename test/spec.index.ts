import {DynamoDBClient} from "../src/index";

describe("sls-dynamodb-client", () => {
    beforeAll(() => {
        process.env.IS_OFFLINE = "true";
    });

    it("creates a client", (done)=> {
        let factory = new DynamoDBClient()
        try {
            let docClient = factory.getDocumentClient();
            expect(docClient).toBeDefined();
            let client = factory.getClient();
            expect(client).toBeDefined();
            done();
        } catch(ex) {
            done.fail();
        }
    });

    it("passes options", (done) => {
        let factory = new DynamoDBClient()
        let client = factory.getClient({convertEmptyValues: true});
        expect(client).toBeDefined();
        expect(client.config["convertEmptyValues"]).toBeTruthy();
        done();
    });

    it("can override endpoint/region", (done) => {
        let factory = new DynamoDBClient("myregion", "http://localhost:9898/");
        let client = factory.getClient();
        expect(client).toBeDefined();
        expect(client.config["endpoint"]).toEqual("http://localhost:9898/")
        expect(client.config["region"]).toEqual("myregion")
        done();
    })
})