# Personal Portfolio

Personal portfolio and digital CV website for NFC sharing.

A lightweight, single-page personal profile designed to be linked from an NFC
tag, business card, or QR code. No framework, no build step — just static
files that load instantly on any device.

## Features

- Dark and light theme support (auto-detects system preference, remembers user choice)
- Responsive mobile-first design
- NFC-friendly digital profile (single short URL, fast first paint)
- Download CV button
- Contact buttons (Email, Call, LinkedIn, GitHub)
- GitHub profile link
- Contact form placeholder with a "coming soon" message

## Technologies used

- HTML5
- CSS3 (custom properties, no preprocessor, no framework)
- Vanilla JavaScript (no dependencies)
- Inter font, loaded from Google Fonts
- Inline SVG icons (no icon library)

## Project structure

```
Personal_ Portfolio/
├── index.html              # All content & sections
├── styles.css              # Themes, layout, responsive rules
├── main.js                 # Theme toggle, contact-form toast, footer year
├── Ziad-Belkheer-CV.pdf    # Downloadable CV
├── .gitignore
└── README.md
```

## Run locally

There is no build step. Any static file server will work.

**Python (already on most systems):**

```bash
python3 -m http.server 8080
```

**Node (if installed):**

```bash
npx --yes serve -l 8080 .
```

Then open <http://localhost:8080> in your browser.

You can also just open `index.html` directly in a browser, but using a local
server is closer to how the page will behave when hosted.

## Build

No build step is required. The site is plain HTML/CSS/JS and is deploy-ready
as-is.

## Deployment

The site is a fully static page, so it can be hosted on any static hosting
provider. Recommended options (all free for personal use):

- **Vercel** — `npx vercel` inside the project folder, then `vercel --prod`
- **Netlify** — drag-and-drop the folder at <https://app.netlify.com/drop>,
  or connect the repo (no build command, publish directory `/`)
- **GitHub Pages** — push to a public repo, then enable Pages on the `main`
  branch root
- **Cloudflare Pages** — connect the repo, build command: *(none)*,
  output directory: `/`

After deploying, write the resulting HTTPS URL to your NFC tag.

## Notes

- The contact form is currently a placeholder and does not send messages yet.
  Submitting it only displays the message:
  *"This feature will be added soon. For now, you can contact me through the
  channels above."*
- The email and phone number shown on the page are intentionally public.
- The CV PDF (`Ziad-Belkheer-CV.pdf`) is intentionally included so visitors
  can download it directly from the page.
