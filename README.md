# My Project

A modern, responsive website built with clean CSS architecture and vanilla JavaScript.

## Project Structure

```
project-root/
│
├── index.html                 # Main HTML file
│
├── assets/
│   ├── css/
│   │   ├── variables.css      # CSS variables (colors, fonts, spacing)
│   │   ├── global.css         # Global resets & base styles
│   │   ├── layout.css         # Reusable layout classes
│   │   ├── components.css     # Buttons, cards, forms etc.
│   │   ├── about.css          # About page-specific styles
│   │   ├── contact.css        # Contact page-specific styles
│   │   └── style.css          # Main CSS file (imports all partials)
│   │
│   ├── js/
│   │   └── main.js            # Main JavaScript file
│   │
│   ├── images/
│   │   ├── logo.png           # Project logo
│   │   └── banner.jpg         # Hero banner image
│   │
│   └── fonts/
│       └── custom-font.woff2  # Custom font file
│
└── README.md                  # Project documentation
```

## Features

- **Responsive Design**: Mobile-first approach with flexible grid system
- **Modern CSS Architecture**: Organized CSS with variables, components, and utilities
- **Interactive JavaScript**: Form validation, smooth scrolling, animations
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized loading with preload hints
- **Cross-browser Compatible**: Works on all modern browsers

## CSS Architecture

The project uses a modular CSS architecture with the following structure:

### Variables (`variables.css`)
- CSS custom properties for colors, fonts, spacing, and layout
- Centralized design system for consistency
- Easy theming and customization

### Global Styles (`global.css`)
- CSS reset and base styles
- Typography hierarchy
- Default element styling

### Layout (`layout.css`)
- Grid system and flexbox utilities
- Container and spacing classes
- Responsive design helpers

### Components (`components.css`)
- Reusable UI components
- Buttons, cards, forms, navigation
- Alert and notification styles

### Page-specific Styles
- `about.css`: About page layout and components
- `contact.css`: Contact page forms and styling

## JavaScript Features

The main JavaScript file (`main.js`) includes:

- **Navigation**: Mobile menu toggle and smooth scrolling
- **Form Handling**: Validation and submission
- **Animations**: Intersection Observer for scroll animations
- **Scroll Effects**: Parallax and back-to-top button
- **Utilities**: Notification system and helper functions

## Getting Started

1. **Clone or download** the project files
2. **Add your assets**:
   - Replace `logo.png` with your project logo
   - Replace `banner.jpg` with your hero image
   - Add `custom-font.woff2` if using custom fonts
3. **Customize**:
   - Update CSS variables in `variables.css`
   - Modify content in `index.html`
   - Adjust JavaScript functionality as needed
4. **Open** `index.html` in your browser

## Customization

### Colors and Typography
Edit the CSS variables in `assets/css/variables.css`:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --font-primary: 'Your Font', Arial, sans-serif;
  /* ... other variables */
}
```

### Layout
Modify the grid system and spacing in `assets/css/layout.css`

### Components
Customize buttons, cards, and other components in `assets/css/components.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## Performance Tips

1. **Optimize Images**: Compress and use appropriate formats
2. **Minify CSS/JS**: Use build tools for production
3. **Use CDN**: Serve static assets from a CDN
4. **Enable Compression**: Configure gzip/brotli compression

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If you have any questions or need help, please open an issue or contact us at hello@example.com.
