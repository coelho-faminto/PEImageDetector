import System;
import System.IO;
// nice hack for vscode: change color syntax to ASP -> <%

package JScriptNETProgram {
    class Program {
        static function getNtOptionalHeaderMagic(arrBytes: Byte[]): Int16 {
            var int_offset_e_lfanew = 0x3C;
            var e_lfanew: Int32 = BitConverter.ToInt32(
                [
                    arrBytes[int_offset_e_lfanew],
                    arrBytes[int_offset_e_lfanew + 1],
                    arrBytes[int_offset_e_lfanew + 2],
                    arrBytes[int_offset_e_lfanew + 3]
                ],
                0
            );

            return BitConverter.ToInt16(
                [
                    arrBytes[e_lfanew + 0x18],
                    arrBytes[e_lfanew + 0x19]
                ],
                0
            );
        }

        static function usage(argc: Int32, argv: System.String[]) {
            if (argc != 2) {
                Console.WriteLine("Usage: PEImageDetector.exe <file>");
                return false;
            }

            if (!File.Exists(argv[1])) {
                Console.WriteLine("File " + argv[1] + " not found.");
                return false;
            }

            return true;
        }

        static function Main(argc: Int32, argv: System.String[]) {
            if (!usage(argc, argv)) return;

            Console.WriteLine('Verifying file "' + argv[1] + '"...');
            
            var arrBytes: Byte[] = File.ReadAllBytes(
                argv[1]
            );

            Console.WriteLine('File has ' + arrBytes.Length + ' bytes.');

            var wordMagic: Int16 = getNtOptionalHeaderMagic(arrBytes);
                
            Console.WriteLine("Magic: " + wordMagic.toString(16));

            switch (wordMagic) {
                case 0x010B:
                    Console.WriteLine("Image is PE32.");
                    break;
                case 0x020B:
                    Console.WriteLine("Image is PE32+/PE64.");
                    break;
                default:
                    Console.WriteLine("Unknown magic.");
                    break;
            }
        }
    }
}

var cmdLine: System.String[] = Environment.GetCommandLineArgs();
JScriptNETProgram.Program.Main(cmdLine.Length, cmdLine);