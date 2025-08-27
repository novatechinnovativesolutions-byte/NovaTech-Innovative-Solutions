import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Carrer from './components/Carrer'; 
import Pricing from './components/Pricing'; 
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
        <Route path="/career" element={<Carrer />} /> 
        <Route path="/pricing" element={<Pricing />} /> 
      </Routes>
       <Footer />
    </Router>
  );
};

export default App;
