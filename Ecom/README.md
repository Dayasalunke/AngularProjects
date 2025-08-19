# E-commerce Angular Application

This is an Angular-based e-commerce application with user authentication, product management, cart functionality, and order processing.

## Features

- User authentication and registration
- Product browsing and search
- Shopping cart functionality
- Checkout process
- Order management
- Seller dashboard for product management

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd Ecom
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install concurrently for running multiple servers:
   ```bash
   npm install --save-dev concurrently
   ```

### Running the Application

#### Option 1: Run both servers simultaneously (Recommended)
```bash
npm run dev
```

This will start both:
- Angular development server on `http://localhost:4200`
- JSON server (mock backend) on `http://localhost:3000`

#### Option 2: Run servers separately

In one terminal, start the JSON server:
```bash
npm run json-server
```

In another terminal, start the Angular app:
```bash
npm start
```

## Checkout Issue Fix

The checkout redirection issue has been fixed with the following improvements:

1. **Better Error Handling**: Added comprehensive error handling for order placement
2. **Processing State**: Added loading state to prevent multiple order submissions
3. **Reliable Navigation**: Improved cart clearing and navigation logic
4. **Detailed Logging**: Added console logs for debugging

### Key Changes Made:

- Added `isProcessing` flag to prevent multiple submissions
- Improved cart clearing with proper error handling
- Enhanced navigation with timeout and error handling
- Updated UI to show processing state
- Fixed service method to return Observable instead of Subscription

### Testing the Fix:

1. Add items to cart
2. Go to checkout page
3. Fill in shipping details
4. Click "Order Now"
5. The button should show "Processing Order..." and be disabled
6. After successful order placement, you should be redirected to the orders page

## API Endpoints

The application uses a JSON server with the following endpoints:

- `GET /products` - Get all products
- `POST /products` - Add new product
- `GET /cart?userId={id}` - Get user's cart
- `POST /cart` - Add item to cart
- `DELETE /cart/{id}` - Remove item from cart
- `POST /orders` - Place new order
- `GET /orders?userId={id}` - Get user's orders

## Troubleshooting

### Checkout not redirecting:
1. Ensure JSON server is running on port 3000
2. Check browser console for any errors
3. Verify user is logged in (check localStorage)
4. Ensure cart has items before checkout

### Common Issues:
- **Port conflicts**: Make sure ports 3000 and 4200 are available
- **CORS issues**: JSON server should handle CORS automatically
- **Authentication**: Ensure user is logged in before accessing protected routes

## Development

The application is built with:
- Angular 19
- Bootstrap 5
- JSON Server (mock backend)
- TypeScript
