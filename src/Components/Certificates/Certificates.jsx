import { useEffect, useState } from "react";
import { SiUdemy } from "react-icons/si";
import "./Certificates.css";

const Certificates = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200);
  }, []);

  return (
    <section id="certificates" className={`certificates ${fadeIn ? "fade-in" : ""}`}>
      <h2 className="title">Certificates</h2>
      
      <div className="certificateGrid">
        <div className="certificateCard">
          <SiUdemy className="certificateIcon infosysIcon" />
          <h3>Udemy Web Development Course</h3>
          <br />
          <ul>
            <li>HTML5, CSS3, and JavaScript</li>
            <li>Web Development using HTML & CSS</li>
          </ul>
          <a href="https://www.udemy.com/certificate/UC-f01575f0-de26-4286-b1a4-a91c2ee3c502/" target="_blank" rel="noopener noreferrer">
            <button className="viewCertificateBtn">View Certificate</button>
          </a>
        </div>

        {/* Coursera Certification */}
        <div className="certificateCard">
          <SiUdemy className="certificateIcon courseraIcon" />
          <h3>Udemy Java Course</h3>
          <br />
          <ul>
            <li>Learn Java Programming</li>
          </ul>
          <a href="https://www.udemy.com/certificate/UC-0c36229e-8bbc-4198-b4ea-538f0b5f3549/" target="_blank" rel="noopener noreferrer">
            <button className="viewCertificateBtn">View Certificate</button>
          </a>
        </div>
      </div>
      <br />
      <hr />
    </section>
  );
};

export default Certificates;
