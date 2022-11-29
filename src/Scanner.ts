import * as ffi from "ffi";
import ref from "ref-napi";
import path from "path"

enum ScanResults {
 "UNDETERMINED",
  "MALWARE",
  "BENIGN",
  "SCAN_ERROR"
}

export class Scanner {
  private fileScanner: any;
  private fileScannerFilePath: string;  

  constructor(fileScannerFolderPath: string) {    
    this.fileScannerFilePath = path.join(fileScannerFolderPath, this.getFileScannerFile());
    this.fileScanner = this.loadFileScanner();
  }

  private loadFileScanner = () => {
    const stringPtr = ref.refType(ref.types.CString);

    return ffi.Library(this.fileScannerFilePath, {
      'ScanFile': ['int', [stringPtr, stringPtr]],
      'GetLibraryVersion': ['int', []]
    });
  }

  private getFileScannerFile(): string {
    let fileScannerFile = "";
    switch(process.platform){
        case "linux": {
          fileScannerFile = "libFakeFileScan.so";
            break;
        }
        case "win32": {
          fileScannerFile = "FakeFilescan.dll";
            break;
        }
        default: {
            throw new Error(`Platform ${process.platform} is not supported!`);
        }
      }
      return fileScannerFile;
    
  }

  public getLibraryVersion(): number{
    return this.fileScanner.GetLibraryVersion();
  }

  public getExpectedLibraryVersion(): number{
    return 1337;
  }

  public scanFile(path: string, sourceUrl: string): string{
    const pathPtr = ref.allocCString(path);
    const sourceUrlPtr = ref.allocCString(sourceUrl);
    return (ScanResults[this.fileScanner.ScanFile(pathPtr, sourceUrlPtr)]);
  }
}

