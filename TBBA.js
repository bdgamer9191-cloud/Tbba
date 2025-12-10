/*!
 * TBBA Framework v2.0 - Ultimate Hybrid CSS Framework
 * Tailwind + Bootstrap + Bulma + Ahaduzzaman
 * Created by: Ahaduzzaman
 * Version: 2.0.0
 * License: MIT
 * Copyright © 2023 Ahaduzzaman. All rights reserved.
 * Repository: https://github.com/ahaduzzaman/tbba
 * Documentation: https://tbba.dev/docs
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TBBA = {}));
})(this, (function (exports) {
    'use strict';

    // ==============================================
    // CONFIGURATION & CONSTANTS
    // ==============================================
    const TBBA = {
        VERSION: '2.0.0',
        AUTHOR: 'Ahaduzzaman',
        LICENSE: 'MIT',
        COPYRIGHT: '© 2023 Ahaduzzaman. All rights reserved.',
        
        // Breakpoints (Bootstrap inspired)
        BREAKPOINTS: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400
        },
        
        // Colors (Tailwind inspired)
        COLORS: {
            // Blue
            'blue-50': '#eff6ff',
            'blue-100': '#dbeafe',
            'blue-200': '#bfdbfe',
            'blue-300': '#93c5fd',
            'blue-400': '#60a5fa',
            'blue-500': '#3b82f6',
            'blue-600': '#2563eb',
            'blue-700': '#1d4ed8',
            'blue-800': '#1e40af',
            'blue-900': '#1e3a8a',
            
            // Gray
            'gray-50': '#f9fafb',
            'gray-100': '#f3f4f6',
            'gray-200': '#e5e7eb',
            'gray-300': '#d1d5db',
            'gray-400': '#9ca3af',
            'gray-500': '#6b7280',
            'gray-600': '#4b5563',
            'gray-700': '#374151',
            'gray-800': '#1f2937',
            'gray-900': '#111827',
            
            // Red
            'red-50': '#fef2f2',
            'red-100': '#fee2e2',
            'red-500': '#ef4444',
            'red-600': '#dc2626',
            'red-700': '#b91c1c',
            
            // Green
            'green-50': '#f0fdf4',
            'green-100': '#dcfce7',
            'green-500': '#10b981',
            'green-600': '#059669',
            
            // Yellow
            'yellow-50': '#fffbeb',
            'yellow-100': '#fef3c7',
            'yellow-500': '#f59e0b',
            'yellow-600': '#d97706',
            
            // Purple
            'purple-50': '#faf5ff',
            'purple-100': '#f3e8ff',
            'purple-500': '#8b5cf6',
            'purple-600': '#7c3aed',
            
            // Pink
            'pink-50': '#fdf2f8',
            'pink-100': '#fce7f3',
            'pink-500': '#ec4899',
            'pink-600': '#db2777',
            
            // Indigo
            'indigo-50': '#eef2ff',
            'indigo-100': '#e0e7ff',
            'indigo-500': '#6366f1',
            'indigo-600': '#4f46e5',
            
            // Teal
            'teal-50': '#f0fdfa',
            'teal-100': '#ccfbf1',
            'teal-500': '#14b8a6',
            'teal-600': '#0d9488',
            
            // Orange
            'orange-50': '#fff7ed',
            'orange-100': '#ffedd5',
            'orange-500': '#f97316',
            'orange-600': '#ea580c',
            
            // Cyan
            'cyan-50': '#ecfeff',
            'cyan-100': '#cffafe',
            'cyan-500': '#06b6d4',
            'cyan-600': '#0891b2'
        },
        
        // Spacing Scale (Tailwind inspired)
        SPACING: {
            0: '0',
            1: '0.25rem',    // 4px
            2: '0.5rem',     // 8px
            3: '0.75rem',    // 12px
            4: '1rem',       // 16px
            5: '1.25rem',    // 20px
            6: '1.5rem',     // 24px
            8: '2rem',       // 32px
            10: '2.5rem',    // 40px
            12: '3rem',      // 48px
            16: '4rem',      // 64px
            20: '5rem',      // 80px
            24: '6rem',      // 96px
            32: '8rem',      // 128px
            40: '10rem',     // 160px
            48: '12rem',     // 192px
            56: '14rem',     // 224px
            64: '16rem'      // 256px
        },
        
        // Typography Scale
        FONT_SIZES: {
            'xs': '0.75rem',     // 12px
            'sm': '0.875rem',    // 14px
            'base': '1rem',      // 16px
            'lg': '1.125rem',    // 18px
            'xl': '1.25rem',     // 20px
            '2xl': '1.5rem',     // 24px
            '3xl': '1.875rem',   // 30px
            '4xl': '2.25rem',    // 36px
            '5xl': '3rem',       // 48px
            '6xl': '3.75rem',    // 60px
            '7xl': '4.5rem',     // 72px
            '8xl': '6rem',       // 96px
            '9xl': '8rem'        // 128px
        },
        
        // Font Weights
        FONT_WEIGHTS: {
            'thin': '100',
            'extralight': '200',
            'light': '300',
            'normal': '400',
            'medium': '500',
            'semibold': '600',
            'bold': '700',
            'extrabold': '800',
            'black': '900'
        },
        
        // Border Radius
        BORDER_RADIUS: {
            'none': '0',
            'sm': '0.125rem',    // 2px
            'DEFAULT': '0.25rem', // 4px
            'md': '0.375rem',    // 6px
            'lg': '0.5rem',      // 8px
            'xl': '0.75rem',     // 12px
            '2xl': '1rem',       // 16px
            '3xl': '1.5rem',     // 24px
            'full': '9999px'
        },
        
        // Shadows
        SHADOWS: {
            'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
            'none': '0 0 #0000'
        },
        
        // Transitions
        TRANSITIONS: {
            'DEFAULT': '150ms cubic-bezier(0.4, 0, 0.2, 1)',
            'linear': 'linear',
            'in': 'cubic-bezier(0.4, 0, 1, 1)',
            'out': 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        
        // Z-Index Scale
        Z_INDEX: {
            'auto': 'auto',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
            'dropdown': '1000',
            'sticky': '1020',
            'fixed': '1030',
            'modal-backdrop': '1040',
            'modal': '1050',
            'popover': '1060',
            'tooltip': '1070'
        }
    };

    // ==============================================
    // UTILITY FUNCTIONS
    // ==============================================
    const Utils = {
        // Generate unique ID
        uid: function(prefix = 'tbba') {
            return prefix + '-' + Date.now().toString(36) + Math.random().toString(36).substr(2);
        },
        
        // Debounce function
        debounce: function(func, wait, immediate) {
            let timeout;
            return function() {
                const context = this, args = arguments;
                const later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },
        
        // Throttle function
        throttle: function(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },
        
        // Deep merge objects
        deepMerge: function(target, source) {
            const output = Object.assign({}, target);
            if (this.isObject(target) && this.isObject(source)) {
                Object.keys(source).forEach(key => {
                    if (this.isObject(source[key])) {
                        if (!(key in target))
                            Object.assign(output, { [key]: source[key] });
                        else
                            output[key] = this.deepMerge(target[key], source[key]);
                    } else {
                        Object.assign(output, { [key]: source[key] });
                    }
                });
            }
            return output;
        },
        
        // Check if value is object
        isObject: function(item) {
            return (item && typeof item === 'object' && !Array.isArray(item));
        },
        
        // Format bytes
        formatBytes: function(bytes, decimals = 2) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const dm = decimals < 0 ? 0 : decimals;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        },
        
        // Format date
        formatDate: function(date, format = 'YYYY-MM-DD') {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            const hours = String(d.getHours()).padStart(2, '0');
            const minutes = String(d.getMinutes()).padStart(2, '0');
            const seconds = String(d.getSeconds()).padStart(2, '0');
            
            return format
                .replace('YYYY', year)
                .replace('YY', String(year).slice(-2))
                .replace('MM', month)
                .replace('DD', day)
                .replace('HH', hours)
                .replace('mm', minutes)
                .replace('ss', seconds);
        },
        
        // Copy to clipboard
        copyToClipboard: function(text) {
            return new Promise((resolve, reject) => {
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(text).then(resolve).catch(reject);
                } else {
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    textArea.style.top = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        resolve();
                    } catch (err) {
                        reject(err);
                    }
                    textArea.remove();
                }
            });
        },
        
        // Get CSS variable
        getCSSVar: function(name) {
            return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        },
        
        // Set CSS variable
        setCSSVar: function(name, value) {
            document.documentElement.style.setProperty(name, value);
        },
        
        // Create element with attributes
        createElement: function(tag, attributes = {}, children = []) {
            const element = document.createElement(tag);
            
            // Set attributes
            Object.keys(attributes).forEach(key => {
                if (key === 'className') {
                    element.className = attributes[key];
                } else if (key === 'innerHTML') {
                    element.innerHTML = attributes[key];
                } else if (key.startsWith('data-')) {
                    element.setAttribute(key, attributes[key]);
                } else {
                    element[key] = attributes[key];
                }
            });
            
            // Append children
            children.forEach(child => {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child));
                } else if (child instanceof Node) {
                    element.appendChild(child);
                }
            });
            
            return element;
        },
        
        // Parse query string
        parseQueryString: function(query) {
            return query
                .replace(/^\?/, '')
                .split('&')
                .reduce((params, param) => {
                    const [key, value] = param.split('=');
                    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
                    return params;
                }, {});
        },
        
        // Stringify query object
        stringifyQuery: function(obj) {
            return Object.keys(obj)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
                .join('&');
        },
        
        // Validate email
        validateEmail: function(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        
        // Validate URL
        validateURL: function(url) {
            try {
                new URL(url);
                return true;
            } catch (_) {
                return false;
            }
        },
        
        // Generate random color
        randomColor: function() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        },
        
        // Generate gradient
        generateGradient: function(color1, color2, angle = '90deg') {
            return `linear-gradient(${angle}, ${color1}, ${color2})`;
        },
        
        // Hex to RGB
        hexToRgb: function(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },
        
        // RGB to Hex
        rgbToHex: function(r, g, b) {
            return '#' + [r, g, b].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        },
        
        // Lighten/Darken color
        adjustColor: function(color, amount) {
            let usePound = false;
            if (color[0] === '#') {
                color = color.slice(1);
                usePound = true;
            }
            
            const num = parseInt(color, 16);
            let r = (num >> 16) + amount;
            if (r > 255) r = 255;
            else if (r < 0) r = 0;
            
            let b = ((num >> 8) & 0x00FF) + amount;
            if (b > 255) b = 255;
            else if (b < 0) b = 0;
            
            let g = (num & 0x0000FF) + amount;
            if (g > 255) g = 255;
            else if (g < 0) g = 0;
            
            return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
        }
    };

    // ==============================================
    // CORE CSS INJECTION
    // ==============================================
    class CSSInjector {
        constructor() {
            this.injected = false;
            this.styles = this.generateStyles();
        }
        
        generateStyles() {
            return `
/* TBBA Framework v${TBBA.VERSION} - Hybrid CSS Framework */
/* ${TBBA.COPYRIGHT} */

:root {
    /* Color System */
    ${Object.entries(TBBA.COLORS).map(([key, value]) => `--tbba-${key}: ${value};`).join('\n    ')}
    
    /* Spacing */
    ${Object.entries(TBBA.SPACING).map(([key, value]) => `--tbba-spacing-${key}: ${value};`).join('\n    ')}
    
    /* Typography */
    ${Object.entries(TBBA.FONT_SIZES).map(([key, value]) => `--tbba-font-size-${key}: ${value};`).join('\n    ')}
    ${Object.entries(TBBA.FONT_WEIGHTS).map(([key, value]) => `--tbba-font-weight-${key}: ${value};`).join('\n    ')}
    
    /* Border Radius */
    ${Object.entries(TBBA.BORDER_RADIUS).map(([key, value]) => `--tbba-radius-${key}: ${value};`).join('\n    ')}
    
    /* Shadows */
    ${Object.entries(TBBA.SHADOWS).map(([key, value]) => `--tbba-shadow-${key}: ${value};`).join('\n    ')}
    
    /* Transitions */
    ${Object.entries(TBBA.TRANSITIONS).map(([key, value]) => `--tbba-transition-${key}: ${value};`).join('\n    ')}
    
    /* Z-Index */
    ${Object.entries(TBBA.Z_INDEX).map(([key, value]) => `--tbba-z-${key}: ${value};`).join('\n    ')}
}

/* Reset & Base Styles */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: var(--tbba-font-size-base);
    font-weight: var(--tbba-font-weight-normal);
    line-height: 1.5;
    color: var(--tbba-gray-900);
    background-color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: var(--tbba-font-weight-bold);
    line-height: 1.2;
    color: inherit;
}

h1 { font-size: var(--tbba-font-size-4xl); }
h2 { font-size: var(--tbba-font-size-3xl); }
h3 { font-size: var(--tbba-font-size-2xl); }
h4 { font-size: var(--tbba-font-size-xl); }
h5 { font-size: var(--tbba-font-size-lg); }
h6 { font-size: var(--tbba-font-size-base); }

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

a {
    color: var(--tbba-blue-600);
    text-decoration: none;
    background-color: transparent;
}
a:hover {
    color: var(--tbba-blue-800);
    text-decoration: underline;
}

