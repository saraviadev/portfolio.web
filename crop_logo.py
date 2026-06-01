from PIL import Image, ImageDraw, ImageFilter
import sys

try:
    img = Image.open('C:/Users/zyaxx/.gemini/antigravity-ide/brain/0523167b-7149-41db-b340-3ff9e1bbd4e8/media__1779846928905.jpg').convert('RGBA')
    width, height = img.size

    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)

    cx, cy = 512, 450
    radius = 340

    draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(15))

    img.putalpha(mask)
    img = img.crop((cx - radius - 30, cy - radius - 30, cx + radius + 30, cy + radius + 30))
    img.save('public/srv_gantz_smooth.png')
    print('Successfully created transparent PNG')
except Exception as e:
    print('Error:', e)
    sys.exit(1)
