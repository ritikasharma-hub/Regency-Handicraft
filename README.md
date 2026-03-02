# Regency Handicraft
A premium, boutique-style website for Regency Handicraft, a government-recognized export house specializing in high-end decor, soft geometry furniture, and bespoke Indian craftsmanship.

## 🌟 Overview
This project is a static, highly responsive, and visually driven front-end web application designed to showcase signature furniture collections (The Kodo Collection, The Katha Series, and Aura-Struct) to B2B partners, interior designers, and wholesale clients worldwide.

## ✨ Key Features
- **Premium Aesthetic:** A custom, minimalist design system utilizing a curated color palette (Coffee Brown, Antique Gold, Sand, Walnut) and elegant typography to reflect a luxury brand.
- **Dynamic Navigation:** A custom-built navigation bar that transitions background and text colors dynamically based on scroll position to ensure high contrast against the Hero banner. Includes a responsive mobile drawer and a seamless Mega Menu.
- **Interactive Collection Grids:** Hover-activated product cards that smoothly zoom and reveal collection details.
- **Custom Product Modal:** A bespoke JavaScript-driven modal slider that allows users to click into a collection and view a carousel of specific products with their specifications (wood type, dimensions, finish). 
- **Serverless Lead Generation:** A custom "Partnership & Inquiry" form that silently submits leads directly to a Google Sheet backend using a native JavaScript `fetch()` API, deliberately bypassing Google's strict iframe security policies for a seamless user experience.
- **High-Performance Architecture:** Pure vanilla HTML/JS/CSS structure for maximum speed, requiring no complex build tools or heavy framework overhead.

## 🛠️ Technology Stack
- **Structure:** HTML5
- **Styling:** Tailwind CSS (via CDN for rapid prototyping), Vanilla CSS (for custom scrollbars and animations)
- **Interactivity:** Vanilla JavaScript (DOM manipulation, Event Listeners, Fetch API)
- **Backend (Forms):** Google Forms API / Google Sheets

## 📂 Project Structure
- `index.html` - The core application entry point containing the entire semantic structure, Hero section, collection grids, FAQ, form, and Footer.
- `style.css` - Contains custom utility classes, font imports (Google Fonts: Playfair Display, Inter), and highly specific animations/hide-scrollbar logic not covered by standard Tailwind utilities.
- `script.js` - Handles all interactive logic:
  - Navbar scroll color transitions
  - Mobile menu toggle mechanics
  - Mega Menu hover delays
  - Modal initialization and slider navigation logic
  - Data structures arrays holding the specific furniture metadata for the modals
  - The `fetch()` logic for the Google Form submission

## 🚀 How to Run Locally

Because this project relies entirely on static files and CDN links, no complex server builds are required.

1. Clone or download the repository to your local machine.
2. Open the project folder.
3. Simply double-click on `index.html` to open it in your default web browser.

**Alternatively (Recommended for full JS functionality):**
If you wish to run a local development server (to ensure the Fetch API behaves exactly as it would in production):

**Using VS Code:**
1. Install the "Live Server" extension.
2. Right-click on `index.html` and select "Open with Live Server".

**Using Python:**
1. Open your terminal in the project directory.
2. Run `python -m http.server 8000`
3. Navigate to `http://localhost:8000` in your browser.

## 📝 Modifying the Contact Form
The Business Inquiry form is hardcoded to a specific Google Form instance. To link it to your own Google Sheet:
1. Open `index.html`.
2. Locate the `<form id="business-inquiry-form" ...>` element.
3. Change the `action` attribute to your Google Form's `/formResponse` URL.
4. Update the `name` attributes of the four input fields (Name, Company, Email, Inquiry Type) to match your Google Form's specific `entry.XXXXXXX` IDs.
