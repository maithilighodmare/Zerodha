import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing-page/home/HomePage";
import Signup from "./landing-page/signup/Signup";
import About from "./landing-page/about/AboutPage";
import ProductPage from "./landing-page/products/ProductPage";
import Pricing from "./landing-page/pricing/PricingPage";
import SupportPage from "./landing-page/support/SupportPage";
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";
import Notfound from "./landing-page/Notfound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
