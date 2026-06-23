const fs = require('fs');
const path = require('path');

const md = fs.readFileSync(path.resolve(__dirname, '..', 'WebDesignPatterns', 'BounceCards', 'BounceCards.md'), 'utf-8');
// Check for backtick patterns - raw bytes
console.log('Has triple backticks with jsx:', md.includes('```jsx'));
console.log('Has triple backticks with css:', md.includes('```css'));

// Check for special Unicode chars
const lines = md.split('\n');
for (let i = 0; i < Math.min(lines.length, 15); i++) {
  const line = lines[i];
  const hex = Buffer.from(line).toString('hex');
  console.log('Line ' + i + ' (' + line.length + ' chars): ' + line.substring(0, 80));
}

// Check what code block markers look like
const tripleTickMatch = md.match(/(?:`{3,})/);
if (tripleTickMatch) {
  console.log('Found backtick at position ' + tripleTickMatch.index + ': ' + JSON.stringify(tripleTickMatch[0]));
} else {
  console.log('No triple backtick found at all!');
  
  // Check for any special markers
  console.log('Looking for individual backticks:');
  const singleTicks = md.match(/`/g);
  console.log('Single backtick count:', singleTicks ? singleTicks.length : 0);
  if (singleTicks) {
    for (let i = 0; i < Math.min(singleTicks.length, 10); i++) {
      const idx = md.indexOf('`');
      console.log('Backtick at index ' + idx + ', context: ' + JSON.stringify(md.substring(Math.max(0, idx - 5), idx + 20)));
    }
  }
}