import "./footer.css";

export default function ContactFooter() {
  return (
    <footer className="footer">
      <h3>Get In Touch</h3>

      <form className="footer-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="footer-info">
        <p>📧 cssachin83@gmail.com</p>
        <p>📞 +91 9XXXXXXXXX</p>
        <p>© {new Date().getFullYear()} Sachin Somannachar</p>
      </div>
    </footer>
  );
}
