# Overview

This is a static website for "Polk" - an interior design company website built with HTML, CSS, JavaScript, and Bootstrap. The project includes multiple pages showcasing different aspects of the business including home, about, company information, design portfolio, news, and contact sections. The website features a modern responsive design with Google AdSense integration for monetization.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Multi-page Static Website**: Traditional HTML structure with separate pages for different sections (index.html, about.html, company.html, design.html, news.html, contact.html)
- **Bootstrap Framework**: Uses Bootstrap 4.1.0 for responsive grid system and UI components
- **CSS Organization**: Modular CSS approach with separate files for different concerns:
  - Main styling (style.css)
  - Bootstrap framework
  - Third-party plugins (carousel, scrollbar, animations)
  - Responsive design (responsive.css)
- **JavaScript Libraries**: Multiple jQuery plugins for enhanced functionality including custom scrollbars, carousels, form validation, and animations

## Backend Architecture
- **Express.js Server**: Simple Node.js server using Express for static file serving
- **Static File Serving**: All HTML, CSS, JS, and image assets served directly from the file system
- **SPA-style Routing**: Fallback to index.html for any unmatched routes, allowing for client-side navigation

## Design Patterns
- **Component-based CSS**: Separate CSS files for different UI components and functionality
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with jQuery plugins
- **Mobile-first Responsive Design**: CSS media queries and Bootstrap grid for cross-device compatibility

## Asset Management
- **Local Dependencies**: All CSS and JavaScript libraries are bundled locally rather than using CDNs
- **Image Assets**: Static images stored in images/ directory
- **Font Integration**: Google Fonts (Montserrat, Poppins) and Font Awesome icons

# External Dependencies

## Third-party Services
- **Google AdSense**: Integrated advertising platform (ca-pub-5338931605037261)
- **Google Fonts**: External font loading for Montserrat and Poppins typefaces

## JavaScript Libraries
- **jQuery 3.3.1**: Core JavaScript library for DOM manipulation
- **Bootstrap 4.1.0**: Frontend CSS framework with JavaScript components
- **Popper.js**: Tooltip and popover positioning library
- **jQuery Plugins**: Various plugins for enhanced functionality:
  - Custom scrollbar (mCustomScrollbar)
  - Form validation
  - Image carousels and sliders
  - Animation effects
  - Menu systems

## CSS Frameworks
- **Bootstrap**: Responsive grid system and component library
- **Font Awesome**: Icon font library
- **Normalize.css**: Cross-browser CSS reset
- **Animate.css**: CSS animation library

## Development Dependencies
- **Express.js**: Web server framework for Node.js
- **Node.js**: Runtime environment for the development server