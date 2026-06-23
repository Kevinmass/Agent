import json
import os
import re

patterns_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'WebDesignPatterns'))
components_dir = os.path.join(os.path.dirname(__file__), 'src', 'components')

os.makedirs(components_dir, exist_ok=True)

folders = [d for d in os.listdir(patterns_dir) if os.path.isdir(os.path.join(patterns_dir, d))]
print(f"Found {len(folders)} component folders")

component_index = []

for folder in sorted(folders):
    md_path = os.path.join(patterns_dir, folder, f"{folder}.md")
    if not os.path.exists(md_path):
        print(f"  [SKIP] {folder} — no .md file")
        continue
    
    with open(md_path, 'r', encoding='utf-8') as f:
        md = f.read()
    
    # Normalize line endings
    md = md.replace('\r\n', '\n')
    
    dependencies = ''
    dep_match = re.search(r'### Dependencies:\s*(.+)', md)
    if dep_match:
        dependencies = dep_match.group(1).strip()
    
    source = ''
    css = ''
    
    # Check for backtick-fenced format first
    jsx_blocks = re.findall(r'```jsx\n(.*?)```', md, re.DOTALL)
    css_blocks = re.findall(r'```css\n(.*?)```', md, re.DOTALL)
    
    if jsx_blocks:
        # Backtick format - pick largest JSX
        jsx_blocks.sort(key=len, reverse=True)
        source = jsx_blocks[0].strip()
    
    if css_blocks:
        css_blocks.sort(key=len, reverse=True)
        css = css_blocks[0].strip()
    
    # If no backtick blocks found, try plain text format (like DotField, Beams, etc.)
    if not source:
        # Look for "code" marker at start of line, then everything until "CSS" or EOF
        lines = md.split('\n')
        in_code = False
        in_css = False
        code_lines = []
        css_lines = []
        
        for line in lines:
            stripped = line.strip()
            
            if stripped == 'code' and not in_css:
                in_code = True
                continue
            
            if stripped == 'CSS' and in_code:
                in_code = False
                in_css = True
                continue
            
            if stripped == 'CSS' and not in_code:
                in_css = True
                continue
            
            if in_code:
                code_lines.append(line)
            
            if in_css:
                css_lines.append(line)
        
        if code_lines:
            code_text = '\n'.join(code_lines).strip()
            # Remove leading ```jsx or ```css markers if present (some files have partial fences)
            code_text = re.sub(r'^```(?:jsx)?\n?', '', code_text)
            code_text = re.sub(r'\n?```$', '', code_text)
            source = code_text.strip()
        
        if css_lines:
            css_text = '\n'.join(css_lines).strip()
            css_text = re.sub(r'^```(?:css)?\n?', '', css_text)
            css_text = re.sub(r'\n?```$', '', css_text)
            css = css_text.strip()
    
    if not source and not css:
        print(f"  [DEBUG] {folder} — no source or CSS found")
        continue
    
    # Create component dir
    comp_dir = os.path.join(components_dir, folder)
    os.makedirs(comp_dir, exist_ok=True)
    
    if source:
        jsx_path = os.path.join(comp_dir, f"{folder}.jsx")
        with open(jsx_path, 'w', encoding='utf-8') as f:
            f.write(source)
        print(f"  [OK] {folder} — wrote JSX ({len(source)} chars)")
    
    if css:
        css_path = os.path.join(comp_dir, f"{folder}.css")
        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(css)
        print(f"  [OK] {folder} — wrote CSS ({len(css)} chars)")
    
    # Extract usage example
    usage = ''
    usage_match = re.search(r'### Usage Example\n```jsx\n(.*?)```', md, re.DOTALL)
    if usage_match:
        usage = usage_match.group(1).strip()[:200]
    else:
        # For short format, grab between "Usage" and "code" / "Props" / end
        usage_section = re.search(r'Usage\n\n([\s\S]*?)\n\n(?:code|###|Props)', md)
        if usage_section:
            usage = usage_section.group(1).strip()[:200]
    
    component_index.append({
        "name": folder,
        "dependencies": dependencies,
        "hasSource": bool(source),
        "hasCSS": bool(css),
        "usageExample": usage
    })

# Write index
index_path = os.path.join(components_dir, 'component-index.json')
with open(index_path, 'w', encoding='utf-8') as f:
    json.dump(component_index, f, indent=2)

print(f"\nDone! Extracted {len(component_index)} components")
print(f"\nSummary: {len(component_index)}/{len(folders)} components extracted")

# Also collect dependencies
all_deps = set()
for c in component_index:
    if c['dependencies']:
        for d in c['dependencies'].split(','):
            all_deps.add(d.strip())
print(f"All dependencies needed: {', '.join(sorted(all_deps))}")