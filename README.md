# 🎨 **TBBA Framework v2.0.0**

[![GitHub release](https://img.shields.io/badge/version-2.0.0-brightgreen)](https://github.com/bdgamer9191-cloud/Tbba/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/bdgamer9191-cloud/Tbba)](https://github.com/bdgamer9191-cloud/Tbba/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/bdgamer9191-cloud/Tbba)](https://github.com/bdgamer9191-cloud/Tbba/network)
[![GitHub issues](https://img.shields.io/github/issues/bdgamer9191-cloud/Tbba)](https://github.com/bdgamer9191-cloud/Tbba/issues)
[![File Size](https://img.shields.io/badge/size-200KB-blue)](https://github.com/bdgamer9191-cloud/Tbba)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-success)](https://github.com/bdgamer9191-cloud/Tbba)

**The Ultimate Hybrid CSS Framework**  
*Tailwind + Bootstrap + Bulma + Custom Utilities*

## 📋 **Table of Contents**
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🎨 Components](#-components)
- [🛠 Utilities](#-utilities)
- [⚡ JavaScript API](#-javascript-api)
- [🎯 Examples](#-examples)
- [🔧 Customization](#-customization)
- [📱 Browser Support](#-browser-support)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

## ✨ **Features**

### 🎯 **Core Advantages**
- **Hybrid Design**: Combines utility-first (Tailwind), component-based (Bootstrap), and modern (Bulma) approaches
- **Zero Dependencies**: Pure vanilla JavaScript & CSS - no external dependencies
- **Auto-initialization**: Framework initializes automatically on DOM ready
- **Dark Mode**: Automatic system theme detection with manual override
- **Responsive First**: Mobile-first with 6 breakpoints (xs, sm, md, lg, xl, xxl)

### 🎨 **Design System**
- **Color System**: 10 color families with 10 shades each
- **Typography**: Complete scale (xs-9xl) with responsive adjustments
- **Spacing**: 8-point scale (0.25rem increments, 0-64)
- **Shadows**: 7 shadow levels with smooth transitions
- **Border Radius**: 8 radius sizes including full rounded

### ⚡ **Performance**
- **Lightweight**: ~200KB (unminified), ~80KB (minified), ~20KB gzipped
- **Fast Loading**: CSS injected dynamically
- **Tree Shaking**: Use only what you need

## 🚀 **Quick Start**

### **CDN Method (Recommended)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TBBA Framework</title>
    <script src="https://unpkg.com/tbba@2.0.0/TBBA.js"></script>
</head>
<body>
    <div class="tbba-container">
        <h1 class="tbba-text-primary">Welcome to TBBA!</h1>
        <button class="tbba-btn tbba-btn-primary" onclick="TBBA.alert('Hello!', 'success')">
            Click Me
        </button>
    </div>
</body>
</html>