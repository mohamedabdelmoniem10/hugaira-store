# Hugaira Store - Modest Fashion E-commerce Platform

A comprehensive e-commerce solution for **Hugaira Store**, specializing in modest fashion for Muslim women including niqabs, abayas, hijabs, and isdalat.

## 🌟 Features

### Customer Features

- **Elegant Homepage** with hero section, featured products, and testimonials
- **Product Catalog** with advanced filtering and sorting
- **Product Details** with image gallery, size/color selection, and quick view
- **Shopping Cart** with quantity management and checkout
- **Secure Checkout** with multiple payment options
- **Campaign Landing Pages** for marketing promotions
- **About Us & Contact** pages with contact form
- **Responsive Design** optimized for mobile and desktop

### Admin Features

- **Admin Dashboard** with sales statistics and quick actions
- **Order Management** with status tracking
- **Product Management** capabilities
- **Performance-focused** admin interface

### Technical Features

- **SEO Optimized** with proper meta tags and structured data
- **Static Site Generation** for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Component-based Architecture** for maintainability

## 🎨 Design

The platform features an elegant, feminine design inspired by modest fashion aesthetics:

- **Color Palette**: Soft beige, warm brown, and blush tones
- **Typography**: Playfair Display for headings, Lato for body text
- **Patterns**: Subtle floral backgrounds and elegant decorative elements
- **Mobile-first** responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd hugaira-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Admin Access

To access the admin dashboard:

1. Navigate to `http://localhost:3000/admin/login`
2. Use the demo credentials:
   - **Email**: admin@hugairastore.com
   - **Password**: admin123
3. After login, you'll be redirected to the admin dashboard at `/admin`

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
hugaira-store/
├── app/                          # Next.js App Router
│   ├── (pages)/
│   │   ├── about/               # About Us page
│   │   ├── contact/             # Contact page
│   │   ├── cart/                # Shopping cart
│   │   ├── checkout/            # Checkout process
│   │   └── products/            # Product catalog & details
│   ├── admin/                   # Admin dashboard
│   ├── campaigns/               # Marketing campaign pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── admin/                   # Admin-specific components
│   ├── campaigns/               # Campaign components
│   ├── cart/                    # Cart-related components
│   ├── checkout/                # Checkout components
│   ├── contact/                 # Contact form components
│   ├── home/                    # Homepage sections
│   ├── layouts/                 # Layout components
│   ├── navigation/              # Navigation components
│   ├── product/                 # Product-related components
│   └── ui/                      # Base UI components
├── contexts/                     # React contexts
│   └── cart-context.tsx         # Shopping cart state
├── hooks/                        # Custom React hooks
│   └── use-toast.ts             # Toast notifications
├── lib/                          # Utilities and types
│   ├── types.ts                 # TypeScript interfaces
│   └── utils.ts                 # Utility functions
└── public/                       # Static assets
```

## 🛍️ Key Pages

### Public Pages (SEO Optimized)

- **Homepage** (`/`) - Hero, categories, featured products
- **Products** (`/products`) - Product catalog with filters
- **Product Details** (`/products/[slug]`) - Individual product pages
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Secure checkout process
- **About** (`/about`) - Brand story and values
- **Contact** (`/contact`) - Contact form and information

### Campaign Pages

- **Summer Collection** (`/campaigns/summer-collection`) - Seasonal promotion

### Admin Pages (Non-SEO)

- **Dashboard** (`/admin`) - Sales overview and quick actions

## 🎯 Product Categories

- **Niqabs** - Traditional and modern styles
- **Abayas** - Elegant flowing garments
- **Hijabs** - Versatile head coverings
- **Isdalat** - Traditional modest wear
- **Accessories** - Complementary items

## 🛒 E-commerce Features

### Shopping Cart

- Add/remove items
- Quantity adjustment
- Size and color selection
- Price calculations with discounts
- Persistent cart state

### Checkout Process

- Guest and registered checkout
- Multiple payment methods (Credit Card, PayPal, Apple Pay)
- Shipping address management
- Order summary and confirmation
- Tax and shipping calculations

### Product Management

- Product variants (colors, sizes)
- Inventory tracking
- Sale pricing and discounts
- Product badges (New, Best Seller, Featured)
- Image galleries with zoom

## 🎨 Styling

The project uses **Tailwind CSS** with custom color variables:

```css
:root {
  --beige-light: #f7f3f0;
  --beige-medium: #e8ddd4;
  --beige-dark: #d4c4b0;
  --brown-light: #c8a882;
  --brown-medium: #a67c52;
  --brown-dark: #8b4513;
  --blush-light: #f5e6e8;
  --blush-medium: #e8b4cb;
  --blush-dark: #d4a5a5;
}
```

## 📱 Responsive Design

- **Mobile-first** approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Touch-friendly interface
- Optimized images and performance

## 🔧 Technologies Used

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **Image Optimization**: Next.js Image component
- **Deployment**: Static export ready

## 🚀 Deployment

The project is configured for static export:

```bash
npm run build
```

This generates a static site in the `out/` directory that can be deployed to any static hosting service.

## 🔮 Future Enhancements

- **User Authentication** - Customer accounts and order history
- **Payment Integration** - Real payment processing
- **Inventory Management** - Backend integration
- **Search Functionality** - Advanced product search
- **Wishlist Feature** - Save favorite items
- **Reviews & Ratings** - Customer feedback system
- **Multi-language Support** - Arabic and English
- **Email Notifications** - Order confirmations and updates

## 📄 License

This project is proprietary software for Hugaira Store.

## 🤝 Contributing

This is a private project for Hugaira Store. For any questions or support, please contact the development team.

---

**Hugaira Store** - Elegant modest fashion for the modern Muslim woman 🌸
