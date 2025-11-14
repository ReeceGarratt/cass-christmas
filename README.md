
# Portfolio

A modern, design-first portfolio site built with Astro, Tailwind CSS, React, and MDX. Features case studies, smooth animations, and responsive design optimized for showcasing UX design work.

## ✨ Features

- **Modern Stack**: Astro 5, Tailwind CSS 4, React 19, MDX
- **Content Collections**: Markdown/MDX-based case study and guide management
- **Smooth Animations**: Framer Motion for subtle, professional animations
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and automated sitemap/robots.txt
- **Cloudflare & GitHub Pages Ready**: Automated deployment workflows included

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm (or yarn)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/ (root)
├── public/                  # Static assets (favicons, robots.txt, etc.)
├── src/
│   ├── assets/              # Images, animations, etc.
│   ├── components/          # React components
│   │   └── mdx/             # MDX-specific Astro components
│   ├── content/             # Content collections
│   │   ├── work/            # Case study MDX files
│   │   └── edit-guide/      # Editing guide MDX
│   ├── layouts/             # Astro layouts
│   ├── pages/               # Page routes
│   │   ├── index.astro      # Home page
│   │   ├── about.astro      # About page
│   │   ├── contact.astro    # Contact page
│   │   ├── edit-guide.astro # Editing guide page
│   │   └── work/
│   │       ├── index.astro  # Work listing
│   │       └── [slug].astro # Case study template
│   └── styles/              # Global styles (Tailwind, etc.)
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
├── package.json             # Project metadata and scripts
└── DEPLOYMENT.md            # Deployment instructions
```

title: "Project Title"
description: "Brief description"
client: "Client Name"
role: "Your Role"
year: 2024
tags: ["UX Design", "Research", "Prototyping"]
featured: true
coverImage: "https://example.com/image.jpg"
order: 1

## 📝 Adding Content

### Case Studies
Add new case studies as MDX files in `src/content/work/`. Example frontmatter:

```mdx
---
title: "Project Title"
description: "Brief description"
client: "Client Name"
role: "Your Role"
year: 2025
tags: ["UX Design", "Research", "Prototyping"]
featured: true
coverImage: "/assets/your-image.jpg"
order: 1
---

## Overview
Your content here...
```

### Editing Guide
The editing guide is in `src/content/edit-guide/index.mdx` and rendered at `/edit-guide`.

## 🎨 Customization

### Colors
Edit `tailwind.config.mjs` to change the color scheme:

```js
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
}
```

### Fonts
Update the Google Fonts import in `src/styles/global.css` to use your preferred fonts.

### Content
- Update personal information in pages (About, Contact)
- Replace placeholder images with your own
- Update social media links in the footer


## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to Settings > Pages
3. Set Source to "GitHub Actions"
4. The workflow will automatically deploy on push to `main`

The site will be available at: `https://yourusername.github.io/astro-portfolio/`

### Cloudflare Pages (Recommended for Fast Global Delivery)

1. [Create a Cloudflare account](https://dash.cloudflare.com/) if you don't have one.
2. In Cloudflare Pages, create a new project and connect your GitHub repo.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. For custom domains, add your domain in Cloudflare Pages and update DNS as instructed.

#### Deploying from GitHub Actions

To automate deployment to Cloudflare Pages from GitHub Actions:

- Add a new workflow file (e.g., `.github/workflows/cloudflare-pages.yml`):

```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - name: Publish to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: <your-cloudflare-project-name>
          directory: ./dist
```

- Set the required secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) in your GitHub repo settings.
- Replace `<your-cloudflare-project-name>` with your actual Cloudflare Pages project name.

After each push to `main`, your site will be built and deployed to Cloudflare Pages automatically.

### Other Platforms

The built site is in the `dist/` folder after running `npm run build`. You can deploy to:
- Netlify
- Vercel
- Any static hosting service


## 📦 Technologies

- [Astro](https://astro.build) - Web framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [React](https://react.dev) - UI components
- [MDX](https://mdxjs.com) - Content format
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Cloudflare Pages](https://pages.cloudflare.com/) - Static site hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD


## 📄 License

MIT License — feel free to use this project for your own portfolio!


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
