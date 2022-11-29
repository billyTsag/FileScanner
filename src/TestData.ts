import * as fs  from 'fs';

export interface ITestObject {
    testId: number;
    path: string;
    sourceURL: string;
    expectedResult: string;
    actualResult: string;
}

export class TestData {
    testObjects: Array<ITestObject>;
    private testDataFilePath: string;

    constructor(testDataFilePath: string) {
        this.testObjects = [];
        this.testDataFilePath = testDataFilePath;    
        const textData = this.readData();
        this.formatTestData(textData);
    }

    public getFormattedData = (): Array<ITestObject> => {
        return this.testObjects;
    }

    private readData = (): string => {
        return fs.readFileSync(this.testDataFilePath, 'utf8');
    }

    private formatTestData = (data: string): void => {
        const tests = data.split("Test");
        tests.shift();

        tests.forEach((test) => {
            let testObject = {
                testId: parseInt(test[1]),
                path: "",
                sourceURL: "",
                expectedResult: "",
                actualResult: ""
            }

            // Really sorry about the name of the variables, couldn't find something better :)

            const stringFormat1 = test.split("Path:");

            const stringFormat2 = stringFormat1[1].split("\n");

            testObject.path = stringFormat2[0].trim();

            const stringFormat3 = stringFormat2[1].split("Source URL:");

            const stringFormat4 = stringFormat3[1].split("\n");

            testObject.sourceURL = stringFormat4[0].trim();

            const stringFormat5 = stringFormat2[2].split("Expected result:");

            const stringFormat6 = stringFormat5[1].split("\n");

            testObject.expectedResult = stringFormat6[0].trim();

            this.testObjects.push(testObject);
        });
    }
}



