import React from 'react';

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f9f9fb",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#222",
  },
  text: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputWrapper: {
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "0.95rem",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    resize: "vertical",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "14px 20px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #007bff, #0056b3)",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    background: "linear-gradient(90deg, #0056b3, #004494)",
  },
};

const Contact = () => {
  return (
    <section style={styles.section} id="contact">
      <div style={styles.container}>
        <div>
          <h2 style={styles.title}>Let’s Build Something Great Together</h2>
          <p style={styles.text}>
            Have a project in mind or just want to say hello? We’re excited to hear from you! 
            Fill out the form below or reach us through the contact details.
          </p>
        </div>

        <form style={styles.form}
        action="https://docs.google.com/forms/d/1Z5UN_RCFAV1hdX7gVK2Pj8TiJzTuFK0zOgxCAflycRE/formResponse"
                method="POST"
                target="_blank"
                >
          <div style={styles.inputWrapper}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input type="text" id="name" name="entry.1345170053" placeholder="Your full name" style={styles.input} required />
          </div>

          <div style={styles.inputWrapper}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input type="email" id="email" name="entry.585538982" placeholder="Your email address" style={styles.input} required />
          </div>

          <div style={styles.inputWrapper}>
            <label htmlFor="subject" style={styles.label}>Subject</label>
            <input type="text" id="subject" name="entry.1831426345" placeholder="Subject of your message" style={styles.input} required />
          </div>

          <div style={styles.inputWrapper}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea id="message" name="entry.1659687318" placeholder="Write your message..." rows="6" style={styles.textarea} required></textarea>
          </div>

          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
