import React from 'react';

const styles = {
  section: {
    backgroundColor: '#ffffff',
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#004aad',
    textAlign: 'center',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#333',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '50px',
  },
  perksTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: '20px',
    textAlign: 'center',
  },
  perksList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    listStyle: 'none',
    padding: 0,
    marginBottom: '50px',
  },
  perkItem: {
    backgroundColor: '#f9f9f9',
    border: '2px solid #ffd700',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
  },
  perkIcon: {
    fontSize: '30px',
    color: '#004aad',
    marginBottom: '10px',
  },
  perkTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: '10px',
  },
  perkText: {
    fontSize: '14px',
    color: '#555',
  },
  jobTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#004aad',
    textAlign: 'center',
    marginBottom: '20px',
  },
  jobList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '50px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  jobCard: {
    backgroundColor: '#f9f9f9',
    border: '2px solid #ffd700',
    borderRadius: '12px',
    padding: '20px',
  },
  jobCardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: '8px',
  },
  jobType: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#666',
    marginBottom: '10px',
  },
  jobDesc: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '15px',
  },
  jobButton: {
    backgroundColor: '#004aad',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  formSection: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  formTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: '10px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '12px',
    border: '2px solid #ffd700',
  },
  inputWrapper: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    resize: 'none',
  },
  submitButton: {
    backgroundColor: '#ffd700',
    color: '#004aad',
    fontWeight: 'bold',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

const Career = () => {
  return (
    <section style={styles.section} id="career">
      <div style={styles.container}>

        {/* Hero */}
        <div>
          <h2 style={styles.title}>Join NovaTech Innovative Solutions</h2>
          <p style={styles.text}>
            At NovaTech, we’re on a mission to build tech that empowers innovation. We love creators, problem-solvers, and forward-thinkers. If that’s you, we’d love to have you!
          </p>
        </div>

        {/* Perks & Benefits */}
        <div>
          <h3 style={styles.perksTitle}>Why Work With Us?</h3>
          <ul style={styles.perksList}>
            <li style={styles.perkItem}>
              <div style={styles.perkIcon}>💼</div>
              <h4 style={styles.perkTitle}>Flexible Work</h4>
              <p style={styles.perkText}>Work remotely or in our collaborative spaces — whatever suits your productivity.</p>
            </li>
            <li style={styles.perkItem}>
              <div style={styles.perkIcon}>💡</div>
              <h4 style={styles.perkTitle}>Real Innovation</h4>
              <p style={styles.perkText}>From AI to IoT and robotics, we build future-ready solutions that matter.</p>
            </li>
            <li style={styles.perkItem}>
              <div style={styles.perkIcon}>🚀</div>
              <h4 style={styles.perkTitle}>Career Growth</h4>
              <p style={styles.perkText}>We believe in mentoring, upskilling, and growing our team into leaders.</p>
            </li>
            <li style={styles.perkItem}>
              <div style={styles.perkIcon}>🏆</div>
              <h4 style={styles.perkTitle}>Recognition & Rewards</h4>
              <p style={styles.perkText}>Your work is appreciated. Get recognized with monthly and yearly awards.</p>
            </li>
          </ul>
        </div>

        {/* Job Openings */}
        <div>
          <h3 style={styles.jobTitle}>Current Openings</h3>
          <ul style={styles.jobList}>
            {[
              {
                title: "Frontend Developer (React.js)",
                type: "Full-time · Remote",
                desc: "Looking for a frontend wizard with a solid grasp of React, Tailwind, and UI/UX design principles.",
              },
              {
                title: "Embedded Systems Engineer",
                type: "Internship · Onsite",
                desc: "Experience with Arduino, ESP32, sensors, PCB design. Good understanding of C/C++ is a plus.",
              },
              {
                title: "AI/ML Intern (TinyML focus)",
                type: "Internship · Remote",
                desc: "Build real-time machine learning models with edge devices and microcontrollers.",
              },
              {
                title: "Full Stack Developer (MERN)",
                type: "Internship· Remote",
                desc: "Responsible for building scalable web apps, REST APIs, and database design.",
              }
            ].map((job, idx) => (
              <li style={styles.jobCard} key={idx}>
  <h4 style={styles.jobCardTitle}>{job.title}</h4>
  <p style={styles.jobType}>{job.type}</p>
  <p style={styles.jobDesc}>{job.desc}</p>

  <button
    style={styles.jobButton}
    onClick={() =>
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdHFGsNoxpp20TcTajqqk-uulbh28AbRTz6Azc_6xXKQ_8hkA/viewform?usp=header",
        "_blank"
      )
    }
  >
    Apply Now
  </button>
</li>

            ))}
          </ul>
        </div>

        {/* Application Form */}
        <div style={styles.formSection}>
          <h3 style={styles.formTitle}>Didn't see a role that fits?</h3>
          <p style={styles.text}>We're always looking for passionate people. Drop your details below and we'll get in touch.</p>
          
          <form
            style={styles.form}
            action="https://docs.google.com/forms/d/e/1FAIpQLSdH2us1hXf6MfUBZ1gkT7zJrw7Z_PAsKWUo_BeQRULTEQrFBg/formResponse"
            method="POST"
            target="_blank"
          >
            <div style={styles.inputWrapper}>
              <label style={styles.label} htmlFor="name">Name</label>
              <input style={styles.input} type="text" id="name" name="entry.1983109433" required placeholder="Your name" />
            </div>
            <div style={styles.inputWrapper}>
              <label style={styles.label} htmlFor="email">Email</label>
              <input style={styles.input} type="email" id="email" name="entry.82239818" required placeholder="Your email" />
            </div>
            <div style={styles.inputWrapper}>
              <label style={styles.label} htmlFor="position">Position Interested In</label>
              <input style={styles.input} type="text" id="position" name="entry.1847713063" placeholder="e.g., IoT Engineer" />
            </div>
            <div style={styles.inputWrapper}>
              <label style={styles.label} htmlFor="message">Tell us about yourself</label>
              <textarea style={styles.textarea} id="message" name="entry.733764616" rows="4" required placeholder="Why do you want to work with us?"></textarea>
            </div>
            <button type="submit" style={styles.submitButton}>Submit Application</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Career;
