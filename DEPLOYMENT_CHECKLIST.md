# Deployment Checklist for CUT

## 📋 Pre-Deployment Steps

### 1. Google AdSense Setup
- [ ] Sign up for Google AdSense at https://www.google.com/adsense
- [ ] Get approved (may take 1-3 days)
- [ ] Copy your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)
- [ ] Create 5 ad units in AdSense dashboard
- [ ] Copy each ad unit's slot ID

### 2. Update AdSense Configuration

#### File: `index.html` (Line 26)
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ACTUAL_ID"
     crossorigin="anonymous"></script>
```

#### File: `src/components/AdBanner.tsx` (Line 42)
```typescript
data-ad-client="ca-pub-YOUR_ACTUAL_ID"
```

#### File: `src/App.tsx` (Lines 77, 91, 99, 101, 117)
Replace slot IDs:
```typescript
<AdBanner slot="YOUR_SLOT_ID_1" format="horizontal" />  // Top
<AdBanner slot="YOUR_SLOT_ID_2" format="vertical" />    // Side
<AdBanner slot="YOUR_SLOT_ID_3" format="horizontal" />  // Results top
<AdBanner slot="YOUR_SLOT_ID_4" format="horizontal" />  // Results bottom
<AdBanner slot="YOUR_SLOT_ID_5" format="horizontal" />  // Footer
```

### 3. Update SEO Information

#### File: `index.html`
- [ ] Update Open Graph URL (line 21): `https://yourusername.github.io/yourrepo/cut/`
- [ ] Update Twitter URL (line 26): Same as above
- [ ] Update Structured Data URL (line 37): Same as above
- [ ] Add Open Graph image if you have one (optional)

### 4. Customize Branding (Optional)

#### Replace Favicon
- [ ] Create your own favicon/logo
- [ ] Replace `public/vite.svg` with your icon
- [ ] Update `index.html` line 5 to point to your icon

#### Customize Colors
- [ ] Edit `src/index.css` line 13 for gradient background
- [ ] Adjust card colors in components if desired

### 5. Test Locally

```bash
# Run development server
npm run dev

# Test all features:
# - [ ] Form inputs work
# - [ ] Calculation produces results
# - [ ] BMI displays correctly
# - [ ] Calorie plan shows
# - [ ] Fasting plan appears
# - [ ] Mobile responsive (resize browser)
# - [ ] All cards render properly

# Build for production
npm run build

# Preview production build
npm run preview
# Visit http://localhost:4173/cut/

# Verify production build works correctly
```

## 🚀 GitHub Deployment

### Option 1: Automatic Deployment (Recommended)

#### Step 1: Create GitHub Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: CUT weight loss calculator"

# Create repository on GitHub (via web interface)
# Then connect and push:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy on push

#### Step 3: Wait for Deployment
- Check **Actions** tab to see deployment progress
- First deployment takes 2-5 minutes
- Site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/cut/`

### Option 2: Manual Deployment

```bash
# Install gh-pages if not already installed
npm install -g gh-pages

# Deploy
npm run deploy

# Site will be at: https://YOUR_USERNAME.github.io/YOUR_REPO/cut/
```

## ✅ Post-Deployment Verification

### 1. Test Live Site
- [ ] Visit your GitHub Pages URL
- [ ] Test all form inputs
- [ ] Verify calculations work
- [ ] Check mobile responsiveness (use browser dev tools)
- [ ] Verify all cards display correctly
- [ ] Check that disclaimer is visible

### 2. SEO Verification
- [ ] Google Search Console: Submit sitemap
- [ ] Test with Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Verify Open Graph tags: https://www.opengraph.xyz/
- [ ] Test Twitter Card: https://cards-dev.twitter.com/validator

### 3. AdSense Verification
- [ ] Ads may take 24-48 hours to appear
- [ ] Check AdSense dashboard for impressions
- [ ] Verify ads display correctly (use incognito mode)
- [ ] Ensure ads don't break layout

### 4. Performance Testing
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

### 5. Browser Testing
Test on:
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS)
- [ ] Samsung Internet (Android)

## 🔧 Troubleshooting

### Issue: Site shows 404
**Solution**: 
- Check GitHub Pages settings
- Verify base path in `vite.config.js` matches your repo name
- Wait 5-10 minutes for DNS propagation

### Issue: Ads not showing
**Solution**:
- Verify AdSense account is approved
- Check that Publisher ID is correct
- Wait 24-48 hours for ads to activate
- Test in incognito mode (ad blockers may interfere)

### Issue: Build fails
**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Issue: TypeScript errors
**Solution**:
```bash
# Run type check
npm run type-check

# Fix any errors shown
```

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Create GA4 property
2. Add tracking code to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎉 Launch Checklist

Final checks before announcing:
- [ ] All AdSense IDs updated
- [ ] SEO meta tags customized
- [ ] Site tested on multiple devices
- [ ] Disclaimer is prominent
- [ ] All calculations verified
- [ ] Performance is acceptable (< 3s load time)
- [ ] No console errors
- [ ] Mobile experience is smooth
- [ ] Ads display properly (if approved)

## 📈 Post-Launch

- [ ] Submit to Google Search Console
- [ ] Share on social media
- [ ] Monitor AdSense earnings
- [ ] Collect user feedback
- [ ] Monitor analytics
- [ ] Plan future improvements

---

**You're ready to launch! 🚀**

