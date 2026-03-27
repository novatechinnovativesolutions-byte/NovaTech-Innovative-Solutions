import { useState, useEffect } from "react";

// ========== DATA (unchanged) ==========
const NAV_LINKS = ["About", "Vision", "Research", "Projects", "Publications", "Team", "Services"];

const RESEARCH_DOMAINS = [
  { icon: "🌐", title: "IoT & Smart Systems", desc: "Sensor fusion, embedded intelligence, and connected smart infrastructure." },
  { icon: "🤖", title: "Robotics & Automation", desc: "Autonomous navigation, manipulation, and human-robot interaction research." },
  { icon: "⚡", title: "TinyML & Edge AI", desc: "Model optimization and on-device ML inference for resource-constrained hardware." },
  { icon: "🧠", title: "Artificial Intelligence & ML", desc: "Deep learning, NLP, reinforcement learning, and applied AI for real-world systems." },
  { icon: "👁️", title: "Computer Vision", desc: "Object detection, pose estimation, image segmentation using OpenCV & MediaPipe." },
  { icon: "🏥", title: "Healthcare Technology", desc: "AI-driven diagnostics, wearable health monitoring, and clinical decision support." },
  { icon: "📡", title: "Wireless & UAV Networks", desc: "LoRa mesh, disaster resilience communication, and UAV-based data relay systems." },
  { icon: "🔋", title: "Sustainable Computing", desc: "Energy-harvesting systems, solar-powered AI, and green embedded design." },
];

const PROJECTS = [
  {
    tag: "Wearable AI (Research)",
    color: "#0d6efd",
    title: "Smart AI T-Shirt",
    desc: "A solar-powered intelligent wearable integrating biometric sensing and TinyML for real-time health monitoring, geo-fencing, and emergency response, aimed at next-generation healthcare and safety systems.",
    tech: ["TinyML", "ESP32", "Sensors", "GPS", "Solar"],
    status: "Research",
  },
  {
    tag: "UAV Systems (Research)",
    color: "#0dcaf0",
    title: "Hybrid UAV Communication System",
    desc: "A hybrid UAV-based communication framework combining LoRa and short-range protocols to enable resilient, long-range connectivity for disaster management and remote sensing applications.",
    tech: ["LoRa", "UAV", "Hybrid Network", "STM32"],
    status: "Research",
  },
  {
    tag: "Healthcare Robotics (Research)",
    color: "#dc3545",
    title: "RoboDoc: Autonomous Medical Robot",
    desc: "An intelligent robotic system designed for rural healthcare, capable of performing primary health diagnostics using integrated sensors and embedded AI for early-stage medical assessment.",
    tech: ["Robotics", "Sensors", "Embedded AI", "IoT"],
    status: "Research",
  },
  {
    tag: "Sustainable Tech (Developed)",
    color: "#198754",
    title: "Smart Solar Charging Bag",
    desc: "A portable renewable energy solution embedded in a backpack, capable of charging electronic devices efficiently using solar panels with optimized power management circuitry.",
    tech: ["Solar Panel", "Battery Mgmt", "Power Electronics"],
    status: "Deployed",
  },
  {
    tag: "Computer Vision (Developed)",
    color: "#20c997",
    title: "Yoga Posture Detection System",
    desc: "A real-time AI-based system using MediaPipe and sequence models to detect and classify human poses, providing feedback for fitness training and posture correction.",
    tech: ["MediaPipe", "OpenCV", "Python", "LSTM"],
    status: "Deployed",
  },
  {
    tag: "EdTech / Fitness (Developed)",
    color: "#ffc107",
    title: "Smart Online Gym Platform",
    desc: "An interactive fitness platform combining AI-based posture detection, personalized workout plans, trainer integration, and gamified progress tracking for enhanced user engagement.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    status: "Deployed",
  },
  {
    tag: "IoT Systems (Developed)",
    color: "#fd7e14",
    title: "Smart Home Automation System",
    desc: "An IoT-based home automation system enabling remote control and monitoring of appliances, integrating sensors, mobile interfaces, and automation logic for smart living environments.",
    tech: ["IoT", "ESP32", "Sensors", "Mobile App"],
    status: "Prototype",
  },
  {
    tag: "IoT Communication",
    color: "#6f42c1",
    title: "ESP32-Based Morse Code Transmission System Using Telegram Bot",
    desc: "This research work presenting an IoT-based Morse code communication system where encoded signals are transmitted via ESP32 and decoded messages are delivered through a Telegram bot interface.",
    tech: ["ESP32", "Telegram API", "IoT", "Python"],
    status: "Prototype",
  },
  {
    tag: "UAV",
    color: "#6f42c1",
    title: "UAV for Tele-Medicine and Aid-Delivery",
    desc: "Details: (Confidential)",
    tech: ["UAV","IoT"],
    status: "Active",
  }
];

