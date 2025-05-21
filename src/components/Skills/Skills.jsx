import React from 'react'
import styles from './Skills.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNode, FaDocker ,FaPhp ,FaBootstrap   } from 'react-icons/fa6'
import { GrMysql } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiPostman, SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import  useInView  from '../../hooks/useInView'


const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 style={{ color: '#E34F26' }} />, level: 100 },
  { name: "CSS", icon: <FaCss3Alt style={{ color: '#4a90e2' }} />, level: 100 },
  { name: "JavaScript", icon: <FaJs style={{ color: '#F7DF1E' }} />, level: 100 },
  { name: "React.js", icon: <FaReact style={{ color: '#61DAFB' }} />, level: 95 },
  { name: "Next.js", icon: <RiNextjsFill style={{ color: '#000000' }} />, level: 70 },
  { name: "TailwindCSS", icon: <BiLogoTailwindCss style={{ color: '#06B6D4' }} />, level: 85 },
  { name: "Bootstrap", icon: <FaBootstrap style={{ color: '#7A63A1' }} />, level: 70 }
];

const backendSkills = [
  { name: "Node.js", icon: <FaNode style={{ color: '#339933' }} />, level: 100 },
  { name: "Express.js", icon: <SiExpress style={{ color: '#000000' }} />, level: 100 },
  { name: "MySQL", icon: <GrMysql style={{ color: '#000000' }} />, level: 90 },
  { name: "PHP", icon: <FaPhp style={{ color: '#777BB4' }} />, level: 50 },
  { name: "Next.js", icon: <RiNextjsFill style={{ color: '#000000' }} />, level: 70 },
  { name: "Git", icon: <FaGitAlt style={{ color: '#F05032' }} />, level: 90 },
  { name: "Postman", icon: <SiPostman style={{ color: '#FF6C37' }} />, level: 100 },
  { name: "Docker", icon: <FaDocker style={{ color: '#2496ED' }} />, level: 85 }
];

function Skills() {
  const [frontendRef, isFrontendInView] = useInView({ threshold: 0.1 });
  const [backendRef, isBackendInView] = useInView({ threshold: 0.1 });

  return (
    <div id="skills" className={styles.skills_con}>
      <h2 className={styles.skills_title}>Skills & Technologies</h2>
      
      <div className={styles.skills_container}>
        <div 
          ref={frontendRef}
          className={`${styles.skills_category} ${isFrontendInView ? styles.animate : ''}`}
        >
          <h3 className={styles.category_title}>Front-End</h3>
          <div className={styles.skills_grid}>
            {frontendSkills.map((skill, index) => (
              <div className={styles.skill_card} key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className={styles.skill_icon}>
                  {skill.icon}
                </div>
                <div className={styles.skill_details}>
                  <div className={styles.skill_label}>{skill.name}</div>
                  <div className={styles.skill_progress_container}>
                    <div 
                      className={styles.skill_progress_bar} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={backendRef}
          className={`${styles.skills_category} ${isBackendInView ? styles.animate : ''}`}
        >
          <h3 className={styles.category_title}>Back-End & Tools</h3>
          <div className={styles.skills_grid}>
            {backendSkills.map((skill, index) => (
              <div className={styles.skill_card} key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className={styles.skill_icon}>
                  {skill.icon}
                </div>
                <div className={styles.skill_details}>
                  <div className={styles.skill_label}>{skill.name}</div>
                  <div className={styles.skill_progress_container}>
                    <div 
                      className={styles.skill_progress_bar} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
