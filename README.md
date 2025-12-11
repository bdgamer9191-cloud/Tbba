<style>
/* =============== ANIMATED GRADIENT TITLE =============== */
.gradient-title {
  background: linear-gradient(90deg, #00e5ff, #7f00ff, #ff00bf, #00e5ff);
  background-size: 300% 300%;
  animation: gradientFlow 6s infinite linear;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

@keyframes gradientFlow {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

/* =============== GLOWING BOX =============== */
.glow-box {
  padding: 18px;
  border-radius: 12px;
  background: #0d0d0d;
  border: 1px solid #00e5ff55;
  box-shadow: 0 0 15px #00e5ff55;
  animation: glow 2.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {box-shadow: 0 0 12px #00e5ff44;}
  to   {box-shadow: 0 0 22px #00e5ffcc;}
}

/* ANIMATED UNDERLINE */
.underline-animated {
  display: inline-block;
  position: relative;
  padding-bottom: 4px;
}
.underline-animated::after {
  content: "";
  position: absolute;
  height: 3px;
  left: 0;
  bottom: 0;
  width: 0%;
  background: #00eaff;
  animation: underlineSlide 3s infinite ease-in-out;
}
@keyframes underlineSlide {
  0% {width: 0%;}
  50% {width: 100%;}
  100% {width: 0%;}
}
</style>

# 📋 **Table of Contents**
- Why Choose TBBA  
- Installation  
- CDN  
- NPM  
- React  
- Vue.js  
- Angular  
- Components  
- Utilities  
- JavaScript API  
- Examples  
- Community  

---

# 📢 Community & Support

<div align="center" class="glow-box">

### 💬 Join Telegram  
<a href="https://t.me/tbbacss" target="_blank">
  <img src="https://img.shields.io/badge/Join%20Telegram-00e5ff?style=for-the-badge&logo=telegram&logoColor=white">
</a>  

<img src="https://web.telegram.org/k/assets/img/apple-touch-icon.png?v=1" width="100">

</div>

---

# 📦 Installation Magic

## 🌐 CDN (Your CDN)
```html
<script src="https://unpkg.com/tbba@2.0.0/TBBA.js"></script>
```

---

# 📦 NPM Installation
```bash
npm install tbba
yarn add tbba
pnpm add tbba
```

---

# ⚛️ React Integration
```jsx
import React from 'react';
import 'tbba/dist/TBBA.css';
import { TBBA } from 'tbba';

export default function App() {
  return (
    <div className="tbba-container">
      <h1 className="tbba-text-primary">Hello TBBA!</h1>
      <button className="tbba-btn tbba-btn-primary">Click Me</button>
    </div>
  );
}
```

---

# 🖖 Vue.js Integration
```vue
<template>
  <div class="tbba-container">
    <h1 class="tbba-text-primary">Hello TBBA!</h1>
    <button class="tbba-btn tbba-btn-primary" @click="showAlert">Click</button>
  </div>
</template>

<script>
import 'tbba/dist/TBBA.css';

export default {
  methods: {
    showAlert() {
      TBBA.alert('Vue works!', 'success');
    }
  }
}
</script>
```

---

# 🎯 Angular Integration
```json
{
  "build": {
    "options": {
      "styles": [
        "node_modules/tbba/dist/TBBA.css"
      ],
      "scripts": [
        "node_modules/tbba/dist/TBBA.js"
      ]
    }
  }
}
```

---

# ✨ Why Choose TBBA?

<div class="glow-box">

### 🌟 **Hybrid Superpowers**
Tailwind utilities + Bootstrap components + Bulma smoothness.

### ⚡ **Zero Config**
No CSS file needed — TBBA injects everything automatically.

### 🎨 **Perfectly Balanced Design**
Clean, modern, consistent, easy to use.

### 🌙 **Smart Theme Engine**
Auto-detects OS dark mode + manual switching.

</div>

---

# 🚀 Quick Start (CDN)
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/tbba@2.0.0/TBBA.js"></script>
</head>
<body class="tbba-container">
    <h1 class="tbba-text-primary tbba-text-center">Welcome to TBBA</h1>
    <button onclick="TBBA.alert('Hello!', 'success')" class="tbba-btn tbba-btn-primary">
      Click Me
    </button>
</body>
</html>
```

---

# 🎨 Component Gallery

## Buttons
```html
<button class="tbba-btn tbba-btn-primary">Primary</button>
<button class="tbba-btn tbba-btn-outline-primary">Outline</button>
<button class="tbba-btn tbba-btn-gradient">Gradient</button>
```

## Cards
```html
<div class="tbba-card tbba-shadow-lg">
  <img src="image.jpg" class="tbba-card-img">
  <div class="tbba-card-body">
    <h5 class="tbba-card-title">Card Title</h5>
    <p class="tbba-card-text">Example text.</p>
  </div>
</div>
```

## Navbar
```html
<nav class="tbba-navbar">
  <div class="tbba-navbar-brand">MyBrand</div>
  <div class="tbba-navbar-menu">
    <a class="tbba-navbar-item">Home</a>
    <a class="tbba-navbar-item">About</a>
    <a class="tbba-navbar-item">Contact</a>
  </div>
</nav>
```

---

# 🛠 Utilities
```html
<div class="tbba-m-4">Margin</div>
<div class="tbba-p-4">Padding</div>
<h1 class="tbba-text-6xl">Heading</h1>
```

---

# ⚡ JavaScript API

### Alerts
```javascript
TBBA.alert("Hello!", "success");
```

### Modals
```javascript
TBBA.modal.open({
  title: "Modal",
  content: "Example modal"
});
```

### Toasts
```javascript
TBBA.toast.success("Saved!");
```

### Theme Control
```javascript
TBBA.theme.toggle();
```

---

# 🌟 Full Example (Login Form)
```html
<div class="tbba-container tbba-max-w-md tbba-mx-auto tbba-mt-8">
  <div class="tbba-card tbba-shadow-xl">
      <div class="tbba-card-header tbba-text-center">
          <h2 class="tbba-text-2xl tbba-font-bold">Welcome Back</h2>
      </div>
      <div class="tbba-card-body">
          <form>
              <div class="tbba-form-group">
                  <label>Email</label>
                  <input type="email" class="tbba-form-control">
              </div>

              <div class="tbba-form-group">
                  <label>Password</label>
                  <input type="password" class="tbba-form-control">
              </div>

              <button class="tbba-btn tbba-btn-primary tbba-w-full">Login</button>
          </form>
      </div>
  </div>
</div>
```

---

# 📜 License
```markdown
MIT License
```