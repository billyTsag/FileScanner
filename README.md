<br />
<div align="center">
  </a>
  <h3 align="center">Fake File Scanner</h3>
  <p align="center">
    Tech Challenge
    <br />
    
  </p>
</div>
<!-- GETTING STARTED -->
### Getting Started

This is a tool that tests the given `.dll` or `.so` scanner and checks whether it works as expected. The tool will choose to use the `.dll` or the `.so` depending on the OS that triggers the runtime.

The tests can be triggered directly through the project or through an API call that the service also provides.

### Prerequisites
You either need:
<h5> Docker</h5>
-   Have Docker installed on your computer set up with Linux or Windows Containers. 
#####

Or:

<h5> Without Docker</h5>
-   Have node & npm installed on your system.
### Installation
1. Clone the repo
    ```sh
    git clone toururu
    ```
###### If you are not using Docker:
2. Install npm Modules
    ```sh
    npm install
    ```

<!-- USAGE EXAMPLES -->
### Runtime using Docker

###### Running the Tests Directly 
1. Run the Project:
    ```sh
    docker-compose up 
    ```
2. After the tests finish you should see the results in the logs. In addition to that, a report json and html file that can be opened from the browser will be created inside: 
    ```sh
    ./reports/FileScanner_TestReport.html
    ```

###### Running the Tests through the Api 
1. First you have to change the command `npm run test` to `npm run start` in the `Dockerfile`.
2. The Api listens by default on port 3018. If you want to change it go to: 
    ```sh
    ./docker-compose-api.yml
    ```
    and change the ports: 
     ```sh
    ports:
            - "3018:3018"
    ```
    You also have to change the port at:
    ```sh
    ./api/config/config.json
    ```
3. Start the Api:
    ```sh
    docker-compose up
    ```

2. The Endpoint that starts the tests is HTTP GET and listens on 
    ```sh
    localhost:3018/api/fileScanner/runTests
    ```

2. The Endpoint will return a response that has the Status of the TestRun which includes the tests and the report.
The following is an example of the response: 
    ```sh
    {
        "status": "Failed",
        "results": [
            {
            "title": "Testing Suite: File Scanner's  Version  should be the correct one ",
            "status": "Passed"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #1 with Path: notavirus.exe should be 'MALWARE' ",
            "status": "Passed"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #2 with Path: C:\\Users\\Administrator\\Downloads\\firefox.exe should be 'MALWARE' ",
            "status": "Passed"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #3 with Path: C:\\Music\\Frankie Goes To Hollywood - Welcome To The Pleasuredome.mp3 should be 'UNDETERMINED' ",
            "status": "Failed",
            "assertionError": "'BENIGN' == 'UNDETERMINED'"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #4 with Path: Mike + The Mechanics - Silent Running.mp3.exe should be 'MALWARE' ",
            "status": "Passed"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #5 with Path: ChromeSetup.exe should be 'BENIGN' ",
            "status": "Failed",
            "assertionError": "'SCAN_ERROR' == 'BENIGN'"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #6 with Path: /home/user/a18063885e58af9eeb47cabfeaa64b52.jpg should be 'BENIGN' ",
            "status": "Passed"
            }
        ],
        "reportPath": "C:\fakefilescan\reports\FileScanner_TestReport.html"
    }
    ```



### Runtime without Docker

###### Running the Tests Directly 
1. Run the Project:
    ```sh
    npm run test
    ```
2. After the tests finish you should see the results in the logs. In addition to that a report json and html file that can be opened from the browser will be created inside: 
    ```sh
    ./reports/FileScanner_TestReport.html
    ```

###### Running the Tests through the Api 
1. The Api listens by default on port 3018. If you want to change it go to: 
    ```sh
    ./api/config/config.json
    ```
2. Start the Api:
    ```sh
    npm run start
    ```

2. The Endpoint that starts the tests is HTTP GET and listens on 
    ```sh
    localhost:3018/api/fileScanner/runTests
    ```

2. The Endpoint will return a response that has the Status of the TestRun which includes the tests and the report.
The following is an example of the response: 
    ```sh
    {
        "status": "Failed",
        "results": [
            {
            "title": "Testing Suite: File Scanner's  Version  should be the correct one ",
            "status": "Passed"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #1 with Path: notavirus.exe should be 'MALWARE' ",
            "status": "Passed"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #2 with Path: C:\\Users\\Administrator\\Downloads\\firefox.exe should be 'MALWARE' ",
            "status": "Passed"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #3 with Path: C:\\Music\\Frankie Goes To Hollywood - Welcome To The Pleasuredome.mp3 should be 'UNDETERMINED' ",
            "status": "Failed",
            "assertionError": "'BENIGN' == 'UNDETERMINED'"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #4 with Path: Mike + The Mechanics - Silent Running.mp3.exe should be 'MALWARE' ",
            "status": "Passed"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #5 with Path: ChromeSetup.exe should be 'BENIGN' ",
            "status": "Failed",
            "assertionError": "'SCAN_ERROR' == 'BENIGN'"
            },
            {
            "title": "Testing Suite: File Scanner's  Expected result after scanning  File #6 with Path: /home/user/a18063885e58af9eeb47cabfeaa64b52.jpg should be 'BENIGN' ",
            "status": "Passed"
            }
        ],
        "reportPath": "C:\fakefilescan\reports\FileScanner_TestReport.html"
    }
    ```

<div align="center">
Enjoy
</div>
<!-- ROADMAP -->