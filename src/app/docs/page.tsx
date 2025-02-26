import Link from "next/link";

export default function docs() {
  const sections = [
    {
      title: "Variable Declaration",
      description:
        "In KPL, variables are declared using the keyword 'mama' followed by the variable name.",
      example: "mama x = 5;\nchakallas(x);",
    },
    {
      title: "Array Declaration",
      description:
        "Arrays are declared using 'aasteLadees'. This is how you declare an array with multiple values.",
      example: "mama y = aasteLadees(1, 2, 3, 4, 5);\nchakallas(y);",
    },
    {
      title: "Print Statement",
      description: "To print values to the console, use 'chakallas'.",
      example: 'chakallas("Hello, MamaLog");',
    },
    {
      title: "Basic Loop (For Loop)",
      description:
        "KPL provides a loop structure using 'ayiChakkar'. The loop consists of variable assignment, condition, and increment/decrement operation.",
      example:
        'mama i = 0;\nayiChakkar(i = 0; i < 5; i++) {\nchakallas("Tumra value: " + i);\n}',
    },
    {
      title: "If-Else Block",
      description:
        "KPL has a straightforward if-else block, where 'mamaAgar' represents the if condition and 'naiTohMama' represents the else.",
      example:
        'mama z = 4;\nmamaAgar(z > 5) {\nchakallas("z bada hai");\n}\nnaiTohMama {\nchakallas("z chota h");\n}',
    },

    {
      title: "Function Definition",
      description:
        "In KPL, functions are defined using 'dhabbaji'. The function definition starts with 'dhabbaji', followed by the function name and parameters.",
      example:
        "dhabbaji add(a, b) {\nkhuljao(a + b);\n}\nmama result = add(5, 10);\nchakallas(result);",
    },
    {
      title: "Logical Operators",
      description: "KPL uses 'aar' for logical AND and 'ya' for logical OR.",
      example:
        'mama x = 5;\nmama y = 10;\nmamaAgar(x > 3 aar y < 20) {\nchakallas("Both conditions are true");\n}\nnaiTohMama {\nchakallas("One or both conditions are false");\n}',
    },
    {
      title: "Switch-Case (BahutChaap)",
      description: "For switch-case functionality, we use 'bahutChaap'.",
      example:
        'mama day = 2;\nbahutChaap(day) {\ncase 1:\nchakallas("Monday");\nbreak;\ncase 2:\nchakallas("Tuesday");\nbreak;\ndefault:\nchakallas("Invalid day");\n}',
    },
    {
      title: "Return (khuljao)",
      description: "For returning values, we use 'khuljao'.",
      example:
        "dhabbaji add(a, b) {\nkhuljao(a + b);\n}\nmama result = add(5, 10);\nchakallas(result);",
    },
    {
      title: "A walkthrough example",
      description: "BubbleSort Algo",
      example: `
    // Bubble Sort in KolkataLang
    dhabbaji bubbleSort(arr) {
      mama n = arr.length;
      mama i = 0; // Declare 'i' outside the loop
      mama j = 0; // Declare 'j' outside the loop
      ayiChakkar(i = 0; i < n - 1; i++) { // Initialize 'i' without redeclaring
        ayiChakkar(j = 0; j < n - i - 1; j++) { // Initialize 'j' without redeclaring
          mamaAgar(arr[j] > arr[j + 1]) {
            // Swap elements
            mama temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      khuljao(arr); // Return the sorted array
    }

    // Test the bubbleSort function
    mama arr = aasteLadees(64, 34, 25, 12, 22, 11, 90); // Create an array
    chakallas("Unsorted array:");
    chakallas(arr);

    mama sortedArr = bubbleSort(arr); // Sort the array
    chakallas("Sorted array:");
    chakallas(sortedArr);
  `,
    },
  ];

  return (
    <div className="py-6 px-3 bg-gray-[#A0153E]  min-h-screen mt-20 w-full">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#D83F31]">
        Kalkatia Programming Language Documentation
      </h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-yellow-300">
              {section.title}
            </h2>
            <p className="text-gray-300 mt-2">{section.description}</p>
            <pre className="bg-gray-700 p-3 rounded-md mt-2 text-green-300 overflow-x-auto">
              {section.example}
            </pre>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/byteyard"
          className="text-[#EE9322] hover:underline text-2xl p-3 border rounded-lg bg-[#219C90] font-bold mb-6 border-[#EE9322] hover:bg-[#EE9322] hover:text-[#219C90]"
        >
          LAUNCH BYTEYARD
        </Link>
      </div>
    </div>
  );
}
