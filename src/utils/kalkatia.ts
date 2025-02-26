export class KolkataLang {
  static translate(code: string): string {
    return (
      code
        // Variable declaration
        .replace(/mama\s+(\w+)\s*=\s*(.+);/g, "let $1 = $2;")

        // Print function
        .replace(/chakallas\((.*?)\);/g, "console.log($1);")

        // Function definition (dhabbaji)
        .replace(
          /dhabbaji\s+(\w+)\s*\(([^)]*)\)\s*\{([\s\S]*?)\}/g,
          "function $1($2) { $3 }"
        )

        // If statement
        .replace(/mamaAgar\s*\((.*?)\)\s*\{([\s\S]*?)\}/g, "if ($1) { $2 }")

        // Else statement
        .replace(/naiTohMama\s*\{([\s\S]*?)\}/g, "else { $1 }")

        // For loop (ayiChakkar)
        .replace(
          /ayiChakkar\s*\(\s*(?:mama\s+)?(\w+\s*=\s*.+);(.*?);(.*?)\)\s*\{/g,
          "for ($1; $2; $3) {"
        )

        // Break statement
        .replace(/dharlis\(\);/g, "break;")

        // Array declaration
        .replace(/aasteLadees\((.*?)\);/g, "[$1];")

        // Logical operators (aar as &&, ya as ||)
        .replace(/aar/g, "&&")
        .replace(/ya/g, "||")

        // Return statement (khuljao)
        .replace(/khuljao\((.*?)\);/g, "return $1;")

        // Switch-case (jaundice)
        .replace(/jaundice\s*\((.*?)\)\s*\{([\s\S]*?)\}/g, "switch ($1) { $2 }")
        .replace(/case\s+(\d+):/g, "case $1:")
        .replace(/default:/g, "default:")
    );
  }
}
