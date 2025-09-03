# Deployment Guide

This guide covers deploying the Me-API Playground to production using Render (backend) and Vercel (frontend).

## 🚀 Backend Deployment (Render)

### Prerequisites
- GitHub repository with your code
- PostgreSQL database (Render PostgreSQL or external)

### Step 1: Prepare Backend
1. Ensure your backend code is committed to GitHub
2. Verify `package.json` has correct start script: `"start": "node server.js"`
3. Check that all dependencies are in `dependencies` (not `devDependencies`)

### Step 2: Deploy to Render
1. **Sign up/Login to Render**: [render.com](https://render.com)
2. **Create New Web Service**:
   - Connect your GitHub repository
   - Choose the repository
   - Set **Build Command**: `npm install`
   - Set **Start Command**: `npm start`
   - Choose **Environment**: Node
   - Set **Region** to your preference

### Step 3: Environment Variables
Set these in Render dashboard:
```env
DATABASE_URL=postgresql://username:password@host:port/database
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### Step 4: Database Setup
If using Render PostgreSQL:
1. Create PostgreSQL service in Render
2. Copy connection string to `DATABASE_URL`
3. Run schema: Connect to database and execute `schema.sql`

### Step 5: Deploy
1. Click **Create Web Service**
2. Wait for build and deployment
3. Note your service URL (e.g., `https://your-app.onrender.com`)

## 🌐 Frontend Deployment (Vercel)

### Prerequisites
- GitHub repository with your code
- Backend API deployed and accessible

### Step 1: Prepare Frontend
1. Ensure your frontend code is committed to GitHub
2. Verify `package.json` has build script: `"build": "react-scripts build"`
3. Check that all dependencies are in `dependencies`

### Step 2: Deploy to Vercel
1. **Sign up/Login to Vercel**: [vercel.com](https://vercel.com)
2. **Import Project**:
   - Connect your GitHub repository
   - Choose the repository
   - Set **Framework Preset**: Create React App
   - Set **Root Directory**: `frontend`
   - Set **Build Command**: `npm run build`
   - Set **Output Directory**: `build`

### Step 3: Environment Variables
Set in Vercel dashboard:
```env
REACT_APP_API_URL=https://your-backend.onrender.com
```

### Step 4: Deploy
1. Click **Deploy**
2. Wait for build and deployment
3. Note your app URL (e.g., `https://your-app.vercel.app`)

## 🔧 Post-Deployment

### Update Backend CORS
After frontend deployment, update backend `FRONTEND_URL`:
```env
FRONTEND_URL=https://your-frontend.vercel.app
```

### Test Endpoints
Verify your API is working:
```bash
# Health check
curl https://your-backend.onrender.com/health

# Profile
curl https://your-backend.onrender.com/profile

# Projects
curl https://your-backend.onrender.com/projects
```

### Update Frontend
If you change backend URL, redeploy frontend or update environment variable.

## 🚨 Common Issues

### Backend Issues
- **Build fails**: Check `package.json` scripts and dependencies
- **Database connection**: Verify `DATABASE_URL` format
- **Port binding**: Ensure `process.env.PORT` is used

### Frontend Issues
- **Build fails**: Check React dependencies and scripts
- **API calls fail**: Verify `REACT_APP_API_URL` is correct
- **CORS errors**: Check backend CORS configuration

### Database Issues
- **Connection refused**: Check database credentials and network access
- **Schema errors**: Verify `schema.sql` syntax
- **Permission denied**: Check database user permissions

## 📊 Monitoring

### Render Backend
- View logs in Render dashboard
- Monitor resource usage
- Set up alerts for downtime

### Vercel Frontend
- View build logs in Vercel dashboard
- Monitor performance metrics
- Set up custom domains if needed

## 🔄 Updates

### Backend Updates
1. Push changes to GitHub
2. Render auto-deploys on push
3. Monitor deployment logs

### Frontend Updates
1. Push changes to GitHub
2. Vercel auto-deploys on push
3. Check build status

## 💰 Cost Considerations

### Render
- Free tier: 750 hours/month
- Paid plans start at $7/month
- PostgreSQL: $7/month

### Vercel
- Free tier: Unlimited deployments
- Paid plans start at $20/month
- Custom domains included

## 🔐 Security

### Environment Variables
- Never commit `.env` files
- Use Render/Vercel environment variable management
- Rotate database passwords regularly

### CORS Configuration
- Restrict origins to your frontend domain
- Use HTTPS in production
- Consider rate limiting for production use
