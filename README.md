# 🌌 Harsh Gupta | Full-Stack Portfolio

[![Live Site](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://portfolio-website-dusky-six-70.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/harshGupta090722/Portfolio_Website)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/harsh-gupta-09-07-2004-/)

Welcome to the repository of my personal portfolio website! Designed with a cosmic theme, this site is a fast, responsive, and interactive showcase of my full-stack web development skills, engineering projects, and software design principles.

![Portfolio Banner](./banner.png)

## 🚀 Live Demo
Visit the live deployed site here: **[https://portfolio-website-dusky-six-70.vercel.app/](https://portfolio-website-dusky-six-70.vercel.app/)**

---

## ✨ Features

- **🌌 Cosmic Theme & Ambient Animations**: Features a dynamic custom star background effect, glowing buttons, smooth fade-in animations, and a polished glassmorphism design.
- **🌗 Light & Dark Modes**: Responsive, high-contrast themes toggleable instantly via a persistent floating toggle button.
- **🛠️ Filterable Skills Inventory**: Categorized skills list across languages, frontend, backend, devops, and tools with interactive level indicator bars.
- **📂 Featured Projects Showcase**: Showcase of production-ready projects with direct repository links, tech tags, and custom visual cards.
- **✉️ Interactive Contact Form**: Functional client-side validated contact form powered by Formspree API with built-in toast notification feedback.
- **📅 Cal.com Integration**: Embedded calendar link to schedule Google Meet sessions directly.
- **📄 Resume Download**: Dedicated mechanism to download my latest professional CV directly from the browser.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: [React.js](https://react.dev/) (Vite-powered)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-first configurations)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Radix UI Toast](https://www.radix-ui.com/primitives/docs/components/toast)
- **Contact API**: [Formspree](https://formspree.io/)

---

## 📂 Project Structure

```text
├── public/
│   ├── projects/                  # Project card screenshots
│   ├── Resume_Full_Stack.pdf      # Downloadable PDF Resume
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/                # Modular Section Components
│   │   ├── ui/                    # UI elements like Toast
│   │   ├── AboutSection.jsx       # Biography & CV download
│   │   ├── ContactSection.jsx     # Contact form & Cal.com link
│   │   ├── Footer.jsx             # Social links and copyright
│   │   ├── HeroSection.jsx        # Landing fold with animations
│   │   ├── Navbar.jsx             # Navigation and section anchors
│   │   ├── ProjectsSection.jsx    # Projects listing & cards
│   │   ├── SkillsSection.jsx      # Filterable skills catalog
│   │   ├── StarBackground.jsx     # Canvas-based background animations
│   │   └── ThemeToggle.jsx        # Dark/Light mode toggle switch
│   ├── hooks/                     # Custom React hooks (e.g. use-toast)
│   ├── lib/                       # Utility functions (cn class merging)
│   ├── pages/                     # Main page layouts
│   │   ├── Home.jsx               # Main Portfolio Home Page
│   │   └── NotFound.jsx           # 404 fallback page
│   ├── App.jsx                    # Routing configuration
│   ├── index.css                  # Tailwind CSS v4 & custom animations
│   └── main.jsx
├── .env                           # Environment variables configuration
└── vite.config.js                 # Vite plugins and alias mappings
```

---

## ⚙️ Getting Started

Follow these steps to run the portfolio website locally on your computer.

### 📋 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or above is recommended).

### 🚀 Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshGupta090722/Portfolio_Website.git
   cd Portfolio_Website
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Formspree Form ID:
   ```env
   VITE_FORMSPREE_FORM_ID=your_formspree_form_id_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Featured Projects in Detail

Here are the key projects showcased on this portfolio website:

### 1. **SocietyOne** 🏢
- **Timeline**: May 2026 – June 2026
- **Description**: A comprehensive rental and society management platform featuring multi-stage verification workflows, secure role-based dashboards (Admin, Landlord, Tenant), document uploads, and automated lease lifecycle tracking.
- **Repo**: [SocietyOne on GitHub](https://github.com/harshGupta090722/SocietyOne)
- **Tech Stack**: React.js, TypeScript, Node.js, Express.js, MongoDB, JWT, Multer

### 2. **Web-Track** 📊
- **Timeline**: Feb 2026 – March 2026
- **Description**: A full-stack analytics platform (similar to Google Analytics) designed to track website visitors, track events, and monitor real-time traffic statistics.
- **Repo**: [Web-tracker on GitHub](https://github.com/harshGupta090722/web-tracker)
- **Tech Stack**: Next.js, TypeScript, PostgreSQL, Drizzle ORM, Clerk, AWS EC2, Nginx

### 3. **BiteExpress** 🍕
- **Timeline**: June 2026 – Present
- **Description**: A real-time food ordering platform that handles customer ordering, staff dispatch dashboards, and admin menus. Powered by GraphQL Subscriptions for live updates and Redis for high-speed state caching.
- **Repo**: [BiteExpress on GitHub](https://github.com/harshGupta090722/BiteExpress)
- **Tech Stack**: Next.js, TypeScript, GraphQL, PostgreSQL, Redis, Prisma, NextAuth

---

## 🤝 Let's Connect!

I'm always open to discussing web/app development opportunities, software architecture collaborations, or interesting AI technologies.

- **📧 Email**: [harshgupta0907@gmail.com](mailto:harshgupta0907@gmail.com)
- **🔗 LinkedIn**: [Harsh Gupta](https://www.linkedin.com/in/harsh-gupta-09-07-2004-/)
- **💻 LeetCode**: [@HarshG0907](https://leetcode.com/u/HarshG0907/)
- **📅 Schedule a Call**: [Book a Meet via Cal.com](https://cal.com/harsh-gupta-d4bnfc/google-meet)
- **😺 GitHub**: [@harshGupta090722](https://github.com/harshGupta090722)