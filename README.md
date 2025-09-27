# Admin Dashboard Starter

[![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready, modular admin dashboard starter template built with modern web technologies. Designed for scalable enterprise applications, SaaS platforms, and internal tools requiring robust authentication, role-based access control, and modular architecture.

## 🌟 Key Features

- **🏗️ Modular Architecture** - Independent, self-contained feature modules
- **🔐 Enterprise Authentication** - JWT-based with refresh token rotation
- **🎨 Modern UI/UX** - Built with shadcn/ui and Tailwind CSS
- **📊 Dashboard Components** - Pre-built charts, tables, and analytics
- **🛡️ Type Safety** - Full TypeScript integration with strict type checking
- **⚡ Performance Optimized** - Code splitting, lazy loading, and caching
- **🧪 Testing Ready** - Unit and integration test setup included
- **📱 Responsive Design** - Mobile-first, cross-device compatibility

## 🏛️ Architecture Overview

### Modular Design Philosophy

The application follows a **Domain-Driven Design (DDD)** approach with clear separation of concerns:

```
src/
├── app/                    # Application shell & core configuration
│   ├── layout/            # Global layout components
│   ├── providers/         # Context providers & global state
│   └── router/            # Routing configuration & guards
├── modules/               # Feature modules (domain boundaries)
│   ├── auth/             # Authentication & authorization
│   ├── dashboard/        # Main dashboard & analytics
│   ├── users/            # User management
│   └── [feature]/        # Additional feature modules
├── shared/               # Cross-module shared resources
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── services/         # External integrations & utilities
│   ├── types/            # Global TypeScript definitions
│   └── utils/            # Helper functions & constants
└── styles/              # Global styles & theme configuration
```

### Module Structure

Each feature module follows a consistent internal structure:

```
modules/[feature]/
├── components/          # Feature-specific components
├── hooks/              # Feature-specific React hooks
├── pages/              # Route components
├── services/           # API calls & business logic
├── stores/             # State management
├── types/              # TypeScript definitions
├── utils/              # Feature-specific utilities
└── index.ts            # Public API exports
```

## 🔒 Security & Authentication

### JWT Implementation

- **Access Tokens**: Short-lived (15 minutes) for API authentication
- **Refresh Tokens**: Long-lived (7 days) for session renewal
- **Automatic Rotation**: Seamless token refresh without user interruption
- **Secure Storage**: Encrypted token storage with XSS protection

### Route Protection

- **Role-Based Access Control (RBAC)**: Granular permission system
- **Route Guards**: Automatic redirection based on authentication status
- **Protected Routes**: Authenticated-only access with loading states
- **Public Routes**: Login, registration, and marketing pages

### Security Best Practices

- **CSRF Protection**: Anti-CSRF tokens for state-changing operations
- **XSS Prevention**: Content sanitization and CSP headers
- **Input Validation**: Client and server-side validation with Zod
- **Secure Headers**: Security headers configuration included

## 🚀 Quick Start

### Prerequisites

- **Node.js**: >= 18.0.0
- **Package Manager**: pnpm (recommended), yarn, or npm
- **Git**: For version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mukles/admin-dashboard-starter.git
   cd admin-dashboard-starter
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env.local
   # Configure your environment variables
   ```

4. **Start development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Admin Dashboard

# Authentication
VITE_JWT_SECRET_KEY=your-secret-key-here
VITE_REFRESH_TOKEN_KEY=your-refresh-key-here
```

## 🛠️ Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm dev:host         # Start with network access

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix linting issues
pnpm type-check       # Run TypeScript compiler
pnpm format           # Format code with Prettier

# Testing
pnpm test             # Run unit tests
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Generate coverage report

# Dependencies
pnpm deps:update      # Update dependencies
pnpm deps:audit       # Security audit
```

## 📦 Technology Stack

### Core Technologies

- **React 18** - UI library with concurrent features
- **Vite 5** - Next-generation build tool
- **TypeScript 5** - Type-safe JavaScript
- **React Router 6** - Client-side routing

### UI & Styling

- **shadcn/ui** - Accessible, customizable components
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon library
- **React Hook Form** - Form handling
- **Zod** - Runtime type validation

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitizen** - Conventional commits

## 📊 Project Structure Deep Dive

### Application Shell (`app/`)

Contains the core application setup, global providers, routing configuration, and layout components that wrap the entire application.

### Feature Modules (`modules/`)

Self-contained domains with their own components, state, and business logic. New features are added as separate modules to maintain isolation and scalability.

### Shared Resources (`shared/`)

Common utilities, components, and services used across multiple modules. This promotes code reuse while maintaining clear boundaries.

## 🧪 Testing Strategy

### Unit Testing

- **Vitest** - Fast unit test runner
- **React Testing Library** - Component testing utilities
- **MSW** - API mocking for tests

### Integration Testing

- **Playwright** - End-to-end testing
- **Component Testing** - Testing component interactions

### Test Coverage

- Minimum 80% code coverage requirement
- Critical paths (authentication, payments) require 95% coverage

## 🚢 Deployment

### Build Process

```bash
pnpm build
```

### Deployment Options

#### Static Hosting (Vercel, Netlify)

```bash
# Automatic deployment with git integration
# Configure build command: pnpm build
# Publish directory: dist
```

#### Container Deployment (Docker)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 4173
CMD ["pnpm", "preview", "--host"]
```

#### CDN Deployment

Optimized for global distribution with asset optimization and caching strategies.

## 📈 Performance Optimizations

- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Dynamic imports for heavy components
- **Image Optimization** - Automatic image compression and WebP support
- **Bundle Analysis** - Built-in bundle analyzer
- **Caching Strategy** - Optimized browser caching headers

## 🔧 Customization

### Theme Configuration

Modify `src/styles/theme.css` to customize colors, typography, and spacing.

### Adding New Modules

```bash
# Create new module structure
mkdir -p src/modules/your-module/{components,hooks,pages,services,stores,types,utils}
```

### Component Library Extension

Add new shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 📚 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](./docs/CONTRIBUTING.md) before submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Follow TypeScript best practices
- Maintain test coverage above 80%
- Use conventional commit messages
- Document new features and APIs

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) team for the amazing library
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

## 📞 Support

- 📖 [Documentation](https://github.com/mukles/admin-dashboard-starter/wiki)
- 🐛 [Issue Tracker](https://github.com/mukles/admin-dashboard-starter/issues)
- 💬 [Discussions](https://github.com/mukles/admin-dashboard-starter/discussions)
- 📧 Email: <muklesdev@gmail.com>

---

<div align="center">

**[⭐ Star this repository](https://github.com/mukles/admin-dashboard-starter)** if you find it helpful!

Made with ❤️ by [Mukles](https://github.com/mukles)

</div>
