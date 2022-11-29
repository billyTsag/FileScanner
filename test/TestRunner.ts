import Mocha from "mocha";
import path from "path";

export interface ITestResult {
    title: string;
    status: string;
    assertionError?: string;
}

export interface ITestRun {
    status: "Failed" | "Passed";
    reportPath: string;
    results: Array<ITestResult>;
}

export class TestRunner {
    private runner: Mocha;
    private testRun: ITestRun;

    constructor() {
        this.testRun = {status: "Passed", results: [], reportPath: path.resolve(process.cwd(), "../reports/FileScanner_TestReport.html")};
        this.runner = new Mocha({
            reporter: 'mochawesome',
            reporterOptions: {
                reportFilename: "FileScanner_TestReport",
                quiet: true,
                reportDir: path.join(process.cwd(), "../reports"),
                html: true,
                json: true,
                overwrite: true,
                charts: true
            },
            timeout: 10000,
        });
    }

    private addTestFiles(): void {
        this.runner.addFile(path.join(process.cwd(),'./test/specs/Test.js'));
    }

    public runTests(): Promise<ITestRun> {
        this.addTestFiles();
        console.log('Tests have started!');
        return new Promise((resolve,reject) => {
            this.runner.run()
            .on('pass', async (test) => {
                this.testRun.results.push({title: test.fullTitle(), status: "Passed"});
            })
            .on('fail', async (test, err) => {
                if (this.testRun.status === "Passed") this.testRun.status = "Failed"
                this.testRun.results.push({title: test.fullTitle(), status: "Failed", assertionError: test.err.message});
            })
            .on('end',  async () => {
                console.log('Tests have finished!');
                resolve(this.testRun);
            });
         });
    }
}