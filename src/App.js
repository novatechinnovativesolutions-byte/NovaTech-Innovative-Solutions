import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Carrer from './components/Carrer'; // ✅ Make sure the file is named Carrer.jsx and exported correctly
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Carrer />} /> {/* ✅ Fix added */}
      </Routes>
       <Footer />
    </Router>
  );
};

export default App;
