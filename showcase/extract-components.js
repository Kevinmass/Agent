import fs from 'fs';
import path from 'path';

const patternsDir = path.resolve('..', 'WebDesignPatterns');
const componentsDir = path.resolve('src', 'components');

// Ensure components directory exists
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Get all component folders
const folders = fs.readdirSync(patternsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${folders.length} component folders`);

const componentIndex = [];

for (const folder of folders) {
  const mdPath = path.join(patternsDir, folder, `${folder}.md`);
  if (!fs.existsSync(mdPath)) {
    console.log(`  [SKIP] ${folder} — no .md file found`);
    continue;
  }

  const md = fs.readFileSync(mdPath, 'utf-8');
  
  // Extract dependencies
  const depMatch = md.match(/### Dependencies: (.+)/);
  const dependencies = depMatch ? depMatch[1].trim() : '';
  
  // Extract usage example (first ```jsx block after "Usage Example")
  const usageMatch = md.match(/### Usage Example\n```jsx\n([\s\S]*?)```/);
  const usageExample = usageMatch ? usageMatch[1].trim() : '';
  
  // Extract full component source (```jsx block that contains the main component code)
  // Try multiple patterns
  let sourceMatch = md.match(/### Full Component Source\n```jsx\n([\s\S]*?)```/);
  
  // If not found, try the "code" label pattern (shorter format)
  if (!sourceMatch) {
    // Look for the last major ```jsx block (after usage/install)
    const jsxBlocks = [...md.matchAll(/```jsx\n([\s\S]*?)```/g)];
    if (jsxBlocks.length >= 2) {
      // The last one is usually the full source
      sourceMatch = jsxBlocks[jsxBlocks.length - 1];
    } else if (jsxBlocks.length === 1) {
      sourceMatch = jsxBlocks[0];
    }
  }
  
  // Also check for "code" marker format
  if (!sourceMatch) {
    const codeMatch = md.match(/^code\n\n```jsx\n([\s\S]*?)```/m);
    if (codeMatch) {
      sourceMatch = codeMatch;
    }
  }
  
  const source = sourceMatch ? sourceMatch[1].trim() : '';
  
  // Extract CSS (```css block)
  const cssMatch = md.match(/### Component CSS\n```css\n([\s\S]*?)```/);
  const css = cssMatch ? cssMatch[1].trim() : '';
  
  if (!source && !css) {
    console.log(`  [SKIP] ${folder} — no source or CSS found`);
    continue;
  }
  
  // Create component folder
  const compDir = path.join(componentsDir, folder);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }
  
  // Write JSX file
  if (source) {
    fs.writeFileSync(path.join(compDir, `${folder}.jsx`), source, 'utf-8');
    console.log(`  [OK] ${folder} — wrote component JSX (${source.length} chars)`);
  }
  
  // Write CSS file
  if (css) {
    fs.writeFileSync(path.join(compDir, `${folder}.css`), css, 'utf-8');
    console.log(`  [OK] ${folder} — wrote component CSS (${css.length} chars)`);
  }
  
  componentIndex.push({
    name: folder,
    dependencies,
    hasSource: !!source,
    hasCSS: !!css,
    usageExample: usageExample.substring(0, 200) // Truncated for index
  });
}

// Write component index
fs.writeFileSync(
  path.join(componentsDir, 'component-index.json'),
  JSON.stringify(componentIndex, null, 2),
  'utf-8'
);

console.log(`\nDone! Extracted ${componentIndex.length} components`);
console.log(`\nComponent needs these packages:`);
const deps = new Set();
componentIndex.forEach(c => {
  if (c.dependencies) {
    c.dependencies.split(',').map(d => d.trim()).forEach(d => deps.add(d));
  }
});
console.log([...deps].join(', '));