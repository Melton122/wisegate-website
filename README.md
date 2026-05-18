# GatePro - Professional Gate Services Website

A premium, production-ready React website for gate repair and installation services. Built with modern technologies and professional UI/UX design.

## Features

- **Modern React Architecture** - Built with React 18, React Router, and modern hooks
- **Premium UI/UX Design** - Clean, professional design with smooth animations
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion for scroll-triggered and interactive animations
- **Interactive Quote Estimator** - Multi-step price estimation tool
- **Portfolio Gallery** - Filterable project showcase with detailed modal views
- **Testimonials Carousel** - Auto-rotating customer reviews
- **FAQ Accordion** - Expandable frequently asked questions
- **Contact Form** - Professional contact form with validation
- **SEO Optimized** - React Helmet Async for meta tags and SEO
- **Performance Optimized** - Lazy loading and optimized assets

## Services Included

| Service | Starting Price |
|---------|---------------|
| Gate Motor Repair | From R800 |
| Motor Replacement | From R2,500 |
| Remote Programming | From R200 |
| New Installation | Free Quote |
| Sliding Gates | From R3,500 |
| Swing Gates | From R3,000 |
| Intercom Systems | From R1,500 |
| Access Control | From R2,000 |
| Maintenance Plans | From R350/month |

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll-triggered animations
- **React Helmet Async** - SEO management

## Project Structure

```
gate-services-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   ├── HeroSection.js
│   │   ├── ServicesSection.js
│   │   ├── WhyChooseUs.js
│   │   ├── PortfolioSection.js
│   │   ├── TestimonialsSection.js
│   │   ├── QuoteEstimator.js
│   │   ├── CTASection.js
│   │   └── FAQSection.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── Quote.js
│   │   ├── Portfolio.js
│   │   └── Contact.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Setup Instructions

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Create the project folder and navigate into it:**
```bash
mkdir gate-services-website
cd gate-services-website
```

2. **Create a new React app:**
```bash
npx create-react-app .
```

3. **Install dependencies:**
```bash
npm install react-router-dom framer-motion lucide-react react-intersection-observer react-helmet-async
```

4. **Install Tailwind CSS:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

5. **Copy all the files from this package into your project:**
   - Replace `src/` contents with the provided source files
   - Replace `public/index.html` with the provided HTML
   - Replace `package.json`, `tailwind.config.js`, and `postcss.config.js`

6. **Start the development server:**
```bash
npm start
```

7. **Build for production:**
```bash
npm run build
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- `primary` - Main brand color (default: blue)
- `secondary` - Accent color (default: orange)
- `dark` - Dark theme colors

### Content
- Update service prices in `src/components/ServicesSection.js` and `src/pages/Services.js`
- Modify testimonials in `src/components/TestimonialsSection.js`
- Update portfolio projects in `src/components/PortfolioSection.js` and `src/pages/Portfolio.js`
- Change contact details in `src/components/Footer.js` and `src/pages/Contact.js`

### Images
Replace placeholder images with your own:
- Hero background: Update URL in `HeroSection.js`
- Portfolio images: Update URLs in `PortfolioSection.js` and `Portfolio.js`

### SEO
Update meta tags in each page component using React Helmet:
- Page titles
- Meta descriptions
- Keywords

## Pages

1. **Home** (`/`) - Landing page with all sections
2. **Services** (`/services`) - Detailed service listings
3. **Quote** (`/quote`) - Quote request form
4. **Portfolio** (`/portfolio`) - Project gallery
5. **Contact** (`/contact`) - Contact form and info

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is provided as-is for commercial use.

## Support

For questions or customization requests, contact the developer.