/* Container System (Bootstrap Inspired) */
.tbba-container {
    width: 100%;
    padding-right: var(--tbba-spacing-4);
    padding-left: var(--tbba-spacing-4);
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .tbba-container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .tbba-container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .tbba-container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .tbba-container {
        max-width: 1140px;
    }
}

@media (min-width: 1400px) {
    .tbba-container {
        max-width: 1320px;
    }
}

.tbba-container-fluid {
    width: 100%;
    padding-right: var(--tbba-spacing-4);
    padding-left: var(--tbba-spacing-4);
    margin-right: auto;
    margin-left: auto;
}

/* Grid System (12-column Bootstrap Grid) */
.tbba-row {
    --tbba-gutter-x: 1.5rem;
    --tbba-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--tbba-gutter-y));
    margin-right: calc(-0.5 * var(--tbba-gutter-x));
    margin-left: calc(-0.5 * var(--tbba-gutter-x));
}
.tbba-row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--tbba-gutter-x) * 0.5);
    padding-left: calc(var(--tbba-gutter-x) * 0.5);
    margin-top: var(--tbba-gutter-y);
}

.tbba-col {
    flex: 1 0 0%;
}

.tbba-col-auto {
    flex: 0 0 auto;
    width: auto;
}

/* Grid Columns 1-12 */
${Array.from({length: 12}, (_, i) => {
    const col = i + 1;
    const width = (col / 12 * 100).toFixed(6);
    return `.tbba-col-${col} {
    flex: 0 0 auto;
    width: ${width}%;
}`;
}).join('\n')}

/* Responsive Grid */
@media (min-width: 576px) {
    ${Array.from({length: 12}, (_, i) => {
        const col = i + 1;
        const width = (col / 12 * 100).toFixed(6);
        return `.tbba-col-sm-${col} {
        flex: 0 0 auto;
        width: ${width}%;
    }`;
    }).join('\n    ')}
}

@media (min-width: 768px) {
    ${Array.from({length: 12}, (_, i) => {
        const col = i + 1;
        const width = (col / 12 * 100).toFixed(6);
        return `.tbba-col-md-${col} {
        flex: 0 0 auto;
        width: ${width}%;
    }`;
    }).join('\n    ')}
}

@media (min-width: 992px) {
    ${Array.from({length: 12}, (_, i) => {
        const col = i + 1;
        const width = (col / 12 * 100).toFixed(6);
        return `.tbba-col-lg-${col} {
        flex: 0 0 auto;
        width: ${width}%;
    }`;
    }).join('\n    ')}
}

@media (min-width: 1200px) {
    ${Array.from({length: 12}, (_, i) => {
        const col = i + 1;
        const width = (col / 12 * 100).toFixed(6);
        return `.tbba-col-xl-${col} {
        flex: 0 0 auto;
        width: ${width}%;
    }`;
    }).join('\n    ')}
}

/* Flex Utilities (Tailwind Inspired) */
.tbba-flex { display: flex; }
.tbba-inline-flex { display: inline-flex; }
.tbba-flex-row { flex-direction: row; }
.tbba-flex-row-reverse { flex-direction: row-reverse; }
.tbba-flex-col { flex-direction: column; }
.tbba-flex-col-reverse { flex-direction: column-reverse; }
.tbba-flex-wrap { flex-wrap: wrap; }
.tbba-flex-nowrap { flex-wrap: nowrap; }
.tbba-flex-wrap-reverse { flex-wrap: wrap-reverse; }
.tbba-flex-1 { flex: 1 1 0%; }
.tbba-flex-auto { flex: 1 1 auto; }
.tbba-flex-initial { flex: 0 1 auto; }
.tbba-flex-none { flex: none; }
.tbba-flex-grow-0 { flex-grow: 0; }
.tbba-flex-grow { flex-grow: 1; }
.tbba-flex-shrink-0 { flex-shrink: 0; }
.tbba-flex-shrink { flex-shrink: 1; }

/* Justify Content */
.tbba-justify-start { justify-content: flex-start; }
.tbba-justify-end { justify-content: flex-end; }
.tbba-justify-center { justify-content: center; }
.tbba-justify-between { justify-content: space-between; }
.tbba-justify-around { justify-content: space-around; }
.tbba-justify-evenly { justify-content: space-evenly; }

/* Align Items */
.tbba-items-start { align-items: flex-start; }
.tbba-items-end { align-items: flex-end; }
.tbba-items-center { align-items: center; }
.tbba-items-baseline { align-items: baseline; }
.tbba-items-stretch { align-items: stretch; }

/* Align Self */
.tbba-self-auto { align-self: auto; }
.tbba-self-start { align-self: flex-start; }
.tbba-self-end { align-self: flex-end; }
.tbba-self-center { align-self: center; }
.tbba-self-stretch { align-self: stretch; }
.tbba-self-baseline { align-self: baseline; }

/* Gap Utilities */
.tbba-gap-0 { gap: 0; }
.tbba-gap-1 { gap: var(--tbba-spacing-1); }
.tbba-gap-2 { gap: var(--tbba-spacing-2); }
.tbba-gap-3 { gap: var(--tbba-spacing-3); }
.tbba-gap-4 { gap: var(--tbba-spacing-4); }
.tbba-gap-5 { gap: var(--tbba-spacing-5); }
.tbba-gap-6 { gap: var(--tbba-spacing-6); }
.tbba-gap-8 { gap: var(--tbba-spacing-8); }

.tbba-gap-x-0 { column-gap: 0; }
.tbba-gap-x-1 { column-gap: var(--tbba-spacing-1); }
.tbba-gap-x-2 { column-gap: var(--tbba-spacing-2); }
.tbba-gap-x-3 { column-gap: var(--tbba-spacing-3); }
.tbba-gap-x-4 { column-gap: var(--tbba-spacing-4); }

.tbba-gap-y-0 { row-gap: 0; }
.tbba-gap-y-1 { row-gap: var(--tbba-spacing-1); }
.tbba-gap-y-2 { row-gap: var(--tbba-spacing-2); }
.tbba-gap-y-3 { row-gap: var(--tbba-spacing-3); }
.tbba-gap-y-4 { row-gap: var(--tbba-spacing-4); }

/* Display Utilities */
.tbba-block { display: block; }
.tbba-inline-block { display: inline-block; }
.tbba-inline { display: inline; }
.tbba-flex { display: flex; }
.tbba-inline-flex { display: inline-flex; }
.tbba-table { display: table; }
.tbba-inline-table { display: inline-table; }
.tbba-table-caption { display: table-caption; }
.tbba-table-cell { display: table-cell; }
.tbba-table-column { display: table-column; }
.tbba-table-column-group { display: table-column-group; }
.tbba-table-footer-group { display: table-footer-group; }
.tbba-table-header-group { display: table-header-group; }
.tbba-table-row-group { display: table-row-group; }
.tbba-table-row { display: table-row; }
.tbba-flow-root { display: flow-root; }
.tbba-grid { display: grid; }
.tbba-inline-grid { display: inline-grid; }
.tbba-contents { display: contents; }
.tbba-list-item { display: list-item; }
.tbba-hidden { display: none; }

/* Responsive Display */
@media (min-width: 576px) {
    .tbba-sm\\:block { display: block; }
    .tbba-sm\\:inline-block { display: inline-block; }
    .tbba-sm\\:inline { display: inline; }
    .tbba-sm\\:flex { display: flex; }
    .tbba-sm\\:inline-flex { display: inline-flex; }
    .tbba-sm\\:hidden { display: none; }
}

@media (min-width: 768px) {
    .tbba-md\\:block { display: block; }
    .tbba-md\\:inline-block { display: inline-block; }
    .tbba-md\\:inline { display: inline; }
    .tbba-md\\:flex { display: flex; }
    .tbba-md\\:inline-flex { display: inline-flex; }
    .tbba-md\\:hidden { display: none; }
}

@media (min-width: 992px) {
    .tbba-lg\\:block { display: block; }
    .tbba-lg\\:inline-block { display: inline-block; }
    .tbba-lg\\:inline { display: inline; }
    .tbba-lg\\:flex { display: flex; }
    .tbba-lg\\:inline-flex { display: inline-flex; }
    .tbba-lg\\:hidden { display: none; }
}

@media (min-width: 1200px) {
    .tbba-xl\\:block { display: block; }
    .tbba-xl\\:inline-block { display: inline-block; }
    .tbba-xl\\:inline { display: inline; }
    .tbba-xl\\:flex { display: flex; }
    .tbba-xl\\:inline-flex { display: inline-flex; }
    .tbba-xl\\:hidden { display: none; }
}

/* Spacing Utilities (Margin & Padding) */
${['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py'].map(property => {
    const isMargin = property.startsWith('m');
    const direction = property.substring(1);
    
    return Array.from({length: 13}, (_, i) => {
        const size = i;
        const value = size === 0 ? '0' : `var(--tbba-spacing-${size})`;
        
        let cssProperty = '';
        if (property.length === 1) {
            cssProperty = isMargin ? 'margin' : 'padding';
        } else if (direction === 't') {
            cssProperty = isMargin ? 'margin-top' : 'padding-top';
        } else if (direction === 'r') {
            cssProperty = isMargin ? 'margin-right' : 'padding-right';
        } else if (direction === 'b') {
            cssProperty = isMargin ? 'margin-bottom' : 'padding-bottom';
        } else if (direction === 'l') {
            cssProperty = isMargin ? 'margin-left' : 'padding-left';
        } else if (direction === 'x') {
            return `.tbba-${property}-${size} {
        ${isMargin ? 'margin-left' : 'padding-left'}: ${value};
        ${isMargin ? 'margin-right' : 'padding-right'}: ${value};
    }`;
        } else if (direction === 'y') {
            return `.tbba-${property}-${size} {
        ${isMargin ? 'margin-top' : 'padding-top'}: ${value};
        ${isMargin ? 'margin-bottom' : 'padding-bottom'}: ${value};
    }`;
        }
        
        return `.tbba-${property}-${size} {
        ${cssProperty}: ${value};
    }`;
    }).join('\n');
}).join('\n\n')}

.tbba-m-auto { margin: auto; }
.tbba-mx-auto { margin-left: auto; margin-right: auto; }
.tbba-my-auto { margin-top: auto; margin-bottom: auto; }
.tbba-mt-auto { margin-top: auto; }
.tbba-mr-auto { margin-right: auto; }
.tbba-mb-auto { margin-bottom: auto; }
.tbba-ml-auto { margin-left: auto; }

/* Width Utilities */
.tbba-w-0 { width: 0; }
.tbba-w-1 { width: var(--tbba-spacing-1); }
.tbba-w-2 { width: var(--tbba-spacing-2); }
.tbba-w-3 { width: var(--tbba-spacing-3); }
.tbba-w-4 { width: var(--tbba-spacing-4); }
.tbba-w-5 { width: var(--tbba-spacing-5); }
.tbba-w-6 { width: var(--tbba-spacing-6); }
.tbba-w-8 { width: var(--tbba-spacing-8); }
.tbba-w-10 { width: var(--tbba-spacing-10); }
.tbba-w-12 { width: var(--tbba-spacing-12); }
.tbba-w-16 { width: var(--tbba-spacing-16); }
.tbba-w-20 { width: var(--tbba-spacing-20); }
.tbba-w-24 { width: var(--tbba-spacing-24); }
.tbba-w-32 { width: var(--tbba-spacing-32); }
.tbba-w-40 { width: var(--tbba-spacing-40); }
.tbba-w-48 { width: var(--tbba-spacing-48); }
.tbba-w-56 { width: var(--tbba-spacing-56); }
.tbba-w-64 { width: var(--tbba-spacing-64); }
.tbba-w-auto { width: auto; }
.tbba-w-px { width: 1px; }
.tbba-w-1\\/2 { width: 50%; }
.tbba-w-1\\/3 { width: 33.333333%; }
.tbba-w-2\\/3 { width: 66.666667%; }
.tbba-w-1\\/4 { width: 25%; }
.tbba-w-2\\/4 { width: 50%; }
.tbba-w-3\\/4 { width: 75%; }
.tbba-w-1\\/5 { width: 20%; }
.tbba-w-2\\/5 { width: 40%; }
.tbba-w-3\\/5 { width: 60%; }
.tbba-w-4\\/5 { width: 80%; }
.tbba-w-1\\/6 { width: 16.666667%; }
.tbba-w-2\\/6 { width: 33.333333%; }
.tbba-w-3\\/6 { width: 50%; }
.tbba-w-4\\/6 { width: 66.666667%; }
.tbba-w-5\\/6 { width: 83.333333%; }
.tbba-w-1\\/12 { width: 8.333333%; }
.tbba-w-2\\/12 { width: 16.666667%; }
.tbba-w-3\\/12 { width: 25%; }
.tbba-w-4\\/12 { width: 33.333333%; }
.tbba-w-5\\/12 { width: 41.666667%; }
.tbba-w-6\\/12 { width: 50%; }
.tbba-w-7\\/12 { width: 58.333333%; }
.tbba-w-8\\/12 { width: 66.666667%; }
.tbba-w-9\\/12 { width: 75%; }
.tbba-w-10\\/12 { width: 83.333333%; }
.tbba-w-11\\/12 { width: 91.666667%; }
.tbba-w-full { width: 100%; }
.tbba-w-screen { width: 100vw; }
.tbba-w-min { width: min-content; }
.tbba-w-max { width: max-content; }
.tbba-w-fit { width: fit-content; }

