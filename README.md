# Dr. Obinna Nwokonkwo - Scientific Consulting Landing Page

A modern, responsive landing page for Dr. Obinna Nwokonkwo's independent scientific consulting firm. Built with React, Tailwind CSS, and modern web technologies to showcase professional services and expertise.

## 🚀 Features

### Design & UX
- **Ultra-modern, minimalist design** with clean typography and plenty of white space
- **Professional color palette**: White, charcoal, navy, with emerald accent color
- **Fully responsive** design optimized for mobile and desktop
- **Smooth animations** and hover effects for enhanced user experience
- **Accessibility-focused** with proper semantic HTML and ARIA labels

### Sections Included
1. **Hero Section** - Compelling headline, subheadline, and dual CTAs
2. **Industries Served** - 12 industry badges with icons
3. **Core Services** - 6 service cards with detailed features
4. **Process Flow** - 5-step methodology (Define → Design → Execute → Deliver → Support)
5. **Case Studies** - 4 detailed project examples with measurable results
6. **Why Choose Us** - 4 pillars explaining competitive advantages
7. **Pricing Tiers** - 3 engagement levels with transparent pricing
8. **Client Testimonials** - Interactive slider with client feedback
9. **Pitch Deck** - Downloadable resources and presentation materials
10. **Consultant Bio** - Professional credentials and expertise
11. **Contact Form** - Comprehensive inquiry form with validation
12. **Footer** - Social links and legal information

### Technical Features
- **React 18** with functional components and hooks
- **Tailwind CSS** for utility-first styling
- **Lucide React** for consistent iconography
- **Framer Motion** for smooth animations
- **Responsive navigation** with mobile menu
- **Form validation** and submission handling
- **Smooth scrolling** between sections
- **SEO optimized** with proper meta tags

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd consulting_landing_page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the landing page.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── Industries.js   # Industries served
│   ├── Services.js     # Core services
│   ├── Process.js      # Process flow
│   ├── CaseStudies.js  # Case studies
│   ├── WhyChooseUs.js  # Competitive advantages
│   ├── Pricing.js      # Pricing tiers
│   ├── Testimonials.js # Client testimonials
│   ├── PitchDeck.js    # Resources section
│   ├── ConsultantBio.js # About section
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer component
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Charcoal**: Professional, sophisticated grays
- **Navy**: Trustworthy, corporate blues
- **Emerald**: Accent color for CTAs and highlights

### Content
All content is easily customizable by editing the component files. Key areas to update:
- Personal information in `ConsultantBio.js`
- Services in `Services.js`
- Case studies in `CaseStudies.js`
- Pricing in `Pricing.js`
- Contact information throughout

### Styling
- Custom CSS classes are defined in `src/index.css`
- Component-specific styles use Tailwind utility classes
- Responsive breakpoints follow Tailwind's default system

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` includes:
- Custom color palette
- Custom fonts (Inter, Merriweather)
- Custom animations
- Responsive utilities

### Dependencies
Key dependencies in `package.json`:
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `tailwindcss`: ^3.3.3
- `lucide-react`: ^0.263.1
- `framer-motion`: ^10.16.4

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your repository to Vercel
2. Vercel will automatically detect React settings
3. Deploy with default settings

### Other Platforms
The build folder contains static files that can be deployed to any web hosting service.

## 📄 License

This project is created for Dr. Obinna Nwokonkwo's scientific consulting business. All rights reserved.

## 🤝 Support

For questions or support regarding this landing page, please contact the development team or Dr. Nwokonkwo directly.

---

**Built with ❤️ for Dr. Obinna Nwokonkwo's Scientific Consulting** 