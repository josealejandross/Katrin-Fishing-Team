import urllib.request
import re
import os
import html

new_posts = [
    "DcJm-L6kWlh",
    "Dd5VyZPtPVt",
    "Dd9q8JWD-EZ"
]

os.makedirs("public/instagram", exist_ok=True)

for pid in new_posts:
    print(f"Fetching embed for: {pid}")
    embed_file = f"/tmp/embed_{pid}.html"
    os.system(f'curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" "https://www.instagram.com/p/{pid}/embed/" > {embed_file}')
    
    with open(embed_file, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # Find all scontent jpg links
    raw_matches = re.findall(r'https://scontent[^\s"\'<>]+\.jpg[^\s"\'<>]*', content)
    
    # Filter out profile pictures (100x100 or profile_pic)
    post_matches = [m for m in raw_matches if "profile_pic" not in m]
    
    # Prefer higher resolution 1080x1080 or 750x750 or 640x640
    hi_res = [m for m in post_matches if any(res in m for res in ["1080x1080", "750x750", "640x640"])]
    
    selected_url = None
    if hi_res:
        selected_url = hi_res[0]
    elif post_matches:
        selected_url = post_matches[0]
        
    if selected_url:
        clean_url = html.unescape(selected_url).replace("\\/", "/").replace("\\", "")
        print(f"Downloading for {pid}...")
        out_path = f"public/instagram/{pid}.jpg"
        os.system(f'curl -sL -A "Mozilla/5.0" "{clean_url}" -o "{out_path}"')
        if os.path.exists(out_path):
            size = os.path.getsize(out_path)
            print(f"Saved {out_path} ({size} bytes)")
    else:
        print(f"No image URL found for {pid}")
