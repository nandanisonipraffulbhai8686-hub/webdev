# Smart Cart System

## Project Overview

Smart Cart System is a React-based e-commerce application that allows users to browse products, add items to a shopping cart, manage quantities, and complete the checkout process with discount calculations.

## Features Implemented

- Product Listing Page
- Add To Cart
- Cart Management
- Quantity Increase / Decrease
- Remove Item from Cart
- Bulk Order Badge (shown when quantity >= 5)
- Checkout Page with Cart Summary
- Product Discount (10% off when quantity >= 3)
- Cart Discount (5% off when total > ₹5000)
- All discounts clearly displayed on Checkout Page
- React Router (Products / Cart / Checkout pages)
- Lazy Loading (Cart and Checkout pages use React.lazy + Suspense)
- Context API for State Management
- Reusable Components (ProductCard, CartItem, Badge, Loader)

## Assumptions Made

- Products are loaded from local JSON data (no backend API).
- Maximum quantity allowed per product is 10.
- Minimum quantity allowed per product is 1.
- Out-of-stock products (stock = 0) display a disabled "Out of Stock" button.

## Challenges Faced

- Managing shared cart state across multiple pages using Context API.
- Implementing multi-step discount calculations correctly on the Checkout page.
- Creating reusable components that work cleanly with context-provided functions.

## Known Issues

- No payment gateway integration.
- Cart state is lost on page refresh (no localStorage persistence).
- Basic unstyled UI design.

## Future Improvements

- Search and filter products
- Dark mode toggle
- Persistent cart using localStorage
- Toast notifications for add/remove actions
- Backend API integration
- Individual assigned discount rule implementation
