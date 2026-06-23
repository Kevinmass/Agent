const fs = require('fs');
const path = require('path');

const patternsDir = path.resolve(__dirname, '..', 'WebDesignPatterns');
const componentsDir = path.resolve(__dirname, 'src', 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const folders = fs.readdirSync(patternsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log('Found ' + folders.length + ' component folders');

const componentIndex = [];

for (const folder of folders) {
  const mdPath = path.join(patternsDir, folder, folder + '.md');
  if (!fs.existsSync(mdPath)) {
    console.log('  [SKIP] ' + folder + ' — no .md');
    continue;
  }

  const md = fs.readFileSync(mdPath, 'utf-8');
  
  // Dependencies
  const depMatch = md.match(/### Dependencies:\s*(.+)/);
  const dependencies = depMatch ? depMatch[1].trim() : '';
  
  // Usage example - find the first ```jsx block that's NOT the full component
  // Approach: look for "Usage Example" or usage text followed by ```jsx
  let usageExample = '';
  const usageSection = md.match(/Usage Example[\s\S]*?```jsx\n([\s\S]*?)```/);
  if (usageSection) usageExample = usageSection[1].trim();
  
  // Full component source - find a large ```jsx block (usually the biggest one)
  const jsxBlocks = [];
  const jsxRegex = /```jsx\n([\s\S]*?)```/g;
  let block;
  while ((block = jsxRegex.exec(md)) !== null) {
    jsxBlocks.push(block[1].trim());
  }
  
  // Also look for "code" section (for the shorter format like DotField)
  const codeSection = md.match(/^code\n\n```jsx\n([\s\S]*?)```/m);
  if (codeSection) {
    jsxBlocks.push(codeSection[1].trim());
  }
  
  // Pick the largest JSX block as the full component source
  let source = '';
  if (jsxBlocks.length > 0) {
    jsxBlocks.sort((a, b) => b.length - a.length);
    source = jsxBlocks[0];
  }
  
  // CSS - check multiple patterns
  let css = '';
  const cssSection = md.match(/### Component CSS\n```css\n([\s\S]*?)```/);
  if (cssSection) css = cssSection[1].trim();
  
  // Also check for CSS in code sections (shorter format like DotField)
  if (!css) {
    const rawCssBlock = md.match(/CSS\n\n```css\n([\s\S]*?)```/);
    if (rawCssBlock) css = rawCssBlock[1].trim();
  }
  
  if (!source && !css) {
    console.log('  [DEBUG] ' + folder + ' — jsxBlocks found: ' + jsxBlocks.length + ', source length: ' + source.length + ', css: ' + css.length);
    continue;
  }
  
  const compDir = path.join(componentsDir, folder);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }
  
  if (source) {
    fs.writeFileSync(path.join(compDir, folder + '.jsx'), source, 'utf-8');
    console.log('  [OK] ' + folder + ' — wrote JSX (' + source.length + ' chars)');
  }
  
  if (css) {
    fs.writeFileSync(path.join(compDir, folder + '.css'), css, 'utf-8');
    console.log('  [OK] ' + folder + ' — wrote CSS (' + css.length + ' chars)');
  }
  
  componentIndex.push({
    name: folder,
    dependencies,
    hasSource: !!source,
    hasCSS: !!css
  });
}

fs.writeFileSync(
  path.join(componentsDir, 'component-index.json'),
  JSON.stringify(componentIndex, null, 2),
  'utf-8'
);

console.log('\nDone! Extracted ' + componentIndex.length + ' components');