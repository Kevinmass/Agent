import os, re

# Check a few missing ones
missing = ['AnimatedContent', 'AsciiText', 'Beams', 'DotField', 'DomeGallery', 'Strands', 'SideRays']
patterns_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'WebDesignPatterns'))

for name in missing:
    md_path = os.path.join(patterns_dir, name, f"{name}.md")
    with open(md_path, 'r', encoding='utf-8') as f:
        md = f.read()
    
    # Look for code blocks of any kind
    ticks = [m.start() for m in re.finditer(r'```', md)]
    print(f"\n=== {name} ===")
    print(f"Length: {len(md)} chars")
    print(f"Backtick positions: {ticks[:10]}")
    
    # Show context around first ``` 
    if ticks:
        for i, t in enumerate(ticks[:6]):
            ctx = md[max(0,t-2):t+12]
            print(f"  Tick {i} at {t}: {repr(ctx)}")