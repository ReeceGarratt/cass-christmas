# Deployment Guide

## GitHub Pages Setup

Follow these steps to deploy your portfolio to GitHub Pages:

### 1. Enable GitHub Pages

1. Go to your repository: `https://github.com/ReeceGarratt/astro-portfolio`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar under "Code and automation")
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**

### 2. Trigger Deployment

The site will automatically deploy when you:
- Push to the `main` branch
- Or manually trigger the workflow from the Actions tab

### 3. Access Your Site

Once deployed, your site will be available at:
```
https://reecegarratt.github.io/astro-portfolio/
```

### 4. Custom Domain (Optional)

To use a custom domain:
1. In repository Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Update DNS records with your domain provider
4. Update `site` in `astro.config.mjs` to your custom domain

## Local Development

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

## Customization

### Colors
Edit `tailwind.config.mjs`:
```js
colors: {
  primary: '#6366f1',    // Change primary color
  secondary: '#8b5cf6',  // Change secondary color
}
```

### Content
- Update personal info in pages: `src/pages/about.astro`, `src/pages/contact.astro`
- Replace social links in `src/layouts/BaseLayout.astro`
- Add case studies in `src/content/work/`

### Images
- Replace favicon: `public/favicon.svg`
- Add images to `public/` folder
- Reference them in case study frontmatter

## Troubleshooting

### Build Fails
- Check Node.js version (requires v18+)
- Run `npm ci` to clean install dependencies
- Check TypeScript errors: `npm run astro check`

### Pages Not Loading
- Verify base path in `astro.config.mjs` matches repository name
- Check GitHub Actions logs for deployment errors

### Styles Not Working
- Clear browser cache
- Verify Tailwind classes are being generated
- Check browser console for errors

## Support

For issues or questions:
- Check [Astro Documentation](https://docs.astro.build)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Open an issue in the repository
