# Show-Case-Me Portfolio

A modern, responsive portfolio website built with React, Vite, and Chakra UI.

## 🚀 Features

- **Responsive Design**: Beautiful layout that works on all devices
- **Modern UI**: Built with Chakra UI for a clean, professional look
- **Easy Customization**: All content is managed through a single JSON file
- **Fast Performance**: Powered by Vite for lightning-fast development and builds
- **Smooth Navigation**: Anchor links for seamless section navigation
- **Project Showcase**: Display your projects with tech stack tags
- **Skills Visualization**: Progress bars showing your skill levels
- **Contact Section**: Social media links (Email, LinkedIn, GitHub)

## 📁 Project Structure

```
/app/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── Header.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── data/
│   │   │   └── portfolio.json  # All portfolio content
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── backend/              # Minimal backend placeholder
    ├── server.py
    └── requirements.txt
```

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 7
- **UI Library**: Chakra UI 2
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Backend**: FastAPI (placeholder)

## 🎨 Customization

Edit `/app/frontend/src/data/portfolio.json` to customize your portfolio:

```json
{
  "profile": {
    "name": "Your Name",
    "tagline": "Your Title",
    "avatar": "",
    "resume": ""
  },
  "about": "Your bio...",
  "skills": [
    { "name": "Skill Name", "level": 4, "max": 5 }
  ],
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "image": "",
      "tech": ["React", "Node.js"],
      "demo": "#",
      "repo": "#"
    }
  ],
  "contact": {
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  }
}
```

## 🚀 Running the Application

The application is managed by supervisor and runs automatically:

```bash
# Restart all services
sudo supervisorctl restart all

# Check service status
sudo supervisorctl status

# View frontend logs
tail -f /var/log/supervisor/frontend.out.log
```

The frontend will be available at `http://localhost:3000`

## 📝 Development

```bash
cd /app/frontend

# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## 🎯 Next Steps

1. Update `/app/frontend/src/data/portfolio.json` with your personal information
2. Add your resume PDF to `/app/frontend/public/` and update the path in portfolio.json
3. (Optional) Add project images to `/app/frontend/public/projects/`
4. Customize colors in the component files if desired

## 📄 License

This project is open source and available for personal use.
