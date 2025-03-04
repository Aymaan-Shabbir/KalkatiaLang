/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor"; // ✅ Import Monaco instance
import { KolkataLang } from "../utils/kalkatia"; // Import your interpreter

export default function IDE() {
  const [code, setCode] = useState<string>(`
//print
chakallas("Hello, MamaLog");

//declaration of a variable.
mama x=5;
chakallas(x);

//declaration of an array
mama y = aasteLadees(1,2,3,4,5);
chakallas(y);

//basic looping
mama i = 0;
ayiChakkar(i = 0; i < 5; i++) {
  chakallas("Tumra value: " + i);
}

// basic if else block
mama z = 4;
mamaAgar(z > 5) {
  chakallas("z bada hai");
}
naiTohMama {
  chakallas("z chota h");
}
`);

  const [output, setOutput] = useState<string>("");

  const runCode = () => {
    let logs: string[] = [];
    console.log = (msg: string) => logs.push(msg);

    try {
      eval(KolkataLang.translate(code)); // Translate and execute the code
      setOutput(logs.join("\n"));
    } catch (err) {
      // Extract the line number from the error stack trace
      const stackLines = (err as Error).stack?.split("\n") || [];
      const errorLineMatch = stackLines[1]?.match(/:(\d+):\d+/);
      const errorLine = errorLineMatch ? errorLineMatch[1] : "unknown";

      // error output and line
      setOutput(
        `SiyanaBanro: Error at line ${errorLine}: ${(err as Error).message}`
      );
    }
  };

  return (
    <div className="flex flex-col space-y-4 bg-gray-900 text-white py-3 px-2 rounded-lg shadow-lg  min-w-[80vw]">
      <h1 className="text-2xl font-bold text-center mb-4 text-[#D83F31]">
        ByteYard💻
      </h1>

      <Editor
        height="400px"
        defaultLanguage="kolkatalang"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
        className="border-2 border-yellow-500 rounded-lg"
        beforeMount={(monaco) => {
          // ✅ Register KolkataLang as a new custom language
          monaco.languages.register({ id: "kolkatalang" });

          // ✅ Disable all TypeScript/JavaScript validation errors
          monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true,
          });

          monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true,
            diagnosticCodesToIgnore: [1109], // ✅ Ignore specific error codes
          });

          // ✅ Define basic syntax highlighting (optional)
          monaco.languages.setMonarchTokensProvider("kolkatalang", {
            tokenizer: {
              root: [
                [/\bmama\b/, "keyword"], // Highlight "mama"
                [/\bchakallas\b/, "function"], // Highlight "chakallas"
                [/\bmamaAgar\b/, "keyword"],
                [/\bnaiTohMama\b/, "keyword"],
                [/\baasteLadees\b/, "keyword"],
                [/\b\d+\b/, "number"],
                [/".*?"/, "string"],
              ],
            },
          });
        }}
      />

      <button
        onClick={runCode}
        className="bg-yellow-400 text-black px-3 py-2 rounded-lg text-lg font-bold hover:bg-yellow-500 transition-all duration-200"
      >
        Mama, Click for output.. 🚀
      </button>

      <pre className="bg-gray-800 text-green-300 p-4 rounded-lg min-h-[100px] flex flex-wrap flex-col max-w-[80vw] items-start  overflow-auto">
        {output || "Idhar taako mama"}
      </pre>
    </div>
  );
}
