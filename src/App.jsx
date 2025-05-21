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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  // ตรวจจับหน้าจอมือถือ
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // ตรวจสอบเมื่อโหลดและเมื่อมีการปรับขนาดหน้าจอ
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // สำหรับการทำงานของ parallax ในโหมด desktop เท่านั้น
  const parallaxConfig = {
    pages: 4.57,
    moonFactor: 3.5,
    landOffset: 2,
    landFactor: 4.4,
    catEndPoint: 4.5
  };

  return (
    <>
      <Navbar parallaxRef={ref} isMobile={isMobile}/>
      {isMobile ? (
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

        // เวอร์ชั่นเดสก์ท็อป - ใช้ Parallax

        <Parallax pages={parallaxConfig.pages} ref={ref} className="desktop-parallax">
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={parallaxConfig.moonFactor}
            style={{
              backgroundImage: `url(${moon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
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
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
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
            <img src={cat} className="desktop-cat" alt="แมว" />
          </ParallaxLayer>

          {/* Section: Hero */}
          <ParallaxLayer
            offset={0.1}
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
            offset={1}
            speed={0.7}
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
            offset={2}
            speed={0.7}
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

          {/* Section: Education, Contact, and Footer */}
          <ParallaxLayer
            offset={3.4}
            speed={0.5}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10,
              gap: '2rem',
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
