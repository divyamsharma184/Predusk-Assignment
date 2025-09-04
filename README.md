# Me-API Playground

A full-stack personal profile and projects showcase application built with Node.js, Express, PostgreSQL, and React.

## 🚀 Features

- **Backend API**: RESTful endpoints for profile and projects management
- **Database**: PostgreSQL with proper relationships and sample data
- **Frontend**: Clean React interface with responsive design
- **Skill Filtering**: Filter projects by specific skills
- **Host Ready**: Configured for Render (backend) and Vercel (frontend)

## 🏗️ Architecture

```
me-api-playground/
├── backend/                 # Node.js + Express API
│   ├── config/             # Database configuration
│   ├── routes/             # API endpoints
│   ├── schema.sql          # Database schema
│   └── server.js           # Main server file
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   └── ...
│   └── ...
└── README.md               # This file
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, PostgreSQL (pg)
- **Frontend**: React, CSS3
- **Database**: PostgreSQL with proper schema design
- **Deployment**: Render (backend), Vercel (frontend)

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/profile` | Retrieve user profile |
| POST | `/profile` | Create/update user profile |
| GET | `/projects` | List all projects |
| GET | `/projects?skill=python` | Filter projects by skill |
| GET | `/health` | Health check (returns 200) |

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- PostgreSQL
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database setup:**
   ```bash
   # Create PostgreSQL database
   createdb me_api_playground
   
   # Run schema
   psql -d me_api_playground -f schema.sql
   ```

4. **Environment configuration:**
   ```bash
   cp env.example .env
   # Edit .env with your database credentials
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment configuration:**
   ```bash
   cp env.example .env
   # Set REACT_APP_API_URL to your backend URL
   ```

4. **Start development server:**
   ```bash
   npm start
   ```

## 🌐 Deployment

### Backend (Render)

1. **Push to GitHub**
2. **Connect to Render**
3. **Build Command:** `npm install`
4. **Start Command:** `npm start`

### Frontend (Vercel)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Build Command:** `npm run build`
4. **Output Directory:** `build`

## 📊 Database Schema

- **users**: Profile information (name, email, education, social links)
- **skills**: Available skills
- **projects**: Project details
- **project_skills**: Many-to-many relationship between projects and skills

## 🔧 Configuration

### Backend Environment Variables

```env
DATABASE_URL=postgresql://username:password@localhost:5432/me_api_playground
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend Environment Variables

```env
REACT_APP_API_URL=http://localhost:5000
```

## 📱 Features

- **Responsive Design**: Mobile-first approach
- **Real-time Filtering**: Filter projects by skills
- **Error Handling**: Graceful error states with retry functionality
- **Loading States**: User-friendly loading indicators
- **Modern UI**: Clean, professional design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the logs for error messages
2. Verify database connection
3. Ensure environment variables are set correctly
4. Check API endpoint availability

## 🔗 Links

- **Backend API**: [[https://me-api-backend-g8a2.onrender.com](https://me-api-backend-g8a2.onrender.com)
- **Frontend App**: [https://predusk-assignment-eight.vercel.app/](https://predusk-assignment-eight.vercel.app/)

