# Me-API Frontend

Frontend application for the Me-API Playground, built with React and connected to an Express.js backend.

## Features

- **Profile Management**: Display and manage personal profile information
- **Projects Showcase**: Showcase projects with skill-based filtering
- **Backend Integration**: Full integration with Express.js backend API
- **Real-time Status**: Monitor backend connection health
- **Responsive Design**: Modern, mobile-friendly UI

## Backend Connection

This frontend is configured to connect with your Express.js backend running on `http://localhost:5000`.

### Environment Configuration

Create a `.env` file in the frontend root directory:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000
```

### API Endpoints

The frontend connects to these backend endpoints:

- `GET /` - API information and available endpoints
- `GET /health` - Backend health status
- `GET /profile` - User profile information
- `GET /projects` - List of projects
- `POST /profile` - Create/update profile
- `POST /projects` - Create new project
- `PUT /profile` - Update profile
- `PUT /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- Backend server running on port 5000

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp env.example .env
   # Edit .env with your backend URL
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/          # React components
│   ├── Profile.js      # Profile display component
│   ├── Projects.js     # Projects showcase component
│   └── BackendStatus.js # Backend connection status
├── hooks/              # Custom React hooks
│   └── useApi.js       # API state management hook
├── services/           # API services
│   └── api.js         # Axios configuration and API calls
└── App.js             # Main application component
```

## API Service Layer

The frontend uses a centralized API service layer for all backend communication:

### Key Features

- **Axios Configuration**: Pre-configured HTTP client with interceptors
- **Error Handling**: Centralized error handling and logging
- **Request/Response Interceptors**: Easy to add authentication tokens
- **Type-safe API Calls**: Organized API functions for each endpoint

### Usage Example

```javascript
import { profileAPI } from '../services/api';
import { useApi } from '../hooks/useApi';

const MyComponent = () => {
  const { loading, error, data, execute } = useApi();
  
  useEffect(() => {
    execute(profileAPI.getProfile);
  }, [execute]);
  
  // Component logic...
};
```

## Custom Hooks

### useApi Hook

The `useApi` hook provides a clean interface for API calls:

- **loading**: Boolean indicating if request is in progress
- **error**: Error message if request failed
- **data**: Response data from successful request
- **execute**: Function to execute API call
- **reset**: Function to reset hook state

## Troubleshooting

### Common Issues

1. **Backend Connection Failed**
   - Ensure backend server is running on port 5000
   - Check CORS configuration in backend
   - Verify `.env` file has correct `REACT_APP_API_URL`

2. **CORS Errors**
   - Backend is configured to allow requests from `http://localhost:3000`
   - Update `FRONTEND_URL` in backend `.env` if needed

3. **API Endpoints Not Found**
   - Verify backend routes are properly configured
   - Check backend server logs for errors

### Debug Mode

Enable debug logging by checking the browser console for API requests and responses.

## Development

### Adding New API Endpoints

1. Add new API function in `src/services/api.js`
2. Create corresponding component using `useApi` hook
3. Update backend routes if needed

### Styling

The application uses CSS modules and inline styles. Consider adding a CSS framework like Tailwind CSS for more advanced styling.

## Deployment

### Production Build

```bash
npm run build
```

### Environment Variables

For production, update `.env` with your hosted backend URL:

```env
REACT_APP_API_URL=https://your-backend-domain.com
```

## Contributing

1. Follow the existing code structure
2. Use the `useApi` hook for all API calls
3. Test backend connectivity before submitting changes
4. Update documentation for new features

## License

MIT License - see LICENSE file for details
