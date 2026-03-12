# EduPrime Global Academy

## Overview
A React + Vite single-page application for EduPrime Global Academy, an educational training institute. The site showcases programs, faculty, trainers, testimonials, and contact information.

## Tech Stack
- **Frontend**: React 18 with React Router DOM v6
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS, Bootstrap 5, styled-components
- **Animations**: Framer Motion, Animate.css
- **UI Components**: react-slick, react-slideshow-image, Swiper
- **Email**: EmailJS (@emailjs/browser)
- **Icons**: react-icons

## Project Structure
```
src/
  assets/         # Images and static data files (categoriesData, facultyData, programData, sliderImages)
  components/     # Reusable UI components (Navbar, Footer, HeroSection, etc.)
  pages/          # Page-level components (Home, About, Programs, Contact, etc.)
  services/       # emailService.jsx for contact form
  App.jsx         # Root component
  Router.jsx      # Route definitions
  main.jsx        # Entry point
  index.css       # Global styles
```

## Development
- **Run**: `npm run dev` (starts on port 5000)
- **Build**: `npm run build`

## Deployment
Configured as a **static** site deployment:
- Build command: `npm run build`
- Public directory: `dist`

## Replit Configuration
- Vite dev server runs on `0.0.0.0:5000` with `allowedHosts: true` for proxy compatibility
- Workflow: "Start application" → `npm run dev`
