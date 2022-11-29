# Fake File Scanner

Your goal for this task is to write a set of tests that checks the correctness of the supplied mock file scanning library.

Supplied with this task you will find these files:

* `FileScanner.h` - Header for mock file scanning library that contains the API
* `FakeFilescan.dll` - The library itself (Windows)
* `libFakeFileScan.so` - The library itself (Linux)
* `testdata.txt` - Input data for the library and expected results

The library itself exposes two public functions:

* `GetLibraryVersion()` - Returns the current version of the library
* `ScanFile()` - Mock scans a file, from a given path and a URL. Returns an enumeration upon scan completion.

Possible enumeration values are:

0. `UNDETERMINED`
1. `MALWARE`
2. `BENIGN`
3. `SCAN_ERROR`

`FileScanner.h` should be examined for more details.

## Task Overview
1. Load the library in your preferred testing language/framework
1. Call `ScanFile` function with the supplied testing data found in `testdata.txt` 
1. Collect and process the results from `ScanFile` API call
1. Generate a report in your preferred format 

## Bonus Task (not mandatory)

The library has a bug in it and can be crashed. Figure out what crashes it, catch the crash and include it into your report.

## Notes
* Libraries are built for x86-64 architectures of their respective OSes
* If you need OSX version of the library, please contact us
* You may use `GetLibraryVersion()` to check if library was loaded correctly. The expected result for this function is `1337`