{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  // Example:
  "Print to console": {
    "scope": "javascript,typescript",
    "prefix": "cl",
    "body": ["console.log($1)"],
    "description": "Log output to console"
  },
  "Arrow function": {
    "scope": "javascript,typescript",
    "prefix": "af",
    "body": ["const $1 = ($2)=>{ $3}"],
    "description": "generate arrow function skeleton"
  },
  "Anonymous arrow function": {
    "scope": "javascript,typescript",
    "prefix": "aaf",
    "body": ["($2)=>{ $3}"],
    "description": "generate Anonymous arrow function skeleton"
  },
  "Regular function": {
    "scope": "javascript,typescript",
    "prefix": "fun",
    "body": ["function $1($2){$3}"],
    "description": "generate regular function skeleton"
  },
  "Imports line": {
    "scope": "javascript,typescript",
    "prefix": "impline",
    "body": ["// ===== Imports ===== $1 // ===== Imports ====="],
    "description": "Imports line for convenience/ partition"
  },
  "Prettier-ignore": {
    "scope": "javascript,typescript",
    "prefix": "pi",
    "body": ["// prettier-ignore"],
    "description": "Adds comment block for prettier ignore"
  }
}
