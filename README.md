# PEImageDetector

Program in JScript.NET to detect if a PE Image is compiled for 32 or 64 bit CPU.

ToDo:

+ verify if image is valid PE (MZ AND PE at first 2 bytes of both DOS and Nt headers);
+ verify if length of array is big enough to access 0x3C + offsets.