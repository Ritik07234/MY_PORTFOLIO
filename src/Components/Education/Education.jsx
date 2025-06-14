import "./Education.css";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 8px 20px rgba(0, 255, 255, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  return (
    <section id="education" className="education">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Education</h2>
      </motion.div>

      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="educationItem"
          variants={itemVariants}
          whileHover={hoverEffect}
        >
          <div className="icon-wrapper">
            <FaUniversity className="educationItemIcon pulse-animation" />
          </div>
          <div className="educationItemContent">
            <h3>NSEC - Netaji Subhash Engineering College</h3>
            <p>B.Tech - Computer Science and Engineering</p>
            <p>2022 – Present | CGPA - 8.2</p>
          </div>
        </motion.div>

        <motion.div 
          className="educationItem"
          variants={itemVariants}
          whileHover={hoverEffect}
        >
          <div className="icon-wrapper">
            <FaSchool className="educationItemIcon pulse-animation" />
          </div>
          <div className="educationItemContent">
            <h3>Holy Cross School</h3>
            <p>Higher Secondary (HSC)</p>
            <p>2020 – 2021 | Percentage - 92.8%</p>
          </div>
        </motion.div>

        <motion.div 
          className="educationItem"
          variants={itemVariants}
          whileHover={hoverEffect}
        >
          <div className="icon-wrapper">
            <FaSchool className="educationItemIcon pulse-animation" />
          </div>
          <div className="educationItemContent">
            <h3>Sardar Patel Public School</h3>
            <p>Secondary School (SSLC)</p>
            <p>2018 – 2019 | Percentage - 84.8%</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Education;