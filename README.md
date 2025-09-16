# PollApp - Next.js Polling Application

A modern, full-featured polling application built with Next.js 15, TypeScript, and Shadcn UI components. Create, share, and participate in polls with your community.

## 🚀 Features

- **User Authentication** - Login, register, and profile management
- **Poll Creation** - Create polls with multiple options and categories
- **Poll Viewing** - Browse and participate in community polls
- **Real-time Results** - See poll results update instantly
- **Responsive Design** - Beautiful UI that works on all devices
- **Type Safety** - Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Validation**: Zod
- **Icons**: Lucide React (via Shadcn)

## 📁 Project Structure

```
app/
├── (auth)/                 # Authentication pages (route groups)
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   └── profile/           # User profile page
├── polls/                 # Poll-related pages
│   ├── [id]/             # Individual poll page (dynamic route)
│   ├── create/           # Create new poll page
│   └── page.tsx          # Polls listing page
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── polls/            # Poll-related components
│   ├── ui/               # Shadcn UI components
│   ├── navigation.tsx    # Main navigation
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions and configurations
│   ├── api/              # API functions
│   ├── auth/             # Authentication utilities
│   ├── types/            # TypeScript type definitions
│   ├── validations/      # Form validation schemas
│   └── utils.ts          # General utilities
├── globals.css           # Global styles
├── layout.tsx            # Root layout
└── page.tsx              # Home page
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-polly
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 UI Components

This project uses [Shadcn UI](https://ui.shadcn.com/) components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Development

### Adding New Features

1. **Authentication**: Components are in `app/components/auth/`
2. **Polls**: Components are in `app/components/polls/`
3. **Types**: Define types in `app/lib/types/`
4. **Validation**: Add schemas in `app/lib/validations/`
5. **API**: Add API functions in `app/lib/api/`

### Code Structure

- **Pages**: Use the App Router structure in `app/`
- **Components**: Reusable components in `app/components/`
- **Utilities**: Helper functions in `app/lib/`
- **Styling**: Tailwind CSS classes with Shadcn components

## 🚧 TODO

- [ ] Implement authentication backend
- [ ] Add database integration
- [ ] Implement poll creation API
- [ ] Add real-time voting updates
- [ ] Add user profile management
- [ ] Add poll analytics
- [ ] Add search and filtering
- [ ] Add poll categories management
- [ ] Add email notifications
- [ ] Add poll sharing features

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email support@pollapp.com or create an issue in the repository.
