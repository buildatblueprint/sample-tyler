# Builder Next Door - Static Website

A fully static HTML/CSS/JavaScript website for Tyler Roberts' Builder Next Door coaching business. Ready for GitHub Pages deployment with no build tools required.

## 🚀 Quick Deploy to GitHub Pages

### Option 1: Direct Upload
1. Create a new repository on GitHub
2. Upload all files from this folder to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main" → "/ (root)"
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Git Commands
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 📁 File Structure

```
builder-next-door-static/
├── index.html          # Main website file
├── style.css           # All styles and responsive design
├── script.js           # Interactive functionality
├── assets/             # Images and media files
│   └── images/         # Website images
└── README.md           # This file
```

## ✨ Features Included

### 🎨 Design & Styling
- **Green color scheme** (#22c55e) with professional typography
- **Door emoji branding** (🚪) throughout the site
- **Responsive design** that works on all devices
- **Smooth animations** and hover effects
- **Editorial layout** with high visual contrast

### 📱 Responsive Sections
- **Hero Section** - Tyler's introduction with availability status
- **About Section** - Background story and value proposition
- **Services Section** - 4 service offerings with pricing
- **Resources Section** - Free guide with email capture
- **Contact Section** - Contact form with FAQ

### 🤖 Interactive Features
- **Smart Chatbot** - Guides users to the right services
- **Contact Forms** - Email capture and contact forms
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Navigation with active link highlighting
- **Form Validation** - Client-side validation with error messages

### 🔧 Technical Features
- **No Build Tools Required** - Pure HTML/CSS/JavaScript
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Minimal dependencies
- **Accessibility** - Keyboard navigation and focus states
- **Cross-Browser Compatible** - Works in all modern browsers

## 🎯 Customization Guide

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --rich-black: #222120;
    --stone-gray: #8a8684;
    --vibrant-green: #22c55e;
    --light-beige: #f5f5f0;
    --warm-off-white: #f7f0ea;
}
```

### Content
- **Business Info**: Update contact details in the Contact section
- **Services**: Modify pricing and descriptions in the Services section
- **About Content**: Edit Tyler's story in the About section
- **Chatbot Responses**: Customize responses in `script.js`

### Images
- Replace images in the `assets/images/` folder
- Update image references in `index.html`
- Optimize images for web (recommended: WebP format, <500KB each)

## 🌐 Hosting Options

### GitHub Pages (Free)
- Perfect for static sites
- Automatic HTTPS
- Custom domain support
- Easy updates via Git

### Other Free Options
- **Netlify**: Drag & drop deployment
- **Vercel**: Git-based deployment
- **Surge.sh**: Command-line deployment

### Traditional Hosting
- Upload files via FTP to any web server
- Works with shared hosting, VPS, or dedicated servers

## 📊 Analytics Setup

To add Google Analytics, insert this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📧 Form Integration

The forms currently show success messages but don't send emails. To make them functional:

### Option 1: Formspree (Recommended)
1. Sign up at [formspree.io](https://formspree.io)
2. Update form action attributes:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
1. Add `netlify` attribute to forms:
```html
<form netlify>
```

### Option 3: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Add EmailJS script and update form handlers in `script.js`

## 🔧 Development

### Local Development
1. Open `index.html` in a web browser
2. Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (if you have it)
npx serve .
```

### Making Changes
1. Edit HTML in `index.html`
2. Update styles in `style.css`
3. Modify functionality in `script.js`
4. Test in multiple browsers
5. Commit and push to update live site

## 🎨 Design System

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 700-800 weight
- **Body**: 400-500 weight
- **Accent**: Green (#22c55e)

### Spacing
- **Sections**: 80px padding (60px on mobile)
- **Cards**: 32px padding
- **Buttons**: 12px vertical, 24px horizontal

### Breakpoints
- **Desktop**: 1200px max-width
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## 🚀 Performance Tips

### Image Optimization
- Use WebP format when possible
- Compress images to <500KB
- Use appropriate dimensions (no larger than needed)

### Loading Speed
- Minimize external dependencies
- Use system fonts as fallbacks
- Optimize CSS and JavaScript

### SEO Optimization
- Update meta descriptions for each page
- Add structured data markup
- Optimize images with alt text
- Use semantic HTML elements

## 📱 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari, Chrome Mobile

## 🆘 Troubleshooting

### Common Issues

**Forms not working?**
- Check form action attributes
- Ensure proper form integration setup
- Test with browser developer tools

**Chatbot not responding?**
- Check browser console for JavaScript errors
- Ensure all script dependencies are loaded

**Mobile menu not working?**
- Verify JavaScript is enabled
- Check for console errors

**Images not loading?**
- Verify image paths are correct
- Check file names match exactly (case-sensitive)

### Getting Help
- Check browser developer console for errors
- Validate HTML at [validator.w3.org](https://validator.w3.org)
- Test CSS at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

## 📄 License

This website template is created for Tyler Roberts' Builder Next Door business. Customize as needed for your use case.

---

**Ready to deploy?** Just upload these files to GitHub and enable Pages in your repository settings!

