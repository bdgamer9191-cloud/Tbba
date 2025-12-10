🎨 TBBA Framework v2.0.0 🚀 A Hybrid CSS Dream✨ The Ultimate Hybrid CSS Framework: Tailwind + Bootstrap + Bulma! ✨Zero configuration. Maximum velocity. 🎭📋 Table of Contents🌟 Why Choose TBBA?📦 Installation Magic🌐 CDN📦 NPM⚛️ Framework IntegrationsReact IntegrationVue.js IntegrationAngular Integration🚀 Super Quick Start🎨 Component Gallery🛠️ Utilities⚡ JavaScript API✅ Real-World Example: Login Form📢 Community & Support📜 License🌟 Why Choose TBBA?TBBA is not just another CSS framework; it's the culmination of the best parts of the holy trinity of CSS: Tailwind's utility-first approach, Bootstrap's robustness, and Bulma's elegant components.FeatureDescriptionBenefitHybrid DNACombines Tailwind, Bootstrap, and Bulma concepts.All-in-one flexibility and power.Zero ConfigJust link the script/install the package and go.Start building instantly.Auto CSS InjectionAutomatically includes the necessary stylesheets.No manual links needed.Smart ThemeBuilt-in dark/light mode detection and toggling.Modern, accessible UI out of the box.Unified DesignConsistent look and feel across all components.Your app looks great, effortlessly.LightweightA mere 200KB total footprint.Lightning-fast loading times.💡 Fun Fact: You get the powerful utility classes (tbba-p-4, tbba-text-6xl) and the ready-made components (tbba-btn, tbba-card) in one package!📦 Installation MagicGet up and running in seconds. Choose your preferred method!🌐 CDNThe fastest way to start. Just drop this line in your <head> and TBBA handles the rest!<script src="[https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js](https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js)"></script>

<!-- For production, it's recommended to use the integrity hash: -->
<script
  src="[https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js](https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js)"
  integrity="sha384-..." <!-- (Replace '...' with the actual hash) -->
  crossorigin="anonymous">
</script>
📦 NPM InstallationFor modern development environments, use your favorite package manager.# Using NPM
npm install tbba

# Using Yarn
yarn add tbba

# Using pnpm
pnpm add tbba
⚛️ Framework IntegrationsTBBA is designed to play nicely with all major JavaScript frameworks.React Integration ⚛️Import the CSS and the JavaScript API once in your entry file.import React from 'react';
import 'tbba/dist/TBBA.css'; 
// Note: TBBA object is available globally after the script is loaded/included.

function App() {
  return (
    <div className="tbba-container tbba-p-8 tbba-bg-gray-100">
      <h1 className="tbba-text-primary tbba-text-4xl">Hello TBBA on React!</h1>
      <button 
        className="tbba-btn tbba-btn-primary tbba-mt-4"
        onClick={() => TBBA.toast.info("React App Clicked!")}>
        Click Me & See Magic ✨
      </button>
    </div>
  );
}

export default App;
Vue.js Integration 🖖Utilize the global TBBA object within your component methods.<template>
  <div class="tbba-container tbba-p-8 tbba-bg-white">
    <h1 class="tbba-text-primary tbba-text-4xl">Hello TBBA on Vue.js!</h1>
    <button class="tbba-btn tbba-btn-primary tbba-mt-4" @click="showAlert">
      Click Me & Show Alert 🔔
    </button>
  </div>
</template>

<script>
import 'tbba/dist/TBBA.css';

export default {
  methods: {
    showAlert() {
      // TBBA.alert is a global function thanks to the included script
      TBBA.alert('Hello from Vue!', 'success'); 
    }
  }
}
</script>
Angular Integration 🎯Include the CSS and JS files in your angular.json to make them globally available.// angular.json (partial)
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
🚀 Super Quick StartJust one file and two classes to get a styled button and an interactive alert!<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- ⚡ THE ONLY LINE YOU NEED! ⚡ -->
    <script src="[https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js](https://cdn.jsdelivr.net/gh/bdgamer9191-cloud/Tbba/TBBA.js)"></script>
    <title>TBBA Starter</title>
</head>
<body class="tbba-container tbba-p-8">
    <h1 class="tbba-text-5xl tbba-font-extrabold tbba-text-primary tbba-text-center tbba-animate-pulse">
        Welcome to TBBA
    </h1>

    <div class="tbba-flex tbba-justify-center tbba-mt-8">
        <button class="tbba-btn tbba-btn-gradient tbba-shadow-xl"
            onclick="TBBA.toast.success('🎉 Framework Initialized!', 'bottom-right')">
            Initialize TBBA!
        </button>
    </div>
</body>
</html>
🎨 Component GalleryBeautiful, ready-to-use components inspired by the best of the web.Buttons 🔘A variety of styles and sizes.<button class="tbba-btn tbba-btn-primary">Primary</button>
<button class="tbba-btn tbba-btn-outline-secondary">Outline</button>
<button class="tbba-btn tbba-btn-gradient tbba-animate-bounce">Gradient</button>
<button class="tbba-btn tbba-btn-lg tbba-rounded-full">Large & Full Round</button>
Cards 🖼️Perfect for displaying grouped information.<div class="tbba-card tbba-shadow-2xl tbba-rounded-xl tbba-hover-scale-105 tbba-transition-all">
  <!-- Use a responsive image -->
  <img src="[https://picsum.photos/400/200](https://picsum.photos/400/200)" class="tbba-card-img tbba-rounded-t-xl" alt="Card Image">
  <div class="tbba-card-body">
      <h5 class="tbba-card-title tbba-text-2xl tbba-font-semibold">The Hybrid Title</h5>
      <p class="tbba-card-text tbba-text-gray-600">This card shows the power of TBBA's blended design system.</p>
      <a class="tbba-btn tbba-btn-primary tbba-mt-3">Go Somewhere</a>
  </div>
