import React, {useState, useEffect} from "react"
import styles from "./Navbar.module.css"
import { BiSolidCat } from "react-icons/bi"
import { FaBars } from "react-icons/fa6"

const Navbar = ({ parallaxRef, isMobile }) => {
  
  const [isToggled, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleToggle() {
    setToggle(!isToggled)
  }

  const scrollToSectionParallax = (offset) => {
    if (parallaxRef && parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  const scrollToSectionMobile = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getOffsetForSection = (section) => {
    const offsets = {
      home: 0,
      skills: 1,
      projects: 2,
      education: 3.2,
      contact: 3.6
    };
    
    return offsets[section] || 0;
  };

  const handleNavClick = (e, section) => {
    e.preventDefault();
    
    if (isMobile) {
      scrollToSectionMobile(section);
    } else {
      const offset = getOffsetForSection(section);
      scrollToSectionParallax(offset);
    }
    
    setToggle(false);
  };

  return (
    <nav className={`${scrolled ? styles.scrolled : ''} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#" onClick={(e) => handleNavClick(e, 'home')}><BiSolidCat/> PULIPHAT </a>
          </div>

          <ul>
            <li>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            </li>
            <li>
              <a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
            </li>
          </ul>
          <div className={styles.button}>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        <FaBars className={styles.bars} onClick={handleToggle} />
        {isToggled ? (
          <>
          <ul className={styles.mobile_menu} >
            <li>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            </li>
            <li>
              <a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
            </li>
          </ul>
          <div className={styles.mobile_button}>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
