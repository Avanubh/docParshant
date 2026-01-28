# Prashant Heart Hospital Website

A modern, responsive website for Prashant Heart Hospital built with React, Tailwind CSS, and React Router.

## Features

- 🏥 Modern hospital website design
- 📱 Fully responsive across all devices
- ⚡ Fast loading with optimized images
- 🔍 SEO optimized with meta tags and sitemap
- 🎨 Beautiful UI with Tailwind CSS
- 🧭 React Router for smooth navigation
- 📞 WhatsApp integration for appointments
- 🖼️ Image galleries and doctor profiles
- 📋 Appointment booking system
- 🎥 Video content integration

## Tech Stack

- **Frontend**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.0
- **Routing**: React Router DOM 7.9.3
- **Icons**: FontAwesome
- **Animations**: Framer Motion
- **Build Tool**: React Scripts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/dr-pk.git
cd dr-pk
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`

5. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main branch

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Environment Variables for Production

Set these environment variables in your Vercel dashboard:

- `REACT_APP_HOSPITAL_NAME`: Hospital name
- `REACT_APP_WHATSAPP_NUMBER`: WhatsApp number for bookings
- `REACT_APP_SITE_URL`: Your production domain

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ErrorBoundary.js
│   ├── LoadingSpinner.js
│   ├── Icons.js
│   └── footer.js
├── pages/              # Page components
│   ├── HomePage.js
│   ├── AboutUsPage.js
│   ├── DoctorsPage.js
│   ├── OurServicesPage.js
│   ├── BookingPage.js
│   ├── GalleryPage.js
│   └── VideoPage.js
├── images/             # Static images
├── data/               # Data and constants
└── App.js              # Main app component
```

## Performance Optimizations

- ✅ Lazy loading for images
- ✅ Error boundaries for better UX
- ✅ Optimized bundle size
- ✅ SEO meta tags
- ✅ Proper caching headers
- ✅ Compressed images
- ✅ Code splitting with React Router

## SEO Features

- Meta tags for social sharing
- Structured data markup
- Sitemap.xml
- Robots.txt
- Proper heading hierarchy
- Alt texts for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For support, contact: prashantkashyap2804@gmail.com

---

Built with ❤️ for Prashant Heart Hospital