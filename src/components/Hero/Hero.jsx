import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../img/puliphat.jpg";

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroImg = document.querySelector(`.${styles.hero_img}`);
      
      if (heroImg) {
        // Add subtle parallax effect on scroll
        heroImg.style.transform = `translateY(${scrollPosition * 0.03}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.hero_wrapper} id="home">
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, my name is</p>
            <h3 className={styles.text_2}>Puliphat</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "5px" }}>I'm a </span>
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  1500,
                  "Front-End Developer",
                  1500,

                  
                ]}
                speed={65}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
            I enjoy crafting clean, modern websites that create real value. Always curious, always 
            improving, I believe we grow a little every day by learning and building with purpose.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/Puliphat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/puli.putichai/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/puliphat-puttichaivanichkij-21367622b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn className={styles.social_icon} />
                </a>
              </li>
            </ul>
          </div>
          <Tilt 
            scale={1.05}
            transitionSpeed={2500}
            tiltReverse={true}
            tiltMaxAngleX={10} 
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareBorderRadius="12px"
          >
            <div>
              <img src={profileImage} alt="Profile" className={styles.hero_img} />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
