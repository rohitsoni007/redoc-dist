const fs = require("fs");
const path = require("path");

console.log("Building redoc-dist package...");

// Copy redoc bundles to root directory
const bundlesSource = path.join("node_modules", "redoc", "bundles");
const bundles = [
  "redoc.standalone.js",
  "redoc.lib.js",
  "redoc.browser.lib.js",
  "redoc.standalone.js.map",
  "redoc.lib.js.map",
  "redoc.browser.lib.js.map",
  "redoc.standalone.js.LICENSE.txt",
  "redoc.lib.js.LICENSE.txt",
  "redoc.browser.lib.js.LICENSE.txt",
];

bundles.forEach((bundle) => {
  const source = path.join(bundlesSource, bundle);
  const dest = path.join(".", bundle);

  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log(`Copied ${bundle}`);
  } else {
    console.warn(`Warning: ${source} not found`);
  }
});

// Generate HTML examples
function generateHTMLExamples() {
  console.log("Generating index.html...");

  // HTML example using local redoc-dist files instead of CDN
  const indexHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>Redoc</title>
    <!-- needed for adaptive design -->
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <redoc spec-url='https://redocly.github.io/redoc/museum.yaml'></redoc>
    <script src="./redoc.standalone.js"></script>
  </body>
</html>`;

  fs.writeFileSync(path.join(".", "index.html"), indexHTML);
  console.log("Generated index.html");
}

generateHTMLExamples();


// Generate TypeScript types
const { execSync } = require('child_process');
try {
  execSync('tsc --emitDeclarationOnly', { stdio: 'inherit' });
  console.log('TypeScript types generated successfully!');
} catch (error) {
  console.error('Failed to generate TypeScript types:', error instanceof Error ? error.message : String(error));
}

console.log("Build completed!");
