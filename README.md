# 🎨 **TBBA Framework v2.0.0** 🌟

<div align="center">

[![Version](https://img.shields.io/badge/Version-2.0.0-brightgreen?style=for-the-badge&logo=github)](https://github.com/bdgamer9191-cloud/Tbba/releases)  
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=bookstack)](https://opensource.org/licenses/MIT)  
[![Stars](https://img.shields.io/github/stars/bdgamer9191-cloud/Tbba?style=for-the-badge&logo=star&color=yellow)](https://github.com/bdgamer9191-cloud/Tbba/stargazers)  
[![Forks](https://img.shields.io/github/forks/bdgamer9191-cloud/Tbba?style=for-the-badge&logo=git&color=orange)](https://github.com/bdgamer9191-cloud/Tbba/network)  
[![Size](https://img.shields.io/badge/Size-200KB-blue?style=for-the-badge&logo=download)](https://github.com/bdgamer9191-cloud/Tbba)  
[![JavaScript](https://img.shields.io/badge/Made_with-JavaScript-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[![No Dependencies](https://img.shields.io/badge/Dependencies-None-success?style=for-the-badge&logo=check-circle)](https://github.com/bdgamer9191-cloud/Tbba)  
[![Node.js](https://img.shields.io/badge/Node.js-14.x+-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)  
[![NPM Package](https://img.shields.io/badge/NPM_Package-Available-red?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/tbba)

**✨ The Ultimate Hybrid CSS Framework ✨**  
*Where Tailwind meets Bootstrap dances with Bulma!* 🎭  

</div>

---

## 📋 **Table of Contents**
- Why Choose TBBA  
- Installation  
- CDN  
- NPM  
- React Integration  
- Vue.js Integration  
- Angular Integration  
- Component Gallery  
- Utilities  
- JavaScript API  
- Real-world Examples  
- Community  

---

# 📢 Community & Support

<div align="center">

### 💬 Join Telegram  
<a href="https://t.me/tbbacss" target="_blank">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white">
</a>  
<a href="https://t.me/tbbacss" target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" width="24">
  **@tbbacss**
</a>

<img src="https://web.telegram.org/k/assets/img/apple-touch-icon.png?v=1" width="100">

</div>

---

# 📦 Installation Magic

## 🌐 CDN
```html
<script src="https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js"></script>

<script 
  src="https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js"   
  integrity="sha384-..."  
  crossorigin="anonymous">
</script>

📦 NPM Installation

npm install tbba
yarn add tbba
pnpm add tbba


---

⚛️ React Integration

import React from 'react';
import 'tbba/dist/TBBA.css';
import { TBBA } from 'tbba';

function App() {
  return (
    <div className="tbba-container">
      <h1 className="tbba-text-primary">Hello TBBA!</h1>
      <button className="tbba-btn tbba-btn-primary">Click Me</button>
    </div>
  );
}

export default App;


---

🖖 Vue.js Integration

<template>
  <div class="tbba-container">
    <h1 class="tbba-text-primary">Hello TBBA!</h1>
    <button class="tbba-btn tbba-btn-primary" @click="showAlert">Click Me</button>
  </div>
</template>

<script>
import 'tbba/dist/TBBA.css';

export default {
  methods: {
    showAlert() {
      TBBA.alert('Hello from Vue!', 'success');
    }
  }
}
</script>


---

🎯 Angular Integration

{
  "projects": {
    "your-project": {
      "architect": {
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
    }
  }
}


---

✨ Why Choose TBBA?

• 🧬 Hybrid DNA: Tailwind + Bootstrap + Bulma  
• ⚡ Zero config  
• 🤖 Auto CSS injection  
• 🌙 Smart theme detection  
• 🎨 Unified design system  
• 📦 NPM ready


---

🚀 Super Quick Start

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js"></script>
    <title>TBBA Starter</title>
</head>
<body class="tbba-container">
    <h1 class="tbba-text-primary tbba-text-center">Welcome to TBBA</h1>

    <button class="tbba-btn tbba-btn-primary"
        onclick="TBBA.alert('Welcome!', 'success')">
        Click Me
    </button>
</body>
</html>


---

🎨 Component Gallery

Buttons

<button class="tbba-btn tbba-btn-primary">Primary</button>
<button class="tbba-btn tbba-btn-outline-primary">Outline</button>
<button class="tbba-btn tbba-btn-gradient">Gradient</button>
<button class="tbba-btn tbba-btn-lg">Large</button>

Cards

<div class="tbba-card tbba-shadow-lg">
  <img src="image.jpg" class="tbba-card-img">
  <div class="tbba-card-body">
      <h5 class="tbba-card-title">Title</h5>
      <p class="tbba-card-text">Example text.</p>
      <a class="tbba-btn tbba-btn-primary">Go</a>
  </div>
</div>

Navbar

<nav class="tbba-navbar">
    <div class="tbba-navbar-brand">MyBrand</div>
    <div class="tbba-navbar-menu">
        <a class="tbba-navbar-item">Home</a>
        <a class="tbba-navbar-item">About</a>
        <a class="tbba-navbar-item">Contact</a>
    </div>
</nav>


---

🛠️ Utilities

Spacing

<div class="tbba-m-4">Margin</div>
<div class="tbba-p-4">Padding</div>

Typography

<h1 class="tbba-text-6xl">Heading</h1>
<p class="tbba-text-primary">Primary text</p>

Grid

<div class="tbba-row">
  <div class="tbba-col-4">Col</div>
  <div class="tbba-col-4">Col</div>
  <div class="tbba-col-4">Col</div>
</div>


---

⚡ JavaScript API

Alerts

TBBA.alert("Hello!", "success");

Modals

TBBA.modal.open({
  title: "Modal",
  content: "Example modal",
  size: "lg"
});

Toasts

TBBA.toast.success("Saved!");

Theme

TBBA.theme.toggle();

Validation

TBBA.form.validate('#form');


---

🌟 Real-World Example: Login Form

<div class="tbba-container tbba-max-w-md tbba-mx-auto tbba-mt-8">
  <div class="tbba-card tbba-shadow-xl">
      <div class="tbba-card-header tbba-text-center">
          <h2 class="tbba-text-2xl tbba-font-bold">Welcome Back</h2>
      </div>
      <div class="tbba-card-body">
          <form id="loginForm">
              <div class="tbba-form-group">
                  <label>Email</label>
                  <input type="email" class="tbba-form-control" required>
              </div>

              <div class="tbba-form-group">
                  <label>Password</label>
                  <input type="password" class="tbba-form-control" required>
              </div>

              <button class="tbba-btn tbba-btn-primary tbba-w-full">Login</button>
          </form>
      </div>
  </div>
</div>


---

📜 License

Licensed under the MIT License.