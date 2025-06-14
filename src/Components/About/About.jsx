import "./About.css";
import profilePic from "../../assets/ritik.jpg"; // Your profile image
import aboutimg from "../../assets/aboutimg.jpg"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-wrapper">
        {/* Left Section - Image & Name */}
        <div className="about-image-card">
          <img src={profilePic} alt="Ritik" className="profile-pic" />
          <h2 className="about-name">RITIK KUMAR SINGH</h2>
          <p className="about-role">FULL STACK DEVELOPER</p>
        </div>

        {/* Middle Section - About Content */}
        <div className="about-content">
          <h2 className="about-title">ABOUT ME</h2>
          <p className="about-text">
            🚀 Passionate about <span>Full Stack Development</span> and building dynamic, high-performance web applications.
          </p>
          <p className="about-text">
            💡 Love problem-solving, exploring <span>cutting-edge technologies</span>, and constantly enhancing my skills.
          </p>
          <p className="about-text">
            🔥 Excited to work on challenging projects and create impactful digital experiences.
          </p>
        </div>

        {/* Right Section - GIF */}
        <div className="about-gif-card">
          <img src={aboutimg} alt="Developer Animation" className="profile-gif" />
        </div>
      </div>
    </section>
  );
};

export default About;
