import React from 'react'
import styles from './Footer.module.css'
import { FaGithub, FaLinkedinIn, FaFacebook, FaHeart, FaCode, FaEnvelope } from 'react-icons/fa6'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_social}>
            <a href="https://github.com/Puliphat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/puli.putichai/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/puliphat-puttichaivanichkij-21367622b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:myty.2543@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          
          <div className={styles.footer_copyright}>
            <p>
              <FaCode className={styles.code_icon} /> Developed with <FaHeart className={styles.heart_icon} /> by Puliphat © {currentYear}
            </p>
            <p className={styles.footer_note}>Portfolio created with React + Vite</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
 