/* Height Utilities */
.tbba-h-0 { height: 0; }
.tbba-h-1 { height: var(--tbba-spacing-1); }
.tbba-h-2 { height: var(--tbba-spacing-2); }
.tbba-h-3 { height: var(--tbba-spacing-3); }
.tbba-h-4 { height: var(--tbba-spacing-4); }
.tbba-h-5 { height: var(--tbba-spacing-5); }
.tbba-h-6 { height: var(--tbba-spacing-6); }
.tbba-h-8 { height: var(--tbba-spacing-8); }
.tbba-h-10 { height: var(--tbba-spacing-10); }
.tbba-h-12 { height: var(--tbba-spacing-12); }
.tbba-h-16 { height: var(--tbba-spacing-16); }
.tbba-h-20 { height: var(--tbba-spacing-20); }
.tbba-h-24 { height: var(--tbba-spacing-24); }
.tbba-h-32 { height: var(--tbba-spacing-32); }
.tbba-h-40 { height: var(--tbba-spacing-40); }
.tbba-h-48 { height: var(--tbba-spacing-48); }
.tbba-h-56 { height: var(--tbba-spacing-56); }
.tbba-h-64 { height: var(--tbba-spacing-64); }
.tbba-h-auto { height: auto; }
.tbba-h-px { height: 1px; }
.tbba-h-1\\/2 { height: 50%; }
.tbba-h-1\\/3 { height: 33.333333%; }
.tbba-h-2\\/3 { height: 66.666667%; }
.tbba-h-1\\/4 { height: 25%; }
.tbba-h-2\\/4 { height: 50%; }
.tbba-h-3\\/4 { height: 75%; }
.tbba-h-1\\/5 { height: 20%; }
.tbba-h-2\\/5 { height: 40%; }
.tbba-h-3\\/5 { height: 60%; }
.tbba-h-4\\/5 { height: 80%; }
.tbba-h-full { height: 100%; }
.tbba-h-screen { height: 100vh; }
.tbba-h-min { height: min-content; }
.tbba-h-max { height: max-content; }
.tbba-h-fit { height: fit-content; }

/* Typography Utilities */
${Object.entries(TBBA.FONT_SIZES).map(([key, value]) => 
    `.tbba-text-${key} { font-size: ${value}; }`
).join('\n')}

${Object.entries(TBBA.FONT_WEIGHTS).map(([key, value]) => 
    `.tbba-font-${key} { font-weight: ${value}; }`
).join('\n')}

.tbba-font-sans {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.tbba-font-serif {
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}
.tbba-font-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.tbba-italic { font-style: italic; }
.tbba-not-italic { font-style: normal; }
.tbba-uppercase { text-transform: uppercase; }
.tbba-lowercase { text-transform: lowercase; }
.tbba-capitalize { text-transform: capitalize; }
.tbba-normal-case { text-transform: none; }

.tbba-underline { text-decoration: underline; }
.tbba-line-through { text-decoration: line-through; }
.tbba-no-underline { text-decoration: none; }

.tbba-antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.tbba-subpixel-antialiased {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
}

.tbba-tracking-tighter { letter-spacing: -0.05em; }
.tbba-tracking-tight { letter-spacing: -0.025em; }
.tbba-tracking-normal { letter-spacing: 0em; }
.tbba-tracking-wide { letter-spacing: 0.025em; }
.tbba-tracking-wider { letter-spacing: 0.05em; }
.tbba-tracking-widest { letter-spacing: 0.1em; }

.tbba-leading-none { line-height: 1; }
.tbba-leading-tight { line-height: 1.25; }
.tbba-leading-snug { line-height: 1.375; }
.tbba-leading-normal { line-height: 1.5; }
.tbba-leading-relaxed { line-height: 1.625; }
.tbba-leading-loose { line-height: 2; }

.tbba-list-none { list-style-type: none; }
.tbba-list-disc { list-style-type: disc; }
.tbba-list-decimal { list-style-type: decimal; }

.tbba-text-left { text-align: left; }
.tbba-text-center { text-align: center; }
.tbba-text-right { text-align: right; }
.tbba-text-justify { text-align: justify; }

.tbba-text-ellipsis { text-overflow: ellipsis; }
.tbba-text-clip { text-overflow: clip; }
.tbba-text-wrap { white-space: normal; }
.tbba-text-nowrap { white-space: nowrap; }
.tbba-text-balance { text-wrap: balance; }
.tbba-text-pretty { text-wrap: pretty; }

/* Color Utilities */
${Object.entries(TBBA.COLORS).map(([key, value]) => 
    `.tbba-bg-${key} { background-color: ${value}; }
.tbba-text-${key} { color: ${value}; }
.tbba-border-${key} { border-color: ${value}; }`
).join('\n')}

.tbba-bg-transparent { background-color: transparent; }
.tbba-bg-current { background-color: currentColor; }

.tbba-text-transparent { color: transparent; }
.tbba-text-current { color: currentColor; }

.tbba-border-transparent { border-color: transparent; }
.tbba-border-current { border-color: currentColor; }

/* Opacity */
.tbba-opacity-0 { opacity: 0; }
.tbba-opacity-5 { opacity: 0.05; }
.tbba-opacity-10 { opacity: 0.1; }
.tbba-opacity-20 { opacity: 0.2; }
.tbba-opacity-25 { opacity: 0.25; }
.tbba-opacity-30 { opacity: 0.3; }
.tbba-opacity-40 { opacity: 0.4; }
.tbba-opacity-50 { opacity: 0.5; }
.tbba-opacity-60 { opacity: 0.6; }
.tbba-opacity-70 { opacity: 0.7; }
.tbba-opacity-75 { opacity: 0.75; }
.tbba-opacity-80 { opacity: 0.8; }
.tbba-opacity-90 { opacity: 0.9; }
.tbba-opacity-95 { opacity: 0.95; }
.tbba-opacity-100 { opacity: 1; }

/* Border Utilities */
.tbba-border-0 { border-width: 0; }
.tbba-border { border-width: 1px; }
.tbba-border-2 { border-width: 2px; }
.tbba-border-4 { border-width: 4px; }
.tbba-border-8 { border-width: 8px; }

.tbba-border-t-0 { border-top-width: 0; }
.tbba-border-t { border-top-width: 1px; }
.tbba-border-t-2 { border-top-width: 2px; }
.tbba-border-t-4 { border-top-width: 4px; }
.tbba-border-t-8 { border-top-width: 8px; }

.tbba-border-r-0 { border-right-width: 0; }
.tbba-border-r { border-right-width: 1px; }
.tbba-border-r-2 { border-right-width: 2px; }
.tbba-border-r-4 { border-right-width: 4px; }
.tbba-border-r-8 { border-right-width: 8px; }

.tbba-border-b-0 { border-bottom-width: 0; }
.tbba-border-b { border-bottom-width: 1px; }
.tbba-border-b-2 { border-bottom-width: 2px; }
.tbba-border-b-4 { border-bottom-width: 4px; }
.tbba-border-b-8 { border-bottom-width: 8px; }

.tbba-border-l-0 { border-left-width: 0; }
.tbba-border-l { border-left-width: 1px; }
.tbba-border-l-2 { border-left-width: 2px; }
.tbba-border-l-4 { border-left-width: 4px; }
.tbba-border-l-8 { border-left-width: 8px; }

${Object.entries(TBBA.BORDER_RADIUS).map(([key, value]) => 
    `.tbba-rounded-${key} { border-radius: ${value}; }`
).join('\n')}

.tbba-rounded-t-none { border-top-left-radius: 0; border-top-right-radius: 0; }
.tbba-rounded-r-none { border-top-right-radius: 0; border-bottom-right-radius: 0; }
.tbba-rounded-b-none { border-bottom-right-radius: 0; border-bottom-left-radius: 0; }
.tbba-rounded-l-none { border-top-left-radius: 0; border-bottom-left-radius: 0; }

.tbba-rounded-t-sm { border-top-left-radius: var(--tbba-radius-sm); border-top-right-radius: var(--tbba-radius-sm); }
.tbba-rounded-t { border-top-left-radius: var(--tbba-radius); border-top-right-radius: var(--tbba-radius); }
.tbba-rounded-t-lg { border-top-left-radius: var(--tbba-radius-lg); border-top-right-radius: var(--tbba-radius-lg); }
.tbba-rounded-t-full { border-top-left-radius: var(--tbba-radius-full); border-top-right-radius: var(--tbba-radius-full); }

.tbba-border-solid { border-style: solid; }
.tbba-border-dashed { border-style: dashed; }
.tbba-border-dotted { border-style: dotted; }
.tbba-border-double { border-style: double; }
.tbba-border-none { border-style: none; }

/* Shadow Utilities */
${Object.entries(TBBA.SHADOWS).map(([key, value]) => 
    `.tbba-shadow-${key} { box-shadow: ${value}; }`
).join('\n')}

.tbba-shadow-inner { box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05); }

/* Position Utilities */
.tbba-static { position: static; }
.tbba-fixed { position: fixed; }
.tbba-absolute { position: absolute; }
.tbba-relative { position: relative; }
.tbba-sticky { position: sticky; }

.tbba-inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.tbba-inset-x-0 { left: 0; right: 0; }
.tbba-inset-y-0 { top: 0; bottom: 0; }
.tbba-top-0 { top: 0; }
.tbba-right-0 { right: 0; }
.tbba-bottom-0 { bottom: 0; }
.tbba-left-0 { left: 0; }

.tbba-top-auto { top: auto; }
.tbba-right-auto { right: auto; }
.tbba-bottom-auto { bottom: auto; }
.tbba-left-auto { left: auto; }

/* Z-Index Utilities */
${Object.entries(TBBA.Z_INDEX).map(([key, value]) => 
    `.tbba-z-${key} { z-index: ${value}; }`
).join('\n')}

/* Overflow Utilities */
.tbba-overflow-auto { overflow: auto; }
.tbba-overflow-hidden { overflow: hidden; }
.tbba-overflow-visible { overflow: visible; }
.tbba-overflow-scroll { overflow: scroll; }
.tbba-overflow-x-auto { overflow-x: auto; }
.tbba-overflow-y-auto { overflow-y: auto; }
.tbba-overflow-x-hidden { overflow-x: hidden; }
.tbba-overflow-y-hidden { overflow-y: hidden; }
.tbba-overflow-x-visible { overflow-x: visible; }
.tbba-overflow-y-visible { overflow-y: visible; }
.tbba-overflow-x-scroll { overflow-x: scroll; }
.tbba-overflow-y-scroll { overflow-y: scroll; }

/* Transition Utilities */
.tbba-transition-none { transition-property: none; }
.tbba-transition-all { transition-property: all; }
.tbba-transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; }
.tbba-transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; }
.tbba-transition-opacity { transition-property: opacity; }
.tbba-transition-shadow { transition-property: box-shadow; }
.tbba-transition-transform { transition-property: transform; }

${Object.entries(TBBA.TRANSITIONS).map(([key, value]) => 
    `.tbba-ease-${key} { transition-timing-function: ${value}; }`
).join('\n')}

.tbba-duration-75 { transition-duration: 75ms; }
.tbba-duration-100 { transition-duration: 100ms; }
.tbba-duration-150 { transition-duration: 150ms; }
.tbba-duration-200 { transition-duration: 200ms; }
.tbba-duration-300 { transition-duration: 300ms; }
.tbba-duration-500 { transition-duration: 500ms; }
.tbba-duration-700 { transition-duration: 700ms; }
.tbba-duration-1000 { transition-duration: 1000ms; }

.tbba-delay-75 { transition-delay: 75ms; }
.tbba-delay-100 { transition-delay: 100ms; }
.tbba-delay-150 { transition-delay: 150ms; }
.tbba-delay-200 { transition-delay: 200ms; }
.tbba-delay-300 { transition-delay: 300ms; }
.tbba-delay-500 { transition-delay: 500ms; }
.tbba-delay-700 { transition-delay: 700ms; }
.tbba-delay-1000 { transition-delay: 1000ms; }

/* Transform Utilities */
.tbba-transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
.tbba-transform-none { transform: none; }
.tbba-transform-gpu { transform: translateZ(0); }
.tbba-transform-cpu { transform: none; }

.tbba-translate-x-0 { --tw-translate-x: 0; }
.tbba-translate-x-1 { --tw-translate-x: 0.25rem; }
.tbba-translate-x-2 { --tw-translate-x: 0.5rem; }
.tbba-translate-x-3 { --tw-translate-x: 0.75rem; }
.tbba-translate-x-4 { --tw-translate-x: 1rem; }
.tbba-translate-x-5 { --tw-translate-x: 1.25rem; }
.tbba-translate-x-6 { --tw-translate-x: 1.5rem; }
.tbba-translate-x-8 { --tw-translate-x: 2rem; }
.tbba-translate-x-10 { --tw-translate-x: 2.5rem; }
.tbba-translate-x-12 { --tw-translate-x: 3rem; }
.tbba-translate-x-16 { --tw-translate-x: 4rem; }
.tbba-translate-x-20 { --tw-translate-x: 5rem; }
.tbba-translate-x-24 { --tw-translate-x: 6rem; }
.tbba-translate-x-32 { --tw-translate-x: 8rem; }
.tbba-translate-x-40 { --tw-translate-x: 10rem; }
.tbba-translate-x-48 { --tw-translate-x: 12rem; }
.tbba-translate-x-56 { --tw-translate-x: 14rem; }
.tbba-translate-x-64 { --tw-translate-x: 16rem; }
.tbba-translate-x-px { --tw-translate-x: 1px; }
.tbba-translate-x-1\\/2 { --tw-translate-x: 50%; }
.tbba-translate-x-1\\/3 { --tw-translate-x: 33.333333%; }
.tbba-translate-x-2\\/3 { --tw-translate-x: 66.666667%; }
.tbba-translate-x-1\\/4 { --tw-translate-x: 25%; }
.tbba-translate-x-2\\/4 { --tw-translate-x: 50%; }
.tbba-translate-x-3\\/4 { --tw-translate-x: 75%; }
.tbba-translate-x-full { --tw-translate-x: 100%; }

