# Portfolio & Resume

A modern, responsive portfolio website built with HTML, CSS, and vanilla JavaScript. Showcase your professional profile, skills, and projects in a clean and professional manner.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Easy to Customize**: Simple structure makes it easy to update with your information
- **Fast Performance**: Lightweight HTML/CSS/JS with no dependencies
- **SEO Friendly**: Proper semantic HTML and meta tags
- **GitHub Hosted**: Perfect for hosting on GitHub Pages

## Project Structure

```
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   └── images/            # Store your project images here
└── README.md              # This file
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Customize Your Information

Edit `index.html` and replace the following:
- Your name (in navbar and hero section)
- Your professional title
- About section content
- Skills list
- Project information and links
- Contact information and links

### 3. Add Your Images

Place your project screenshots in `assets/images/` folder:
- `project1.png` - First project screenshot
- `project2.png` - Second project screenshot
- Add more as needed

### 4. Run Locally (Optional)

You can open the `index.html` file directly in your browser, or use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then visit: http://localhost:8000
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Pages (Recommended)

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Select branch: `main` and folder: `/ (root)`
5. Click "Save"
6. Your site will be available at: `https://yourusername.github.io/portfolio`

### Option 2: Custom Domain

If you want to use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Follow GitHub Pages documentation for more details

## Customization Guide

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0066cc;      /* Change this to your brand color */
    --secondary-color: #f0f4f8;
    --text-color: #333;
    --light-text: #666;
}
```

### Typography

Modify font families in `css/style.css`:

```css
body {
    font-family: /* Replace with your preferred font */
}
```

### Add More Sections

Create new sections by:
1. Adding HTML in `index.html`
2. Adding corresponding CSS in `css/style.css`
3. Following the existing class naming pattern

### Smooth Scrolling

Already enabled in CSS. Navigation links automatically scroll smoothly to sections.

## Best Practices

- **Keep it Simple**: Don't overcomplicate - simple is more professional
- **Update Content**: Keep your projects and skills current
- **Responsive**: Test on mobile devices regularly
- **Performance**: Keep image file sizes optimized
- **Accessibility**: Use semantic HTML and proper alt text for images

## SEO Tips

1. Update the `<title>` tag with your name
2. Add your name and keywords throughout the content
3. Use proper heading hierarchy (h1, h2, h3)
4. Optimize image alt text
5. Keep structure clean and semantic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before adding to `assets/images/`
   - Use tools like TinyPNG or ImageOptim
   - Keep images under 100KB each

2. **Lazy Loading**: Browser automatically lazy loads images

3. **Caching**: GitHub Pages handles caching automatically

## Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Verify file names match in `index.html`

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check CSS file path in `index.html`
- Verify CSS file is in `css/` folder

**GitHub Pages not updating?**
- Wait 5-10 minutes for changes to deploy
- Check your repository settings under "Pages"
- Verify branch is set to `main`

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML/CSS Tutorial](https://www.w3schools.com/)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, feel free to open an issue in your repository or reach out directly.

---

**Ready to deploy?** Update your information and push to GitHub!

