import React, { useState } from "react";

const styles = {
  section: {
    backgroundColor: "#ffffff",
    padding: "60px 20px",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#004aad", // Deep Blue
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "40px",
  },
  aboutList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#f9f9f9",
    border: "2px solid #ffd700", // Yellow border
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "70px",
    height: "70px",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#004aad",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "15px",
    color: "#555",
  },
  // Modal styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "600px",
    textAlign: "center",
  },
  modalImage: {
    maxWidth: "100%",
    borderRadius: "10px",
  },
  closeBtn: {
    marginTop: "15px",
    padding: "8px 16px",
    backgroundColor: "#004aad",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      title: "Smart T-Shirt with IoT",
      img: "https://img.icons8.com/ios/100/t-shirt.png",
      desc: "Wearable tech for health monitoring with GPS, SpO2, temperature sensors, and SOS system.",
    },
    {
      title: "University Management System",
      img: "https://img.icons8.com/ios/100/graduation-cap.png",
      desc: "Java-based software to manage students, results, attendance, and course data for institutions.",
    },
    {
      title: "Restaurant Management (MERN)",
      img: "https://img.icons8.com/ios/100/restaurant.png",
      desc: "Full-stack web app for order processing, menu updates, reservations, and billing.",
    },
    {
      title: "AI Voice Robot",
      img: "https://img.icons8.com/ios/100/robot-2.png",
      desc: "Interactive robot with speech, facial recognition, handshake, and mobile control.",
    },
    {
      title: "LoRa Disaster UAV System",
      img: "https://img.icons8.com/ios/100/drone.png",
      desc: "Emergency UAV system using LoRa mesh for real-time communication in disaster zones.",
    },
    {
      title: "Smart Agriculture Kit",
      img: "https://img.icons8.com/ios/100/plant-under-sun.png",
      desc: "IoT-based farming solution with soil moisture sensors and automated irrigation.",
    },
    {
      title: "Internship Training Portal",
      img: "https://img.icons8.com/ios/100/classroom.png",
      desc: "Web app to manage internships, mentor assignments, and progress tracking.",
    },
    {
      title: "Embedded Hardware Projects",
      img: "https://img.icons8.com/ios/100/electronics.png",
      desc: "Custom microcontroller projects: robotics, automation, IoT, sensors, solar, etc.",
    },
    {
      title: "TinyML Medical Alert System",
      img: "https://img.icons8.com/ios/100/heart-monitor.png",
      desc: "Edge AI-enabled wearable health monitoring with anomaly detection and alerts.",
    },
    {
      title: "E-Commerce & Mobile Apps",
      img: "https://img.icons8.com/ios/100/online-store.png",
      desc: "Custom e-commerce websites and mobile applications for startups & businesses.",
    },
    {
      title: "Industrial Automation",
      img: "https://img.icons8.com/ios/100/factory.png",
      desc: "Smart PLC and IoT-based industrial systems for automation and monitoring.",
    },
    {
      title: "Research Thesis & Papers",
      img: "https://img.icons8.com/ios/100/books.png",
      desc: "Support for research projects, thesis writing, simulations, and publications.",
    },
    {
      title: "Final Year Student Projects",
      img: "https://img.icons8.com/ios/100/student-male.png",
      desc: "Complete project development for engineering, computer science, and IT students.",
    },
    {
      title: "Smart Home Automation",
      img: "https://img.icons8.com/ios/100/smart-home-connection.png",
      desc: "IoT-based smart home systems with mobile app control for appliances and security.",
    },
    {
      title: "Drone Surveillance & Mapping",
      img: "https://img.icons8.com/ios/100/airplane-take-off.png",
      desc: "UAV-based solutions for aerial photography, mapping, and security surveillance.",
    },
  ];

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <h2 style={styles.title}>What We Do</h2>
        <p style={styles.text}>
          At <strong>NovaTech Innovative Solutions</strong>, we build powerful, practical, and affordable{" "}
          <strong>software & hardware solutions</strong> — ranging from IoT, AI, robotics, automation, and
          web apps to full-fledged industrial and academic projects. Our goal is to bring innovation into
          real-world applications for students, startups, and enterprises.
        </p>

        <div style={styles.aboutList}>
          {products.map((product, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => setSelectedImage(product.img)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img src={product.img} alt={product.title} style={styles.image} />
              <h3 style={styles.cardTitle}>{product.title}</h3>
              <p style={styles.cardText}>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent}>
            <img src={selectedImage} alt="Preview" style={styles.modalImage} />
            <button
              style={styles.closeBtn}
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
