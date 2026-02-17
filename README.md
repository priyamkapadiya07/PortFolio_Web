# ⚡ Liquid Dark Portfolio

A high-performance, responsive personal portfolio website featuring a premium "Liquid Dark" aesthetic, glassmorphism effects, and smooth physics-based animations.

![Portfolio Preview](/app/icon.svg)

## 🚀 Features

- **Liquid UI Design**: Custom "liquid" buttons with elastic hover effects and deep gradients.
- **Glassmorphism**: Frosted glass cards and dock-style navigation for a modern feel.
- **Responsive Layout**: Fully adaptive design that looks great on mobile, tablet, and desktop.
- **Interactive Elements**:
  - **Hero Section**: Immersive entrance with glowing background orbs.
  - **Navbar**: "Glass Dock" style navigation with sliding hover effects.
  - **Contact Form**: Functional SMTP email integration via Nodemailer.
- **Performance Optimized**: Built with Next.js App Router and server-side rendering.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email**: [Nodemailer](https://nodemailer.com/)

## 📦 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables**:
    Create a `.env.local` file in the root directory and add your email credentials (required for the contact form):

    ```env
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-google-app-password
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🚀 Deployment (Vercel)

This project is optimized for deployment on [Vercel](https://vercel.com).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  **IMPORTANT**: Add your `EMAIL_USER` and `EMAIL_PASS` in the **Environment Variables** section of the Vercel project settings.
4.  Click **Deploy**.

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages and layouts
│   ├── api/              # API routes (e.g., /api/contact)
│   ├── layout.tsx        # Global layout and font configuration
│   └── page.tsx          # Main entry page
├── components/           # Reusable UI components
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Skills, Projects, Contact
│   └── ui/               # Primitive components (Button, GlassCard)
├── lib/                  # Utility functions (cn, animations)
└── public/               # Static assets (images, resume)
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
