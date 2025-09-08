# CloudCycle - Cycling Infrastructure Reporting Platform

## Project Overview

CloudCycle is a comprehensive web application designed to improve cycling infrastructure by enabling citizens to report issues and government officials to manage and track infrastructure improvements. The platform facilitates better communication between cyclists and city administrators to create safer, more efficient cycling environments.

**Live Project URL**: https://lovable.dev/projects/aa43da79-aa58-49f1-9a4c-27a808952315

## Features

### 🚴‍♂️ User (Cyclist) Features
- **Dashboard**: Visual overview of personal reporting statistics and cycling benefits education
- **Issue Reporting**: Submit detailed reports about cycling infrastructure problems with photo uploads
- **Report Tracking**: Monitor the status of submitted reports (Pending, In Progress, Fixed)
- **Contact System**: Direct communication channel with government officials
- **Cycling Awareness**: Educational content about cycling benefits for health and environment

### 🏛️ Admin (Government Official) Features
- **Administrative Dashboard**: Comprehensive overview of all reported issues with statistics
- **Report Management**: View, filter, and update status of citizen-submitted reports
- **Priority Management**: Categorize reports by priority levels (High, Medium, Low)
- **User Communication**: Respond to citizen inquiries and feedback
- **Analytics**: Track resolution metrics and performance indicators

### 🔐 Authentication System
- Role-based access control (User/Admin)
- Secure login with mock authentication
- Protected routes based on user roles
- Session persistence with localStorage

## Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### UI/UX Libraries
- **shadcn/ui** - Beautiful, accessible UI components built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Modern icon library

### Routing & State Management
- **React Router DOM 7.8.2** - Client-side routing
- **TanStack Query** - Server state management
- **React Context** - Authentication state management

### Form Handling & Validation
- **React Hook Form** - Performant form library
- **Zod** - Schema validation

### Additional Dependencies
- **date-fns** - Date utility library
- **Embla Carousel** - Carousel components
- **Recharts** - Chart library for analytics
- **Sonner** - Toast notifications

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AdminNavbar.tsx # Admin navigation
│   ├── UserNavbar.tsx  # User navigation
│   └── ReportIssueModal.tsx # Issue reporting modal
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication context
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile detection
│   └── use-toast.ts    # Toast notifications
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities
├── pages/              # Page components
│   ├── admin/          # Admin-only pages
│   │   ├── AdminDashboard.tsx
│   │   ├── AdminReports.tsx
│   │   └── AdminContact.tsx
│   ├── user/           # User-only pages
│   │   ├── UserDashboard.tsx
│   │   ├── UserReports.tsx
│   │   └── UserContact.tsx
│   ├── Index.tsx       # Landing page
│   ├── Login.tsx       # Authentication page
│   └── NotFound.tsx    # 404 error page
├── assets/             # Static assets
│   ├── cycling-benefits.jpg
│   └── cycling-hero.jpg
└── App.tsx             # Main application component
```

## Design System

CloudCycle uses a custom design system optimized for cycling infrastructure:

### Color Palette
- **Primary**: Soft blue (#3B82F6) - Trust and reliability
- **Secondary**: Pale green (#10B981) - Nature and cycling
- **Accent**: Pale teal (#06B6D4) - Modern and fresh
- **Success**: Vibrant green (#22C55E) - Completed actions
- **Warning**: Warm amber (#F59E0B) - Caution
- **Destructive**: Soft red (#EF4444) - Errors

### Typography
- Clean, readable fonts optimized for accessibility
- Consistent heading hierarchy
- Responsive text sizing

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/Mariamegha/lo.ccp.git

# Navigate to project directory
cd lo.ccp

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## Authentication

### Demo Credentials
- **Email**: demo@cloudcycle.com
- **Password**: demo123
- **Roles**: Select either "Cyclist" or "Government Official" during login

### User Roles
- **User (Cyclist)**: Can report issues, track reports, contact officials
- **Admin (Government Official)**: Can manage all reports, respond to users, view analytics

## Key Features Implementation

### Report Submission System
- Multi-step form with validation
- Image upload capability
- Location tracking
- Priority assignment
- Real-time status updates

### Dashboard Analytics
- Visual statistics display
- Progress tracking charts
- Recent activity feeds
- Performance metrics

### Responsive Design
- Mobile-first approach
- Adaptive navigation
- Touch-friendly interfaces
- Cross-device compatibility

## Deployment Options

### Using Lovable Platform
1. Visit the [Lovable Project](https://lovable.dev/projects/aa43da79-aa58-49f1-9a4c-27a808952315)
2. Click on Share → Publish
3. Follow deployment instructions

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting service
```

### Environment Configuration
- Production builds are optimized and minified
- Development builds include debugging tools
- Environment variables can be configured via `.env` files

## Contributing

### Development Workflow
1. Make changes via Lovable platform (auto-commits to repo)
2. Or clone locally, make changes, and push to GitHub
3. Changes pushed to GitHub reflect in Lovable automatically

### Code Style
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for consistent formatting
- Tailwind CSS for styling

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive Web App features ready

## License
ISC License - See LICENSE file for details

## Support & Documentation
- **GitHub Issues**: https://github.com/Mariamegha/lo.ccp/issues
- **Lovable Documentation**: https://docs.lovable.dev/
- **Custom Domain Setup**: https://docs.lovable.dev/tips-tricks/custom-domain

---

*CloudCycle - Making cycling safer, one report at a time* 🚴‍♂️
