@echo off

SET NETDir=C:\Windows\Microsoft.NET\Framework\v2.0.50727

%NETDir%\jsc.exe /target:exe /platform:anycpu /out:PEImageDetector.exe program.js