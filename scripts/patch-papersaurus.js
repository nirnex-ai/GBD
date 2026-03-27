const fs = require('fs');
const path = require('path');

const target = path.join(
  __dirname,
  '..',
  'node_modules',
  'docusaurus-plugin-papersaurus',
  'lib',
  'generate.js',
);

if (!fs.existsSync(target)) {
  console.log('[patch-papersaurus] target file not found, skipping');
  process.exit(0);
}

let source = fs.readFileSync(target, 'utf8');
const original = source;

source = source.replace(
  /sideBarItem\.unversionedId = doc\.unversionedId\.split\("\/"\)\.pop\(\);/g,
  'sideBarItem.unversionedId = (doc.unversionedId || doc.id || "").split("/").pop();',
);

source = source.replace(
  /let htmlFilePath = htmlDir;\r?\n\s*htmlFilePath = join\(htmlFilePath, 'index\.html'\);/,
  [
    "let htmlFilePath = join(htmlDir, 'index.html');",
    '    if (!fs.existsSync(htmlFilePath)) {',
    '        htmlFilePath = `${htmlDir}.html`;',
    '    }',
  ].join('\n'),
);

if (source === original) {
  console.log('[patch-papersaurus] already patched or unsupported source layout');
  process.exit(0);
}

fs.writeFileSync(target, source, 'utf8');
console.log('[patch-papersaurus] patch applied');
