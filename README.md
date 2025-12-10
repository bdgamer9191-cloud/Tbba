```markdown
# 🎨 TBBA Framework v2.0.0

<div align="center">
🚀 **Tailwind + Bootstrap + Bulma Hybrid CSS Framework** ✨
</div>

## 📋 Quick Navigation
- [🌟 Why TBBA?](#why-tbba)
- [📦 Installation](#installation)
- [⚡ Quick Start](#quick-start)
- [🎨 Components](#components)
- [🛠️ Utilities](#utilities)
- [📜 License](#license)

## 🌟 Why TBBA?
TBBA combines **Tailwind's utility-first** approach, **Bootstrap's robustness**, and **Bulma's elegant components** into one lightweight (200KB) package.

| Feature | Benefit |
|---------|---------|
| **Zero Config** | Start instantly |
| **Auto CSS Injection** | No manual linking |
| **Smart Theme** | Dark/light mode ready |
| **Unified Design** | Consistent components |

> 💡 Get utility classes (`tbba-p-4`) and ready-made components (`tbba-btn`) in one package!

## 📦 Installation

### 🌐 CDN (Recommended)
```html
<!-- Basic CDN -->
<script src="https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js"></script>

<!-- Production (with integrity) -->
<script
  src="https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js"
  integrity="sha384-..."
  crossorigin="anonymous">
</script>
```

📦 NPM

```bash
npm install tbba
# or
yarn add tbba
# or
pnpm add tbba
```

⚛️ Framework Support

React:

```jsx
import 'tbba/dist/TBBA.css';
// Use: className="tbba-btn tbba-btn-primary"
```

Vue:

```vue
<template>
  <button class="tbba-btn tbba-btn-primary">Click</button>
</template>
<script>
import 'tbba/dist/TBBA.css';
</script>
```

Angular: Add to angular.json:

```json
"styles": ["node_modules/tbba/dist/TBBA.css"],
"scripts": ["node_modules/tbba/dist/TBBA.js"]
```

⚡ Quick Start

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js"></script>
</head>
<body class="tbba-container tbba-p-8">
  <h1 class="tbba-text-primary">Welcome to TBBA</h1>
  <button class="tbba-btn tbba-btn-primary"
    onclick="TBBA.toast.success('Hello TBBA!')">
    Click Me
  </button>
</body>
</html>
```

🎨 Components

Buttons 🔘

```html
<button class="tbba-btn tbba-btn-primary">Primary</button>
<button class="tbba-btn tbba-btn-outline">Outline</button>
<button class="tbba-btn tbba-btn-gradient">Gradient</button>
<button class="tbba-btn tbba-btn-lg">Large</button>
```

Cards 🖼️

```html
<div class="tbba-card tbba-shadow-lg">
  <img src="image.jpg" class="tbba-card-img">
  <div class="tbba-card-body">
    <h5 class="tbba-card-title">Card Title</h5>
    <p class="tbba-card-text">Card content here.</p>
    <a class="tbba-btn tbba-btn-primary">Action</a>
  </div>
</div>
```

Navbar 🧭

```html
<nav class="tbba-navbar tbba-bg-dark">
  <div class="tbba-navbar-brand">Logo</div>
  <div class="tbba-navbar-menu">
    <a class="tbba-navbar-item">Home</a>
    <a class="tbba-navbar-item">About</a>
    <button onclick="TBBA.theme.toggle()">🌙 Theme</button>
  </div>
</nav>
```

🛠️ Utilities

Spacing

Class Effect
tbba-m-4 margin: 1rem
tbba-p-4 padding: 1rem
tbba-mx-auto horizontal center

Typography

```html
<h1 class="tbba-text-6xl">Heading</h1>
<p class="tbba-text-primary">Colored text</p>
<p class="tbba-text-center">Centered</p>
```

Grid System

```html
<div class="tbba-row tbba-gap-4">
  <div class="tbba-col-md-4">Column 1</div>
  <div class="tbba-col-md-4">Column 2</div>
  <div class="tbba-col-md-4">Column 3</div>
</div>
```

⚡ JavaScript API

Alerts & Modals

```javascript
// Alert
TBBA.alert("Message", "success");

// Modal
TBBA.modal.open({
  title: "Title",
  content: "Content here"
});

// Toast
TBBA.toast.success("Success!", "top-right");

// Theme
TBBA.theme.toggle(); // Switch dark/light
TBBA.theme.set('dark'); // Force dark

// Form Validation
TBBA.form.validate('#myForm');
```

📜 License

MIT License - Free for personal and commercial use.

---

<div align="center">
💬 **Need Help?** Join our community for support!
</div>
```
