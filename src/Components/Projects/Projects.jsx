import "./Projects.css";
import { MdLiveTv } from "react-icons/md";
import project1Image from "../../assets/ud.png";
import project2Image from "../../assets/project2.jpeg";
import project3Image from "../../assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Animation + Smooth Scroll using Gsap",
      description: "An interactive web project featuring smooth scroll animations using GSAP and Locomotive Scroll for enhanced user experience.",
      image: project2Image,
      github: "https://boisterous-gelato-e8d8de.netlify.app/"
    },
    {
      title: "Streaming UI Project",
      description: "I developed a responsive and interactive OTT web platform for video streaming using React.js, featuring dynamic content browsing with category filters, featured sections, and media carousels. The project included reusable UI components, integrated video players, and simulated real-world functionality with mock data, all while ensuring a modern, user-friendly interface optimized for performance across devices.",
      image: project1Image,
      github: "https://udhayam-csbs.vercel.app/"
    },
    {
      title: "EduTrack Learning Platform",
      description: "I developed a full-stack educational platform that enables interactive learning for students and educators, with secure user authentication, course creation, and real-time progress tracking. The frontend was built using React.js, while the backend utilized a scalable RESTful API with Express.js and MongoDB. The platform includes structured modules, quizzes, and dynamic content rendering to ensure a smooth and engaging user experience.",
      image: project3Image,
      github: "https://agriculture-machines-rental.onrender.com/"
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
