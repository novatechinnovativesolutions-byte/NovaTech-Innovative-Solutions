import React from "react";

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#004aad", // Deep Blue
    marginBottom: "20px",
  },
  sectionText: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  featuresList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    listStyle: "none",
    padding: 0,
  },
  featureItem: {
    backgroundColor: "#f9f9f9",
    border: "2px solid #ffd700", // Yellow border
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  featureImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  featureTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#004aad",
    marginBottom: "10px",
  },
  featureText: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.5",
  },
  ceoSection: {
    marginTop: "60px",
    padding: "40px",
    backgroundColor: "#f0f8ff",
    border: "2px solid #ffd700",
    borderRadius: "12px",
    textAlign: "left",
  },
  ceoMessage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  ceoImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "4px solid #004aad",
  },
  ceoText: {
    flex: 1,
  },
  ceoName: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#004aad",
    marginBottom: "10px",
  },
  ceoPara: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
};

const AboutUs = () => {
  const features = [
    {
      image: "https://www.shutterstock.com/image-vector/contact-us-flat-vector-illustration-600nw-1526514758.jpg",
      title: "Personal & Company Websites",
      text: "We design modern, responsive websites for individuals, startups, and companies to establish a strong online presence.",
    },
    {
      image: "https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_52683-75727.jpg?semt=ais_items_boosted&w=740",
      title: "Student Final Year Projects",
      text: "We support students with real-world final year projects in software, hardware, IoT, AI, robotics, and embedded systems.",
    },
    {
      image: "https://img.freepik.com/free-vector/website-setup-landing-page-concept_52683-27007.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Industry level Projects",
      text: "We deliver end-to-end industrial automation projects and assist in desging and prototypes for start a company.",
    },
    {
      image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
      title: "Software & Hardware Solutions",
      text: "From mobile apps and desktop tools to embedded hardware and IoT devices, we provide tailored tech solutions.",
    },
    {
      image: "https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150316925.jpg",
      title: "Research & Thesis Support",
      text: "We guide students and professionals in research thesis, papers, and innovative ideas with practical implementation.",
    },
    {
      image: "https://img.freepik.com/free-vector/internship-job-training-illustration_23-2148751280.jpg",
      title: "Mentorship & Training",
      text: "We mentor students and professionals with hands-on training, workshops, and internship opportunities.",
    },
  ];

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.sectionText}>
          At <strong>NovaTech Innovative Solutions</strong>, we specialize in providing
          end-to-end solutions for students, professionals, and industries. Whether
          it’s a personal website, academic project, industrial prototype, or research
          thesis, we transform ideas into impactful technology.
        </p>

        <ul style={styles.featuresList}>
          {features.map((feature, index) => (
            <li
              key={index}
              style={styles.featureItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={feature.image}
                alt={feature.title}
                style={styles.featureImage}
              />
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureText}>{feature.text}</p>
            </li>
          ))}
        </ul>

        {/* CEO Message Section */}
        <div style={styles.ceoSection}>
          <h2 style={styles.sectionTitle}>Message from the Founder & CEO</h2>
          <div style={styles.ceoMessage}>
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGGZ-v9U2nylA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728062431795?e=2147483647&v=beta&t=8ThumINCZb8nZ_zUCkzyWH0elH5hdIrbsayRk-8sc5c"
              alt="Chandramouli Haldar"
              style={styles.ceoImage}
            />
            <div style={styles.ceoText}>
              <h3 style={styles.ceoName}>Chandramouli Haldar</h3>
              <p style={styles.ceoPara}>
                At NovaTech, our mission is to empower students, startups, and industries
                with innovative solutions that merge creativity, technology, and education.
              </p>
              <p style={styles.ceoPara}>
                From final year projects to large-scale industrial solutions, our goal is
                to bridge the gap between academia and the real world, ensuring every idea
                finds its place in innovation.
              </p>
              <p style={styles.ceoPara}>
                <strong>“Your ideas, our innovation — together we build the future.”</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
