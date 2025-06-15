import { useState, useRef, useLayoutEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navListRef = useRef(null); // Ref for whole nav list

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 100;
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      navListRef.current,
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 1,
      }
    );
  }, []);

  return (
    <nav className="navbar">
      <div className="username">Ritik Kumar Singh</div>

      <ul className={`navList ${isOpen ? "active" : ""}`} ref={navListRef}>
        {["home", "about", "education", "projects", "skills", "certificates", "contact"].map(
          (id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => handleClick(e, id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
