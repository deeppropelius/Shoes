# Shoes- | Luxury 3D Sneaker Experience

An haute-couture interactive 3D sneaker landing page built with **React 19**, **Three.js**, **React Three Fiber (@react-three/fiber)**, **@react-three/drei**, **Tailwind CSS v4**, and the **tweakcn** design token architecture.

---

## ✨ Features

- **360° Interactive 3D Showcase**: Real-time orbit controls, zoom, contact shadows, and studio lightformers.
- **4 Custom Luxury Colorways**:
  - 🔴 **Crimson Royale** (`red-shoes.glb`)
  - 🔵 **Monaco Azure** (`blue-shoes.glb`)
  - 🟢 **Jade Couture** (`green-shoes.glb`)
  - 🟣 **Imperial Amethyst** (`purple-shoes.glb`)
- **Dynamic Dual-Mode Luxury Gradients**:
  - **Light Mode**: Shoe color in center radiating outward to crisp pure white.
  - **Dark Mode**: Noir black in center radiating into the vibrant shoe color along the circular perimeter.
- **tweakcn Theme System**:
  - Seamless Light / Dark mode toggle in the navigation bar.
  - Interactive floating color swatch capsule to switch sneaker models and themes on the fly.
  - Persistent theme settings via `localStorage`.
- **Architectural Background Typography**: Scaled haute-couture "SNEAKERS" typography that dynamically shifts its stroke and ambient halo in sync with the active sneaker colorway.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vite.dev/)
- **3D Engine**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

## 🌿 Branch Structure
- `main`: Production-ready release branch
- `dev`: Active development integration branch
- `feature/Landing-Page`: 3D luxury landing page feature branch
