# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AquaScene is a professional aquascaping business showcase website built with Next.js, React, TypeScript, and Tailwind CSS. The project demonstrates multiple design themes for different target audiences, featuring premium aquascaping products, services, and partnerships.

## Project Status - COMPLETED CORE FEATURES ✅

The website is now fully functional with the following implemented features:

### ✅ Completed Components:
- **ThemeProvider**: Manages color schemes and CSS custom properties
- **ThemeSwitcher**: Fixed header navigation with theme selection
- **MinimalistDesign**: Clean professional layout with Green Aqua branding
- **ModernDesign**: Dark mode e-commerce with advanced filtering
- **NatureDesign**: Immersive aquatic experience with flowing animations
- **PortfolioDesign**: Photography-focused showcase with project galleries
- **BusinessDesign**: Corporate B2B layout with Hungarian localization
- **Main Page (page.tsx)**: Theme-aware routing and component rendering

### ✅ Data Structure:
- **Product Database**: Real Green Aqua inspired products (soil, stones, fertilizers, plants, fish)
- **Theme Configuration**: 5 distinct design themes with color schemes
- **TypeScript Types**: Complete type definitions for products, themes, contacts, and projects

### ✅ Technical Implementation:
- **Next.js 14**: App router with server/client components
- **Tailwind CSS**: Custom color palette, animations, responsive design
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## Design Themes Overview

### 1. Minimalist Professional
- Clean white background with Green Aqua orange accents
- Professional typography and grid layouts
- Business-focused messaging

### 2. Modern E-commerce
- Dark mode with bright product highlights
- Advanced filtering and search functionality
- Card-based layouts with shopping features

### 3. Nature Immersive
- Deep aqua/teal colors with organic layouts
- Full-screen aquarium backgrounds
- Flowing animations and water-inspired effects

### 4. Portfolio Showcase
- Photography-first approach with elegant galleries
- Before/after project showcases
- Blog integration and process documentation
- Personal branding focus

### 5. Hungarian Business Focus
- Sophisticated corporate aesthetic
- Bilingual support (English/Hungarian)
- Partnership-focused messaging
- B2B oriented contact forms

## Product Focus - AQUARIUMS NOT TERRARIUMS

**IMPORTANT**: This project is specifically about **aquascaping** and **aquariums** (underwater planted tanks), NOT terrariums (terrestrial plant containers). All designs, products, and content focus on:

- Underwater aquatic plants (Anubias, Monte Carlo, etc.)
- Aquarium substrates and soils
- Aquatic hardscape materials (stones, driftwood)
- Aquarium fertilizers and CO2 systems
- Freshwater fish and aquatic animals
- Underwater photography and aquascaping techniques

## AI Agent Guidance

When working on this project, future AI agents should:

### Focus Areas:
1. **Aquarium-Specific Content**: Always maintain focus on underwater aquascaping, not terrestrial plants
2. **Visual Polish**: Enhance image placeholders with real aquascaping imagery
3. **Interactive Features**: Add animations, hover effects, and smooth transitions
4. **Responsive Optimization**: Test and improve mobile/tablet experiences
5. **Performance**: Optimize loading times and bundle sizes

### Enhancement Opportunities:
1. **Image Integration**: Replace placeholder divs with actual aquascaping photos
2. **Animation Improvements**: Add more sophisticated water-flow effects and transitions
3. **Form Functionality**: Implement actual form submission and validation
4. **Product Integration**: Connect to real Green Aqua API or create detailed product pages
5. **Blog System**: Expand blog functionality with full CMS integration
6. **Language System**: Complete Hungarian localization with proper i18n
7. **E-commerce Features**: Add shopping cart, checkout, and user accounts

### Technical Considerations:
1. **Image Optimization**: Use Next.js Image component for aquarium photos
2. **SEO Enhancement**: Add proper meta tags and structured data
3. **Accessibility**: Ensure WCAG compliance for all interactive elements
4. **Performance Monitoring**: Implement Core Web Vitals optimization
5. **Mobile Experience**: Focus on touch interactions and mobile-first design

### Content Guidelines:
- Emphasize the artistry and technical aspects of aquascaping
- Highlight professional-grade products and services
- Maintain focus on underwater ecosystems and aquatic life
- Use terminology specific to aquariums: substrate (not soil), aquatic plants (not houseplants), fish tanks (not planters)

## File Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (main application entry)
├── components/
│   ├── ThemeProvider.tsx
│   ├── ThemeSwitcher.tsx
│   └── designs/
│       ├── MinimalistDesign.tsx
│       ├── ModernDesign.tsx
│       ├── NatureDesign.tsx
│       ├── PortfolioDesign.tsx
│       └── BusinessDesign.tsx
├── data/
│   ├── products.ts
│   └── themes.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## Development Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

The project is ready for further enhancement and can serve as a professional showcase for aquascaping businesses targeting multiple market segments.