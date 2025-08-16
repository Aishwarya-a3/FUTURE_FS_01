import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you’d like to connect, feel free to use the details below.</p>

        {/* Contact Details */}
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:aishwaryabhandari282@gmail.com">
              aishwaryabhandari282@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/aishwarya-bhandari-273b8933"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
