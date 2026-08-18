# 🛍️ JHAY HUB – React E-commerce Application

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, responsive e-commerce web application built with **React 19**, **Vite**, and **Tailwind CSS**.

JHAY HUB uses the **Fake Store API** to retrieve product data and provide a realistic online shopping experience while demonstrating modern React development practices.

The project was built to strengthen my understanding of **React fundamentals, reusable component architecture, state management, routing, API integration, responsive design, UI/UX principles, and frontend best practices**.

---

## 🌐 Live Demo

🔗 **Live Preview:** [JHAY HUB](https://jhay-hub.vercel.app)

🔗 **GitHub Repository:** [JhayCodesDev/react-ecommerce-jhayhub](https://github.com/JhayCodesDev/react-ecommerce-jhayhub)

---

## ✨ Features

* 🛒 Browse available products
* 🔍 Search for products
* 📂 Browse products by category
* 📄 View detailed product information
* 🛍️ Add products to the shopping cart
* ➕ Increase and decrease cart quantities
* 🗑️ Remove products from the cart
* 💾 Persist cart data using Local Storage
* 🌙 Dark and Light mode
* 📱 Fully responsive design
* 📱 Responsive mobile navigation
* 🔔 Toast notifications
* ⬆️ Back-to-top button
* ⚡ Custom loading state
* ⚠️ Custom API and network error handling
* 🚫 Custom 404 Not Found page
* 🎨 Custom category images
* 🖼️ Custom favicon
* 🔎 Basic SEO optimization
* 🧩 Reusable React components
* 🎨 Custom design system and CSS utilities

---

## 🎨 UI/UX Design Process

The JHAY HUB interface was refined through a combination of **custom development, responsive testing, and UI analysis**.

**Google Stitch** was used as a UI analysis and design reference tool to explore possible improvements to the application's interface and user experience.

The final implementation was developed and customized manually in React and Tailwind CSS, with a focus on:

* Clear visual hierarchy
* Responsive layouts
* Consistent spacing and typography
* Reusable design tokens
* Light and Dark themes
* Accessible navigation
* Consistent interactive states
* Mobile usability
* Practical and maintainable component architecture

The goal was to use UI analysis as a reference while maintaining full control over the application's implementation and codebase.

---

## 🛠️ Technologies Used

* **React 19** – UI development
* **Vite 7** – Development environment and build tool
* **JavaScript (ES6+)** – Application logic
* **Tailwind CSS 4** – Styling and responsive design
* **React Router** – Client-side routing
* **React Icons** – Icon library
* **React Hook Form** – Form handling
* **React Toastify** – Toast notifications
* **Context API** – Global state management
* **Fake Store API** – Product data
* **Prettier** – Code formatting
* **Google Stitch** – UI/UX analysis and design reference
* **Vercel** – Deployment

---

## 📁 Project Structure

```text
react-ecommerce-jhayhub/
│
├── public/
│   ├── 404-page.png
│   ├── cart.png
│   ├── dark-mode.png
│   ├── home.png
│   ├── light-mode.png
│   ├── mobile-navigation.png
│   ├── product-details.png
│   └── shop.png
│
├── src/
│   │
│   ├── assets/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loading.jsx
│   │   ├── Login.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SignUp.jsx
│   │   └── ...
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── Pages/
│   │   ├── Cart.jsx
│   │   ├── Electronics.jsx
│   │   ├── FeaturedProduct.jsx
│   │   ├── Home.jsx
│   │   ├── Jewelry.jsx
│   │   ├── Mens.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Shop.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── Womens.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
|
├── package.json
├── vite.config.js
├── README.md
└── ...
```

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](./public/home.png)

---

### 🛍️ Shop Page

![Shop Page](./public/shop.png)

---

### 📄 Product Details

![Product Details](./public/product-details.png)

---

### 🛒 Shopping Cart

![Shopping Cart](./public/cart.png)

---

### 🌙 Dark Mode

![Dark Mode](./public/dark-mode.png)

---

### ☀️ Light Mode

![Light Mode](./public/light-mode.png)

---

### 📱 Mobile Navigation

![Mobile Navigation](./public/mobile-navigation.png)

---

### 🚫 404 Not Found Page

![404 Page](./public/404-page.png)

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/JhayCodesDev/react-ecommerce-jhayhub.git
```

### 2. Navigate into the project

```bash
cd react-ecommerce-jhayhub
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 📦 API

JHAY HUB uses the **Fake Store API** to retrieve product information.

**API Endpoint:**

```text
https://fakestoreapi.com/products
```

The application fetches product data from the API and uses it to populate product listings, categories, search results, and product detail pages.

### API Error Handling

Because the application depends on an external API, JHAY HUB includes custom error handling for situations such as:

* API request failures
* Network connectivity problems
* Unexpected API responses
* Empty or unavailable product data

When a connection problem occurs, users receive a custom error message prompting them to **refresh the page or check their network connection**.

---

## 🧠 What I Learned

Building and refining JHAY HUB strengthened my understanding of:

* React component architecture
* Reusable component design
* State management with Context API
* React Hooks such as `useState`, `useEffect`, and `useContext`
* React Router navigation
* Fetching and displaying API data
* Conditional rendering
* Search and filtering logic
* Responsive UI development
* Dark and Light theme implementation
* Local Storage
* Loading and error states
* Custom API and network error handling
* Toast notifications
* Mobile navigation
* Accessible navigation
* UI/UX analysis and implementation
* Maintaining a scalable React application

---

## 🔮 Future Improvements

Planned enhancements include:

* [ ] Offline fallback using local JSON data when the Fake Store API is unavailable
* [ ] Persist fetched products in Local Storage to reduce unnecessary API requests
* [ ] Product sorting by price, popularity, and newest
* [ ] Wishlist functionality
* [ ] Backend-based user authentication
* [ ] Checkout and payment integration
* [ ] Product reviews and ratings
* [ ] Pagination and lazy loading
* [ ] Further performance optimization
* [ ] Unit and integration testing

---

## 👨‍💻 Developer

### Developed by JhayCodes

JHAY HUB is part of my journey toward becoming a skilled software developer through building practical, production-style applications.

The project focuses on **clean architecture, maintainable code, responsive design, reusable components, and a strong user experience**.

### Connect with Me

* 🐙 **GitHub:** [@JhayCodesDev](https://github.com/JhayCodesDev)
* 🐦 **Twitter:** [@JhayCode](https://www.twitter.com/JhayCodes)
* 📸 **Instagram:** [@jhaycodes_](https://www.instagram.com/jhaycodes_)
* 💼 **LinkedIn:** [Joshua Odusanya](https://www.linkedin.com/in/joshua-odusanya-9b67aa292/)

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you found this project interesting, feel free to explore the repository and follow my development journey.
