import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200);
  }, []);

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_wa98fh7",       // ✅ Tumhara Service ID
      "template_tec5cpp",      // ✅ Tumhara Template ID
      e.target,
      "HHpcMatoO5qGbOZcB"      // ✅ Tumhara Public (User) Key
    )
    .then(
      (result) => {
        alert("Message sent successfully ✅");
      },
      (error) => {
        alert("Failed to send ❌");
        console.error(error.text);
      }
    );

  e.target.reset(); // Clear form
};


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
        <form className="contactForm" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
