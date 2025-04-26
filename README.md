# 🌎 Countries Explorer App

A modern, responsive web application built with Remix that allows users to explore information about countries around the world.

![Remix](https://img.shields.io/badge/Remix-v7.5.0-blue?style=for-the-badge&logo=remix&logoColor=white)
![React](https://img.shields.io/badge/React-v19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-v5.4.11-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- 🔍 Search countries by name
- 🗺️ Filter countries by region
- 📊 View detailed information about each country
- 🏳️ See country flags and essential data
- 🌓 Light/dark mode support
- 📱 Fully responsive design
- 🚀 Server-side rendering for better performance
- 🔄 Type-safe API integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

## 🧪 Running Tests

```bash
npm run typecheck
```

## 📦 Project Structure

```
├── app/
│   ├── components/       # Reusable UI components
│   ├── routes/           # Application routes
│   ├── types/            # TypeScript type definitions
│   ├── app.css           # Global styles
│   └── root.tsx          # Root component
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🧩 API Integration

This project uses the [REST Countries API](https://restcountries.com/) to fetch country data. The API provides information about countries including:

- Name, capital, and region
- Population and area
- Languages and currencies
- Flag images and border countries

## 💻 Tech Stack

- **Framework**: [Remix](https://remix.run/) - A full stack web framework
- **UI Library**: [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Language**: [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Remix and React Router.
