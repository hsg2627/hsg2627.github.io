import os

for f in sorted(os.listdir('.')):
    if os.path.isfile(f):
        sz = os.path.getsize(f)
        print(f"{f:30s} : {sz:>10,d} bytes")
    elif os.path.isdir(f) and not f.startswith('.'):
        print(f"[{f}]")
        for sub in os.listdir(f):
            subp = os.path.join(f, sub)
            if os.path.isfile(subp):
                print(f"  - {sub:26s} : {os.path.getsize(subp):>10,d} bytes")
