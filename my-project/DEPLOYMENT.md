# Deployment Guide - CreateFlow Landing Page

This guide will walk you through deploying your CreateFlow landing page to production on your chosen platform.

## Prerequisites

Before deploying, ensure:
- ✅ Local development works: `npm run dev`
- ✅ Production build succeeds: `npm run build`
- ✅ Build preview works: `npm run preview`
- ✅ All content is final
- ✅ Images are optimized

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Vite and provides the best integration and performance.

#### Steps:

1. **Install Vercel CLI** (optional, but recommended)
```bash
npm install -g vercel
```

2. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/createflow.git
git push -u origin main
```

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account
   - Click "Add New" → "Project"
   - Select your `createflow` repository
   - Vercel will auto-detect React + Vite
   - Click "Deploy"

4. **Configure**
   - Custom domain: Settings → Domains → Add custom domain
   - Environment variables: Settings → Environment Variables
   - Build command: `npm run build` (auto-detected)
   - Output directory: `dist` (auto-detected)

#### Preview URL
Your site will be live at: `https://createflow.vercel.app`

#### Custom Domain
To add a custom domain:
1. Go to Project Settings → Domains
2. Enter your domain (e.g., `createflow.io`)
3. Update DNS records as instructed
4. SSL certificate is automatic

### Option 2: Netlify

Netlify is another excellent option with great performance.

#### Steps:

1. **Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub as provider
   - Authorize Netlify

2. **Select Repository**
   - Find and select `createflow` repository
   - Click "Connect"

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (recommended)
   - Click "Deploy site"

4. **Custom Domain**
   - Site settings → Domain management → Add custom domain
   - Update DNS or use Netlify's nameservers

#### Preview URL
Your site will be live at: `https://createflow.netlify.app`

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Update vite.config.js**
```javascript
export default defineConfig({
  base: '/createflow/', // Replace with your repo name
  plugins: [react(), tailwindcss()],
})
```

2. **Add Deploy Script**
In `package.json`, add:
```json
"scripts": {
  "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
}
```

3. **Deploy**
```bash
npm run deploy
```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Select "gh-pages" branch as source
   - Save

#### URL
Your site will be at: `https://yourusername.github.io/createflow`

### Option 4: Railway

Modern deployment platform with great developer experience.

#### Steps:

1. **Connect GitHub**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub Repo"
   - Authorize Railway

2. **Select Repository**
   - Find and select `createflow`
   - Approve installation

3. **Configure**
   - Build command: `npm run build`
   - Start command: `npm run preview`
   - Click "Deploy"

#### Custom Domain
- Project settings → Domains → Add custom domain
- Update DNS records

### Option 5: Render

Another great option for static sites.

#### Steps:

1. **Connect GitHub**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Static Site"
   - Connect GitHub account

2. **Select Repository**
   - Find `createflow` repository
   - Click "Connect"

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Create Static Site"

#### URL
Available immediately after deployment

## Post-Deployment Checklist

After deploying to any platform, verify:

- [ ] Site loads without errors
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Mobile responsive design works
- [ ] Forms (if any) are functional
- [ ] Navigation works on all pages
- [ ] No console errors in DevTools
- [ ] Lighthouse scores meet targets (90+)

## Performance Testing

### Lighthouse Audit

1. **In Chrome DevTools:**
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Click "Analyze page load"
   - Targets:
     - Performance: 90+
     - Accessibility: 95+
     - Best Practices: 90+
     - SEO: 90+

### Speed Test

Use these free tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)

## Analytics Integration

### Google Analytics 4

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Click "Create" → "Property"
   - Enter website details
   - Get Measurement ID (e.g., `G-XXXXXXXXXX`)

2. **Install React GA4**
```bash
npm install react-ga4
```

3. **Initialize in main.jsx**
```javascript
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
```

4. **Track Events**
```javascript
ReactGA.event({
  category: "engagement",
  action: "button_click",
  label: "start_trial"
});
```

## SEO Optimization

### Meta Tags

Update `index.html`:
```html
<meta name="description" content="CreateFlow - Team collaboration platform for designing and shipping products faster">
<meta property="og:title" content="CreateFlow">
<meta property="og:description" content="Team collaboration platform">
<meta property="og:image" content="https://your-domain.com/og-image.png">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

### Sitemap

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://createflow.io/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://createflow.io/sitemap.xml
```

## SSL Certificate

- **Vercel**: Automatic (Let's Encrypt)
- **Netlify**: Automatic (Let's Encrypt)
- **GitHub Pages**: Automatic
- **Railway**: Automatic
- **Render**: Automatic

All platforms provide free SSL/TLS certificates.

## Environment Variables

If you need environment variables (for APIs, etc.):

1. **Local Development**
   - Create `.env.local`
   - Add variables: `VITE_API_URL=https://api.example.com`
   - Access in code: `import.meta.env.VITE_API_URL`

2. **Production Deployment**
   - Each platform has environment variable settings
   - Vercel: Settings → Environment Variables
   - Netlify: Settings → Build & deploy → Environment
   - Never commit `.env` files to Git

## Troubleshooting

### Build Fails
- Check Node version compatibility (14+)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors
- Review build logs for specific errors

### Site Shows Blank Page
- Check console for JavaScript errors
- Verify all imports are correct
- Check network tab for failed requests
- Verify base path is correct (GitHub Pages)

### Images Not Loading
- Check image URLs are absolute
- Verify Unsplash links are accessible
- Check CORS headers
- Optimize image file sizes

### Performance Issues
- Run Lighthouse audit
- Check for bundle size: `npm run build -- --analyze`
- Optimize images further
- Enable caching headers (usually auto-enabled)

## Monitoring & Updates

### Set Up Alerts
- Uptime monitoring: [Uptime Robot](https://uptimerobot.com/)
- Error tracking: [Sentry](https://sentry.io/) (free tier available)
- Performance: Built-in platform metrics

### Schedule Updates
- Review analytics monthly
- Update content quarterly
- Security patches: apply immediately
- Dependencies: update every 3 months

## Next Steps

1. **Configure custom domain** (if not already done)
2. **Set up email notification** for errors/deploys
3. **Enable analytics** to track user behavior
4. **Set up redirects** for old URLs (if migrating)
5. **Create feedback form** to collect user input
6. **Plan Phase 2 features** based on analytics

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com/
- **Vite Docs**: https://vitejs.dev/guide/
- **React Docs**: https://react.dev/
- **Tailwind Docs**: https://tailwindcss.com/docs

---

**Your CreateFlow landing page is now ready for the world! 🚀**
