import { TestRunner } from "../../test/TestRunner";

export async function runTests(req, res) {
    try {
        const testRunner = new TestRunner();
        const testRun = await testRunner.runTests();
        res.json(testRun);
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Something went wrong!" });
    }
}