</div>
Navbar 🧭Responsive and feature-rich navigation.<nav class="tbba-navbar tbba-bg-dark tbba-shadow-lg tbba-p-3">
    <div class="tbba-navbar-brand tbba-text-white tbba-font-bold">TBBA Brand</div>
    <div class="tbba-navbar-menu">
        <a class="tbba-navbar-item tbba-text-white tbba-hover-text-primary">Home</a>
        <a class="tbba-navbar-item tbba-text-white tbba-hover-text-primary">About</a>
        <a class="tbba-navbar-item tbba-text-white tbba-hover-text-primary">Contact</a>
        <button class="tbba-btn tbba-btn-outline-light" onclick="TBBA.theme.toggle()">
            🌙 Toggle Theme
        </button>
    </div>
</nav>
🛠️ UtilitiesHarness the power of utility-first design for granular control.Spacing (Margin/Padding)Based on a simple scale (1 to 12).ClassPropertytbba-m-4margin: 1rem;tbba-p-4padding: 1rem;tbba-mx-automargin-left: auto; margin-right: auto;tbba-py-6padding-top/bottom: 1.5rem;TypographyFine-tune your text with Tailwind-style classes.<h1 class="tbba-text-6xl tbba-font-light">Massive Heading</h1>
<p class="tbba-text-primary tbba-text-lg tbba-font-mono">Primary text with custom font.</p>
<p class="tbba-text-center tbba-text-red-500 tbba-underline">Centered and Underlined Text</p>
Grid SystemResponsive, 12-column grid structure inspired by Bootstrap/Bulma.<div class="tbba-row tbba-gap-4">
  <div class="tbba-col-xs-12 tbba-col-md-4 tbba-bg-blue-200 tbba-p-4 tbba-rounded-lg">
    Mobile Full, Desktop 4-wide
  </div>
  <div class="tbba-col-xs-12 tbba-col-md-4 tbba-bg-blue-300 tbba-p-4 tbba-rounded-lg">
    Mobile Full, Desktop 4-wide
  </div>
  <div class="tbba-col-xs-12 tbba-col-md-4 tbba-bg-blue-400 tbba-p-4 tbba-rounded-lg">
    Mobile Full, Desktop 4-wide
  </div>
</div>
⚡ JavaScript APITBBA includes a robust JavaScript API for interactive components and dynamic styling.Alerts ⚠️Simple, dynamic notifications.TBBA.alert("👋 Welcome Back!", "info"); // An info alert
TBBA.alert("🚫 Error: Something went wrong.", "danger"); 
Modals 🪟Highly customizable and easy-to-trigger modal windows.TBBA.modal.open({
  title: "🚀 Super Modal",
  content: "This is a large, custom modal with dynamic content.",
  size: "lg", // Options: 'sm', 'md', 'lg', 'xl'
  backdropClose: true 
});
Toasts 🍞Non-intrusive, timed notifications.TBBA.toast.success("✅ Settings Saved!", "top-center");
TBBA.toast.error("❌ Action Failed.", "bottom-left");
Theme 🌙Toggle between Light and Dark mode seamlessly.TBBA.theme.toggle(); // Toggles the current theme
TBBA.theme.set('dark'); // Force dark mode
Validation ✅Client-side form validation.const isValid = TBBA.form.validate('#loginForm'); // Validates form fields with 'required' attributes
if (isValid) {
    console.log("Form is valid! Submitting...");
}
✅ Real-World Example: Login FormA beautiful, responsive login form using only TBBA classes.<div class="tbba-container tbba-max-w-sm tbba-mx-auto tbba-mt-12 tbba-p-4">
  <div class="tbba-card tbba-shadow-2xl tbba-rounded-2xl tbba-animate-fade-in">
      <div class="tbba-card-header tbba-text-center tbba-p-5 tbba-bg-primary-dark tbba-rounded-t-2xl">
          <h2 class="tbba-text-3xl tbba-font-extrabold tbba-text-white">Welcome Back</h2>
      </div>
      <div class="tbba-card-body tbba-p-6">
          <form id="loginForm">
              <div class="tbba-form-group tbba-mb-4">
                  <label class="tbba-label">Email</label>
                  <input type="email" class="tbba-form-control" required placeholder="name@example.com">
              </div>

              <div class="tbba-form-group tbba-mb-6">
                  <label class="tbba-label">Password</label>
                  <input type="password" class="tbba-form-control" required placeholder="********">
              </div>

              <button 
                  type="submit" 
                  class="tbba-btn tbba-btn-primary tbba-w-full tbba-text-lg tbba-transition-all tbba-hover-scale-105"
                  onclick="event.preventDefault(); TBBA.form.validate('#loginForm') ? TBBA.toast.success('Logging In...') : TBBA.toast.error('Validation failed!');">
                  Login Securely
              </button>
          </form>
      </div>
  </div>
</div>
📢 Community & SupportHave questions, need help, or want to contribute? Join our growing community!💬 Join Our Telegram Group!We're active and ready to assist you on your TBBA journey!📜 LicenseThis framework is open-source and available under the MIT License. Build anything you want!View Full License Details