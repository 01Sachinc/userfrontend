import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="contact-page" id="contact">
      <div className="contact-container">

        {/* INFO SECTION */}
        <h2 className="contact-title">Get In Touch</h2>

        <div className="contact-info">
          <p>📞 <span>+91 9XXXXXXXXX</span></p>
          <p>📧 <span>cssachin83@gmail.com</span></p>
          <p>🔗 <a href="https://github.com/SachinSomannachar" target="_blank">GitHub</a></p>
          <p>💼 <a href="https://linkedin.com/in/sachin" target="_blank">LinkedIn</a></p>
        </div>

        {/* BUTTON */}
        {!showForm && (
          <button className="message-btn" onClick={() => setShowForm(true)}>
            Message Me
          </button>
        )}

        {/* SIGNUP / MESSAGE FORM */}
        {showForm && (
          <form className="contact-form">
            <h3 className="form-title">Send a Message</h3>

            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}

        {/* FOOTER */}
        <div className="contact-footer">
          © {new Date().getFullYear()} Sachin Somannachar · All Rights Reserved
        </div>

      </div>
    </section>
  );
}
