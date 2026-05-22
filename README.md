# 🗺️ AstroMaps

A cutting-edge interactive astronomical mapping application built with modern web technologies. AstroMaps provides real-time celestial navigation, star charting, and interactive constellation exploration for astronomy enthusiasts and professionals.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Language Composition](https://img.shields.io/badge/JavaScript-85.7%25-yellow.svg)
![Language Composition](https://img.shields.io/badge/CSS-6%25-blue.svg)
![Language Composition](https://img.shields.io/badge/Python-5%25-green.svg)
![Language Composition](https://img.shields.io/badge/HTML-3.3%25-red.svg)

---

## 🚀 Quick Links

- **Live Application:** [AstroMaps Web App]((https://ragastromaps.vercel.app/))
- **GitHub Repository:** [Rosenmunda/astromaps](https://github.com/Rosenmunda/astromaps)
- **Documentation:** [Full Setup Guide](#-installation--setup)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ⭐ Features

### 🌟 Celestial Navigation
- 🗺️ **Interactive Star Map** - Real-time, fully zoomable and pannable celestial sphere
- 🌌 **Constellation Mapping** - Explore 88 official constellations with detailed information
- ⭐ **Star Catalog** - Access comprehensive star data with magnitude and coordinates
- 🔭 **Deep Sky Objects** - Locate galaxies, nebulae, and star clusters

### 🎯 User Experience
- 📍 **Location-Based Viewing** - Customize observations based on your geographic location
- ⏰ **Time Navigation** - Travel through time to see how the night sky changes
- 🎨 **Customizable Themes** - Dark mode, light mode, and custom color schemes
- 🔍 **Advanced Search** - Find celestial objects by name, coordinates, or type

### 📊 Data & Analytics
- 📈 **Object Information** - Detailed data for stars, planets, and deep-sky objects
- 🌍 **Geographic Integration** - Location services for accurate sky orientation
- 💾 **Data Persistence** - Save favorite locations and observation sessions
- 📱 **Responsive Design** - Seamless experience across desktop and mobile devices

### 🛠️ Developer Features
- 🔌 **REST API** - Backend API for astronomical data retrieval
- 🐍 **Python Integration** - Backend calculations for astronomical computations
- 📡 **Real-time Updates** - Dynamic data fetching and caching
- 🔐 **Error Handling** - Robust error management and user feedback

---

## 🛠️ Tech Stack

### Frontend
| Technology | Percentage | Purpose |
|-----------|-----------|---------|
| **JavaScript** | 85.7% | Core application logic, interactive features, API integration |
| **CSS** | 6% | Styling, animations, responsive layouts |
| **HTML** | 3.3% | Semantic markup and structure |

### Full Stack
| Layer | Technology | Details |
|-------|-----------|---------|
| **Frontend Framework** | Vanilla JavaScript | Lightweight, performant SPA without framework overhead |
| **Styling** | CSS3 | Modern CSS with flexbox, grid, and animations |
| **Backend** | Python/Node.js | Server-side astronomical calculations and data processing |
| **APIs** | RESTful API | Data endpoints for celestial objects and coordinates |
| **Database** | MongoDB/JSON | Flexible data storage for astronomical datasets |
| **Deployment** | Vercel | Automatic deployment and CI/CD pipeline |

---

## 📂 Project Structure

```text
astromaps/
├── 📄 index.html                  # Main application entry point
├── 📄 README.md                   # Project documentation (this file)
├── 📁 src/
│   ├── 📁 js/
│   │   ├── 📄 app.js              # Main application logic
│   │   ├── 📄 starmap.js          # Star mapping functionality
│   │   ├── 📄 constellations.js   # Constellation data & handling
│   │   ├── 📄 coordinates.js      # Coordinate transformations
│   │   ├── 📄 api.js              # API integration functions
│   │   └── 📄 utils.js            # Utility helper functions
│   ├── 📁 css/
│   │   ├── 📄 main.css            # Main stylesheet
│   │   ├── 📄 theme.css           # Theme and color variables
│   │   ├── 📄 responsive.css      # Mobile-first responsive styles
│   │   └── 📄 animations.css      # Animations and transitions
│   ├── 📁 python/
│   │   ├── 📄 calculations.py     # Astronomical calculations
│   │   ├── 📄 coordinates.py      # Coordinate system utilities
│   │   └── 📄 data_processor.py   # Data processing utilities
│   └── 📁 data/
│       ├── 📄 stars.json          # Star catalog data
│       ├── 📄 constellations.json # Constellation definitions
│       └── 📄 objects.json        # Deep-sky objects catalog
├── 📁 assets/
│   ├── 📁 images/                 # App icons and graphics
│   ├── 📁 fonts/                  # Custom fonts
│   └── 📁 icons/                  # SVG icons for UI
├── 📁 server/
│   ├── 📄 server.js               # Express/Node server setup
│   ├── 📄 routes.js               # API routes
│   ├── 📄 package.json            # Node dependencies
│   └── 📄 .env                    # Environment variables (not committed)
├── 📄 .gitignore                  # Git ignore rules
├── 📄 package.json                # Project metadata
└── 📄 vercel.json                 # Vercel deployment config
```

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** v14 or higher
- **npm** or **yarn** package manager
- **Python** 3.7+ (for backend calculations)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- **Git** (for cloning)

### Frontend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Rosenmunda/astromaps.git
   cd astromaps
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Access Application**
   - Navigate to `http://localhost:3000` in your browser
   - The app will hot-reload on code changes

5. **Build for Production**
   ```bash
   npm run build
   # or
   yarn build
   ```

### Backend Setup (Python)

1. **Navigate to Backend Directory**
   ```bash
   cd server
   ```

2. **Create Virtual Environment**
   ```bash
   python -m venv venv
   
   # Activate virtual environment
   # On macOS/Linux:
   source venv/bin/activate
   
   # On Windows:
   venv\Scripts\activate
   ```

3. **Install Python Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment**
   ```bash
   # Create .env file
   echo "FLASK_ENV=development" > .env
   echo "DEBUG=True" >> .env
   echo "SECRET_KEY=your_secret_key" >> .env
   ```

5. **Run Python Server**
   ```bash
   python app.py
   # or
   flask run
   ```

6. **Server Running On**
   - API available at `http://localhost:5000`

### Docker Setup (Optional)

1. **Build Docker Image**
   ```bash
   docker build -t astromaps .
   ```

2. **Run Container**
   ```bash
   docker run -p 3000:3000 -p 5000:5000 astromaps
   ```

---

## 📖 Usage Guide

### For Casual Stargazers

1. **Open the Application**
   - Go to [AstroMaps Web App](https://astromaps.vercel.app/)
   - Allow location access for accurate sky orientation

2. **Navigate the Star Map**
   - **Zoom:** Use mouse wheel or pinch on mobile
   - **Pan:** Click and drag to move around the sky
   - **Rotate:** Right-click and drag to rotate view

3. **Search for Objects**
   - Use the search bar to find constellations, stars, or planets
   - Click results to center map on that object
   - View detailed information about selected objects

4. **Set Your Location**
   - Click on location settings
   - Enter your coordinates or allow GPS access
   - Adjust observation time and date
   - View accurate sky for your location and time

### For Astronomy Enthusiasts

1. **Advanced Observations**
   - Filter objects by magnitude, type, or distance
   - View detailed coordinates (RA/Dec, Alt/Az)
   - Export observation data for your records

2. **Constellation Exploration**
   - Explore all 88 constellations
   - Learn mythological backgrounds
   - View associated deep-sky objects
   - Access object catalog for each constellation

3. **Custom Sessions**
   - Save favorite observation locations
   - Create observation logs
   - Compare sky views across different times
   - Track celestial events

### For Developers

1. **API Integration**
   - Use the REST API for astronomical data
   - Available endpoints for stars, constellations, objects
   - Authentication via API keys

2. **Contributing Data**
   - Submit new celestial object data
   - Improve coordinate accuracy
   - Add new constellations or regions

3. **Custom Development**
   - Fork and clone the repository
   - Add new features or visualizations
   - Submit pull requests for improvements

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Frontend Configuration
REACT_APP_API_URL=http://localhost:5000
REACT_APP_DEBUG=false
REACT_APP_VERSION=1.0.0

# Backend Configuration
FLASK_ENV=production
DEBUG=False
SECRET_KEY=your_secure_secret_key_here

# Database
DATABASE_URL=your_mongodb_url
MONGODB_NAME=astromaps

# API Keys (if using external services)
GOOGLE_MAPS_API_KEY=your_api_key
```

### Theme Customization

Edit `src/css/theme.css` to customize colors:

```css
:root {
  /* Primary Colors */
  --primary-color: #1a1a2e;
  --secondary-color: #16213e;
  --accent-color: #0f3460;
  
  /* Star Colors */
  --star-color-default: #ffffff;
  --star-color-bright: #ffeb3b;
  --star-color-dim: #9e9e9e;
  
  /* UI Colors */
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border-color: #444444;
}
```

---

## 🤝 Contributing

We welcome contributions from the community! Follow these steps:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/astromaps.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit Changes**
   ```bash
   git commit -m "Add AmazingFeature with description"
   ```

5. **Push to Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open Pull Request**
   - Describe changes clearly in PR description
   - Link related issues
   - Provide screenshots/demo if UI changes
   - Wait for review and feedback

### Contribution Guidelines
- Follow existing code conventions and style
- Write clear, descriptive commit messages
- Test changes before submitting PR
- Update documentation as needed
- Keep PRs focused and reasonably sized
- Add unit tests for new features

### Areas for Contribution
- 🌟 New celestial object data
- 🎨 UI/UX improvements
- 🚀 Performance optimization
- 🐛 Bug fixes and issue resolution
- 📚 Documentation improvements
- 🌍 Localization/internationalization

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect GitHub Repository**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment**
   - Add environment variables in Vercel dashboard
   - Set production environment values

3. **Deploy**
   - Automatic deployment on main branch push
   - Preview deployments for pull requests

4. **Monitor**
   - View deployment logs and analytics
   - Access at your custom domain

### Deploy to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Deploy with Docker

```bash
# Build image
docker build -t your-registry/astromaps:latest .

# Push to registry
docker push your-registry/astromaps:latest

# Run container
docker run -p 3000:3000 -p 5000:5000 your-registry/astromaps:latest
```

---

## 🎯 Future Enhancements

- [ ] Real-time planet tracking and ephemeris
- [ ] Augmented Reality (AR) sky viewing
- [ ] Mobile app (React Native/Flutter)
- [ ] Multiplayer observation sessions
- [ ] Custom telescope integration
- [ ] Advanced filtering and query system
- [ ] Astronomical event calendar
- [ ] Educational tutorials and guides
- [ ] User accounts and cloud sync
- [ ] Export to multiple formats (PDF, CSV, KML)
- [ ] Integration with professional astronomy software
- [ ] Machine learning for object identification
- [ ] Weather-based observation recommendations
- [ ] Historical sky viewer (travel through time)
- [ ] International language support

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

The MIT License allows:
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

With conditions:
- ⚠️ License and copyright notice required

---

## 🐛 Bug Reports & Issues

Found a bug or have a suggestion? Please open an issue!

- **Issue Template:** Include steps to reproduce, expected behavior, and actual behavior
- **Screenshots:** Provide screenshots or screen recordings when helpful
- **System Info:** Include browser, OS, and relevant versions

[Report an Issue](https://github.com/Rosenmunda/astromaps/issues/new)

---

## 💬 Discussion & Community

Join our community discussions for:
- Feature requests and suggestions
- Best practices and tips
- Astronomy discussions
- General questions and support

[Start a Discussion](https://github.com/Rosenmunda/astromaps/discussions)

---

## 👤 Author

**Anurag Sen**
- Project: AstroMaps - Astronomical Mapping Application
- Role: Full Stack Developer
- GitHub: [@Rosenmunda](https://github.com/Rosenmunda)
- Email: [Contact via GitHub](https://github.com/Rosenmunda)

---

## 📞 Support & Contact

- **Issues:** [GitHub Issues](https://github.com/Rosenmunda/astromaps/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Rosenmunda/astromaps/discussions)
- **Pull Requests:** [Submit a PR](https://github.com/Rosenmunda/astromaps/pulls)
- **Email:** Contact via GitHub profile

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Language Composition** | JavaScript 85.7%, CSS 6%, Python 5%, HTML 3.3% |
| **Repository** | [Rosenmunda/astromaps](https://github.com/Rosenmunda/astromaps) |
| **Repository ID** | 1202063708 |
| **Status** | ✅ Active Development |
| **Last Updated** | May 2026 |

---

## 🎓 Learning Resources

### Astronomy
- [Stellarium Documentation](https://stellarium.org/)
- [NASA Astronomy Resources](https://spaceplace.nasa.gov/)
- [Constellations and Star Myths](https://www.iau.org/)

### Development
- [JavaScript Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Canvas API Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Python Astronomy Libraries](https://www.astropy.org/)

### Tools
- [Git Documentation](https://git-scm.com/doc)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Docker Documentation](https://docs.docker.com/)

---

## 🙏 Acknowledgments

- Thanks to all contributors and stargazers
- Special thanks to the astronomy community
- Astronomical data sources and collaborators
- Community feedback and feature suggestions

---

## 📜 Changelog

### v1.0.0 (May 2026)
- ✅ Initial release
- ✅ Interactive star map
- ✅ Constellation explorer
- ✅ Deep-sky object catalog
- ✅ Location-based viewing
- ✅ Time navigation

### Upcoming
- 🔄 AR sky viewing
- 🔄 Mobile app
- 🔄 Real-time planet tracking

---

<div align="center">

**Made with ⭐ by Anurag Sen**

**Explore the cosmos with AstroMaps!**

[⬆ Back to Top](#-astromaps)

</div>
