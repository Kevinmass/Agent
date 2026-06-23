import os

patterns_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'WebDesignPatterns'))
md_path = os.path.join(patterns_dir, 'DotField', 'DotField.md')

with open(md_path, 'rb') as f:
    data = f.read()

print(f"File size: {len(data)} bytes")
print(f"First 500 bytes hex:")
for i in range(0, min(500, len(data)), 16):
    chunk = data[i:i+16]
    hex_str = ' '.join(f'{b:02x}' for b in chunk)
    ascii_str = ''.join(chr(b) if 32 <= b < 127 else '.' for b in chunk)
    print(f"  {i:04x}: {hex_str:<48s} {ascii_str}")

# Check for backtick (0x60) or any Unicode that matches
print(f"\nBacktick (0x60) count: {data.count(0x60)}")
# Check for any 3-byte sequences that could be code block markers
for i in range(len(data)-3):
    triple = data[i:i+3]
    if triple in [b'\xe2\x80\x98', b'\xe2\x80\x99', b'\xef\xbb\xbf', b'\xe2\x80\x9c', b'\xe2\x80\x9d']:
        print(f"  Found Unicode quote-like char at {i}")