const PUBLICATIONS = [
  {
    year: "2026",
    type: "Conference",
    title: "Prospects and Challenges in UAV-Based Communication for Disaster Management",
    venue: "IEEE AICARE 2026",
    authors: "NovaTech R&D Lab",
    doi: "10.1109/AICARE66005.2025.11402816",
  },
  {
    year: "2025",
    type: "Conference",
    title: "Emergence of Transfer Learning towards Specific Identification of Alzheimer’s Disease – A Prospective Approach",
    venue: "IEEE Conference",
    authors: "NovaTech R&D Lab",
    doi: "10.1109/IEEECONF64992.2025.10962879",
  },
  {
    year: "2025",
    type: "Conference",
    title: "RoboDoc: An Autonomous Medical Robot for Primary Health Assessment in Villages",
    venue: "International Conference on Healthcare Robotics",
    authors: "NovaTech R&D Lab + GNIT, Kolkata",
    link: "https://zenodo.org/records/18439287",
  },
  {
    year: "2025",
    type: "Conference",
    title: "A Deep Neural Network Model for The Detection of Breast Cancer",
    venue: "International Conference on AI in Healthcare",
    authors: "NovaTech R&D Lab + GNIT, Kolkata",
    link: "https://www.researchgate.net/publication/396176179_A_Deep_Neural_Network_Model_for_The_Detection_of_Breast_Cancer",
  },
  {
    year: "2025",
    type: "Journal",
    title: "Design and Development of a Multi-Functional Interactive Robot with Handshake, AI Voice Assistance, Projection, and Mobility",
    venue: "International Journal of Sciences and Innovation Engineering",
    authors: "NovaTech R&D Lab",
    link: "https://ijsci.com/index.php/home/article/view/314",
  },
  {
    year: "2026",
    type: "Preprint",
    title: "An ESP32-Based Morse Code Transmission System Using Telegram Bot",
    venue: "Preprints",
    authors: "NovaTech R&D Lab",
    doi: "10.20944/preprints202602.1999.v1",
  },
  {
    year: "2025",
    type: "Book",
    title: "Use of Artificial Intelligence in Engineering",
    venue: "Reff Book",
    authors: "NovaTech R&D Lab",
    link: "https://www.amazon.com/dp/B0FQ6HY8SX",
  },
  {
    year: "2025",
    type: "Patent",
    title: "IoT-based Heat Stress Adaptive Crop Recommendation System",
    venue: "Patent Published ",
    authors: "NovaTech R&D Lab + GNIT, Kolkata",
    link: "https://www.researchgate.net/publication/398996536_AN_IOT_AND_AI-ENABLED_HEAT_STRESS_ADAPTIVE_CROP_RECOMMENDATION_AND_MICROCLIMATE_CONTROL_SYSTEM_FOR_HIGH_TEMPERATURE_AGRICULTURAL_ZONE",
  },
  {
    year: "2025",
    type: "Patent",
    title: "Smart T-Shirt with Medical Monitoring",
    venue: "Patent Published",
    authors: "NovaTech R&D Lab + GNIT, Kolkata",
    link: "https://www.researchgate.net/publication/398996097_SMART_SOLAR_CHARGING_T-SHIRT_WITH_MEDICAL_MONITORIN",
  },
];

const TEAM = [
  { name: "Chandramouli Haldar", role: "Founder & CEO", focus: "TinyML, Robotics, IoT", avatar: "CH" },
  { name: "Shrijoy Biswas", role: "Senior Hardware Engineer", focus: "Analog & Digital Electronics, PCB Design", avatar: "SB" },
  { name: "Anshuman Shaw", role: "IoT & Electrical Systems Lead", focus: "ESP32, Arduino, Electrical Systems", avatar: "AS" },
];

const SERVICES = [
  { icon: "🔬", title: "R&D Consulting", desc: "Expert guidance on AI, IoT, and embedded systems projects from ideation to prototype." },
  { icon: "🛠️", title: "Custom Project Development", desc: "End-to-end hardware-software development tailored to industrial and academic needs." },
  { icon: "📄", title: "Research Collaboration", desc: "Joint research with universities, startups, and enterprises on funded projects." },
];

