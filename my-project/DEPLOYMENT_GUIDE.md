# 🚀 Deployment Guide - weCan Furniture Store

Your furniture landing page is ready for production deployment! Here are your options:

## **Option 1: Deploy to Vercel (Recommended ✅)**

Vercel is the easiest and fastest way to deploy Next.js/Vite apps.

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Production-ready furniture landing page"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"
6. Your site will be live at `your-project.vercel.app`

**Advantages:**
- ✅ Zero configuration
- ✅ Automatic deployments on git push
- ✅ Free tier available
- ✅ Custom domains
- ✅ SSL certificate included
- ✅ Performance analytics

---

## **Option 2: Deploy to Netlify**

### Step 1: Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

**Advantages:**
- ✅ Easy GitHub integration
- ✅ Free tier
- ✅ Custom domains
- ✅ Form handling included

---

## **Option 3: Manual Deployment (GitHub Pages)**

### Build and Deploy
```bash
# Build the project
npm run build

# The 'dist' folder now contains your production-ready site
# Upload the contents of 'dist/' to your web server
```

Then:
1. Go to your repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose main branch and `/dist` folder
4. Your site will be available at `username.github.io/repository`

---

## **Post-Deployment Checklist**

- [ ] Site loads without errors
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Mobile responsiveness verified
- [ ] Test on multiple devices
- [ ] Check performance with Lighthouse
- [ ] Set up custom domain (if applicable)
- [ ] Enable SSL/TLS certificate
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Test contact forms/email signups

---

## **Quick Performance Check**

After deployment, run Lighthouse audit:
1. Open your deployed site in Chrome
2. Press F12 to open DevTools
3. Go to "Lighthouse" tab
4. Click "Generate report"
5. Target scores: 90+ for Performance, Accessibility, Best Practices, SEO

---

## **Environment Variables (if needed)**

Create a `.env.production` file for production-specific variables:

```env
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=your-google-analytics-id
```

---

## **Recommended: Deploy to Vercel**

The fastest way:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts and your site will be live!
```

---

## **Build Size**

Your production build:
- HTML: 457 bytes
- CSS: 6.05 KB (gzip: 1.53 KB)
- JS: 206.75 KB (gzip: 64.40 KB)
- **Total**: ~213 KB (gzip: ~66 KB)

✅ **Excellent performance!** Loads in milliseconds.

---

**Questions?** Check the individual platform docs or reach out for support!

🎉 Your furniture store is ready to go live!
