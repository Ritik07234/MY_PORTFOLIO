import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import "./Navbar.css"; // Import the CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 100; // Adjust this value based on your navbar height
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close the hamburger menu
  };

  return (
    <nav className="navbar">
      {/* Your Name */}
      <div className="username">Ritik Kumar Singh</div>

      {/* Navigation Links */}
      <ul className={`navList ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={(e) => handleClick(e, "header")}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleClick(e, "about")}>About</a></li>
        <li><a href="#education" onClick={(e) => handleClick(e, "education")}>Education</a></li>
        <li><a href="#projects" onClick={(e) => handleClick(e, "projects")}>Projects</a></li>
        <li><a href="#skills" onClick={(e) => handleClick(e, "skills")}>Skills</a></li>
        <li><a href="#certificates" onClick={(e) => handleClick(e, "certificates")}>Certificates</a></li>
        <li><a href="#contact" onClick={(e) => handleClick(e, "contact")}>Contact</a></li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
