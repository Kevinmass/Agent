const fs = require('fs');
const path = require('path');

const md = fs.readFileSync(path.resolve(__dirname, '..', 'WebDesignPatterns', 'DotField', 'DotField.md'), 'utf-8');
console.log('=== File contents (first 300 chars) ===');
console.log(md.substring(0, 300));
console.log('=== jsx blocks found ===');
const matches = [...md.matchAll(/```jsx\n([\s\S]*?)```/g)];
console.log('Count:', matches.length);
matches.forEach((m, i) => {
  console.log('Block ' + i + ' length:', m[1].trim().length);
  console.log('First 80 chars:', m[1].trim().substring(0, 80));
});

console.log('\n=== css blocks found ===');
const cssMatches = [...md.matchAll(/```css\n([\s\S]*?)```/g)];
console.log('Count:', cssMatches.length);
cssMatches.forEach((m, i) => {
  console.log('CSS Block ' + i + ' length:', m[1].trim().length);
  console.log('Content:', m[1].trim().substring(0, 100));
});

console.log('\n=== Looking for "code" section ===');
const codeSection = md.match(/^code\n\n```jsx\n([\s\S]*?)```/m);
console.log('Found:', !!codeSection);