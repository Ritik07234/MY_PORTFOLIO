import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200);
  }, []);

  return (
    <section id="contact" className={`contact ${fadeIn ? "fade-in" : ""}`}>
      <h2 className="title">Contact Me</h2>
      <div className="contactSplit">
        {/* Left: Contact Info */}
        <div className="contactInfo">
          <p className="introText">
              I’m always excited to connect! Whether you want to collaborate, ask questions, or just say hi, feel free to reach out.
          </p>
          <div className="contactItem">
            <FaEnvelope className="contactIcon emailIcon" />
            <p>
              Email:{" "}
              <a href="mailto:ritiksingh07234@gmail.com">
                ritiksingh07234@gmail.com
              </a>
            </p>
          </div>
          <div className="contactItem">
            <FaPhoneAlt className="contactIcon phoneIcon" />
            <p>
              Phone: <a href="tel:+7909093448">7909093448</a>
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
