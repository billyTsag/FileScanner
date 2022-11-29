import { TestRunner } from "./TestRunner"

(async () => {
    try {
    const testRunner = new TestRunner();
    await testRunner.runTests();
    } catch (e) {
        console.log(e);
        return e;
    }
})();