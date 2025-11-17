# E-commerce Backend

API backend for the e-commerce tutorial.

Setup

1. Copy `.env.example` to `.env` and update values.
2. Install dependencies:

```powershell
cd backend
npm install
```

3. Start MongoDB (e.g., via local service or MongoDB Atlas).

4. Run in dev mode:

```powershell
npm run dev
```

API endpoints

- `POST /api/auth/register` - register
- `POST /api/auth/login` - login
- `GET /api/products` - list products
- `GET /api/products/:id` - product details
- `POST /api/orders` - create order
- `GET /api/orders/:id` - get order
