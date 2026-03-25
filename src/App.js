import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Career from "./components/Carrer";
import Pricing from "./components/Pricing";
import NovaTechLab from "./components/NovaTechLab";

// 🔥 Layout Wrapper
const Layout = () => {
  const location = useLocation();

  // ❗ Hide ONLY Navbar on Lab page
  const hideNavbar = location.pathname === "/lab";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* ✅ R&D Lab */}
        <Route path="/lab" element={<NovaTechLab />} />
      </Routes>

      {/* ✅ Footer ALWAYS visible */}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
