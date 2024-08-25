import React from 'react';
import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/HULU.png'; // Update with the path to your logo
import ContactPage from './ContactPage';
import { Link } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f2f2f2;
  border-top: 1px solid #ddd;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 90px;
  height:90px;
  margin-bottom: 10px;
  border-radius:50%;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
  margin: 0;
`;

const SocialMedia = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 25px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SocialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin:7px;
`;

const SocialIcon = styled.a`
  font-size: 1.4em;
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

const SocialLabel = styled.span`
  font-size: 1em;
  color: #555;
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 1em;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
const Socials = styled.div`
display:flex;
`
const Text = styled.span`
margin: 10px auto;
color:blue;
font-size:20px;
padding:10px;
`

const QuikLink = styled.div`
diplay:flex;
flex-direction:column;
`
const NavList = styled.ul`

  list-style: none;
  display: grid;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0;
`;
const P = styled.p`
margin: 10px auto;
color:blue;
font-size:20px;
padding:10px;
`
const App = styled.div`
`
const Button = styled.button`
background-color:blue;
color:white;
border-radius:40px;
border:none;
height:40px;
width:150px;`
const NavLink = styled(Link)`
  color: #555;
  text-decoration: none;
  padding: 10px 4px;
  font-size: 13px;
  border-radius: 5px;

  &:hover {

  }
  font-family: "Poppins", system-ui;
`;
const H = styled.p`
color:#555;
overflow-wrap: break-word; `
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); // Close the mobile menu after selection
  }
};

const FooterPage = () => {
  const latitude = 9.011704301013898;
  const longitude = 38.754134401379275;
  const zoomLevel = 15; // Adjust the zoom level if needed

  // Construct the URLs for email, phone, and Google Maps
  const emailUrl = 'mailto:marketing@emebet.net';
  const phoneUrl = 'tel:+251963959694';// Format the phone number as needed
  const mapUrl = `https://www.google.com/maps/@${latitude},${longitude},${zoomLevel}z`;
  return (
    <FooterContainer id='contact'>
      <FooterContent>

        <CompanyInfo>
        <Text>Our Company</Text>
        <div style={{display:"grid" , alignContent:"center" , borderRadius:"50%", objectFit:"cover"}}>
        <Logo src={logo} alt="Company Logo" />
        </div>
         
          <Description>
      
            We are a leading company providing high-quality services tailored to meet your needs. Our team is dedicated to delivering excellence and ensuring customer satisfaction.
          </Description>
        </CompanyInfo>
<QuikLink>
<P>Quick Link</P>
<NavList>

          <NavItem onClick={() => scrollToSection('home')}>
          <FaGreaterThan size={12} color="black" /> <NavLink to="#" >Home</NavLink>
          </NavItem>
          <NavItem onClick={() => scrollToSection('about')}>
          <FaGreaterThan size={12} color="black" /> <NavLink to="#">About</NavLink>
          </NavItem>
          <NavItem onClick={() => scrollToSection('services')}>
          <FaGreaterThan size={12} color="black" /><NavLink to="#">Services</NavLink>
          </NavItem>
          <NavItem onClick={() => scrollToSection('contact')}>
          <FaGreaterThan size={12} color="black" /> <NavLink to="#">Contact</NavLink>
          </NavItem>
          </NavList>
</QuikLink>
        <SocialMedia>
        <span style={{marginLeft:"auto" , marginRight:"auto" , color:"blue" ,marginTop:"19px" ,  fontSize:"20px"}}>Contact Us</span>
          <div>
             
          <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <div style={{ marginBottom: '20px' }}>
        <a href={emailUrl} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <FaEnvelope style={{ fontSize: '24px', color: '#555', marginRight: '8px' }} />
          <span>marketing@emebet.net</span>
        </a>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <a href="tel:+251963959694" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <FaPhone style={{ fontSize: '24px', color: '#555', marginRight: '8px' }} />
          <span>+2519-63-95-96-94</span>
        </a>
      </div>
      <div>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <FaMapMarkerAlt style={{ fontSize: '24px', color: '#555', marginRight: '8px' }} />
          <span>Legehar, Ahmara Bank.</span>
        </a>
      </div>
    </div>
          </div>
         
         <Socials>
          <span>
          <SocialItem>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook   color= '#555'/>
            </SocialIcon>
          </SocialItem>
          </span>
    <span>
          <SocialItem>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter color= '#555' />
            </SocialIcon>
          </SocialItem>
    </span>
    <span>
          <SocialItem>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color= '#555' />
            </SocialIcon>
          </SocialItem>
          </span>
          <span>
          <SocialItem>
            
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram color= '#555'/>
            </SocialIcon>
          </SocialItem>
          </span>
          </Socials>
        </SocialMedia>
        <App>
          <P>Download App</P>
          <H>our app used for register<br></br> and and see job accourding<br></br> to your preferences </H>
          <Button>HULU App</Button>
        </App>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterPage;
