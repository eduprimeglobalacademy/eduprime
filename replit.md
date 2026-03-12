# EduPrime Global Academy

## Overview
A React + Vite single-page application for EduPrime Global Academy, an educational training institute. The site showcases programs, faculty, trainers, testimonials, and contact information with a modern navy/gold design language.

## Tech Stack
- **Frontend**: React 18 with React Router DOM v6
- **Build Tool**: Vite 5 (port 5000, host 0.0.0.0)
- **Styling**: Tailwind CSS (custom navy/bronze palette), Inter font from Google Fonts
- **Animations**: Framer Motion
- **UI Libraries**: react-icons (HeroIcons, FontAwesome)
- **Email**: EmailJS (@emailjs/browser)

## Design System
- **Primary**: navy-900 (#1e3a5f) — backgrounds, headers, dark sections
- **Accent**: amber-500 (#f59e0b) — CTAs, highlights, decorative elements
- **Neutral**: slate-* — body text and subtle backgrounds
- **Font**: Inter (weights 300–900) + Playfair Display for headings

## Project Structure
```
src/
  assets/          # Images, facultyData.jsx, programData.jsx, sliderImages, gallery/
  components/      # Navbar, Footer, HeroSection, Marquee, ProgramsSection,
                   # TrainersSection, FacultyCard, TestimonialsSection,
                   # PopupComponent, Layout
  pages/           # Home, About, Programs, Contact, ProgramDetails,
                   # ImageSlider (Gallery), CollegetoCorporate, EmployeeSkills,
                   # ABoutEdupiehome
  services/        # emailService.jsx
  App.jsx / Router.jsx / main.jsx / index.css
```

## Key Architecture
- **facultyData.jsx**: Array of `{ name, position, image, bio }` objects
- **programData.jsx**: Object map of `id -> { name, description, image, path, videoUrl, isTopProgram }`
- **Layout**: Navbar (fixed top) + Outlet + Footer; main content has `pt-20` to clear navbar

## Development
- **Run**: `npm run dev` → http://localhost:5000
- **Build**: `npm run build`

## Deployment
Configured as **static** site:
- Build: `npm run build`
- Public dir: `dist`
