import "./Projects.css";
import { MdLiveTv } from "react-icons/md";
import project1Image from "../../assets/project1.jpeg";
import project2Image from "../../assets/project2.png";
import project3Image from "../../assets/ud.png";

const Projects = () => {
  const projects = [
    {
      title: "Animation + Smooth Scroll using Gsap",
      description: "An interactive web project featuring smooth scroll animations using GSAP and Locomotive Scroll for enhanced user experience.",
      image: project1Image,
      github: "https://boisterous-gelato-e8d8de.netlify.app/"
    },
    {
      title: "# React E-Commerce App",
      description: "I developed a modern and responsive E-Commerce web application using Core React.js and Tailwind CSS.  It features dynamic product listings, cart management, and a smooth checkout experience using REST APIs.  The site is optimized for all screen sizes and ensures a clean, fast user experience.  It also includes product filtering, search functionality, and minimal UI design.",
      image: project2Image,
      github: "https://sage-belekoy-4bed69.netlify.app/"
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="title">Projects</h2>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div className={`projectItem ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="projectImageContainer">
              <img src={project.image} alt={project.title} className="projectImage" />
            </div>
            <div className="projectContent">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} className="githubLink" target="_blank" rel="noopener noreferrer">
                <MdLiveTv className="githubIcon" /> View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <br/><br/><hr/>
    </section>
  );
};

export default Projects;