.tbba-translate-y-0 { --tw-translate-y: 0; }
.tbba-translate-y-1 { --tw-translate-y: 0.25rem; }
.tbba-translate-y-2 { --tw-translate-y: 0.5rem; }
.tbba-translate-y-3 { --tw-translate-y: 0.75rem; }
.tbba-translate-y-4 { --tw-translate-y: 1rem; }
.tbba-translate-y-5 { --tw-translate-y: 1.25rem; }
.tbba-translate-y-6 { --tw-translate-y: 1.5rem; }
.tbba-translate-y-8 { --tw-translate-y: 2rem; }
.tbba-translate-y-10 { --tw-translate-y: 2.5rem; }
.tbba-translate-y-12 { --tw-translate-y: 3rem; }
.tbba-translate-y-16 { --tw-translate-y: 4rem; }
.tbba-translate-y-20 { --tw-translate-y: 5rem; }
.tbba-translate-y-24 { --tw-translate-y: 6rem; }
.tbba-translate-y-32 { --tw-translate-y: 8rem; }
.tbba-translate-y-40 { --tw-translate-y: 10rem; }
.tbba-translate-y-48 { --tw-translate-y: 12rem; }
.tbba-translate-y-56 { --tw-translate-y: 14rem; }
.tbba-translate-y-64 { --tw-translate-y: 16rem; }
.tbba-translate-y-px { --tw-translate-y: 1px; }
.tbba-translate-y-1\\/2 { --tw-translate-y: 50%; }
.tbba-translate-y-1\\/3 { --tw-translate-y: 33.333333%; }
.tbba-translate-y-2\\/3 { --tw-translate-y: 66.666667%; }
.tbba-translate-y-1\\/4 { --tw-translate-y: 25%; }
.tbba-translate-y-2\\/4 { --tw-translate-y: 50%; }
.tbba-translate-y-3\\/4 { --tw-translate-y: 75%; }
.tbba-translate-y-full { --tw-translate-y: 100%; }

.tbba-rotate-0 { --tw-rotate: 0deg; }
.tbba-rotate-1 { --tw-rotate: 1deg; }
.tbba-rotate-2 { --tw-rotate: 2deg; }
.tbba-rotate-3 { --tw-rotate: 3deg; }
.tbba-rotate-6 { --tw-rotate: 6deg; }
.tbba-rotate-12 { --tw-rotate: 12deg; }
.tbba-rotate-45 { --tw-rotate: 45deg; }
.tbba-rotate-90 { --tw-rotate: 90deg; }
.tbba-rotate-180 { --tw-rotate: 180deg; }

.tbba-scale-0 { --tw-scale-x: 0; --tw-scale-y: 0; }
.tbba-scale-50 { --tw-scale-x: .5; --tw-scale-y: .5; }
.tbba-scale-75 { --tw-scale-x: .75; --tw-scale-y: .75; }
.tbba-scale-90 { --tw-scale-x: .9; --tw-scale-y: .9; }
.tbba-scale-95 { --tw-scale-x: .95; --tw-scale-y: .95; }
.tbba-scale-100 { --tw-scale-x: 1; --tw-scale-y: 1; }
.tbba-scale-105 { --tw-scale-x: 1.05; --tw-scale-y: 1.05; }
.tbba-scale-110 { --tw-scale-x: 1.1; --tw-scale-y: 1.1; }
.tbba-scale-125 { --tw-scale-x: 1.25; --tw-scale-y: 1.25; }
.tbba-scale-150 { --tw-scale-x: 1.5; --tw-scale-y: 1.5; }

.tbba-scale-x-0 { --tw-scale-x: 0; }
.tbba-scale-x-50 { --tw-scale-x: .5; }
.tbba-scale-x-75 { --tw-scale-x: .75; }
.tbba-scale-x-90 { --tw-scale-x: .9; }
.tbba-scale-x-95 { --tw-scale-x: .95; }
.tbba-scale-x-100 { --tw-scale-x: 1; }
.tbba-scale-x-105 { --tw-scale-x: 1.05; }
.tbba-scale-x-110 { --tw-scale-x: 1.1; }
.tbba-scale-x-125 { --tw-scale-x: 1.25; }
.tbba-scale-x-150 { --tw-scale-x: 1.5; }

.tbba-scale-y-0 { --tw-scale-y: 0; }
.tbba-scale-y-50 { --tw-scale-y: .5; }
.tbba-scale-y-75 { --tw-scale-y: .75; }
.tbba-scale-y-90 { --tw-scale-y: .9; }
.tbba-scale-y-95 { --tw-scale-y: .95; }
.tbba-scale-y-100 { --tw-scale-y: 1; }
.tbba-scale-y-105 { --tw-scale-y: 1.05; }
.tbba-scale-y-110 { --tw-scale-y: 1.1; }
.tbba-scale-y-125 { --tw-scale-y: 1.25; }
.tbba-scale-y-150 { --tw-scale-y: 1.5; }

.tbba-skew-x-0 { --tw-skew-x: 0deg; }
.tbba-skew-x-1 { --tw-skew-x: 1deg; }
.tbba-skew-x-2 { --tw-skew-x: 2deg; }
.tbba-skew-x-3 { --tw-skew-x: 3deg; }
.tbba-skew-x-6 { --tw-skew-x: 6deg; }
.tbba-skew-x-12 { --tw-skew-x: 12deg; }

.tbba-skew-y-0 { --tw-skew-y: 0deg; }
.tbba-skew-y-1 { --tw-skew-y: 1deg; }
.tbba-skew-y-2 { --tw-skew-y: 2deg; }
.tbba-skew-y-3 { --tw-skew-y: 3deg; }
.tbba-skew-y-6 { --tw-skew-y: 6deg; }
.tbba-skew-y-12 { --tw-skew-y: 12deg; }

/* Cursor Utilities */
.tbba-cursor-auto { cursor: auto; }
.tbba-cursor-default { cursor: default; }
.tbba-cursor-pointer { cursor: pointer; }
.tbba-cursor-wait { cursor: wait; }
.tbba-cursor-text { cursor: text; }
.tbba-cursor-move { cursor: move; }
.tbba-cursor-help { cursor: help; }
.tbba-cursor-not-allowed { cursor: not-allowed; }
.tbba-cursor-none { cursor: none; }
.tbba-cursor-context-menu { cursor: context-menu; }
.tbba-cursor-progress { cursor: progress; }
.tbba-cursor-cell { cursor: cell; }
.tbba-cursor-crosshair { cursor: crosshair; }
.tbba-cursor-vertical-text { cursor: vertical-text; }
.tbba-cursor-alias { cursor: alias; }
.tbba-cursor-copy { cursor: copy; }
.tbba-cursor-no-drop { cursor: no-drop; }
.tbba-cursor-grab { cursor: grab; }
.tbba-cursor-grabbing { cursor: grabbing; }
.tbba-cursor-all-scroll { cursor: all-scroll; }
.tbba-cursor-col-resize { cursor: col-resize; }
.tbba-cursor-row-resize { cursor: row-resize; }
.tbba-cursor-n-resize { cursor: n-resize; }
.tbba-cursor-e-resize { cursor: e-resize; }
.tbba-cursor-s-resize { cursor: s-resize; }
.tbba-cursor-w-resize { cursor: w-resize; }
.tbba-cursor-ne-resize { cursor: ne-resize; }
.tbba-cursor-nw-resize { cursor: nw-resize; }
.tbba-cursor-se-resize { cursor: se-resize; }
.tbba-cursor-sw-resize { cursor: sw-resize; }
.tbba-cursor-ew-resize { cursor: ew-resize; }
.tbba-cursor-ns-resize { cursor: ns-resize; }
.tbba-cursor-nesw-resize { cursor: nesw-resize; }
.tbba-cursor-nwse-resize { cursor: nwse-resize; }
.tbba-cursor-zoom-in { cursor: zoom-in; }
.tbba-cursor-zoom-out { cursor: zoom-out; }

/* User Select */
.tbba-select-none { user-select: none; }
.tbba-select-text { user-select: text; }
.tbba-select-all { user-select: all; }
.tbba-select-auto { user-select: auto; }

/* Visibility */
.tbba-visible { visibility: visible; }
.tbba-invisible { visibility: hidden; }

/* ==============================================
   COMPONENTS
   ============================================== */

/* Buttons (Mixed Styles) */
.tbba-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    border-radius: var(--tbba-radius);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.tbba-btn:hover {
    transform: translateY(-1px);
}

.tbba-btn:active {
    transform: translateY(0);
}

.tbba-btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(var(--tbba-blue-rgb), 0.25);
}

.tbba-btn:disabled,
.tbba-btn.disabled {
    opacity: 0.65;
    pointer-events: none;
}

/* Button Sizes */
.tbba-btn-lg {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    border-radius: var(--tbba-radius-lg);
}

.tbba-btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: var(--tbba-radius-sm);
}

.tbba-btn-block {
    display: block;
    width: 100%;
}

/* Button Variants */
.tbba-btn-primary {
    color: white;
    background-color: var(--tbba-blue-600);
    border-color: var(--tbba-blue-600);
}

.tbba-btn-primary:hover {
    background-color: var(--tbba-blue-700);
    border-color: var(--tbba-blue-700);
}

.tbba-btn-secondary {
    color: white;
    background-color: var(--tbba-gray-600);
    border-color: var(--tbba-gray-600);
}

.tbba-btn-secondary:hover {
    background-color: var(--tbba-gray-700);
    border-color: var(--tbba-gray-700);
}

.tbba-btn-success {
    color: white;
    background-color: var(--tbba-green-600);
    border-color: var(--tbba-green-600);
}

.tbba-btn-success:hover {
    background-color: var(--tbba-green-700);
    border-color: var(--tbba-green-700);
}

.tbba-btn-danger {
    color: white;
    background-color: var(--tbba-red-600);
    border-color: var(--tbba-red-600);
}

.tbba-btn-danger:hover {
    background-color: var(--tbba-red-700);
    border-color: var(--tbba-red-700);
}

.tbba-btn-warning {
    color: var(--tbba-gray-900);
    background-color: var(--tbba-yellow-500);
    border-color: var(--tbba-yellow-500);
}

.tbba-btn-warning:hover {
    background-color: var(--tbba-yellow-600);
    border-color: var(--tbba-yellow-600);
}

.tbba-btn-info {
    color: white;
    background-color: var(--tbba-cyan-600);
    border-color: var(--tbba-cyan-600);
}

.tbba-btn-info:hover {
    background-color: var(--tbba-cyan-700);
    border-color: var(--tbba-cyan-700);
}

.tbba-btn-light {
    color: var(--tbba-gray-900);
    background-color: var(--tbba-gray-100);
    border-color: var(--tbba-gray-100);
}

.tbba-btn-light:hover {
    background-color: var(--tbba-gray-200);
    border-color: var(--tbba-gray-200);
}

.tbba-btn-dark {
    color: white;
    background-color: var(--tbba-gray-800);
    border-color: var(--tbba-gray-800);
}

.tbba-btn-dark:hover {
    background-color: var(--tbba-gray-900);
    border-color: var(--tbba-gray-900);
}

/* Outline Buttons */
.tbba-btn-outline-primary {
    color: var(--tbba-blue-600);
    border-color: var(--tbba-blue-600);
    background-color: transparent;
}

.tbba-btn-outline-primary:hover {
    color: white;
    background-color: var(--tbba-blue-600);
    border-color: var(--tbba-blue-600);
}

.tbba-btn-outline-secondary {
    color: var(--tbba-gray-600);
    border-color: var(--tbba-gray-600);
    background-color: transparent;
}

.tbba-btn-outline-secondary:hover {
    color: white;
    background-color: var(--tbba-gray-600);
    border-color: var(--tbba-gray-600);
}

/* Button Groups */
.tbba-btn-group {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}

.tbba-btn-group > .tbba-btn {
    position: relative;
    flex: 1 1 auto;
}

.tbba-btn-group > .tbba-btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.tbba-btn-group > .tbba-btn:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

/* Cards (Bootstrap Style) */
.tbba-card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: white;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: var(--tbba-radius-lg);
}

.tbba-card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}

.tbba-card-title {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
}

.tbba-card-subtitle {
    margin-top: -0.375rem;
    margin-bottom: 0.5rem;
    color: var(--tbba-gray-600);
}

.tbba-card-text:last-child {
    margin-bottom: 0;
}

.tbba-card-link + .tbba-card-link {
    margin-left: 1.25rem;
}

.tbba-card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.tbba-card-header:first-child {
    border-radius: calc(var(--tbba-radius-lg) - 1px) calc(var(--tbba-radius-lg) - 1px) 0 0;
}

