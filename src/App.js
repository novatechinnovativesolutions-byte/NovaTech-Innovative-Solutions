
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToHash from "./components/ScrollToHash";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import NovaTechLab from "./components/NovaTechLab";
import Training from "./components/Training";

import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

const Layout = () => {
  return (
    <>
      <Navbar />

      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />

        {/* Training */}
        <Route path="/training" element={<Training />} />

        {/* Privacy Policy */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* Terms of Service */}
        <Route
          path="/terms-of-service"
          element={<TermsOfService />}
        />

        {/* NovaTech Lab */}
        <Route path="/lab" element={<NovaTechLab />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div
              style={{
                padding: "100px 20px",
                textAlign: "center",
              }}
            >
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
