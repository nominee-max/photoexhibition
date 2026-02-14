import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('carousel')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['carousel', 'wall', 'gallery']
      
      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If section is near the top of the viewport (within 150px), mark it as active
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">Energy Creates</div>
        <div className="navbar-links">
          <a 
            href="#carousel" 
            className={`navbar-link ${activeSection === 'carousel' ? 'active' : ''}`}
          >
            Carousel
          </a>
          <a 
            href="#wall" 
            className={`navbar-link ${activeSection === 'wall' ? 'active' : ''}`}
          >
            Wall
          </a>
          <a 
            href="#gallery" 
            className={`navbar-link ${activeSection === 'gallery' ? 'active' : ''}`}
          >
            Gallery
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