.tbba-card-footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.tbba-card-footer:last-child {
    border-radius: 0 0 calc(var(--tbba-radius-lg) - 1px) calc(var(--tbba-radius-lg) - 1px);
}

.tbba-card-img-top {
    width: 100%;
    border-top-left-radius: calc(var(--tbba-radius-lg) - 1px);
    border-top-right-radius: calc(var(--tbba-radius-lg) - 1px);
}

.tbba-card-img-bottom {
    width: 100%;
    border-bottom-right-radius: calc(var(--tbba-radius-lg) - 1px);
    border-bottom-left-radius: calc(var(--tbba-radius-lg) - 1px);
}

/* Alerts (Bootstrap Style) */
.tbba-alert {
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: var(--tbba-radius);
}

.tbba-alert-heading {
    color: inherit;
}

.tbba-alert-link {
    font-weight: 700;
}

.tbba-alert-dismissible {
    padding-right: 3rem;
}

.tbba-alert-dismissible .tbba-btn-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 1.25rem 1rem;
}

.tbba-alert-primary {
    color: #084298;
    background-color: #cfe2ff;
    border-color: #b6d4fe;
}

.tbba-alert-primary .tbba-alert-link {
    color: #06357a;
}

.tbba-alert-secondary {
    color: #41464b;
    background-color: #e2e3e5;
    border-color: #d3d6d8;
}

.tbba-alert-secondary .tbba-alert-link {
    color: #34383c;
}

.tbba-alert-success {
    color: #0f5132;
    background-color: #d1e7dd;
    border-color: #badbcc;
}

.tbba-alert-success .tbba-alert-link {
    color: #0c4128;
}

.tbba-alert-danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
}

.tbba-alert-danger .tbba-alert-link {
    color: #6a1a21;
}

.tbba-alert-warning {
    color: #664d03;
    background-color: #fff3cd;
    border-color: #ffecb5;
}

.tbba-alert-warning .tbba-alert-link {
    color: #523e02;
}

.tbba-alert-info {
    color: #055160;
    background-color: #cff4fc;
    border-color: #b6effb;
}

.tbba-alert-info .tbba-alert-link {
    color: #04414d;
}

.tbba-alert-light {
    color: #636464;
    background-color: #fefefe;
    border-color: #fdfdfe;
}

.tbba-alert-light .tbba-alert-link {
    color: #4f5050;
}

.tbba-alert-dark {
    color: #141619;
    background-color: #d3d3d4;
    border-color: #bcbebf;
}

.tbba-alert-dark .tbba-alert-link {
    color: #101214;
}

/* Forms (Mixed Styles) */
.tbba-form-label {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.tbba-form-text {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--tbba-gray-600);
}

.tbba-form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--tbba-gray-900);
    background-color: white;
    background-clip: padding-box;
    border: 1px solid var(--tbba-gray-300);
    border-radius: var(--tbba-radius);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.tbba-form-control:focus {
    color: var(--tbba-gray-900);
    background-color: white;
    border-color: var(--tbba-blue-400);
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);
}

.tbba-form-control::placeholder {
    color: var(--tbba-gray-500);
    opacity: 1;
}

.tbba-form-control:disabled,
.tbba-form-control[readonly] {
    background-color: var(--tbba-gray-100);
    opacity: 1;
}

.tbba-form-control-plaintext {
    display: block;
    width: 100%;
    padding: 0.375rem 0;
    margin-bottom: 0;
    line-height: 1.5;
    color: var(--tbba-gray-900);
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
}

.tbba-form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--tbba-gray-900);
    background-color: white;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid var(--tbba-gray-300);
    border-radius: var(--tbba-radius);
    appearance: none;
}

.tbba-form-select:focus {
    border-color: var(--tbba-blue-400);
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);
}

.tbba-form-select:disabled {
    background-color: var(--tbba-gray-100);
}

.tbba-form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
}

.tbba-form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    margin-left: -1.5em;
    vertical-align: top;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    appearance: none;
}

.tbba-form-check-input[type="checkbox"] {
    border-radius: 0.25em;
}

.tbba-form-check-input[type="radio"] {
    border-radius: 50%;
}

.tbba-form-check-input:active {
    filter: brightness(90%);
}

.tbba-form-check-input:focus {
    border-color: var(--tbba-blue-400);
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);
}

.tbba-form-check-input:checked {
    background-color: var(--tbba-blue-600);
    border-color: var(--tbba-blue-600);
}

.tbba-form-check-input:checked[type="checkbox"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}

.tbba-form-check-input:checked[type="radio"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}

.tbba-form-check-input[type="checkbox"]:indeterminate {
    background-color: var(--tbba-blue-600);
    border-color: var(--tbba-blue-600);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}

.tbba-form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
}

.tbba-form-switch {
    padding-left: 2.5em;
}

.tbba-form-switch .tbba-form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out;
}

.tbba-form-switch .tbba-form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}

.tbba-form-switch .tbba-form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.tbba-form-check-inline {
    display: inline-block;
    margin-right: 1rem;
}

/* Form Validation */
.tbba-valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--tbba-green-600);
}

.tbba-valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: white;
    background-color: rgba(25, 135, 84, 0.9);
    border-radius: var(--tbba-radius);
}

.was-validated :valid ~ .tbba-valid-feedback,
.was-validated :valid ~ .tbba-valid-tooltip,
.is-valid ~ .tbba-valid-feedback,
.is-valid ~ .tbba-valid-tooltip {
    display: block;
}

.was-validated .tbba-form-control:valid,
.tbba-form-control.is-valid {
    border-color: var(--tbba-green-600);
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .tbba-form-control:valid:focus,
.tbba-form-control.is-valid:focus {
    border-color: var(--tbba-green-600);
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.tbba-invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--tbba-red-600);
}

.tbba-invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: white;
    background-color: rgba(220, 53, 69, 0.9);
    border-radius: var(--tbba-radius);
}

.was-validated :invalid ~ .tbba-invalid-feedback,
.was-validated :invalid ~ .tbba-invalid-tooltip,
.is-invalid ~ .tbba-invalid-feedback,
.is-invalid ~ .tbba-invalid-tooltip {
    display: block;
}

.was-validated .tbba-form-control:invalid,
.tbba-form-control.is-invalid {
    border-color: var(--tbba-red-600);
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .tbba-form-control:invalid:focus,
.tbba-form-control.is-invalid:focus {
    border-color: var(--tbba-red-600);
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

/* Input Group */
.tbba-input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
}

.tbba-input-group > .tbba-form-control,
.tbba-input-group > .tbba-form-select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
}

.tbba-input-group > .tbba-form-control:focus,
.tbba-input-group > .tbba-form-select:focus {
    z-index: 3;
}

.tbba-input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--tbba-gray-900);
    text-align: center;
    white-space: nowrap;
    background-color: var(--tbba-gray-100);
    border: 1px solid var(--tbba-gray-300);
    border-radius: var(--tbba-radius);
}

.tbba-input-group-lg > .tbba-form-control,
.tbba-input-group-lg > .tbba-form-select,
.tbba-input-group-lg > .tbba-input-group-text {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: var(--tbba-radius-lg);
}

.tbba-input-group-sm > .tbba-form-control,
.tbba-input-group-sm > .tbba-form-select,
.tbba-input-group-sm > .tbba-input-group-text {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: var(--tbba-radius-sm);
}

.tbba-input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.tbba-input-group > :not(:last-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

/* Navbar (Bulma Inspired) */
.tbba-navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tbba-navbar-brand {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.25rem;
    white-space: nowrap;
}

.tbba-navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

.tbba-navbar-nav .tbba-nav-link {
    padding-right: 0;
    padding-left: 0;
}

.tbba-navbar-nav .tbba-dropdown-menu {
    position: static;
}

.tbba-navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.tbba-navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
}

.tbba-navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: var(--tbba-radius);
    transition: box-shadow 0.15s ease-in-out;
}

.tbba-navbar-toggler:hover {
    text-decoration: none;
}

.tbba-navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.25rem;
}

.tbba-navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

@media (min-width: 992px) {
    .tbba-navbar-expand-lg {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    
    .tbba-navbar-expand-lg .tbba-navbar-nav {
        flex-direction: row;
    }
    
    .tbba-navbar-expand-lg .tbba-navbar-nav .tbba-dropdown-menu {
        position: absolute;
    }
    
    .tbba-navbar-expand-lg .tbba-navbar-nav .tbba-nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }
    
    .tbba-navbar-expand-lg .tbba-navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }
    
    .tbba-navbar-expand-lg .tbba-navbar-toggler {
        display: none;
    }
}

/* Nav */
.tbba-nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

.tbba-nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: var(--tbba-blue-600);
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.tbba-nav-link:hover,
.tbba-nav-link:focus {
    color: var(--tbba-blue-800);
}

.tbba-nav-link.disabled {
    color: var(--tbba-gray-600);
    pointer-events: none;
    cursor: default;
}

.tbba-nav-tabs {
    border-bottom: 1px solid var(--tbba-gray-300);
}

.tbba-nav-tabs .tbba-nav-link {
    margin-bottom: -1px;
    background: none;
    border: 1px solid transparent;
    border-top-left-radius: var(--tbba-radius);
    border-top-right-radius: var(--tbba-radius);
}

.tbba-nav-tabs .tbba-nav-link:hover,
.tbba-nav-tabs .tbba-nav-link:focus {
    border-color: var(--tbba-gray-200) var(--tbba-gray-200) var(--tbba-gray-300);
    isolation: isolate;
}

.tbba-nav-tabs .tbba-nav-link.disabled {
    color: var(--tbba-gray-500);
    background-color: transparent;
    border-color: transparent;
}

.tbba-nav-tabs .tbba-nav-link.active,
.tbba-nav-tabs .tbba-nav-item.show .tbba-nav-link {
    color: var(--tbba-gray-700);
    background-color: white;
    border-color: var(--tbba-gray-300) var(--tbba-gray-300) white;
}

.tbba-nav-pills .tbba-nav-link {
    background: none;
    border: 0;
    border-radius: var(--tbba-radius);
}

.tbba-nav-pills .tbba-nav-link.active,
.tbba-nav-pills .show > .tbba-nav-link {
    color: white;
    background-color: var(--tbba-blue-600);
}

/* ==============================================
   JAVASCRIPT COMPONENTS
   ============================================== */

/* Modal Component Styles */
.tbba-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--tbba-z-modal);
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
}

.tbba-modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
}

.tbba-modal.fade .tbba-modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -50px);
}

.tbba-modal.show .tbba-modal-dialog {
    transform: none;
}

.tbba-modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: var(--tbba-radius-lg);
    outline: 0;
}

.tbba-modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid var(--tbba-gray-200);
    border-top-left-radius: calc(var(--tbba-radius-lg) - 1px);
    border-top-right-radius: calc(var(--tbba-radius-lg) - 1px);
}

.tbba-modal-header .tbba-btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
}

.tbba-modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}

.tbba-modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
}

.tbba-modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid var(--tbba-gray-200);
    border-bottom-right-radius: calc(var(--tbba-radius-lg) - 1px);
    border-bottom-left-radius: calc(var(--tbba-radius-lg) - 1px);
}

.tbba-modal-footer > * {
    margin: 0.25rem;
}

@media (min-width: 576px) {
    .tbba-modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
}

/* Dropdown Component Styles */
.tbba-dropdown {
    position: relative;
}

.tbba-dropdown-toggle {
    white-space: nowrap;
}

.tbba-dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
}

.tbba-dropdown-menu {
    position: absolute;
    z-index: var(--tbba-z-dropdown);
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1rem;
    color: var(--tbba-gray-900);
    text-align: left;
    list-style: none;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: var(--tbba-radius);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.tbba-dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: 0.125rem;
}

.tbba-dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.tbba-dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1rem;
    clear: both;
    font-weight: 400;
    color: var(--tbba-gray-900);
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}

.tbba-dropdown-item:hover,
.tbba-dropdown-item:focus {
    color: var(--tbba-gray-900);
    background-color: var(--tbba-gray-100);
}

.tbba-dropdown-item.active,
.tbba-dropdown-item:active {
    color: white;
    text-decoration: none;
    background-color: var(--tbba-blue-600);
}

.tbba-dropdown-item.disabled,
.tbba-dropdown-item:disabled {
    color: var(--tbba-gray-500);
    pointer-events: none;
    background-color: transparent;
}

/* Carousel Component Styles */
.tbba-carousel {
    position: relative;
}

.tbba-carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.tbba-carousel-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    backface-visibility: hidden;
    transition: transform 0.6s ease-in-out;
}

.tbba-carousel-item.active,
.tbba-carousel-item-next,
.tbba-carousel-item-prev {
    display: block;
}

/* Active class for the sliding animation */
.tbba-carousel-item-next:not(.tbba-carousel-item-start),
.active.tbba-carousel-item-end {
    transform: translateX(100%);
}

.tbba-carousel-item-prev:not(.tbba-carousel-item-end),
.active.tbba-carousel-item-start {
    transform: translateX(-100%);
}

/* Tooltip Component Styles */
.tbba-tooltip {
    position: absolute;
    z-index: var(--tbba-z-tooltip);
    display: block;
    margin: 0;
    font-family: var(--tbba-font-sans);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;
}

.tbba-tooltip.show {
    opacity: 0.9;
}

