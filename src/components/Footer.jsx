import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    footer: {
      backgroundColor: "#0a0a0a",
      color: "#f1f1f1",
      paddingTop: "40px",
      paddingBottom: "20px",
      fontFamily: "Arial, sans-serif",
      marginTop: "60px",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    top: {
      width: "100%",
      display: "flex",
      justifyContent: isMobile ? "center" : "space-between",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "center" : "flex-start",
      textAlign: isMobile ? "center" : "left",
      marginBottom: "30px",
      gap: isMobile ? "30px" : "0",
    },
    brand: {
      flex: "1",
      minWidth: "220px",
    },
    logo: {
      width: isMobile ? "120px" : "150px",
      marginBottom: "15px",
    },
    footerText: {
      fontSize: isMobile ? "13px" : "14px",
      marginBottom: "15px",
      color: "#bbb",
    },
    socialList: {
      listStyle: "none",
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-start",
      gap: "15px",
      padding: 0,
      margin: 0,
    },
    socialLink: {
      color: "#f1f1f1",
      fontSize: isMobile ? "18px" : "20px",
      transition: "color 0.3s",
    },
    links: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
      gap: "20px",
      flex: "2",
      width: "100%",
      marginTop: isMobile ? "20px" : "0",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    linkTitle: {
      fontSize: "16px",
      marginBottom: "10px",
      fontWeight: "bold",
      color: "#fff",
    },
    footerLink: {
      display: "block",
      fontSize: "14px",
      color: "#bbb",
      textDecoration: "none",
      marginBottom: "8px",
      transition: "color 0.3s",
    },
    bottom: {
      borderTop: "1px solid #333",
      textAlign: "center",
      paddingTop: "15px",
      fontSize: "13px",
      color: "#777",
      marginTop: "20px",
    },
    goTop: {
      position: "fixed",
      bottom: isMobile ? "15px" : "20px",
      right: isMobile ? "15px" : "20px",
      backgroundColor: "#00bcd4",
      color: "#fff",
      borderRadius: "50%",
      width: isMobile ? "35px" : "40px",
      height: isMobile ? "35px" : "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: isMobile ? "16px" : "18px",
      textDecoration: "none",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      transition: "background 0.3s",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          {/* Brand Section */}
          <div style={styles.brand}>
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/NovaTech-Innovate-Solutions/NovaTech-Innovate-Solutions.github.io/refs/heads/main/logofianla-removebg-preview.png"
                alt="NovaTech logo"
                style={styles.logo}
              />
            </a>
            <p style={styles.footerText}>Connect with NovaTech</p>
            <ul style={styles.socialList}>
              <li>
                <a
                  href="https://github.com/NovaTech-Innovate-Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/novatechinnovativesolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC2wbdTuQ_HpWNtcZaP14qiQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div style={styles.links}>
            <ul style={styles.linkList}>
              <li style={styles.linkTitle}>Company</li>
              <li><a href="/features" style={styles.footerLink}>About Us</a></li>
              <li><a href="/about" style={styles.footerLink}>Our Projects</a></li>
              <li><a href="/features" style={styles.footerLink}>Team</a></li>
            </ul>

            <ul style={styles.linkList}>
              <li style={styles.linkTitle}>Solutions</li>
              <li><a href="/features" style={styles.footerLink}>IoT Systems</a></li>
              <li><a href="/features" style={styles.footerLink}>AI & ML</a></li>
              <li><a href="/features" style={styles.footerLink}>Web & App Dev</a></li>
            </ul>

          
            <ul style={styles.linkList}>
              <li style={styles.linkTitle}>Explore</li>
              <li><a href="/career" style={styles.footerLink}>Careers</a></li>
              <li><a href="/career" style={styles.footerLink}>Internships</a></li>
              <li><a href="/contact" style={styles.footerLink}>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={styles.bottom}>
          <p>&copy; 2025 NovaTech Innovative Solutions. All rights reserved.</p>
        </div>

        {/* Go to Top */}
        <a href="#top" style={styles.goTop}>↑</a>
      </div>
    </footer>
  );
};

export default Footer;
