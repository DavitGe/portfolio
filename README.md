# David Gelovani - Professional Portfolio

A modern, responsive portfolio website built with Next.js 15, React 19, and TailwindCSS 4 showcasing my projects, resume, and contact information.

![Portfolio Screenshot](./public/images/portfolio-screenshot.png)

## 🚀 Features

- **Responsive Design**: Flawlessly adapts to all screen sizes and devices
- **Modern UI/UX**: Clean interface with smooth animations and transitions
- **Portfolio Projects**: Showcase of my work with detailed descriptions
- **Interactive Elements**: Animated headings, custom SVG animations
- **Contact Form**: Easy way for potential clients/employers to reach out
- **Resume/CV**: Professional background and qualifications
- **Dark Mode**: Eye-friendly dark theme with subtle design elements

## 💻 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: CSS animations, Custom SVG animations
- **Deployment**: Vercel
- **Email Integration**: Nodemailer for contact form submissions

## 🛠️ Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

3. Create a `.env.local` file in the root directory for environment variables:

   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-app-password
   EMAIL_TO=recipient-email@example.com
   ```

4. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
portfolio/
├── public/               # Static assets
│   └── images/           # Image files
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes for contact form
│   │   ├── contact/      # Contact page
│   │   ├── projects/     # Projects showcase
│   │   ├── resume/       # Resume/CV page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/       # Reusable UI components
└── ...config files
```

## 🔍 Development

- **Page Updates**: Modify files in the `src/app` directory to update page content
- **Component Changes**: Edit or add components in the `src/components` directory
- **Styling**: Update TailwindCSS styles in individual files or `globals.css`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

David Gelovani - [LinkedIn](https://www.linkedin.com/in/davit-gelovani-379605228/) - davit.gelovani403@gmail.com

Project Link: [https://github.com/DavitGe/portfolio](https://github.com/DavitGe/portfolio)
