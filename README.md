# Portfolio

A modern, design-first portfolio site built with Astro, Tailwind CSS, React, and MDX. Features case studies, smooth animations, and responsive design optimized for showcasing UX design work

## ✨ Features

- **Modern Stack**: Built with Astro 5, Tailwind CSS 3, React 19, and MDX
- **Content Collections**: Easy markdown-based case study management
- **Smooth Animations**: Framer Motion for subtle, professional animations
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **GitHub Pages Ready**: Automated deployment workflow included

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

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
/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── content/         # MDX case studies
│   │   └── work/        # Case study files
│   ├── layouts/         # Astro layouts
│   ├── pages/           # Page routes
│   │   ├── index.astro       # Home page
│   │   ├── about.astro       # About page
│   │   ├── contact.astro     # Contact page
│   │   └── work/
│   │       ├── index.astro   # Work listing
│   │       └── [slug].astro  # Case study template
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
└── tailwind.config.mjs  # Tailwind configuration
```

## 📝 Adding Case Studies

Case studies are stored as MDX files in `src/content/work/`. Create a new file with this frontmatter:

```mdx
---
title: "Project Title"
description: "Brief description"
client: "Client Name"
role: "Your Role"
year: 2024
tags: ["UX Design", "Research", "Prototyping"]
featured: true
coverImage: "https://example.com/image.jpg"
order: 1
---

## Overview
Your content here...
```

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
4. The workflow will automatically deploy on push to main

The site will be available at: `https://yourusername.github.io/astro-portfolio/`

### Other Platforms

The built site is in the `dist/` folder after running `npm run build`. You can deploy to:
- Netlify
- Vercel  
- Cloudflare Pages
- Any static hosting service

## 📦 Technologies

- [Astro](https://astro.build) - Web framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [React](https://react.dev) - UI components
- [MDX](https://mdxjs.com) - Content format
- [Framer Motion](https://www.framer.com/motion/) - Animations

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
