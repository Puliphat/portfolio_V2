import React, {useState, useEffect} from "react"
import styles from "./Navbar.module.css"
import { BiSolidCat } from "react-icons/bi"
import { FaBars } from "react-icons/fa6"

const Navbar = ({ parallaxRef, screenSize }) => {
  
  const [isToggled, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'small-table';
  const isMacbook = screenSize === 'macbook';
  
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
    // ปรับค่า offset ตามขนาดหน้าจอ
    const mediumOffsets = {
      home: 0,
      skills: 1,
      projects: 3,
      education: 5,
      contact: 5.5
    };
    
    const macbookOffsets = {
      home: 0,
      skills: 1,
      projects: 2.4,
      education: 5,
      contact: 5.5
    };
    
    const largeOffsets = {
      hero: 0.07,
      skills: 0.6,
      projects: 2,
      education: 3.2,
      contact: 3.7
    };
    
    const xlargeOffsets = {
      home: 0,
      skills: 0.6,
      projects: 2,
      education: 3,
      contact: 3.6
    };

    const tabletOffsets = {
      home: 0,
      skills: 0.6,
      projects: 2,
      education: 4.3,
      contact: 4.8
    };
    
    // เลือก offsets ตามขนาดหน้าจอ
    let offsets;
    if (screenSize === 'medium') {
      offsets = mediumOffsets;
    } else if (screenSize === 'macbook') {
      offsets = macbookOffsets;
    } else if (screenSize === 'xlarge') {
      offsets = xlargeOffsets;
    } else if (screenSize === 'small-table') {
      offsets = tabletOffsets;
    } else {
      offsets = largeOffsets;
    }
    
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
    <nav className={`${scrolled ? styles.scrolled : ''} ${styles[screenSize]}`}>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#" onClick={(e) => handleNavClick(e, 'home')}><BiSolidCat/> PULIPHAT_V2 </a>
          </div>

          {/* แสดง navigation ปกติสำหรับแท็บเล็ตและเดสก์ท็อป */}
          {!isMobile && (
            <>
              <ul className={`${isTablet ? styles.tablet_nav : ''} ${isMacbook ? styles.macbook_nav : ''}`}>
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
              <div className={`${styles.button} ${isTablet ? styles.tablet_button : ''} ${isMacbook ? styles.macbook_button : ''}`}>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
              </div>
            </>
          )}
        </div>

        {/* Mobile menu - แสดงเฉพาะบนมือถือ */}
        {isMobile && (
          <>
            <FaBars className={styles.bars} onClick={handleToggle} />
            {isToggled && (
              <>
                <ul className={styles.mobile_menu}>
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
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
