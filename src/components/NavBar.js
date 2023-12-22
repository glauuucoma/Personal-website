import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon-github.png';
import navIcon2 from '../assets/img/nav-icon-linkedin.png';
import navIcon3 from '../assets/img/nav-icon-insta.png';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container fluid className="navbar-wrapper">
        <Navbar.Brand href="#home" className=" col-md-2 col-sm-6 navbar-name">
          <h2>Davyd Kuleba</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-between align">
            <div className=" nav-links col-md-8 col-sm-12 d-flex justify-content-center align-item-center">
              <Nav.Item>
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link hover-underline-animation' : 'navbar-link hover-underline-animation'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link hover-underline-animation' : 'navbar-link hover-underline-animation'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link hover-underline-animation' : 'navbar-link hover-underline-animation'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav.Item>
            </div>
            <div className="col-md-4 col-sm-12 d-flex social-icon-wrapper">
              <Nav className="navbar-text">
                <div className="social-icon">
                  <a href="https://github.com/glauuucoma" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="GitHub Link" /></a>
                  <a href="https://www.linkedin.com/in/davyd-kuleba-716740216/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="LinkedIn Link" /></a>
                  <a href="https://www.instagram.com/glauuucoma/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram  Link" /></a>
                </div>
              </Nav>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}