# CUT - Feature Overview

## 🎨 User Interface

### Header Section
- **Large Title**: "✂️ CUT" with gradient background
- **Subtitle**: "Your Personal Weight Loss Calculator & Fasting Plan Generator"
- **Medical Disclaimer Banner**: Prominent warning with alert icon

### Input Form (Left Side)
**Form Fields:**
1. **Age** (Number input, 10-120 years)
2. **Sex** (Dropdown: Male/Female)
3. **Height** (Number input in cm, 100-250)
4. **Current Weight** (Number input in kg, 30-300)
5. **Desired Weight** (Number input in kg, 30-300)
6. **Time Frame** (Dropdown):
   - "Calculate for me (Recommended)" - Auto-calculates safe timeline
   - "I'll set my own timeline" - Shows custom weeks input
7. **Weeks to Goal** (Conditional, appears if custom timeline selected)

**Submit Button**: Large CTA button "Calculate My Plan 🎯"

### Results Display (Appears after calculation)

#### BMI Cards (Side by side)
- **Current BMI Card**
  - Icon: 📏
  - BMI value (large number)
  - Category badge (color-coded):
    - Blue (Info): Underweight
    - Green (Positive): Normal weight
    - Yellow: Overweight
    - Red (Negative): Obese

- **Target BMI Card**
  - Icon: 🎯
  - Target BMI value
  - Category badge

#### Ideal Weight Card
- Icon: ⚖️
- Medically recommended ideal weight
- Based on Devine formula

#### Timeline Card
- Icon: 📅
- Number of weeks to goal
- Months equivalent
- Specific target date

#### Calorie Plan Card (Blue background)
- Icon: 🔥
- **BMR** (Basal Metabolic Rate)
- **TDEE** (Total Daily Energy Expenditure)
- **Daily Deficit** (in red)
- **Target Daily Calories** (large, green, prominent)

#### Fasting Plan Card (Purple background)
- Dynamic icon based on plan
- **Plan Name**: 12:12, 14:10, 16:8, or 18:6
- **Description**: Fasting/eating window hours
- **Schedule**: Specific eating times

### Ad Placements
1. **Top Banner** - Horizontal ad after header
2. **Side Banner** - Vertical ad next to form (desktop only)
3. **Results Top** - Horizontal ad before results
4. **Results Bottom** - Horizontal ad after results
5. **Footer Banner** - Horizontal ad at page bottom

### Footer
- Copyright notice
- Additional disclaimer text

## 🎯 Calculation Logic

### Automatic Timeline Mode
When user selects "Calculate for me":
1. Calculates weight difference
2. Applies safe rate: 0.5 kg/week
3. Determines number of weeks needed
4. Calculates daily calorie deficit
5. Recommends appropriate fasting plan

### Custom Timeline Mode
When user sets their own timeline:
1. Uses user-specified weeks
2. Calculates required daily deficit
3. Warns if rate is unsafe (via fasting plan intensity)
4. Provides same detailed breakdown

### Fasting Plan Selection
Based on daily calorie deficit:
- **< 300 cal/day**: 12:12 Beginner (🌅)
- **300-499 cal/day**: 14:10 Moderate (⏰)
- **500-699 cal/day**: 16:8 Popular (🍽️)
- **700+ cal/day**: 18:6 Advanced (💪)

## 📱 Responsive Design

### Desktop (> 1024px)
- Two-column layout (form left, ads right)
- Full-width results section
- All cards side-by-side where appropriate

### Tablet (768px - 1024px)
- Single column layout
- Stacked cards
- Horizontal ads only

### Mobile (< 768px)
- Fully stacked layout
- Touch-friendly inputs
- Optimized card sizes
- Responsive ads

## 🎨 Color Scheme

### Background
- Purple gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Cards
- Light gray backgrounds with shadows
- White text on dark backgrounds
- Color-coded badges and highlights

### Accent Colors
- **Blue**: Calorie information (#e6f2ff background)
- **Purple**: Fasting plan (#f3e8ff background)
- **Green**: Positive values (target calories)
- **Red**: Deficit values
- **Gray**: Neutral information

## 🔍 SEO Features

### Meta Tags
- Title: "CUT - Weight Loss Calculator & Fasting Plan Generator"
- Description: Comprehensive description for search engines
- Keywords: weight loss, BMI, fasting, calories, etc.

### Open Graph (Facebook)
- og:type, og:url, og:title, og:description

### Twitter Cards
- twitter:card, twitter:title, twitter:description

### Structured Data (JSON-LD)
- Schema.org WebApplication markup
- Free pricing information
- Health application category

## ✨ User Experience Features

### Real-time Validation
- All inputs have min/max constraints
- Required field validation
- Type-safe number inputs

### Smooth Interactions
- Auto-scroll to results after calculation
- Smooth transitions
- Responsive button states

### Clear Information Hierarchy
1. Input form (primary action)
2. BMI comparison (immediate feedback)
3. Ideal weight (medical reference)
4. Timeline (goal setting)
5. Calorie plan (daily action)
6. Fasting plan (implementation strategy)

### Visual Feedback
- Color-coded BMI categories
- Large, readable numbers
- Icons for quick recognition
- Badges for status indicators

## 🚀 Performance

### Build Optimization
- Vite for fast builds
- Tree-shaking for smaller bundles
- Code splitting ready
- Gzipped assets

### Runtime Performance
- React 18 with concurrent features
- Minimal re-renders
- Efficient state management
- Class-based components for predictable behavior

## 🔒 Safety Features

### Medical Disclaimer
- Prominent placement at top
- Clear warning about consulting professionals
- Not a substitute for medical advice

### Safe Defaults
- Moderate activity level (1.55x multiplier)
- Conservative weight loss rate (0.5 kg/week)
- Medically-approved formulas
- Age-appropriate calculations

## 📊 Data Privacy

- **No data collection**: All calculations done client-side
- **No cookies**: Pure calculation tool
- **No tracking**: Except Google AdSense (user can block)
- **No storage**: No localStorage or sessionStorage used

