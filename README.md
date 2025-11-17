# E-Commerce Full-Stack

A complete e-commerce application with React frontend and Node.js/Express backend.

## Project Structure

```
ecommerce/
├── frontend/          # React application (Vercel deployment)
├── backend/           # Node.js/Express API (Vercel serverless)
└── README.md
```

## Local Development

### Backend Setup

```powershell
cd backend
npm install
cp .env.example .env
# Edit .env with your MONGODB_URI and JWT_SECRET
npm run dev
```

Backend runs on `http://localhost:5000`

### Frontend Setup

```powershell
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000` with proxy to backend.

## Deployment to Vercel

### Option 1: Separate Repositories (Recommended)

1. **Create two separate repos:**
   - `ecommerce-frontend` → deploy frontend
   - `ecommerce-backend` → deploy backend

2. **Backend Deployment:**
   - Push `backend/` to a new repo
   - Connect to Vercel
   - Add environment variables: `MONGODB_URI`, `JWT_SECRET`
   - Deploy (automatically uses `vercel.json` config)
   - Note the backend URL: `https://your-backend.vercel.app`

3. **Frontend Deployment:**
   - Push `frontend/` to a new repo
   - Add `REACT_APP_API_URL=https://your-backend.vercel.app` as environment variable in Vercel
   - Deploy

### Option 2: Monorepo with Vercel (Alternative)

Deploy both from this repo using `vercel.json` at root level (contact me for setup).

## Features

✅ Product listing with pagination  
✅ Product details page  
✅ Shopping cart (Redux + localStorage)  
✅ User authentication (JWT)  
✅ Order management  
✅ Responsive Bootstrap design  

## API Endpoints

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order

## Notes

- Backend uses MongoDB (MongoDB Atlas recommended for cloud)
- Frontend uses React Router, Redux, Axios, Bootstrap
- Proxy in dev: `http://localhost:5000`
- Production: `REACT_APP_API_URL` environment variable

## Next Steps

- Add user registration screen
- Implement shipping & payment screens
- Add order history screen
- Implement admin panel
- Add product reviews