.tbba-tooltip .tbba-tooltip-arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
}

.tbba-tooltip .tbba-tooltip-arrow::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid;
}

.tbba-tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: white;
    text-align: center;
    background-color: #000;
    border-radius: var(--tbba-radius);
}

/* Animation Classes */
.tbba-fade {
    transition: opacity 0.15s linear;
}

.tbba-fade:not(.show) {
    opacity: 0;
}

.tbba-collapse:not(.show) {
    display: none;
}

.tbba-collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
}

/* Close Button */
.tbba-btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    border: 0;
    border-radius: var(--tbba-radius);
    opacity: 0.5;
}

.tbba-btn-close:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
}

.tbba-btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);
    opacity: 1;
}

.tbba-btn-close:disabled,
.tbba-btn-close.disabled {
    pointer-events: none;
    user-select: none;
    opacity: 0.25;
}

/* Badges */
.tbba-badge {
    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: 0.75em;
    font-weight: 700;
    line-height: 1;
    color: white;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: var(--tbba-radius);
}

.tbba-badge:empty {
    display: none;
}

.tbba-badge-pill {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
}

/* Background Variants for Badges */
.tbba-bg-primary { background-color: var(--tbba-blue-600); }
.tbba-bg-secondary { background-color: var(--tbba-gray-600); }
.tbba-bg-success { background-color: var(--tbba-green-600); }
.tbba-bg-danger { background-color: var(--tbba-red-600); }
.tbba-bg-warning { background-color: var(--tbba-yellow-500); color: var(--tbba-gray-900); }
.tbba-bg-info { background-color: var(--tbba-cyan-600); }
.tbba-bg-light { background-color: var(--tbba-gray-100); color: var(--tbba-gray-900); }
.tbba-bg-dark { background-color: var(--tbba-gray-800); }

/* ==============================================
   DARK MODE
   ============================================== */
@media (prefers-color-scheme: dark) {
    :root {
        --tbba-gray-50: #111827;
        --tbba-gray-100: #1f2937;
        --tbba-gray-200: #374151;
        --tbba-gray-300: #4b5563;
        --tbba-gray-400: #6b7280;
        --tbba-gray-500: #9ca3af;
        --tbba-gray-600: #d1d5db;
        --tbba-gray-700: #e5e7eb;
        --tbba-gray-800: #f3f4f6;
        --tbba-gray-900: #f9fafb;
    }
    
    body {
        color: var(--tbba-gray-300);
        background-color: #111827;
    }
    
    .tbba-card,
    .tbba-modal-content,
    .tbba-dropdown-menu {
        background-color: #1f2937;
        border-color: #374151;
    }
    
    .tbba-form-control {
        background-color: #374151;
        border-color: #4b5563;
        color: var(--tbba-gray-300);
    }
    
    .tbba-form-control:focus {
        background-color: #374151;
        border-color: var(--tbba-blue-500);
        color: var(--tbba-gray-300);
    }
    
    .tbba-btn-outline-primary {
        color: var(--tbba-blue-400);
        border-color: var(--tbba-blue-400);
    }
    
    .tbba-btn-outline-primary:hover {
        color: #111827;
        background-color: var(--tbba-blue-400);
    }
}

/* ==============================================
   PRINT STYLES
   ============================================== */
@media print {
    .tbba-d-print-none {
        display: none !important;
    }
    
    .tbba-d-print-inline {
        display: inline !important;
    }
    
    .tbba-d-print-inline-block {
        display: inline-block !important;
    }
    
    .tbba-d-print-block {
        display: block !important;
    }
    
    .tbba-d-print-table {
        display: table !important;
    }
    
    .tbba-d-print-table-row {
        display: table-row !important;
    }
    
    .tbba-d-print-table-cell {
        display: table-cell !important;
    }
    
    .tbba-d-print-flex {
        display: flex !important;
    }
    
    .tbba-d-print-inline-flex {
        display: inline-flex !important;
    }
}

/* ==============================================
   CUSTOM UTILITIES
   ============================================== */

/* Gradient Backgrounds */
.tbba-bg-gradient-primary {
    background-image: linear-gradient(135deg, var(--tbba-blue-500), var(--tbba-indigo-500));
}

.tbba-bg-gradient-success {
    background-image: linear-gradient(135deg, var(--tbba-green-400), var(--tbba-teal-500));
}

.tbba-bg-gradient-warning {
    background-image: linear-gradient(135deg, var(--tbba-yellow-400), var(--tbba-orange-500));
}

.tbba-bg-gradient-danger {
    background-image: linear-gradient(135deg, var(--tbba-red-500), var(--tbba-pink-500));
}

/* Custom Shadows */
.tbba-shadow-hover:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.tbba-shadow-focus:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

/* Custom Transitions */
.tbba-transition-slow {
    transition: all 0.5s ease;
}

.tbba-transition-fast {
    transition: all 0.15s ease;
}

/* Text Stroke */
.tbba-text-stroke {
    -webkit-text-stroke: 1px currentColor;
    text-stroke: 1px currentColor;
}

/* Blur Effects */
.tbba-backdrop-blur {
    backdrop-filter: blur(8px);
}

.tbba-backdrop-blur-sm {
    backdrop-filter: blur(4px);
}

.tbba-backdrop-blur-lg {
    backdrop-filter: blur(16px);
}

/* Glass Morphism */
.tbba-glass {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Aspect Ratio */
.tbba-aspect-ratio-16-9 {
    aspect-ratio: 16/9;
}

.tbba-aspect-ratio-4-3 {
    aspect-ratio: 4/3;
}

.tbba-aspect-ratio-1-1 {
    aspect-ratio: 1/1;
}

.tbba-aspect-ratio-21-9 {
    aspect-ratio: 21/9;
}

/* Scroll Behavior */
.tbba-smooth-scroll {
    scroll-behavior: smooth;
}

/* Selection */
.tbba-selection-primary ::selection {
    background-color: var(--tbba-blue-500);
    color: white;
}

.tbba-selection-secondary ::selection {
    background-color: var(--tbba-gray-500);
    color: white;
}

/* Custom Borders */
.tbba-border-dashed {
    border-style: dashed;
}

.tbba-border-dotted {
    border-style: dotted;
}

.tbba-border-double {
    border-style: double;
}

/* Custom Opacity */
.tbba-bg-opacity-10 {
    --tbba-bg-opacity: 0.1;
}

.tbba-bg-opacity-25 {
    --tbba-bg-opacity: 0.25;
}

.tbba-bg-opacity-50 {
    --tbba-bg-opacity: 0.5;
}

.tbba-bg-opacity-75 {
    --tbba-bg-opacity: 0.75;
}

/* Grid Template */
.tbba-grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.tbba-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.tbba-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.tbba-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.tbba-grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
}

.tbba-grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
}

.tbba-grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
}

/* Grid Gap */
.tbba-gap-0 { gap: 0; }
.tbba-gap-1 { gap: 0.25rem; }
.tbba-gap-2 { gap: 0.5rem; }
.tbba-gap-3 { gap: 0.75rem; }
.tbba-gap-4 { gap: 1rem; }
.tbba-gap-5 { gap: 1.25rem; }
.tbba-gap-6 { gap: 1.5rem; }
.tbba-gap-8 { gap: 2rem; }

/* Grid Auto */
.tbba-grid-auto-rows-auto { grid-auto-rows: auto; }
.tbba-grid-auto-rows-min { grid-auto-rows: min-content; }
.tbba-grid-auto-rows-max { grid-auto-rows: max-content; }

/* ==============================================
   RESPONSIVE UTILITIES
   ============================================== */

/* Hide on different screens */
.tbba-hidden-xs { display: none; }
@media (max-width: 575.98px) {
    .tbba-hidden-xs { display: block; }
    .tbba-visible-xs { display: none; }
}

