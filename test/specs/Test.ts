import assert from "assert";
import path from "path";
import { Scanner, TestData } from "../../src/Index";

describe("Testing Suite: File Scanner's ", () => {
    // Arrange
    const testDataFilePath = path.join(process.cwd(), "../fakeFileScan/testdata.txt");
    const testData = new TestData(testDataFilePath);

    const fileScannerFolderPath = path.join(process.cwd(), "../fakeFileScan/");
    const scanner = new Scanner(fileScannerFolderPath);

    describe('Version ', () => {
        it('should be the correct one ', () => {
            // Assert 
            assert.equal(scanner.getLibraryVersion(), scanner.getExpectedLibraryVersion());
        });
    });
    describe('Expected result after scanning ', () => {
        testData.getFormattedData().forEach((testObject) => {
            it(`File #${testObject.testId} with Path: ${testObject.path} should be '${testObject.expectedResult}' `, () => {
                // Act
                testObject.actualResult =  scanner.scanFile(testObject.path, testObject.sourceURL);

                // Assert
                assert.equal(testObject.actualResult, testObject.expectedResult);
            });
        });       
    });
});
