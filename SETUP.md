# Setup Instructions for CUT - Weight Loss Calculator

## Prerequisites

- Node.js v20 or higher (you have v24 ✅)
- npm or yarn package manager

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/cut/`

### 3. Build for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

### 4. Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Manual Deployment

```bash
npm run deploy
```

### Option 2: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

**Setup Steps:**

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

3. The site will be automatically deployed to:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/cut/`

## Google AdSense Configuration

### 1. Get Your AdSense Publisher ID

- Sign up at https://www.google.com/adsense
- Get your publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)

### 2. Update the Code

Replace `ca-pub-XXXXXXXXXXXXXXXX` in these files:

- `index.html` (line 26)
- `src/components/AdBanner.tsx` (line 42)

### 3. Create Ad Units

Create ad units in your AdSense dashboard and replace the slot IDs in `src/App.tsx`:

```typescript
<AdBanner slot="YOUR_SLOT_ID_1" format="horizontal" />
<AdBanner slot="YOUR_SLOT_ID_2" format="vertical" />
```

## Project Structure

```
zip.run.place/
├── src/
│   ├── components/          # React components
│   │   ├── AdBanner.tsx    # Google AdSense component
│   │   ├── DisclaimerBanner.tsx
│   │   ├── ResultsDisplay.tsx
│   │   └── WeightForm.tsx  # Main form (class-based)
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   ├── utils/
│   │   └── WeightCalculator.ts  # Calculator class
│   ├── App.tsx             # Main app (class-based)
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions
├── index.html             # HTML template with SEO
├── package.json
├── tsconfig.json
└── vite.config.js
```

## Features Implemented

✅ TypeScript with strict mode
✅ Class-based architecture (WeightCalculator, WeightForm, App)
✅ BMI calculation
✅ Ideal weight calculation (Devine formula)
✅ Calorie calculation (Mifflin-St Jeor equation)
✅ Fasting plan recommendations
✅ Mobile-responsive design
✅ Google AdSense integration
✅ SEO optimization
✅ Medical disclaimer
✅ Beautiful UI with Adobe React Spectrum
✅ Gradient background
✅ Icons and cards
✅ GitHub Pages deployment ready

## Customization

### Change Theme Colors

Edit `src/index.css` to modify the gradient background:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Calculations

Edit `src/utils/WeightCalculator.ts` to adjust formulas or add new calculations.

### Add More Fasting Plans

Update the `getFastingPlan` method in `WeightCalculator.ts`.

## Troubleshooting

### TypeScript Errors

Run type checking:
```bash
npm run type-check
```

### Build Errors

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Support

For issues or questions, please open an issue on GitHub.

