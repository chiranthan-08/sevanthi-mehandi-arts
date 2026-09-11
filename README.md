# Sevanthi Mehandi Arts 🌿✨

A luxury, handcrafted portfolio and client booking website for **Sevanthi Mehandi Arts** — Professional bridal and custom henna designer based in Tumakuru, Karnataka.

Live Repository: [https://github.com/chiranthan-08/HennaSite](https://github.com/chiranthan-08/HennaSite)

---

## 🌟 Features

- **Luxury Aesthetics & Typography**: Built with modern, elegant typography (Cormorant Garamond, Playfair Display, and Plus Jakarta Sans) paired with warm organic henna tones and subtle glassmorphic accents.
- **Genuine Work Showcase**: Curated gallery displaying authentic bridal mandalas, lotus feet henna, forearm jaal, and royal Arabic calligraphy.
- **Interactive Lightbox**: Fullscreen inspection of intricate henna patterns with image navigation and direct contextual WhatsApp inquiry buttons.
- **Dynamic WhatsApp Booking Integration**: Pre-filled direct messaging links for custom quotes, bridal consultation, and festive events.
- **Transparent Service & Pricing Guide**: Detailed breakdown of bridal packages, guest henna, and custom artwork rates with an interactive FAQ accordion.
- **Client Testimonials & Google Review Badges**: Real reviews highlighting stain darkness, design precision, and artist punctuality.
- **Fully Responsive**: Optimized for seamless mobile, tablet, and desktop viewing.

---

## 📁 Project Structure

```
SMA_P/
├── assets/
│   └── images/                     # Henna gallery artwork and artist portraits
│       ├── artist-sevanthi.jpg
│       ├── work-1-bridal-mandala.jpg
│       ├── work-2-feet-mandala.jpg
│       ├── work-3-forearm-art.jpg
│       └── work-4-royal-arabic.jpg
├── index.html                      # Semantic HTML5 single-page application
├── styles.css                      # Modular, responsive vanilla CSS design system
├── script.js                       # Interactive lightbox, filtering, and WhatsApp handlers
├── server.ps1                      # Lightweight local PowerShell HTTP server
└── .gitignore                      # Git exclusion rules
```

---

## 🚀 Running Locally

### Option 1: Double-click / Open in Browser
Simply open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using the Included PowerShell Server
Run the included PowerShell server script:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Then visit: `http://localhost:8085`

### Option 3: Using VS Code Live Server or Python
```bash
# Python 3
python -m http.server 8080

# Or npx serve
npx serve .
```

---

## 🛠️ Built With

- **HTML5** & **Vanilla CSS3**
- **JavaScript (ES6+)**
- **Font Awesome 6**
- **Google Fonts**
