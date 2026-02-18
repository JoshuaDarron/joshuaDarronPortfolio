# joshuadarron.com

Personal portfolio site for Joshua D. Phillips — Developer Relations Engineer specializing in AI, data, and privacy.

Built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies.

## Features

- **Single-page portfolio** with smooth scroll navigation and section reveal animations
- **Dynamic experience pages** loaded via query parameters (`?company=aparavi`)
- **Spotlight cursor effect** that follows mouse movement
- **Light, semantic HTML** with accessible navigation and ARIA labels
- **SEO optimized** with Open Graph, Twitter Cards, JSON-LD structured data, sitemap, and `robots.txt`
- **AI crawler support** via `llms.txt` and `llms-full.txt` for LLM-friendly indexing
- **Google Analytics** integration for traffic tracking
- **Responsive design** that works across desktop and mobile

## Project Structure

```
joshuadarron.com/
├── index.html              # Main portfolio page
├── experience.html         # Dynamic experience detail page
├── favicon.svg             # SVG favicon (curly braces)
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Crawler directives
├── llms.txt                # AI-readable summary profile
├── llms-full.txt           # AI-readable full profile
├── assets/
│   ├── css/
│   │   ├── main.css        # Core styles and layout
│   │   ├── animations.css  # Scroll reveal and transition styles
│   │   └── experience.css  # Experience detail page styles
│   ├── js/
│   │   ├── nav.js          # Mobile nav toggle and scroll behavior
│   │   ├── reveal.js       # Intersection Observer scroll animations
│   │   ├── hero.js         # Hero section word animations
│   │   ├── cards.js        # Portfolio card interactions
│   │   ├── spotlight.js    # Cursor spotlight effect
│   │   └── experience.js   # Experience page data and rendering
│   └── img/
│       ├── profile.jpg     # Profile photo
│       └── portfolio/      # Project screenshots
└── .claude/
    ├── CLAUDE.md            # Claude Code project instructions
    ├── PRD.md               # Product requirements
    └── commands/
        └── commit.md        # Git commit workflow
```

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Greeting, animated headline, and CTA |
| **Technologies** | Scrolling bar of core tech (MySQL, MongoDB, TypeScript, Python, Go, etc.) |
| **Services** | Four capability cards (DevRel, Full-Stack, Data & AI, Backend) |
| **Profile** | About section with photo and bio |
| **Experience** | Career timeline with clickable cards linking to detail pages |
| **Portfolio** | Project grid with screenshots, descriptions, and tech tags |
| **Contact** | Email and social links (LinkedIn, Twitter, GitHub) |

## Development

No build step required. Open `index.html` in a browser or serve locally:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Edit HTML, CSS, and JS files directly — changes are reflected on refresh.

## Experience Pages

Experience detail pages are driven by query parameters. Each company has its own dataset rendered dynamically by `experience.js`:

```
experience.html?company=rocketride
experience.html?company=aparavi
experience.html?company=hotb
experience.html?company=nihonkohden
experience.html?company=roguecloud
experience.html?company=appmakersla
```

## SEO & Discoverability

- **JSON-LD** structured data for Person, ProfilePage, FAQPage, and BreadcrumbList schemas
- **Open Graph** and **Twitter Card** meta tags on all pages
- **Sitemap** at `/sitemap.xml` covering all routes
- **llms.txt** and **llms-full.txt** for AI/LLM crawlers

## License

&copy; 2026 Joshua Darron Phillips
