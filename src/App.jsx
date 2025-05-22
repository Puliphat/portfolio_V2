import './App.css'
import { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import land from './components/img/land.jpg'
import moon from './components/img/moon.jpg'
import cat from './components/img/cat.gif'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const ref = useRef();
  const [screenSize, setScreenSize] = useState('mobile');
  const [screenHeight, setScreenHeight] = useState('normal');

  // ตรวจจับขนาดหน้าจอ
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 480) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 850) {
        setScreenSize('small-table');
      } else if (window.innerWidth <= 1279) {
        setScreenSize('medium');
      } else if (window.innerWidth >= 1280 && window.innerWidth <= 1450) {
        setScreenSize('macbook');
      } else if (window.innerWidth <= 1999) {
        setScreenSize('large');
      } else {
        setScreenSize('xlarge');
      }

      // ตรวจสอบความสูงหน้าจอ
      if (window.innerHeight < 800) {
        setScreenHeight('short');
      } else if (window.innerHeight > 1200) {
        setScreenHeight('tall');
      } else {
        setScreenHeight('normal');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // ปรับค่า parallax ตามขนาดหน้าจอและความสูง
  const getParallaxConfig = () => {
    const baseConfig = {
      medium: {
        pages: 5.8,
        moonFactor: 4,
        landOffset: 2.4,
        landFactor: 6,
        catEndPoint: 5,
        sectionOffsets: {
          hero: 0.1,
          skills: 1,
          projects: 3,
          education: 5,
          footer: 5.7
        }
      },
      'small-table': {
        pages: 5.6,
        moonFactor: 3.9,
        landOffset: 2.6,
        landFactor: 5.6,
        catEndPoint: 4.9,
        sectionOffsets: {
          hero: 0.09,
          skills: 0.99,
          projects: 2,
          education: 4.5,
          footer: 5.5
        }
      },
      macbook: {
        pages: 5.8,
        moonFactor: 4,
        landOffset: 3,
        landFactor: 6,
        catEndPoint: 5.5,
        sectionOffsets: {
          hero: 0.2,
          skills: 1,
          projects: 2.7,
          education: 5,
          footer: 5.7
        }
      },
      large: {
        pages: 4.8,
        moonFactor: 3.5,
        landOffset: 2,
        landFactor: 4.5,
        catEndPoint: 4.8,
        sectionOffsets: {
          hero: 0.07,
          skills: 0.95,
          projects: 2,
          education: 3.5,
          footer: 4.7
        }
      },
      xlarge: {
        pages: 4.4,
        moonFactor: 4.0,
        landOffset: 3.0,
        landFactor: 5.0,
        catEndPoint: 4.3,
        sectionOffsets: {
          hero: 0.07,
          skills: 0.95,
          projects: 1.9,
          education: 2.7,
          footer: 4.3
        }
      }
    };

    const config = baseConfig[screenSize] || baseConfig.large;

    // ปรับจำนวนหน้าเพจตามความสูงหน้าจอ
    if (screenHeight === 'short') {
      return {
        ...config,
        pages: config.pages + 1.0,
        landOffset: config.landOffset + 1.0,
        catEndPoint: config.catEndPoint + 1.0,
        sectionOffsets: {
          ...config.sectionOffsets,
          footer: config.sectionOffsets.footer + 1.0
        }
      };
    } else if (screenHeight === 'tall') {
      return {
        ...config,
        pages: config.pages - 0.8,
        landOffset: config.landOffset - 0.8,
        catEndPoint: config.catEndPoint - 0.3,
        sectionOffsets: {
          ...config.sectionOffsets,
          footer: config.sectionOffsets.footer - 0.8
        }
      };
    }

    return config;
  };

  const parallaxConfig = getParallaxConfig();

  return (
    <>
      <Navbar parallaxRef={ref} screenSize={screenSize} />
      {screenSize === 'mobile' ? (
        // โหมดมือถือ - ไม่ใช้ Parallax
        <div className="mobile-content">
          <div className="mobile-background">
            <img src={moon} className="mobile-bg-image moon" alt="พื้นหลังดวงจันทร์" />
            <img src={land} className="mobile-bg-image land" alt="พื้นหลังภูมิประเทศ" />
          </div>
          
          <div className="mobile-cat-container">
            <img src={cat} className="mobile-cat" alt="แมว" />
          </div>
          
          <main className="mobile-sections-container">
            <div className="content-section hero-section">
              <section id="home">
                <Hero/>
              </section>
            </div>
            
            <div className="content-section skills-section">
              <section id="skills">
                <Skills/>
              </section>
            </div>
            
            <div className="content-section project-section">
              <section id="projects">
                <Projects/>
              </section>
            </div>
            
            <div className="content-section education-section">
              <section id="education">
                <Education/>
              </section>
            </div>
            
            <div className="content-section contact-section">
              <section id="contact">
                <Contact/>
              </section>
            </div>
          </main>
          
          <div className="footer-section">
            <Footer/>
          </div>
        </div>
      ) : (
        // เวอร์ชั่นเดสก์ท็อปและแท็บเล็ต - ใช้ Parallax
        <Parallax pages={parallaxConfig.pages} ref={ref} className={`desktop-parallax ${screenSize}`}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={parallaxConfig.moonFactor}
            style={{
              backgroundImage: `url(${moon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
         
          <ParallaxLayer
            offset={parallaxConfig.landOffset}
            speed={1}
            factor={parallaxConfig.landFactor}
            style={{
              backgroundImage: `url(${land})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />

          <ParallaxLayer
            sticky={{ start: 0.1, end: parallaxConfig.catEndPoint }}
            style={{ 
              textAlign: 'left',
              zIndex: 5,
              pointerEvents: 'none'
            }}
          >
            <img src={cat} className={`desktop-cat ${screenSize}`} alt="แมว" />
          </ParallaxLayer>

          {/* Section: Hero */}
          <ParallaxLayer
            offset={parallaxConfig.sectionOffsets.hero}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <div className="content-section hero-section">
              <section id="home">
                <Hero/>
              </section>
            </div>
          </ParallaxLayer>

          {/* Section: Skills */}
          <ParallaxLayer
            offset={parallaxConfig.sectionOffsets.skills}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <div className="content-section skills-section">
              <section id="skills">
                <Skills/>
              </section>
            </div>
          </ParallaxLayer>

          {/* Section: Projects */}
          <ParallaxLayer
            offset={parallaxConfig.sectionOffsets.projects}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <div className="content-section project-section">
              <section id="projects">
                <Projects/>
              </section>
            </div>
          </ParallaxLayer>

          {/* Section: Education and Contact */}
          <ParallaxLayer
            offset={parallaxConfig.sectionOffsets.education}
            speed={0.5}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10,
              gap: '1.5rem',
              minHeight: '100vh'
            }}
          >
            <div className="content-section education-section">
              <section id="education">
                <Education/>
              </section>
            </div>
            <div className="content-section contact-section">
              <section id="contact">
                <Contact/>
              </section>
            </div>
          </ParallaxLayer>
          
          {/* Footer Section */}
          <ParallaxLayer
            offset={parallaxConfig.sectionOffsets.footer}
            speed={0}
            factor={0.15}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              zIndex: 15,
              width: '100%',
              pointerEvents: 'auto',
            }}
          >
            <div className="footer-section">
              <Footer/>
            </div>
          </ParallaxLayer>
        </Parallax>
      )}
    </>
  )
}

export default App