/* Container padding adjustment */
@media (max-width: 767.98px) {
    .tbba-container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

/* Typography adjustments */
@media (max-width: 767.98px) {
    h1 { font-size: var(--tbba-font-size-3xl); }
    h2 { font-size: var(--tbba-font-size-2xl); }
    h3 { font-size: var(--tbba-font-size-xl); }
}

/* Button size adjustments */
@media (max-width: 767.98px) {
    .tbba-btn-lg {
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }
}

/* Card adjustments */
@media (max-width: 767.98px) {
    .tbba-card-body {
        padding: 1rem;
    }
}

/* Form adjustments */
@media (max-width: 767.98px) {
    .tbba-form-control,
    .tbba-form-select {
        font-size: 16px; /* Prevents zoom on iOS */
    }
}

/* Navbar mobile adjustments */
@media (max-width: 991.98px) {
    .tbba-navbar-collapse {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        height: 100vh;
        padding-top: 3rem;
        background-color: white;
        transition: left 0.3s ease;
        z-index: var(--tbba-z-fixed);
    }
    
    .tbba-navbar-collapse.show {
        left: 0;
    }
    
    .tbba-navbar-nav {
        padding-left: 1rem;
    }
}

/* Modal mobile adjustments */
@media (max-width: 575.98px) {
    .tbba-modal-dialog {
        margin: 0.5rem;
    }
    
    .tbba-modal-content {
        border-radius: 0.5rem;
    }
}

/* Utility classes for touch devices */
@media (hover: none) and (pointer: coarse) {
    .tbba-touch\\:text-lg {
        font-size: 1.125rem;
    }
    
    .tbba-touch\\:py-3 {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
}

/* ==============================================
   ACCESSIBILITY
   ============================================== */

/* Screen reader only */
.tbba-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.tbba-sr-only-focusable:active,
.tbba-sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
}

/* Focus styles for accessibility */
.tbba-focus-ring:focus {
    outline: 2px solid var(--tbba-blue-500);
    outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    .tbba-fade,
    .tbba-collapsing,
    .tbba-modal.fade .tbba-modal-dialog,
    .tbba-carousel-item {
        transition: none;
    }
}

/* High contrast mode */
@media (prefers-contrast: high) {
    .tbba-btn {
        border-width: 2px;
    }
    
    .tbba-form-control {
        border-width: 2px;
    }
}

/* ==============================================
   CUSTOM ANIMATIONS
   ============================================== */

@keyframes tbba-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes tbba-slide-in-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes tbba-slide-in-down {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes tbba-slide-in-left {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes tbba-slide-in-right {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes tbba-scale-in {
    from {
        transform: scale(0.9);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes tbba-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes tbba-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

@keyframes tbba-bounce {
    0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}

@keyframes tbba-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes tbba-ping {
    75%, 100% {
        transform: scale(2);
        opacity: 0;
    }
}

@keyframes tbba-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

/* Animation Utility Classes */
.tbba-animate-fade-in {
    animation: tbba-fade-in 0.3s ease-in;
}

.tbba-animate-slide-in-up {
    animation: tbba-slide-in-up 0.3s ease-out;
}

.tbba-animate-slide-in-down {
    animation: tbba-slide-in-down 0.3s ease-out;
}

.tbba-animate-slide-in-left {
    animation: tbba-slide-in-left 0.3s ease-out;
}

.tbba-animate-slide-in-right {
    animation: tbba-slide-in-right 0.3s ease-out;
}

.tbba-animate-scale-in {
    animation: tbba-scale-in 0.3s ease-out;
}

.tbba-animate-rotate {
    animation: tbba-rotate 1s linear infinite;
}

.tbba-animate-pulse {
    animation: tbba-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.tbba-animate-bounce {
    animation: tbba-bounce 1s infinite;
}

.tbba-animate-spin {
    animation: tbba-spin 1s linear infinite;
}

.tbba-animate-ping {
    animation: tbba-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.tbba-animate-blink {
    animation: tbba-blink 1s step-end infinite;
}

/* Animation Delays */
.tbba-animate-delay-100 { animation-delay: 100ms; }
.tbba-animate-delay-200 { animation-delay: 200ms; }
.tbba-animate-delay-300 { animation-delay: 300ms; }
.tbba-animate-delay-500 { animation-delay: 500ms; }
.tbba-animate-delay-700 { animation-delay: 700ms; }
.tbba-animate-delay-1000 { animation-delay: 1000ms; }

/* Animation Durations */
.tbba-animate-duration-75 { animation-duration: 75ms; }
.tbba-animate-duration-100 { animation-duration: 100ms; }
.tbba-animate-duration-150 { animation-duration: 150ms; }
.tbba-animate-duration-200 { animation-duration: 200ms; }
.tbba-animate-duration-300 { animation-duration: 300ms; }
.tbba-animate-duration-500 { animation-duration: 500ms; }
.tbba-animate-duration-700 { animation-duration: 700ms; }
.tbba-animate-duration-1000 { animation-duration: 1000ms; }

/* Animation Fill Modes */
.tbba-animate-fill-none { animation-fill-mode: none; }
.tbba-animate-fill-forwards { animation-fill-mode: forwards; }
.tbba-animate-fill-backwards { animation-fill-mode: backwards; }
.tbba-animate-fill-both { animation-fill-mode: both; }

/* Animation Iteration Count */
.tbba-animate-iteration-1 { animation-iteration-count: 1; }
.tbba-animate-iteration-infinite { animation-iteration-count: infinite; }

/* Animation Timing Functions */
.tbba-animate-linear { animation-timing-function: linear; }
.tbba-animate-ease { animation-timing-function: ease; }
.tbba-animate-ease-in { animation-timing-function: ease-in; }
.tbba-animate-ease-out { animation-timing-function: ease-out; }
.tbba-animate-ease-in-out { animation-timing-function: ease-in-out; }

/* ==============================================
   FINAL STYLES - FRAMEWORK INFO
   ============================================== */

.tbba-framework-info {
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 12px;
    border-radius: 3px;
    z-index: 9999;
    opacity: 0.3;
    transition: opacity 0.3s;
}

.tbba-framework-info:hover {
    opacity: 1;
}

/* TBBA Framework v${TBBA.VERSION} - Hybrid CSS Framework */
/* ${TBBA.COPYRIGHT} */
/* Combined: Tailwind CSS + Bootstrap + Bulma */
/* Created by: ${TBBA.AUTHOR} */
/* License: ${TBBA.LICENSE} */
/* File size: ~200KB (minified) */
            `;
        }
        
        inject() {
            if (this.injected || document.querySelector('#tbba-styles')) return;
            
            const style = document.createElement('style');
            style.id = 'tbba-styles';
            style.textContent = this.styles;
            document.head.appendChild(style);
            this.injected = true;
            
            console.log(`TBBA Framework v${TBBA.VERSION} styles injected`);
        }
    }

    // ==============================================
    // JAVASCRIPT COMPONENTS
    // ==============================================
    class ComponentManager {
        constructor() {
            this.components = new Map();
            this.initialized = false;
        }
        
        init() {
            if (this.initialized) return;
            
            // Auto-initialize components with data attributes
            this.initComponents();
            this.initialized = true;
        }
        
        initComponents() {
            // Initialize tooltips
            this.initTooltips();
            
            // Initialize popovers
            this.initPopovers();
            
            // Initialize modals
            this.initModals();
            
            // Initialize dropdowns
            this.initDropdowns();
            
            // Initialize tabs
            this.initTabs();
            
            // Initialize accordions
            this.initAccordions();
            
            // Initialize carousels
            this.initCarousels();
            
            // Initialize toasts
            this.initToasts();
            
            // Initialize alerts
            this.initAlerts();
        }
        
        // Tooltip Component
        initTooltips() {
            const tooltipTriggers = document.querySelectorAll('[data-tbba-toggle="tooltip"]');
            tooltipTriggers.forEach(trigger => {
                trigger.addEventListener('mouseenter', this.showTooltip);
                trigger.addEventListener('mouseleave', this.hideTooltip);
            });
        }
        
        showTooltip(e) {
            const target = e.currentTarget;
            const title = target.getAttribute('title') || target.getAttribute('data-tbba-title');
            const placement = target.getAttribute('data-tbba-placement') || 'top';
            
            if (!title) return;
            
            // Remove existing title to prevent default tooltip
            target.removeAttribute('title');
            target.setAttribute('data-tbba-original-title', title);
            
            // Create tooltip element
            const tooltip = Utils.createElement('div', {
                className: 'tbba-tooltip tbba-fade',
                role: 'tooltip'
            });
            
            const arrow = Utils.createElement('div', {
                className: 'tbba-tooltip-arrow'
            });
            
            const inner = Utils.createElement('div', {
                className: 'tbba-tooltip-inner',
                textContent: title
            });
            
            tooltip.appendChild(arrow);
            tooltip.appendChild(inner);
            
            // Position tooltip
            document.body.appendChild(tooltip);
            
            const rect = target.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            
            let top, left;
            switch (placement) {
                case 'top':
                    top = rect.top - tooltipRect.height - 8;
                    left = rect.left + (rect.width - tooltipRect.width) / 2;
                    break;
                case 'bottom':
                    top = rect.bottom + 8;
                    left = rect.left + (rect.width - tooltipRect.width) / 2;
                    break;
                case 'left':
                    top = rect.top + (rect.height - tooltipRect.height) / 2;
                    left = rect.left - tooltipRect.width - 8;
                    break;
                case 'right':
                    top = rect.top + (rect.height - tooltipRect.height) / 2;
                    left = rect.right + 8;
                    break;
            }
            
            tooltip.style.top = `${top + window.scrollY}px`;
            tooltip.style.left = `${left}px`;
            tooltip.classList.add('show');
            
            target.tbbaTooltip = tooltip;
        }
        
        hideTooltip(e) {
            const target = e.currentTarget;
            const originalTitle = target.getAttribute('data-tbba-original-title');
            
            if (originalTitle) {
                target.setAttribute('title', originalTitle);
                target.removeAttribute('data-tbba-original-title');
            }
            
            if (target.tbbaTooltip) {
                target.tbbaTooltip.remove();
                target.tbbaTooltip = null;
            }
        }
        
        // Modal Component
        initModals() {
            const modalTriggers = document.querySelectorAll('[data-tbba-toggle="modal"]');
            modalTriggers.forEach(trigger => {
                trigger.addEventListener('click', e => {
                    e.preventDefault();
                    const target = trigger.getAttribute('data-tbba-target') || trigger.getAttribute('href');
                    if (target) {
                        const modal = document.querySelector(target);
                        if (modal) {
                            this.showModal(modal);
                        }
                    }
                });
            });
            
            // Close modal buttons
            document.querySelectorAll('[data-tbba-dismiss="modal"]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const modal = btn.closest('.tbba-modal');
                    if (modal) {
                        this.hideModal(modal);
                    }
                });
            });
            
            // Close modal on backdrop click
            document.addEventListener('click', e => {
                if (e.target.classList.contains('tbba-modal')) {
                    this.hideModal(e.target);
                }
            });
        }
        
        showModal(modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
        
        hideModal(modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }
        
        // Dropdown Component
        initDropdowns() {
            const dropdownToggles = document.querySelectorAll('[data-tbba-toggle="dropdown"]');
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', e => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const dropdown = toggle.closest('.tbba-dropdown');
                    const menu = dropdown.querySelector('.tbba-dropdown-menu');
                    
                    if (menu) {
                        const isOpen = menu.classList.contains('show');
                        
                        // Close all other dropdowns
                        document.querySelectorAll('.tbba-dropdown-menu.show').forEach(m => {
                            if (m !== menu) m.classList.remove('show');
                        });
                        
                        // Toggle current dropdown
                        if (isOpen) {
                            menu.classList.remove('show');
                        } else {
                            menu.classList.add('show');
                        }
                    }
                });
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', () => {
                document.querySelectorAll('.tbba-dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });
            });
        }
        
        // Tab Component
        initTabs() {
            const tabTriggers = document.querySelectorAll('[data-tbba-toggle="tab"]');
            tabTriggers.forEach(trigger => {
                trigger.addEventListener('click', e => {
                    e.preventDefault();
                    
                    const target = trigger.getAttribute('data-tbba-target') || trigger.getAttribute('href');
                    if (!target) return;
                    
                    // Hide all tab panes
                    const tabContent = trigger.closest('.tbba-tab-content') || document;
                    tabContent.querySelectorAll('.tbba-tab-pane').forEach(pane => {
                        pane.classList.remove('show', 'active');
                    });
                    
                    // Deactivate all tab triggers
                    trigger.closest('.tbba-nav').querySelectorAll('.tbba-nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Show target pane and activate trigger
                    const targetPane = document.querySelector(target);
                    if (targetPane) {
                        targetPane.classList.add('show', 'active');
                        trigger.classList.add('active');
                    }
                });
            });
        }
        
        // Accordion Component
        initAccordions() {
            const accordionHeaders = document.querySelectorAll('.tbba-accordion-header');
            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const accordionItem = header.closest('.tbba-accordion-item');
                    const collapse = accordionItem.querySelector('.tbba-collapse');
                    
                    if (collapse.classList.contains('show')) {
                        collapse.classList.remove('show');
                    } else {
                        // Close other accordion items
                        const accordion = header.closest('.tbba-accordion');
                        if (accordion) {
                            accordion.querySelectorAll('.tbba-collapse.show').forEach(c => {
                                if (c !== collapse) c.classList.remove('show');
                            });
                        }
                        
                        collapse.classList.add('show');
                    }
                });
            });
        }
        
        // Carousel Component
        initCarousels() {
            const carousels = document.querySelectorAll('.tbba-carousel');
            carousels.forEach(carousel => {
                const items = carousel.querySelectorAll('.tbba-carousel-item');
                const prevBtn = carousel.querySelector('.tbba-carousel-control-prev');
                const nextBtn = carousel.querySelector('.tbba-carousel-control-next');
                const indicators = carousel.querySelectorAll('.tbba-carousel-indicator');
                
                let currentIndex = 0;
                
                function showSlide(index) {
                    // Hide all slides
                    items.forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Deactivate all indicators
                    indicators.forEach(indicator => {
                        indicator.classList.remove('active');
                    });
                    
                    // Show current slide
                    items[index].classList.add('active');
                    if (indicators[index]) {
                        indicators[index].classList.add('active');
                    }
                    
                    currentIndex = index;
                }
                
                function nextSlide() {
                    let nextIndex = currentIndex + 1;
                    if (nextIndex >= items.length) nextIndex = 0;
                    showSlide(nextIndex);
                }
                
                function prevSlide() {
                    let prevIndex = currentIndex - 1;
                    if (prevIndex < 0) prevIndex = items.length - 1;
                    showSlide(prevIndex);
                }
                
                // Set up event listeners
                if (nextBtn) {
                    nextBtn.addEventListener('click', nextSlide);
                }
                
                if (prevBtn) {
                    prevBtn.addEventListener('click', prevSlide);
                }
                
                indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => {
                        showSlide(index);
                    });
                });
                
                // Auto-advance if data-interval is set
                const interval = carousel.getAttribute('data-interval');
                if (interval && !isNaN(interval)) {
                    setInterval(nextSlide, parseInt(interval));
                }
            });
        }
        
        // Toast Component
        initToasts() {
            const toastTriggers = document.querySelectorAll('[data-tbba-toggle="toast"]');
            toastTriggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const target = trigger.getAttribute('data-tbba-target');
                    const toast = document.querySelector(target);
                    if (toast) {
                        this.showToast(toast);
                    }
                });
            });
            
            // Auto-dismiss toasts
            document.querySelectorAll('.tbba-toast').forEach(toast => {
                const delay = toast.getAttribute('data-delay') || 5000;
                setTimeout(() => {
                    this.hideToast(toast);
                }, parseInt(delay));
            });
        }
        
        showToast(toast) {
            toast.classList.add('show');
        }
        
        hideToast(toast) {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }
        
        // Alert Component
        initAlerts() {
            const alertDismissButtons = document.querySelectorAll('.tbba-alert-dismissible .tbba-btn-close');
            alertDismissButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const alert = btn.closest('.tbba-alert');
                    if (alert) {
                        alert.style.opacity = '0';
                        setTimeout(() => {
                            alert.remove();
                        }, 300);
                    }
                });
            });
        }
    }

    // ==============================================
    // API METHODS
    // ==============================================
    const API = {
        // Alert
        alert: function(message, type = 'primary', options = {}) {
            const id = Utils.uid('alert');
            const alert = Utils.createElement('div', {
                id: id,
                className: `tbba-alert tbba-alert-${type} tbba-alert-dismissible fade show`,
                role: 'alert'
            }, [
                message,
                Utils.createElement('button', {
                    type: 'button',
                    className: 'tbba-btn-close',
                    'data-tbba-dismiss': 'alert',
                    'aria-label': 'Close'
                })
            ]);
            
            // Position
            const position = options.position || 'top-right';
            let container = document.querySelector(`.tbba-alert-container-${position}`);
            if (!container) {
                container = Utils.createElement('div', {
                    className: `tbba-alert-container tbba-alert-container-${position}`
                });
                
                let styles = {
                    position: 'fixed',
                    zIndex: '9999',
                    maxWidth: '400px'
                };
                
                switch (position) {
                    case 'top-right':
                        Object.assign(styles, {
                            top: '20px',
                            right: '20px'
                        });
                        break;
                    case 'top-left':
                        Object.assign(styles, {
                            top: '20px',
                            left: '20px'
                        });
                        break;
                    case 'bottom-right':
                        Object.assign(styles, {
                            bottom: '20px',
                            right: '20px'
                        });
                        break;
                    case 'bottom-left':
                        Object.assign(styles, {
                            bottom: '20px',
                            left: '20px'
                        });
                        break;
                    case 'top-center':
                        Object.assign(styles, {
                            top: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        });
                        break;
                    case 'bottom-center':
                        Object.assign(styles, {
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        });
                        break;
                }
                
                Object.assign(container.style, styles);
                document.body.appendChild(container);
            }
            
            container.appendChild(alert);
            
            // Auto-remove
            const duration = options.duration || 5000;
            if (duration > 0) {
                setTimeout(() => {
                    const alertEl = document.getElementById(id);
                    if (alertEl) {
                        alertEl.style.opacity = '0';
                        setTimeout(() => {
                            if (alertEl.parentNode) {
                                alertEl.parentNode.removeChild(alertEl);
                            }
                        }, 300);
                    }
                }, duration);
            }
            
            return id;
        },
        
        // Toast
        toast: function(message, type = 'info', options = {}) {
            const id = Utils.uid('toast');
            const toast = Utils.createElement('div', {
                id: id,
                className: `tbba-toast tbba-toast-${type} fade show`,
                role: 'alert',
                'aria-live': 'assertive',
                'aria-atomic': 'true'
            }, [
                Utils.createElement('div', {
                    className: 'tbba-toast-header'
                }, [
                    Utils.createElement('strong', {
                        className: 'tbba-me-auto',
                        textContent: options.title || 'Notification'
                    }),
                    Utils.createElement('button', {
                        type: 'button',
                        className: 'tbba-btn-close',
                        'data-tbba-dismiss': 'toast',
                        'aria-label': 'Close'
                    })
                ]),
                Utils.createElement('div', {
                    className: 'tbba-toast-body',
                    textContent: message
                })
            ]);
            
            // Position
            const position = options.position || 'bottom-right';
            let container = document.querySelector(`.tbba-toast-container-${position}`);
            if (!container) {
                container = Utils.createElement('div', {
                    className: `tbba-toast-container tbba-toast-container-${position}`
                });
                
                let styles = {
                    position: 'fixed',
                    zIndex: '9999',
                    maxWidth: '350px'
                };
                
                switch (position) {
                    case 'top-right':
                        Object.assign(styles, {
                            top: '20px',
                            right: '20px'
                        });
                        break;
                    case 'top-left':
                        Object.assign(styles, {
                            top: '20px',
                            left: '20px'
                        });
                        break;
                    case 'bottom-right':
                        Object.assign(styles, {
                            bottom: '20px',
                            right: '20px'
                        });
                        break;
                    case 'bottom-left':
                        Object.assign(styles, {
                            bottom: '20px',
                            left: '20px'
                        });
                        break;
                    case 'top-center':
                        Object.assign(styles, {
                            top: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        });
                        break;
                    case 'bottom-center':
                        Object.assign(styles, {
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        });
                        break;
                }
                
                Object.assign(container.style, styles);
                document.body.appendChild(container);
            }
            
            container.appendChild(toast);
            
            // Auto-remove
            const duration = options.duration || 5000;
            if (duration > 0) {
                setTimeout(() => {
                    const toastEl = document.getElementById(id);
                    if (toastEl) {
                        toastEl.classList.remove('show');
                        setTimeout(() => {
                            if (toastEl.parentNode) {
                                toastEl.parentNode.removeChild(toastEl);
                            }
                        }, 300);
                    }
                }, duration);
            }
            
            // Dismiss button
            toast.querySelector('.tbba-btn-close').addEventListener('click', () => {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 300);
            });
            
            return id;
        },
        
        // Modal
        modal: {
            show: function(id) {
                const modal = typeof id === 'string' ? document.getElementById(id) : id;
                if (modal) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    document.body.style.paddingRight = '15px';
                    setTimeout(() => {
                        modal.classList.add('show');
                    }, 10);
                }
            },
            
            hide: function(id) {
                const modal = typeof id === 'string' ? document.getElementById(id) : id;
                if (modal) {
                    modal.classList.remove('show');
                    setTimeout(() => {
                        modal.style.display = 'none';
                        document.body.style.overflow = '';
                        document.body.style.paddingRight = '';
                    }, 300);
                }
            },
            
            toggle: function(id) {
                const modal = typeof id === 'string' ? document.getElementById(id) : id;
                if (modal) {
                    if (modal.style.display === 'block') {
                        this.hide(modal);
                    } else {
                        this.show(modal);
                    }
                }
            }
        },
        
        // Dropdown
        dropdown: {
            toggle: function(element) {
                const dropdown = element.closest('.tbba-dropdown');
                const menu = dropdown.querySelector('.tbba-dropdown-menu');
                
                if (menu) {
                    const isOpen = menu.classList.contains('show');
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.tbba-dropdown-menu.show').forEach(m => {
                        if (m !== menu) m.classList.remove('show');
                    });
                    
                    // Toggle current dropdown
                    if (isOpen) {
                        menu.classList.remove('show');
                    } else {
                        menu.classList.add('show');
                    }
                }
            },
            
            show: function(element) {
                const dropdown = element.closest('.tbba-dropdown');
                const menu = dropdown.querySelector('.tbba-dropdown-menu');
                if (menu) {
                    menu.classList.add('show');
                }
            },
            
            hide: function(element) {
                const dropdown = element.closest('.tbba-dropdown');
                const menu = dropdown.querySelector('.tbba-dropdown-menu');
                if (menu) {
                    menu.classList.remove('show');
                }
            }
        },
        
        // Tab
        tab: {
            show: function(element) {
                const target = element.getAttribute('data-tbba-target') || element.getAttribute('href');
                if (!target) return;
                
                // Hide all tab panes
                const tabContent = element.closest('.tbba-tab-content') || document;
                tabContent.querySelectorAll('.tbba-tab-pane').forEach(pane => {
                    pane.classList.remove('show', 'active');
                });
                
                // Deactivate all tab triggers
                element.closest('.tbba-nav').querySelectorAll('.tbba-nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Show target pane and activate trigger
                const targetPane = document.querySelector(target);
                if (targetPane) {
                    targetPane.classList.add('show', 'active');
                    element.classList.add('active');
                }
            }
        },
        
        // Collapse
        collapse: {
            toggle: function(element) {
                const target = element.getAttribute('data-tbba-target') || element.getAttribute('href');
                const collapse = document.querySelector(target);
                
                if (collapse) {
                    if (collapse.classList.contains('show')) {
                        collapse.classList.remove('show');
                    } else {
                        collapse.classList.add('show');
                    }
                }
            },
            
            show: function(element) {
                const target = element.getAttribute('data-tbba-target') || element.getAttribute('href');
                const collapse = document.querySelector(target);
                if (collapse) {
                    collapse.classList.add('show');
                }
            },
            
            hide: function(element) {
                const target = element.getAttribute('data-tbba-target') || element.getAttribute('href');
                const collapse = document.querySelector(target);
                if (collapse) {
                    collapse.classList.remove('show');
                }
            }
        },
        
        // Carousel
        carousel: {
            next: function(element) {
                const carousel = element.closest('.tbba-carousel');
                const items = carousel.querySelectorAll('.tbba-carousel-item');
                const indicators = carousel.querySelectorAll('.tbba-carousel-indicator');
                
                let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
                let nextIndex = currentIndex + 1;
                if (nextIndex >= items.length) nextIndex = 0;
                
                // Hide all slides
                items.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Deactivate all indicators
                indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
                
                // Show next slide
                items[nextIndex].classList.add('active');
                if (indicators[nextIndex]) {
                    indicators[nextIndex].classList.add('active');
                }
            },
            
            prev: function(element) {
                const carousel = element.closest('.tbba-carousel');
                const items = carousel.querySelectorAll('.tbba-carousel-item');
                const indicators = carousel.querySelectorAll('.tbba-carousel-indicator');
                
                let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
                let prevIndex = currentIndex - 1;
                if (prevIndex < 0) prevIndex = items.length - 1;
                
                // Hide all slides
                items.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Deactivate all indicators
                indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
                
                // Show previous slide
                items[prevIndex].classList.add('active');
                if (indicators[prevIndex]) {
                    indicators[prevIndex].classList.add('active');
                }
            },
            
            goTo: function(element, index) {
                const carousel = element.closest('.tbba-carousel');
                const items = carousel.querySelectorAll('.tbba-carousel-item');
                const indicators = carousel.querySelectorAll('.tbba-carousel-indicator');
                
                // Hide all slides
                items.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Deactivate all indicators
                indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
                
                // Show target slide
                items[index].classList.add('active');
                if (indicators[index]) {
                    indicators[index].classList.add('active');
                }
            }
        },
        
        // Utility Methods
        copyToClipboard: Utils.copyToClipboard,
        formatDate: Utils.formatDate,
        formatBytes: Utils.formatBytes,
        validateEmail: Utils.validateEmail,
        validateURL: Utils.validateURL,
        getCSSVar: Utils.getCSSVar,
        setCSSVar: Utils.setCSSVar,
        createElement: Utils.createElement,
        debounce: Utils.debounce,
        throttle: Utils.throttle,
        
        // AJAX
        ajax: function(options) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(options.method || 'GET', options.url, true);
                
                // Set headers
                if (options.headers) {
                    Object.keys(options.headers).forEach(key => {
                        xhr.setRequestHeader(key, options.headers[key]);
                    });
                }
                
                xhr.onload = function() {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            const data = JSON.parse(xhr.responseText);
                            resolve(data);
                        } catch (e) {
                            resolve(xhr.responseText);
                        }
                    } else {
                        reject(new Error(`Request failed with status ${xhr.status}`));
                    }
                };
                
                xhr.onerror = function() {
                    reject(new Error('Network error'));
                };
                
                xhr.send(options.data ? JSON.stringify(options.data) : null);
            });
        },
        
        // Fetch with timeout
        fetch: function(url, options = {}) {
            const timeout = options.timeout || 10000;
            
            return new Promise((resolve, reject) => {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => {
                    controller.abort();
                    reject(new Error('Request timeout'));
                }, timeout);
                
                fetch(url, {
                    ...options,
                    signal: controller.signal
                })
                .then(response => {
                    clearTimeout(timeoutId);
                    if (!response.ok) {
                        throw new Error(`HTTP error ${response.status}`);
                    }
                    return response.json();
                })
                .then(resolve)
                .catch(reject);
            });
        },
        
        // LocalStorage helper
        storage: {
            set: function(key, value) {
                try {
                    localStorage.setItem(`tbba_${key}`, JSON.stringify(value));
                    return true;
                } catch (e) {
                    console.error('LocalStorage error:', e);
                    return false;
                }
            },
            
            get: function(key) {
                try {
                    const item = localStorage.getItem(`tbba_${key}`);
                    return item ? JSON.parse(item) : null;
                } catch (e) {
                    console.error('LocalStorage error:', e);
                    return null;
                }
            },
            
            remove: function(key) {
                try {
                    localStorage.removeItem(`tbba_${key}`);
                    return true;
                } catch (e) {
                    console.error('LocalStorage error:', e);
                    return false;
                }
            },
            
            clear: function() {
                try {
                    localStorage.clear();
                    return true;
                } catch (e) {
                    console.error('LocalStorage error:', e);
                    return false;
                }
            }
        },
        
        // Cookie helper
        cookie: {
            set: function(name, value, days = 7) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                const expires = `expires=${date.toUTCString()}`;
                document.cookie = `tbba_${name}=${value};${expires};path=/`;
            },
            
            get: function(name) {
                const nameEQ = `tbba_${name}=`;
                const ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) === ' ') c = c.substring(1);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
                }
                return null;
            },
            
            remove: function(name) {
                this.set(name, '', -1);
            }
        },
        
        // Theme management
        theme: {
            set: function(theme) {
                document.documentElement.setAttribute('data-tbba-theme', theme);
                Utils.storage.set('theme', theme);
            },
            
            get: function() {
                return document.documentElement.getAttribute('data-tbba-theme') || 
                       Utils.storage.get('theme') || 
                       'light';
            },
            
            toggle: function() {
                const current = this.get();
                const newTheme = current === 'dark' ? 'light' : 'dark';
                this.set(newTheme);
                return newTheme;
            }
        },
        
        // Animation helper
        animate: function(element, animation, options = {}) {
            return new Promise(resolve => {
                const duration = options.duration || 300;
                const delay = options.delay || 0;
                
                // Add animation classes
                element.classList.add('tbba-animate-' + animation);
                
                if (options.duration) {
                    element.style.animationDuration = duration + 'ms';
                }
                
                if (options.delay) {
                    element.style.animationDelay = delay + 'ms';
                }
                
                // Remove animation class after completion
                setTimeout(() => {
                    element.classList.remove('tbba-animate-' + animation);
                    element.style.animationDuration = '';
                    element.style.animationDelay = '';
                    resolve();
                }, duration + delay);
            });
        }
    };

    // ==============================================
    // INITIALIZATION
    // ==============================================
    let initialized = false;
    
    function init() {
        if (initialized) return;
        
        // Inject CSS
        const cssInjector = new CSSInjector();
        cssInjector.inject();
        
        // Initialize components
        const componentManager = new ComponentManager();
        componentManager.init();
        
        // Add framework info
        addFrameworkInfo();
        
        initialized = true;
        
        console.log(`TBBA Framework v${TBBA.VERSION} initialized`);
        console.log(TBBA.COPYRIGHT);
    }
    
    function addFrameworkInfo() {
        if (document.querySelector('.tbba-framework-info')) return;
        
        const info = Utils.createElement('div', {
            className: 'tbba-framework-info',
            title: `TBBA Framework v${TBBA.VERSION}\n${TBBA.COPYRIGHT}`
        }, [
            `TBBA v${TBBA.VERSION}`
        ]);
        
        document.body.appendChild(info);
    }
    
    // Auto-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // ==============================================
    // EXPORT PUBLIC API
    // ==============================================
    const PublicAPI = {
        // Core
        version: TBBA.VERSION,
        author: TBBA.AUTHOR,
        copyright: TBBA.COPYRIGHT,
        license: TBBA.LICENSE,
        
        // Configuration
        config: TBBA,
        
        // Initialization
        init: init,
        isInitialized: () => initialized,
        
        // API Methods
        ...API,
        
        // Utilities
        utils: Utils,
        
        // Component Manager (for advanced usage)
        components: new ComponentManager()
    };
    
    // Export for ES modules
    exports.TBBA = PublicAPI;
    
    // Export for global usage
    if (typeof window !== 'undefined') {
        window.TBBA = PublicAPI;
    }
    
    return PublicAPI;
}));