import React from "react";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer, toast,Bounce } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div className="min-h-screen bg-gray-950 font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;