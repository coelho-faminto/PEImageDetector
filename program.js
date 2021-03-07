import System;
import System.IO;
// nice hack: change color syntax to ASP -> <%

package JScriptNETProgram {
    class Program {
        static function Main() {
            var arrBytes: Byte[] = File.ReadAllBytes("program.js");

            Console.WriteLine(arrBytes.Length);
            Console.WriteLine("Test...");
        }
    }
}

JScriptNETProgram.Program.Main();