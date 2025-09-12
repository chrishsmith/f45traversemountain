# F45 Landing Page Template

A modular, reusable landing page template for F45 fitness promotions. This template is built with HTML, CSS, and minimal JavaScript for easy customization and maintenance.

## Project Structure

```
F45/
├── assets/            # Images, icons, and other static assets
├── components/        # Reusable HTML components (optional)
├── css/
│   ├── reset.css      # CSS reset and base styles
│   ├── variables.css  # CSS variables for consistent styling
│   ├── main.css       # Main styles and utilities
│   ├── responsive.css # Responsive design styles
│   └── components/    # Component-specific styles
│       ├── hero.css
│       ├── lead-form.css
│       ├── testimonial.css
│       ├── features.css
│       ├── countdown.css
│       └── faq.css
├── js/
│   ├── form-validation.js  # Form validation and submission
│   ├── countdown-timer.js  # Countdown timer functionality
│   └── faq-accordion.js    # FAQ accordion functionality
└── index.html         # Main HTML file
```

## Components

The landing page is built with the following modular components:

### 1. Header
- Logo and navigation links
- Easy to customize and modify

### 2. Hero Section
- Main headline and subheadline
- Benefits list
- Rating information
- Lead capture form

### 3. Lead Form
- Input fields for name, phone, and email
- Form validation
- Success message display
- Countdown timer

### 4. Testimonials
- Customer testimonial with photo/avatar
- Rating stars
- Results information
- Stats section with key metrics

### 5. Features
- Three-column feature grid
- Icon, title, description, and benefit for each feature
- Hover animation

### 6. What's Included
- List of included items in the offer
- Money-back guarantee section

### 7. CTA Section
- Second lead capture form
- Urgency messaging
- Gradient background

### 8. FAQ Section
- Accordion-style FAQ items
- Expandable/collapsible answers

### 9. Footer
- Logo, contact information
- Social links
- Legal links and copyright

## Customization Guide

### Changing Colors

1. Edit the CSS variables in `css/variables.css`:
   ```css
   :root {
       --color-primary: #ff4500;  /* Change to your brand color */
       --color-secondary: #1a1a1a;
       /* Other variables */
   }
   ```

### Replacing Content

1. **Text Content**: Simply edit the text in `index.html`
2. **Images**: Replace files in the `assets/` directory and update paths in HTML if needed
3. **Form Submission**: Update the form action in `index.html` and modify `js/form-validation.js` to handle your specific form submission needs

### Adding/Removing Components

Each component is modular and can be added, removed, or rearranged:

1. To remove a component, delete its section in `index.html`
2. To add a new component, copy a similar component structure and modify as needed
3. To rearrange components, cut and paste sections in `index.html`

### Modifying Styles

1. Global styles are in `css/main.css`
2. Component-specific styles are in separate files in `css/components/`
3. Responsive breakpoints are in `css/responsive.css`

## JavaScript Functionality

### Form Validation
- Input validation for required fields, email format, and phone format
- Success message display
- Form submission handling

### Countdown Timer
- Dynamically calculates time remaining
- Persists end time in localStorage
- Updates in real-time

### FAQ Accordion
- Expands/collapses FAQ items
- Only one item can be open at a time

## Browser Compatibility

This template is designed to work in all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers on iOS and Android

## Performance Optimization

- Minimal JavaScript
- CSS organized for efficient loading
- No external dependencies required
- Optimized for fast loading and rendering
