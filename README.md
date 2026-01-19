# EcommerceLite - Modern E-commerce Platform

A professional, feature-rich e-commerce application built with **Next.js 16**, **TypeScript**, **React 19**, and **TailwindCSS**. This project showcases modern web development practices with a focus on user experience, performance, and scalability.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

##  Features

###  Shopping Experience
- **Product Catalog** with high-quality imagery and detailed information
- **Advanced Filtering & Sorting** by category, price range, and relevance
- **Product Search** with instant results
- **Shopping Cart** with persistent state (localStorage)
- **Wishlist/Favorites** system with local storage
- **Related Products** recommendations on detail pages
- **Product Reviews** with star ratings (user-generated)

###  User Management
- **Mock Authentication** system with login/logout
- **User Profile** with editable information
- **Order History** tracking with status updates
- **Persistent Sessions** via localStorage

###  UI/UX Excellence
- **Framer Motion** animations for smooth transitions
- **Lucide React** icons for consistent design language
- **Sonner** toast notifications for user feedback
- **Responsive Design** optimized for all screen sizes
- **Hero Carousel** with high-quality Unsplash images
- **Professional Footer** with newsletter signup
- **Modern Color Palette** with glassmorphism effects

### 🔧 Technical Features
- **TypeScript** for type safety
- **Server Components** and Client Components architecture
- **SEO Optimized** with dynamic metadata, sitemap, and robots.txt
- **Code Quality Tools**: ESLint, Prettier
- **Testing Setup**: Vitest
- **Form Validation**: React Hook Form + Zod
- **Modular Architecture** with clear separation of concerns

##  Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd NextCommerce_TS
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm test             # Run tests with Vitest
```

##  Project Structure

```
NextCommerce_TS/
├── app/
│   ├── (dashboard)/          # Main application routes
│   │   ├── page.tsx          # Home page with product grid
│   │   ├── [id]/             # Product detail pages
│   │   ├── cart/             # Shopping cart
│   │   ├── checkout/         # Checkout flow
│   │   ├── wishlist/         # User favorites
│   │   ├── profile/          # User dashboard
│   │   └── contact/          # Contact form
│   ├── components/
│   │   ├── features/         # Feature-specific components
│   │   │   ├── layout/       # Header, Footer
│   │   │   └── products/     # Product cards, filters, reviews
│   │   └── ui/               # Reusable UI components
│   ├── context/              # React Context providers
│   │   ├── CartContext.tsx
│   │   ├── WishlistContext.tsx
│   │   ├── AuthContext.tsx
│   │   └── OrderContext.tsx
│   ├── data/                 # Mock data
│   ├── types/                # TypeScript definitions
│   └── layout.tsx            # Root layout
├── public/                   # Static assets
└── package.json
```

##  Key Technologies

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS

### UI & Animations
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **DaisyUI** - Component library

### Forms & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing

##  Feature Highlights

### Product Filtering System
Advanced sidebar filtering with:
- Category selection
- Price range slider
- Sort options (price, featured)
- Real-time product count

### Authentication Flow
Mock authentication system featuring:
- Email-based login
- User profile management
- Avatar generation
- Session persistence

### Order Management
Complete order tracking with:
- Order history view
- Status tracking (processing, shipped, delivered)
- Order details with product list
- Total calculation

### Review System
Interactive product reviews:
- Star rating (1-5)
- Comment submission
- User authentication required
- Display on product pages

##  Design Philosophy

This project emphasizes:
- **Visual Excellence**: Premium aesthetics with modern design patterns
- **User Experience**: Smooth animations and intuitive navigation
- **Performance**: Optimized images and code splitting
- **Accessibility**: Semantic HTML and ARIA labels
- **Responsiveness**: Mobile-first approach

##  Mock Data

The application uses mock data for:
- **Products**: 24 sample products across multiple categories
- **Users**: localStorage-based user sessions
- **Orders**: Client-side order history
- **Reviews**: Pre-populated product reviews

##  Authentication

**Note**: This project uses a **mock authentication system** for demonstration purposes. In a production environment, you should implement:
- Backend API with secure authentication
- JWT or session-based auth
- Password hashing
- OAuth integration (Google, Facebook, etc.)

##  Future Enhancements

Potential improvements:
- [ ] Backend API integration
- [ ] Real payment processing
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Product inventory management
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced analytics

##  License

This project is open source and available under the MIT License.

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

##  Contact

For questions or feedback, please visit the [Contact Page](/contact) or reach out via email.

---

**Built with  using Next.js and TypeScript**
