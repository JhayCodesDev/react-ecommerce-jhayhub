import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./Pages/Home";
import { CategoryCard } from "./components/CategoryCard";
import { ProductCard } from "./components/ProductCard";
import { Electronics } from "./Pages/Electronics";
import { Jewelry } from "./Pages/Jewelry";
import { Mens } from "./Pages/Mens";
import { Womens } from "./Pages/Womens";
import { FeaturedProduct } from "./Pages/FeaturedProduct";
import { NotFound } from "./Pages/NotFound";
import { Shop } from "./Pages/Shop";
import { ProductDetails } from "./Pages/ProductDetails";
import { Cart } from "./Pages/Cart";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./context/ThemeContext";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { useAuth } from "./context/AuthContext";

function App() {
  const theme = useTheme();
  const { currentUser, isAuthenticated, logout } = useAuth();

  return (
    <div>
      <div className="page-bg text-primary">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer
          theme={theme}
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          newestOnTop
        />

        {isAuthenticated ? (<Footer />) : null}
      </div>
    </div>
  );
}
export default App;
