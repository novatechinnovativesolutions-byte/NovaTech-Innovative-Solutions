import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎨 Colors
  const colors = {
    blue: "#1E3A8A",
    yellow: "#FFD700",
    white: "#FFFFFF",
    gray: "#333",
  };

  // 🎨 Styles
  const styles = {
    header: {
      backgroundColor: colors.white,
      padding: "0.8rem 0",
      borderBottom: "1px solid #ddd",
      position: "sticky",
      top: 0,
      zIndex: 999,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    logo: {
      height: isMobile ? "55px" : "70px",
      width: "auto",
    },
    toggle: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: isMobile ? "block" : "none",
      fontSize: "2rem",
      padding: "0.25rem 0.5rem",
      zIndex: 1000,
    },
    nav: {
      display: isMobile ? (isOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
      position: isMobile ? "absolute" : "static",
      top: isMobile ? "70px" : "auto",
      right: isMobile ? "1rem" : "auto",
      left: isMobile ? "1rem" : "auto",
      background: isMobile ? colors.white : "transparent",
      width: isMobile ? "calc(100% - 2rem)" : "auto",
      borderRadius: isMobile ? "8px" : "0",
      boxShadow: isMobile ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
      padding: isMobile ? "1rem" : "0",
      transition: "all 0.3s ease-in-out",
    },
    ul: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      listStyle: "none",
      gap: isMobile ? "1rem" : "2rem",
      alignItems: isMobile ? "flex-start" : "center",
      margin: 0,
      padding: 0,
      width: isMobile ? "100%" : "auto",
    },
    link: {
      color: colors.gray,
      fontWeight: 500,
      fontSize: isMobile ? "1.1rem" : "1rem",
      padding: isMobile ? "0.75rem 0" : "0.5rem 0",
      textDecoration: "none",
      transition: "color 0.3s ease",
      width: isMobile ? "100%" : "auto",
      display: "block",
      textAlign: isMobile ? "left" : "center",
    },
    button: {
      backgroundColor: colors.yellow,
      color: colors.blue,
      padding: isMobile ? "0.75rem 1rem" : "0.5rem 1rem",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: 600,
      transition: "background-color 0.3s ease",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      marginTop: isMobile ? "0.5rem" : 0,
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="https://raw.githubusercontent.com/NovaTech-Innovate-Solutions/NovaTech-Innovate-Solutions.github.io/refs/heads/main/logofianla-removebg-preview.png"
            alt="Logo"
            style={styles.logo}
          />
        </Link>

        {/* Burger Toggle */}
        <button style={styles.toggle} onClick={toggleNavbar} aria-label="Toggle menu">
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation */}
        <nav style={styles.nav}>
          <ul style={styles.ul}>
            <li><Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" style={styles.link} onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/features" style={styles.link} onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/career" style={styles.link} onClick={() => setIsOpen(false)}>Careers</Link></li>
            <li>
              <Link to="/contact" style={styles.link} onClick={() => setIsOpen(false)}>
                <button style={styles.button}>Get in touch</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
