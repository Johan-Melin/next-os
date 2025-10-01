# Next.js OS Template

A modern, desktop-inspired operating system interface built with Next.js, React, and Tailwind CSS. 

## 📸 Screenshots

<div align="center">
  <img src="./public/screenshots/desktop.png" alt="Desktop View" width="80%">
  <br><br>
  <img src="./public/screenshots/mobile.png" alt="Mobile View" width="40%">
  <br>
  <em>Desktop (top) and mobile (bottom) views of the OS interface</em>
</div>

## Features

- Desktop-like window management
- Responsive design with only one window open at a time
- Navigate to previous folder with the back button
- Optimized performance with React.memo and useCallback
- Dynamic content loading

## Getting Started

### 🚀 Quick Start

#### 1-Click Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https:%2F%2Fgithub.com%2FJohan%2DMelin%2Fnext%2Dos.git)

### Local Development

1. **Use this template**
   - Click the "Use this template" button above
   - Or clone the repository:
   ```bash
   git clone https://github.com/Johan-Melin/next-os.git
   cd next-os
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding New Windows
1. Create a new component
2. Add the component to `contentMapping.ts`
3. Update the desktop configuration in `config/desktop.ts`

## License

This project is licensed under the MIT License - see the [LICENSE](https://mit-license.org/) file for details.


