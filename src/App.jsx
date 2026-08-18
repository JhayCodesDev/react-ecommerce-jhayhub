import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./Pages/Home";
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
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const { theme } = useTheme();

  return (
    <div className="page-bg text-primary">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />

        {/* Authentication remains optional */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollToTop />

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

      <Footer />
    </div>
  );
}

export default App;