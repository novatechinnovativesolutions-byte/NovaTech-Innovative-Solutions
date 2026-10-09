import React from "react";

/* NovaTech IS — Contact page, styled with the same design system as Home, About and Solutions.
   Form fields and Google Form entry IDs are unchanged. */

const T = { navy: "#07091c", blue: "#1346e8", blueLight: "#e8effe", yellow: "#f5c518", off: "#f7f8fc", border: "#e4e8f0", text: "#111827", muted: "#5b6472", head: "'Syne', sans-serif", body: "'DM Sans', sans-serif" };

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
.ct *,.ct *::before,.ct *::after{box-sizing:border-box}
.ct{font-family:${T.body};color:${T.text};line-height:1.65}
.ct :focus-visible{outline:3px solid ${T.yellow};outline-offset:3px}
.ct-hero{background:linear-gradient(135deg,#eef3ff,#fff 62%);border-bottom:1px solid ${T.border};padding:72px 5% 64px;position:relative;overflow:hidden;text-align:center}
.ct-hero::before{content:"";position:absolute;inset:0 auto 0 0;width:8px;background:linear-gradient(${T.blue},${T.yellow})}
.ct-badge{display:inline-block;background:${T.blueLight};border:1px solid #c2d0f8;border-radius:100px;padding:5px 14px;font-size:.8rem;font-weight:700;color:${T.blue};margin-bottom:18px}
.ct-title{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.9rem,3.6vw,3rem);line-height:1.12;letter-spacing:-.03em;margin:0 auto 16px;max-width:760px}
.ct-title em{font-style:normal;background:linear-gradient(90deg,${T.blue},#6a8cff);-webkit-background-clip:text;background-clip:text;color:transparent}
.ct-text{color:${T.muted};font-weight:300;font-size:1.05rem;max-width:620px;margin:0 auto}
.ct-sec{background:${T.off};padding:64px 5% 88px}
.ct-wrap{max-width:1000px;margin:auto;background:#fff;border:1px solid ${T.border};border-top:5px solid ${T.blue};border-radius:22px;padding:44px;box-shadow:0 18px 50px rgba(19,70,232,.08)}
.ct-form{display:flex;flex-direction:column;gap:20px}
.ct-row{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.ct-field{text-align:left}
.ct-label{display:block;font-family:${T.head};font-size:.88rem;font-weight:700;margin-bottom:8px;color:${T.navy}}
.ct-input,.ct-textarea{width:100%;padding:13px 16px;border-radius:10px;border:1px solid ${T.border};background:${T.off};font:inherit;font-size:1rem;color:${T.text};transition:border-color .2s,box-shadow .2s,background .2s}
.ct-textarea{resize:vertical;min-height:150px}
.ct-input::placeholder,.ct-textarea::placeholder{color:#9aa3b2}
.ct-input:focus,.ct-textarea:focus{outline:none;background:#fff;border-color:${T.blue};box-shadow:0 0 0 4px rgba(19,70,232,.12)}
.ct-btn{align-self:flex-start;padding:14px 32px;border:none;border-radius:8px;background:${T.yellow};color:${T.navy};font-family:${T.head};font-weight:700;font-size:1rem;cursor:pointer;transition:transform .15s,box-shadow .2s}
.ct-btn:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(245,197,24,.4)}
.ct-note{margin-top:24px;font-size:.88rem;color:${T.muted}}
@media(max-width:700px){.ct-row{grid-template-columns:1fr}.ct-wrap{padding:28px 22px}.ct-btn{width:100%;text-align:center}}
@media(prefers-reduced-motion:reduce){.ct *{transition:none!important}}
`;

const Contact = () => (
  <main className="ct" id="contact">
    <style>{CSS}</style>

    <section className="ct-hero" aria-labelledby="ct-h">
      <p className="ct-badge">Free consultation</p>
      <h1 className="ct-title" id="ct-h">Let’s Build <em>Something Great</em> Together</h1>
      <p className="ct-text">
        Have a project in mind or just want to say hello? We’re excited to hear from you!
        Fill out the form below or reach us through the contact details.
      </p>
    </section>

    <section className="ct-sec" aria-label="Contact form">
      <div className="ct-wrap">
        <form
          className="ct-form"
          action="https://docs.google.com/forms/d/1Z5UN_RCFAV1hdX7gVK2Pj8TiJzTuFK0zOgxCAflycRE/formResponse"
          method="POST"
          target="_blank"
          aria-label="Contact NovaTech Innovative Solutions"
        >
          <div className="ct-row">
            <div className="ct-field">
              <label htmlFor="name" className="ct-label">Full Name</label>
              <input type="text" id="name" name="entry.1345170053" placeholder="Your full name" className="ct-input" autoComplete="name" required />
            </div>
            <div className="ct-field">
              <label htmlFor="email" className="ct-label">Email Address</label>
              <input type="email" id="email" name="entry.585538982" placeholder="Your email address" className="ct-input" autoComplete="email" required />
            </div>
          </div>

          <div className="ct-field">
            <label htmlFor="subject" className="ct-label">Subject</label>
            <input type="text" id="subject" name="entry.1831426345" placeholder="Subject of your message" className="ct-input" required />
          </div>

          <div className="ct-field">
            <label htmlFor="message" className="ct-label">Message</label>
            <textarea id="message" name="entry.1659687318" placeholder="Write your message..." rows="6" className="ct-textarea" required />
          </div>

          <button type="submit" className="ct-btn">Send Message</button>
        </form>
        <p className="ct-note">We reply within 24 hours with a clear plan, timeline and pricing. No commitment required.</p>
      </div>
    </section>
  </main>
);

export default Contact;