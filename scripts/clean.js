const fs = require("fs");
const path = require("path");

console.log("Cleaning redoc-dist package...");

// Files and directories to remove
const cleanupItems = [
  "redoc.standalone.js",
  "redoc.lib.js", 
  "redoc.browser.lib.js",
  "redoc.standalone.js.map",
  "redoc.lib.js.map",
  "redoc.browser.lib.js.map",
  "redoc.standalone.js.LICENSE.txt",
  "redoc.lib.js.LICENSE.txt",
  "redoc.browser.lib.js.LICENSE.txt",
  "index.html"
];

cleanupItems.forEach(item => {
  const fullPath = path.join(".", item);
  if (fs.existsSync(fullPath)) {
    if (fs.lstatSync(fullPath).isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`Removed directory ${item}`);
    } else {
      fs.unlinkSync(fullPath);
      console.log(`Removed file ${item}`);
    }
  }
});

console.log('Cleaning TypeScript declaration files...');

// TypeScript declaration files
const typeDeclarationFiles = [
  'index.d.ts',
  'getAssetPath.d.ts'
];

typeDeclarationFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed ${file}`);
  } else {
    console.log(`File not found (skipped): ${file}`);
  }
});

console.log("Clean completed!");