const TECH_STACK = [
  { cat: "Computing Systems", items: ["2× Laptops", "1× Desktop PC"] },
  { cat: "Development Boards", items: ["Arduino (Uno/Nano)", "ESP32", "ESP8266 (ESP-01)", "ESP32-CAM Module", "Raspberry Pi Pico"] },
  { cat: "Sensors", items: ["Ultrasonic Sensor", "DHT", "LDR", "RFID", "Other Analog & Digital Sensors"] },
  { cat: "Actuators", items: ["Relays", "DC Motors", "LEDs", "Fans"] },
  { cat: "Electronic Components", items: ["Resistors", "Capacitors", "Transistors", "MOSFETs", "Transformers", "Digital ICs"] },
  { cat: "Measurement Tools", items: ["Multimeter", "Voltmeter", "Ammeter"] },
];

const STATS = [
  { value: "20+", label: "Research Projects" },
  { value: "12+", label: "Publications" },
  { value: "8", label: "Research Domains" },
  { value: "5+", label: "Partners & Clients" },
];

export default function NovaTechLab() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [pubTab, setPubTab] = useState("research");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const filters = ["All", "Active", "Research", "Deployed", "Prototype"];
  const filteredProjects = activeFilter === "All" ? PROJECTS : PROJECTS.filter(p => p.status === activeFilter);

  const filteredPublications = () => {
    if (pubTab === "research") return PUBLICATIONS.filter(p => p.type !== "Book" && p.type !== "Patent");
    if (pubTab === "books") return PUBLICATIONS.filter(p => p.type === "Book");
    return PUBLICATIONS.filter(p => p.type === "Patent");
  };

  const typeColor = (type) => {
    if (type === "Journal") return { bg: isDarkMode ? "rgba(245,158,11,0.2)" : "#fff9e6", color: isDarkMode ? "#f59e0b" : "#b45f06" };
    if (type === "Conference") return { bg: isDarkMode ? "rgba(59,130,246,0.2)" : "#e6f3ff", color: isDarkMode ? "#3b82f6" : "#0a58ca" };
    if (type === "Preprint") return { bg: isDarkMode ? "rgba(139,92,246,0.2)" : "#f3e8ff", color: isDarkMode ? "#8b5cf6" : "#6f42c1" };
    if (type === "Book") return { bg: isDarkMode ? "rgba(16,185,129,0.2)" : "#d1e7dd", color: isDarkMode ? "#10b981" : "#0f5132" };
    if (type === "Patent") return { bg: isDarkMode ? "rgba(251,191,36,0.2)" : "#fff3cd", color: isDarkMode ? "#fbbf24" : "#856404" };
    return { bg: isDarkMode ? "rgba(100,116,139,0.2)" : "#fff0e0", color: isDarkMode ? "#94a3b8" : "#b85c00" };
  };

  const statusColor = (status) => {
    if (status === "Deployed") return { bg: isDarkMode ? "rgba(16,185,129,0.2)" : "#e6f4e6", color: isDarkMode ? "#10b981" : "#2c6e2c" };
    if (status === "Active") return { bg: isDarkMode ? "rgba(59,130,246,0.2)" : "#e6f3ff", color: isDarkMode ? "#3b82f6" : "#0a58ca" };
    if (status === "Research") return { bg: isDarkMode ? "rgba(251,191,36,0.2)" : "#fff0e0", color: isDarkMode ? "#fbbf24" : "#b85c00" };
    return { bg: isDarkMode ? "rgba(245,158,11,0.2)" : "#fef0e0", color: isDarkMode ? "#f59e0b" : "#a4662e" };
  };

  // CSS variables for theming
  const themeVariables = `
    :root {
      --bg-primary: ${isDarkMode ? "#0a0c15" : "#ffffff"};
      --bg-secondary: ${isDarkMode ? "rgba(15,25,45,0.65)" : "#fefaf0"};
      --text-primary: ${isDarkMode ? "#eef2ff" : "#1e293b"};
      --text-secondary: ${isDarkMode ? "#94a3b8" : "#475569"};
      --border-color: ${isDarkMode ? "rgba(59,130,246,0.3)" : "#ffe6b3"};
      --card-bg: ${isDarkMode ? "rgba(15,25,45,0.5)" : "#ffffff"};
      --glass-bg: ${isDarkMode ? "rgba(15,25,45,0.65)" : "rgba(255,255,255,0.8)"};
      --accent-blue: ${isDarkMode ? "#3b82f6" : "#0a58ca"};
      --accent-yellow: ${isDarkMode ? "#fbbf24" : "#fbbf24"};
      --gradient: linear-gradient(135deg, var(--accent-blue), var(--accent-yellow));
    }
    body {
      background: var(--bg-primary);
      color: var(--text-primary);
      margin: 0;
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    }
    /* Responsive base styles */
    .section-padding {
      padding: 80px 48px;
    }
    .hero-padding {
      padding: 120px 48px 140px;
    }
    .stats-padding {
      padding: 40px 48px;
    }
    .navbar-padding {
      padding: 0 48px;
    }
    @media (max-width: 768px) {
      .section-padding {
        padding: 60px 24px !important;
      }
      .hero-padding {
        padding: 100px 24px 100px !important;
      }
      .stats-padding {
        padding: 30px 24px !important;
      }
      .navbar-padding {
        padding: 0 24px !important;
      }
      .about-flex {
        flex-direction: column !important;
        gap: 40px !important;
      }
      .vision-cards {
        gap: 16px !important;
      }
      .card-grid,
      .project-grid,
      .team-grid,
      .services-grid {
        grid-template-columns: 1fr !important;
      }
      .tech-stack-flex {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 12px !important;
      }
      .publication-tabs {
        flex-wrap: wrap !important;
        gap: 12px !important;
      }
      .publication-item {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 16px !important;
      }
      .publication-year {
        text-align: left !important;
        min-width: auto !important;
      }
      .hero-title {
        font-size: 2rem !important;
      }
      .hero-sub {
        font-size: 16px !important;
      }
      .stat-value {
        font-size: 32px !important;
      }
      .contact-grid {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }
      .logo-image {
        height: 60px !important;
        width: auto !important;
      }
    }
    @media (max-width: 480px) {
      .section-padding {
        padding: 48px 16px !important;
      }
      .hero-padding {
        padding: 80px 16px 80px !important;
      }
      .stats-padding {
        padding: 24px 16px !important;
      }
      .navbar-padding {
        padding: 0 16px !important;
      }
      .hero-title {
        font-size: 1.75rem !important;
      }
      .stat-value {
        font-size: 28px !important;
      }
      .stats-container {
        gap: 20px !important;
      }
    }
  `;

  // Inline styles using CSS variables
  const styles = {
    container: {
      background: "var(--bg-primary)",
      color: "var(--text-primary)",
      position: "relative",
      overflowX: "hidden",
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    },
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72,
      background: isDarkMode ? "rgba(10,12,21,0.85)" : "#ffffff",
      backdropFilter: isDarkMode ? "blur(12px)" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      borderBottom: `1px solid var(--border-color)`,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    },
    logoImage: {
      height: 50,
      width: "auto",
      objectFit: "contain",
      filter: isDarkMode ? "drop-shadow(0 0 4px #3b82f6)" : "none",
      transition: "height 0.3s",
    },
    navLink: {
      background: "none",
      border: "none",
      color: "var(--text-secondary)",
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 500,
      padding: 0,
      transition: "color 0.3s",
    },
    ctaButton: {
      background: "var(--gradient)",
      border: "none",
      color: isDarkMode ? "#0a0c15" : "#fff",
      padding: "8px 24px",
      borderRadius: 40,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 14,
      boxShadow: "0 0 12px rgba(59,130,246,0.5)",
      transition: "all 0.3s",
    },
    hamburger: {
      display: windowWidth <= 768 ? "flex" : "none",
      flexDirection: "column",
      justifyContent: "space-between",
      width: 24,
      height: 20,
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      zIndex: 1001,
    },
    hamburgerLine: {
      width: "100%",
      height: 2,
      background: "var(--accent-yellow)",
      transition: "all 0.3s",
      borderRadius: 2,
    },
    mobileMenu: {
      position: "fixed",
      top: 72,
      left: 0,
      right: 0,
      background: isDarkMode ? "rgba(10,12,21,0.95)" : "#ffffff",
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid var(--accent-blue)`,
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      zIndex: 999,
      transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
      transition: "transform 0.3s ease",
    },
    hero: {
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      background: isDarkMode ? "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.15), transparent 70%)" : "linear-gradient(135deg, #ffffff 0%, #fff9ed 50%, #eef4ff 100%)",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: 800,
      margin: "0 0 20px",
      lineHeight: 1.2,
      background: isDarkMode ? "linear-gradient(135deg, #ffffff, var(--accent-blue), var(--accent-yellow))" : "none",
      WebkitBackgroundClip: isDarkMode ? "text" : "initial",
      WebkitTextFillColor: isDarkMode ? "transparent" : "var(--text-primary)",
      color: isDarkMode ? "transparent" : "var(--text-primary)",
    },
    neonText: {
      display: "inline-block",
      background: "linear-gradient(135deg, var(--accent-blue), var(--accent-yellow))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    heroSub: {
      fontSize: 18,
      color: "var(--text-secondary)",
      maxWidth: 620,
      margin: "0 auto 40px",
      lineHeight: 1.75,
    },
    buttonPrimary: {
      background: "var(--gradient)",
      border: "none",
      color: "#fff",
      padding: "14px 32px",
      borderRadius: 40,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 15,
      boxShadow: "0 0 15px rgba(59,130,246,0.5)",
      transition: "all 0.3s",
    },
    buttonOutline: {
      background: "transparent",
      border: `1px solid var(--accent-blue)`,
      color: "var(--accent-yellow)",
      padding: "14px 32px",
      borderRadius: 40,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 15,
      transition: "all 0.3s",
      backdropFilter: "blur(4px)",
    },
    card: {
      background: "var(--card-bg)",
      backdropFilter: isDarkMode ? "blur(8px)" : "none",
      borderRadius: 24,
      padding: "26px 22px",
      border: `1px solid var(--border-color)`,
      transition: "all 0.3s",
      cursor: "default",
    },
    projectCard: {
      background: "var(--card-bg)",
      backdropFilter: isDarkMode ? "blur(8px)" : "none",
      borderRadius: 24,
      overflow: "hidden",
      border: `1px solid var(--border-color)`,
      transition: "all 0.3s",
    },
    input: {
      background: isDarkMode ? "rgba(10,12,21,0.6)" : "#fff",
      border: `1px solid var(--border-color)`,
      borderRadius: 12,
      padding: "12px 18px",
      color: "var(--text-primary)",
      fontSize: 14,
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      transition: "all 0.3s",
    },
    textarea: {
      background: isDarkMode ? "rgba(10,12,21,0.6)" : "#fff",
      border: `1px solid var(--border-color)`,
      borderRadius: 12,
      padding: "12px 18px",
      color: "var(--text-primary)",
      fontSize: 14,
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
    },
    section: {
      position: "relative",
      zIndex: 2,
    },
    sectionAlt: {
      background: isDarkMode ? "linear-gradient(135deg, rgba(10,12,21,0.9), rgba(20,30,50,0.9))" : "#fefaf0",
      position: "relative",
      zIndex: 2,
    },
    containerMax: {
      maxWidth: 1200,
      margin: "0 auto",
    },
    containerMedium: {
      maxWidth: 1000,
      margin: "0 auto",
    },
    statsBar: {
      background: isDarkMode ? "rgba(10,12,21,0.5)" : "#ffffff",
      borderTop: `1px solid var(--border-color)`,
      borderBottom: `1px solid var(--border-color)`,
    },
    statsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: 80,
      flexWrap: "wrap",
      maxWidth: 900,
      margin: "0 auto",
    },
    statValue: {
      fontSize: 42,
      fontWeight: 800,
      background: "var(--gradient)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: isDarkMode ? "0 0 10px rgba(59,130,246,0.3)" : "none",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: 24,
    },
  };

  return (
    <div style={styles.container}>
      <style>{themeVariables}</style>

      {/* NAVBAR */}
      <nav style={styles.navbar} className="navbar-padding">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="https://raw.githubusercontent.com/NovaTech-Innovate-Solutions/NovaTech-Innovate-Solutions.github.io/refs/heads/main/RnD%20(1).png"
            alt="NovaTech R&D Lab"
            style={styles.logoImage}
            className="logo-image"
          />
        </div>

        {/* Desktop Navigation */}
        {windowWidth > 768 && (
          <>
            <div style={{ display: "flex", gap: 32 }}>
              {NAV_LINKS.map(l => (
                <button
                  key={l}
                  onClick={() => scrollTo(l.toLowerCase())}
                  style={styles.navLink}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent-yellow)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                >
                  {l}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={toggleTheme} style={{ ...styles.ctaButton, background: "transparent", border: `1px solid var(--accent-yellow)`, boxShadow: "none", color: "var(--accent-yellow)" }}>
                {isDarkMode ? "☀️" : "🌙"}
              </button>
              <button
                onClick={() => window.open("https://wa.me/918336001208", "_blank")}
                style={styles.ctaButton}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Get in Touch
              </button>
            </div>
          </>
        )}

        {/* Mobile Hamburger */}
        {windowWidth <= 768 && (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={styles.hamburger}>
            <div style={styles.hamburgerLine} />
            <div style={styles.hamburgerLine} />
            <div style={styles.hamburgerLine} />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {windowWidth <= 768 && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              style={{ ...styles.navLink, textAlign: "left", padding: "8px 0", fontSize: 16, color: "var(--text-primary)" }}
            >
              {l}
            </button>
          ))}
          <button onClick={toggleTheme} style={{ ...styles.ctaButton, background: "transparent", border: `1px solid var(--accent-yellow)`, boxShadow: "none", color: "var(--accent-yellow)" }}>
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <button
            onClick={() => window.open("https://wa.me/918336001208", "_blank")}
            style={{ ...styles.ctaButton, width: "100%", marginTop: 8 }}
          >
            Get in Touch
          </button>
        </div>
      )}

      {/* HERO */}
      <section style={styles.hero} className="hero-padding">
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", zIndex: 2 }}>
          <div style={{ display: "inline-block", background: isDarkMode ? "rgba(59,130,246,0.2)" : "#fff0d0", border: `1px solid var(--accent-yellow)`, borderRadius: 40, padding: "6px 20px", fontSize: 13, color: "var(--accent-yellow)", marginBottom: 28, fontWeight: 500 }}>
            ⚡ Turning Ideas into Intelligent Systems
          </div>
          <h1 style={styles.heroTitle}>
            NovaTech Innovative Solutions<br />
            <span style={styles.neonText}>Research & Development Lab</span>
          </h1>
          <p style={styles.heroSub}>
            Bridging academic research and industrial deployment through AI, IoT, Robotics & Edge Intelligence — building systems that matter.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={styles.buttonPrimary}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 0 25px rgba(59,130,246,0.8)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 15px rgba(59,130,246,0.5)"; }}
            >
              Explore Projects →
            </button>
            <button
              onClick={() => scrollTo("publications")}
              style={styles.buttonOutline}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.2)"; e.currentTarget.style.borderColor = "var(--accent-yellow)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--accent-blue)"; }}
            >
              View Publications
            </button>
          </div>
        </div>
        <div style={{ position: "absolute", top: "-150px", right: "-150px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(59,130,246,0.2), transparent)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-150px", left: "-150px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(251,191,36,0.15), transparent)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      </section>

      {/* STATS BAR */}
      <section style={styles.statsBar} className="stats-padding">
        <div style={styles.statsContainer} className="stats-container">
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={styles.statValue}>{s.value}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section} className="section-padding">
        <div style={styles.containerMax}>
          <div style={{ display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap" }} className="about-flex">
            <div style={{ flex: "1 1 440px" }}>
              <div style={{ color: "var(--accent-yellow)", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>ABOUT THE LAB</div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 24, lineHeight: 1.3, color: "var(--text-primary)" }}>
                Engineering Intelligent Systems for Real-World Impact
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                NovaTech Innovative Solutions R&D Lab is a multidisciplinary research and engineering unit focused on developing
                intelligent, scalable, and practical technology solutions. Our work spans across artificial intelligence, embedded systems,
                IoT, robotics, and edge computing — with a strong emphasis on solving real-world problems in healthcare, disaster management,
                smart environments, and sustainable systems.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                Unlike purely academic labs, our approach is <strong style={{ color: "var(--accent-yellow)" }}>application-driven</strong>. We design systems end-to-end — from conceptual research
                and algorithm development to hardware prototyping and deployment. Projects such as AI-powered wearable systems, UAV-based
                communication networks, healthcare robotics, and computer vision platforms reflect our focus on bridging theory and implementation.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 15 }}>
                The lab actively contributes to the research community through publications, preprints, and technical reports, while also
                building deployable systems and collaborative solutions with academic institutions and industry partners. Our goal is to
                create technologies that are not only innovative, but also <strong style={{ color: "var(--accent-yellow)" }}>accessible, efficient, and impactful</strong> in real-world scenarios.
              </p>
            </div>
            <div style={{ flex: "1 1 360px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              {[
                ["🔬", "Applied Research Focus", "From AI models to hardware prototypes with real-world deployment goals"],
                ["📡", "Multi-Domain Expertise", "AI, IoT, UAV systems, robotics, TinyML, and smart infrastructure"],
                ["⚙️", "End-to-End Development", "Research → Design → Prototyping → Testing → Deployment"],
                ["📄", "Active Research Output", "Publications, preprints, and patents in emerging technology domains"],
              ].map(([icon, title, sub], i) => (
                <div
                  key={i}
                  style={styles.card}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "var(--accent-yellow)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border-color)"; }}
                >
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: "var(--accent-yellow)" }}>{title}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.5 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" style={styles.sectionAlt} className="section-padding">
        <div style={{ maxWidth: 1100, margin: "auto", textAlign: "center" }}>
          <div style={{ color: "var(--accent-yellow)", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>VISION & MISSION</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 48 }}>Built to Innovate. Designed to Empower.</h2>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", textAlign: "left" }} className="vision-cards">
            {[
              ["🎯", "Vision", "To become a globally recognized R&D lab creating impactful intelligent systems that solve complex real-world problems across healthcare, agriculture, environment, and industry."],
              ["🚀", "Mission", "To innovate relentlessly, publish rigorously, and deploy responsibly — empowering researchers, engineers, and organizations through cutting-edge technology and open collaboration."],
              ["💡", "Values", "Scientific Integrity · Open Collaboration · Sustainable Innovation · Inclusive Technology · Research Excellence"],
            ].map(([icon, title, desc], i) => (
              <div
                key={i}
                style={{ ...styles.card, flex: "1 1 280px", padding: 32 }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ color: "var(--accent-yellow)", fontWeight: 700, marginBottom: 12, fontSize: 18 }}>{title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: 14 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH DOMAINS */}
      <section id="research" style={styles.section} className="section-padding">
        <div style={styles.containerMax}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "var(--accent-yellow)", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>RESEARCH DOMAINS</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Core Areas of Investigation</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", fontSize: 15 }}>Our lab pursues research across eight interconnected domains, with projects often spanning multiple areas.</p>
          </div>
          <div style={styles.cardGrid} className="card-grid">
            {RESEARCH_DOMAINS.map((d, i) => (
              <div
                key={i}
                style={styles.card}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "var(--accent-yellow)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border-color)"; }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{d.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: "var(--accent-yellow)" }}>{d.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={styles.sectionAlt} className="section-padding">
        <div style={styles.containerMax}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: "var(--accent-yellow)", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>PROJECTS</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>What We're Building</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto 28px", fontSize: 15 }}>From early-stage research to deployed systems, explore our portfolio of intelligent technology projects.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: "6px 22px",
                    borderRadius: 40,
                    border: "1px solid",
                    borderColor: activeFilter === f ? "var(--accent-yellow)" : "var(--border-color)",
                    background: activeFilter === f ? "rgba(251,191,36,0.2)" : "transparent",
                    color: activeFilter === f ? "var(--accent-yellow)" : "var(--text-secondary)",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600,
                    transition: "all 0.2s",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 28 }} className="project-grid">
            {filteredProjects.map((p, i) => {
              const sc = statusColor(p.status);
              return (
                <div
                  key={i}
                  style={styles.projectCard}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ height: 6, background: `linear-gradient(90deg, ${p.color}, var(--accent-yellow))` }} />
                  <div style={{ padding: 28 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                      <span style={{ background: `${p.color}20`, color: p.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>{p.tag}</span>
                      <span style={{ background: sc.bg, color: sc.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>{p.status}</span>
                    </div>
                    <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 12, color: "var(--text-primary)" }}>{p.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {p.tech.map((t, j) => (
                        <span key={j} style={{ background: isDarkMode ? "rgba(59,130,246,0.15)" : "#f1f5f9", color: "var(--text-secondary)", fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 20 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS (Tabbed) */}
      <section id="publications" style={styles.section} className="section-padding">
        <div style={styles.containerMedium}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "var(--accent-yellow)", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>PUBLICATIONS</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Research Output</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>Peer-reviewed papers, conference proceedings, preprints, books, and patents.</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 40 }} className="publication-tabs">
            {[
              { id: "research", label: "📄 Research Papers" },
              { id: "books", label: "📚 Books" },
              { id: "patents", label: "⚖️ Patents" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setPubTab(tab.id)}
                style={{
                  padding: "8px 24px",
                  borderRadius: 40,
                  background: pubTab === tab.id ? "rgba(59,130,246,0.3)" : "transparent",
                  color: pubTab === tab.id ? "var(--accent-yellow)" : "var(--text-secondary)",
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backdropFilter: "blur(4px)",
                  border: pubTab === tab.id ? `1px solid var(--accent-yellow)` : `1px solid var(--border-color)`,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {filteredPublications().map((pub, i) => {
              const tc = typeColor(pub.type);
              return (
                <div
                  key={i}
                  style={{ ...styles.card, display: "flex", gap: 24, alignItems: "flex-start", padding: "22px 30px" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateX(8px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
                  className="publication-item"
                >
                  <div style={{ textAlign: "center", minWidth: 70 }} className="publication-year">
                    <div style={{ fontSize: 18, fontWeight: 800, color: "var(--accent-yellow)" }}>{pub.year}</div>
                    <span style={{ background: tc.bg, color: tc.color, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 30, marginTop: 6, display: "inline-block" }}>{pub.type}</span>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, lineHeight: 1.45, color: "var(--text-primary)" }}>{pub.title}</h4>
                    <div style={{ color: "var(--text-secondary)", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{pub.venue}</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: 12 }}>{pub.authors}</div>
                    {(pub.doi || pub.link) && (
                      <div style={{ marginTop: 8 }}>
                        {pub.doi && (
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-blue)", fontSize: 11, textDecoration: "none", borderBottom: `1px dashed var(--accent-yellow)` }}>
                            DOI: {pub.doi}
                          </a>
                        )}
                        {pub.link && (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-blue)", fontSize: 11, textDecoration: "none", borderBottom: `1px dashed var(--accent-yellow)`, marginLeft: pub.doi ? 16 : 0 }}>
                            View →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {filteredPublications().length === 0 && (
              <div style={{ textAlign: "center", color: "var(--text-secondary)", padding: 40 }}>No publications in this category yet.</div>
            )}
          </div>

          {/* Book highlight */}
          <div style={{ marginTop: 56, ...styles.card, display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", padding: 36 }}>
            <div style={{ fontSize: 56 }}>📘</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "var(--accent-yellow)", fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>UPCOMING BOOK</div>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 800, fontSize: 20, marginBottom: 12 }}>TinyML: Edge Intelligence for Smart Systems</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                A comprehensive guide covering TinyML fundamentals, edge AI deployment pipelines, neural network optimization, hardware acceleration, and real-world case studies across healthcare, agriculture, and industrial IoT.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["TinyML", "Edge AI", "Embedded ML", "MCU Deployment"].map((t, i) => (
                  <span key={i} style={{ background: "rgba(251,191,36,0.1)", color: "var(--accent-yellow)", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 30 }}>{t}</span>
                ))}
                <span style={{ background: "rgba(245,158,11,0.2)", color: "#f59e0b", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 30 }}>In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" style={styles.sectionAlt} className="section-padding">
        <div style={styles.containerMax}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "var(--accent-yellow)", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>TEAM</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>The Minds Behind the Research</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>An interdisciplinary team of engineers, scientists, and innovators.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 28 }} className="team-grid">
            {TEAM.map((m, i) => (
              <div
                key={i}
                style={{ ...styles.card, textAlign: "center", padding: 32 }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ width: 70, height: 70, borderRadius: "50%", margin: "0 auto 20px", background: "var(--gradient)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0a0c15", fontWeight: 800, fontSize: 20 }}>{m.avatar}</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 6, color: "var(--text-primary)" }}>{m.name}</h3>
                <div style={{ color: "var(--accent-yellow)", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{m.role}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: 12 }}>{m.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section} className="section-padding">
        <div style={styles.containerMax}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "var(--accent-yellow)", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>SERVICES</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>How We Can Work Together</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", fontSize: 15 }}>From consulting to full development, we partner with organizations at every stage of their innovation journey.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }} className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                style={{ ...styles.card, padding: 32 }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ fontSize: 34, marginBottom: 18 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: "var(--accent-yellow)" }}>{s.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={styles.sectionAlt} className="section-padding">
        <div style={{ maxWidth: 1000, margin: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "var(--accent-yellow)", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>LAB INFRASTRUCTURE</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)" }}>Lab Infrastructure & Technology Stack</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {TECH_STACK.map((cat, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap", borderBottom: `1px solid var(--border-color)`, paddingBottom: 16 }} className="tech-stack-flex">
                <div style={{ minWidth: 150, color: "var(--accent-yellow)", fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>{cat.cat.toUpperCase()}</div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {cat.items.map((t, j) => (
                    <span key={j} style={{ background: isDarkMode ? "rgba(15,25,45,0.6)" : "#fff", border: `1px solid var(--border-color)`, color: "var(--text-secondary)", fontSize: 13, fontWeight: 500, padding: "6px 16px", borderRadius: 40 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" style={{ padding: "80px 48px", background: "var(--gradient)", textAlign: "center", marginTop: 4, position: "relative", overflow: "hidden" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 20 }}>Ready to Collaborate? 🚀</h2>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 17, maxWidth: 560, margin: "0 auto 36px" }}>
          Whether you're a researcher, startup, or enterprise — let's build something extraordinary together.
        </p>
        <button
          onClick={() => window.open("https://wa.me/918336001208", "_blank")}
          style={{ ...styles.ctaButton, background: "#fff", color: "#0a58ca", boxShadow: "0 6px 14px rgba(0,0,0,0.1)" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Start a Conversation →
        </button>
      </section>
    </div>
  );
}
