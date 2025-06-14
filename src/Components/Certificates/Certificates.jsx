import { useEffect, useState } from "react";
import { SiCoursera } from "react-icons/si";
import { SiInfosys } from "react-icons/si";
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
        {/* Infosys Springboard Certifications */}
        <div className="certificateCard">
          <SiInfosys className="certificateIcon infosysIcon" />
          <h3>Infosys Springboard</h3>
          <br />
          <ul>
            <li>Python Foundation</li>
            <li>TechA Web Development using HTML & CSS</li>
            <li>TechA Salesforce</li>
          </ul>
          <a href="path/to/infosys-certificate.pdf" target="_blank" rel="noopener noreferrer">
            <button className="viewCertificateBtn">View Certificate</button>
          </a>
        </div>

        {/* Coursera Certification */}
        <div className="certificateCard">
          <SiCoursera className="certificateIcon courseraIcon" />
          <h3>Coursera</h3>
          <br />
          <ul>
            <li>HTML, CSS, and JavaScript for Web Developers</li>
          </ul>
          <a href="path/to/coursera-certificate.pdf" target="_blank" rel="noopener noreferrer">
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
