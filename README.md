# React Auth Router

This is a simple React project that demonstrates authentication functionality with routing using react-router-dom and state management with zustand.

## Features

- React with TypeScript
- React Router for routing between pages
- Tailwind CSS for styling
- Authentication Flow (Login/Logout)
- State Management with Zustand
- Vite for development and build

## Getting Started

### Prerequisites

To get started with this project, ensure that you have the following installed:

- Node.js (v16 or later recommended)
- Yarn or npm

### Installation

Clone the repository and install the dependencies:

```bash

git clone https://github.com/SRYVPRASAD/react-atuh-routing.git
cd react-auth-routing
```





### Running the Development Server

After installing the dependencies, you can start the development server using:

```bash
npm install # or 'yarn install'
npm run dev # or 'yarn dev'
```
This will start the Vite development server, and you can open the app at http://localhost:3000.

### Building for Production

To build the project for production:

```bash

npm run build # or 'yarn build'
```

This will transpile TypeScript files and build the app for production, outputting the optimized code in the `dist` folder.

To preview the production build locally:

```bash

npm run preview # or 'yarn preview'
```

### Linting

To lint your code using ESLint with the TypeScript plugin, run:

```bash

npm run lint # or 'yarn lint'
```

This will check your code for linting issues with the configured rules.

## Project Structure

```bash

src/
├── assets/ # Static assets like images, fonts, etc.
├── components/ # React components
├── pages/ # Pages (for routing)
├── store/ # Zustand store for global state management
├── styles/ # Tailwind CSS configurations
├── App.tsx # Main app component
├── index.tsx # Entry point for React
└── tailwind.config.ts # Tailwind CSS configuration
```

### Routing

The app includes basic routing with react-router-dom. You can find the routing logic in src/App.tsx where routes are defined, and the user is redirected based on authentication state.

### Zustand Store

The app uses Zustand for state management. The state (like user and isAuthenticated) is stored and updated using the Zustand store, which is located in src/store/useAuthStore.ts.

### Tailwind CSS Setup

The app uses Tailwind CSS for styling. Tailwind is configured and ready to use in the src/styles/tailwind.css. You can add custom utility classes or modify existing ones in this file.

### Example of Authentication Flow

1. Login:

   - Use the login page to enter credentials.
   - If the credentials are correct, the user will be redirected to the dashboard.

2. Logout:

   - The user can logout by clicking on the "Logout" button.
   - After logging out, the user is redirected to the login page.

## Technologies Used

   - React - Front-end library
   - React Router - For routing
   - Zustand - For state management
   - Tailwind CSS - For styling
   - Vite - Development and build tool
   - TypeScript - For type safety and development

## Dependencies

### Dependencies:

   - `react`: For building user interfaces
   - `react-dom`: For DOM-specific methods
   - `react-router-dom`: For routing in React
   - `zustand`: For state management
   - `@headlessui/react`: For UI components like modal, dropdowns, etc.
   - `@heroicons/react`: For icons

### Dev Dependencies:

   - `typescript`: For TypeScript support
   - `vite`: For the build tool and dev server
   - `tailwindcss`: For utility-first CSS framework
   - `postcss`: For processing CSS with plugins
   - `autoprefixer`: For adding vendor prefixes
   - `eslint`: For linting the code
   - `@vitejs/plugin-react`: Vite plugin for React support

## License

This project is licensed under the MIT License - see the LICENSE file for details.
