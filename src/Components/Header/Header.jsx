import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import profilePic from "../../assets/ritik.jpg";

const Header = () => {
  return (
    <header id="header" className="header">
      {/* Profile Picture */}
      <div className="profileContainer">
        <img src={profilePic} alt="Kamesh P" className="profilePic" />
        <h1 className="name">RITIK KUMAR SINGH</h1>
        <h2 className="tagline">Full-Stack Developer | Problem Solver</h2>
      </div>

      {/* Social Media Links */}
      <div className="socialLinks">
        <a href="https://github.com/Ritik07234" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="icon github" />
        </a>
        <a href="https://www.linkedin.com/in/ritik-kumar-singh-877b032a7/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://leetcode.com/u/Ritiksingh07234/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <SiLeetcode className="icon leetcode" />
        </a>
      </div>

      {/* Resume & Contact Buttons */}
      <div className="buttons">
        <a href="/src/assets/resume.pdf" download className="resumeButton"> Resume</a>
        <a href="ritiksingh07234@gmail.com" className="contactButton">Contact Me</a>
      </div>
    </header>
  );
};

export default Header;
