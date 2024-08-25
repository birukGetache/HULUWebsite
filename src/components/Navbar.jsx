import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaBars, FaTimes, FaPhone, FaGlobe, FaEnvelope } from 'react-icons/fa';

// Styled components for Navbar
const NavInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 85px;
  background: #f0f0f0;
  width: 100%;
  position: fixed; /* Change to fixed for proper positioning */
  z-index: 1; /* Lower z-index to stay behind Nav */
  transition: transform 0.3s ease; /* Smooth transitions */
    @media (max-width: 1007px) {
      display: none;
  }
    @media (max-width: 500px) {
      display: none;
      padding:10px 10px;
       }
`;

const Nav = styled.nav`
  padding-left: 85px;
  padding-right: 85px;
  width: 100%;
  position: ${props => (props.sticky ? 'fixed' : 'absolute')};
  top: ${props => (props.sticky ? '0px' : '50px')}; /* Adjust based on the NavInfo height */
  left: 0;
  z-index: 2; /* Higher z-index to stay above NavInfo */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-color: blue;
  color:white;
  transition: top 0.3s ease-in-out;
   @media (max-width: 745px) {
     padding-right:10px;
     padding-left:15px;
       }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const NavList = styled.ul`

  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;

  &:hover {
    background: lightblue;
  }
  font-family: "Poppins", system-ui;
`;

const Hamburger = styled.div`
  font-size: 24px;
  cursor: pointer;
  padding: 0 15px;
margin-right:-20px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${props => (props.open ? 'block' : 'none')}; 
  position: absolute;
  top: 60px; 
  right: 0; 
  background: lightblue;
  width: 100%;
  text-align: center;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none; 
  }
`;

const MobileNavItem = styled.li`
  margin: 0;
`;

const MobileNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 15px;
  display: block;
  border-bottom: 1px solid #0056b3;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #5c9ee1;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [showNavInfo, setShowNavInfo] = useState(true);
  const navInfoRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const navInfoHeight = navInfoRef.current ? navInfoRef.current.offsetHeight : 0;

    if (scrollPosition >= navInfoHeight) {
      setSticky(true);
      setShowNavInfo(false); // Hide NavInfo when scrolling down
    } else {
      setSticky(false);
      setShowNavInfo(true); // Show NavInfo when at top
    }
  };

  const emailAddress = "hulugeneralcommission@gmail.com";
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);  // Close the mobile menu after selection
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Update on resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  const googleMapsURL = "https://www.google.com/maps?q=9.011704301013898,38.754134401379275"; // Google Maps URL with coordinates
  return (
    <>
      <NavInfo ref={navInfoRef} style={{ transform: showNavInfo ? 'translateY(0)' : 'translateY(-100%)' }}>
        <div >
          <FaPhone size={24}  color = "blue"/>
          <span style={{paddingLeft:'10px'}}></span>
          0963959694
        </div>
        <div style={{display:"flex", alignItems:"center" ,gap:"40px"}}>
        <div style={{ display: "flex", justifyContent: "center" }}>
      <FaGlobe size={24} color = "blue" />
      <span style={{ paddingLeft: '10px' }}></span>
      <a href={googleMapsURL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <p style={{ padding: "0", margin: "0", display: "inline" }}>Leghar at Ahmara Bank Head office</p>
      </a>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FaEnvelope size={24} color = "blue" />
      <span style={{ paddingLeft: '10px' }}></span>
      <a href={`mailto:${emailAddress}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <p style={{ padding: "0", margin: "0", display: "inline" }}>{emailAddress}</p>
      </a>
    </div>
       
        </div>
      </NavInfo>
      <Nav sticky={isSticky}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Logo src='/HULU.png' alt="HULU Logo" />
          <span style={{ fontWeight: 'bold' }}>Hulu General Commision</span>
        </div>
        <Hamburger onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        <NavList>
          <NavItem onClick={() => scrollToSection('home')}>
            <NavLink to="#" >Home</NavLink>
          </NavItem>
          <NavItem onClick={() => scrollToSection('about')}>
            <NavLink to="#">About</NavLink>
          </NavItem>
          <NavItem onClick={() => scrollToSection('services')}>
            <NavLink to="#">Services</NavLink>
          </NavItem>
          <NavItem onClick={() => scrollToSection('contact')}>
            <NavLink to="#">Contact</NavLink>
          </NavItem>
        </NavList>
        <MobileNavList open={isOpen}>
          <MobileNavItem onClick={() => scrollToSection('home')}>
            <MobileNavLink to="#">Home</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem onClick={() => scrollToSection('about')}>
            <MobileNavLink to="#">About</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem onClick={() => scrollToSection('services')}>
            <MobileNavLink to="#">Services</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem onClick={() => scrollToSection('contact')}>
            <MobileNavLink to="#">Contact</MobileNavLink>
          </MobileNavItem>
        </MobileNavList>
      </Nav>
    </>
  );
};

export default Navbar;