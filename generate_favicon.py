from PIL import Image, ImageDraw

def create_circular_favicon():
    logo = Image.open('public/logo-talia.png').convert("RGBA")
    size = 512
    logo_size = int(size * 0.8)
    logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    background = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(background)
    draw.ellipse((0, 0, size, size), fill=(255, 255, 255, 255))
    offset = ((size - logo_size) // 2, (size - logo_size) // 2)
    background.paste(logo, offset, logo)
    background.save('app/icon.png', 'PNG')

create_circular_favicon()
