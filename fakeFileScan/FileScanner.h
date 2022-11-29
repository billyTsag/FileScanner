#ifndef FILESCANNER_H
#define FILESCANNER_H

#ifdef __cplusplus
extern "C" {
#endif

#ifdef WIN32
    #define API_EXPORT __attribute__((dllexport))
#else
    #define API_EXPORT __attribute__((visibility("default")))
#endif

typedef enum
{
    UNDETERMINED,
    MALWARE,
    BENIGN,
    SCAN_ERROR
} ScanResult_t;

int API_EXPORT GetLibraryVersion();
ScanResult_t API_EXPORT ScanFile(const char* filePath, const char* sourceUrl);

#ifdef __cplusplus
}
#endif

#endif