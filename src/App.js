import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Career from "./components/Carrer";
import Pricing from "./components/Pricing";
import NovaTechLab from "./components/NovaTechLab";
import Projectmaker from "./components/projectmaker";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

const Layout = () => {
  const location = useLocation();

  // Pages where Navbar/Footer should be hidden
  const hiddenLayoutPages = ["/lab"];

  const hideLayout = hiddenLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Privacy Policy */}
        <Route  path="/privacy-policy" element={<PrivacyPolicy />}
        />

          {/* Terms Of Service */}
        <Route  path="/Terms-Of-Service" element={<TermsOfService />}
        />

        <Route path="/projectmaker" element={<Projectmaker />} />

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

      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;