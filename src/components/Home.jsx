import React, { useState } from 'react';
import styled from '@emotion/styled';
import imageHome from '../assets/home.webp';
import car from '../assets/car.webp'; 
import track from '../assets/track.avif'; 
import images from '../assets/images.jpg'
import TestimonialPage from './TestimonialPage';
import ServicePage from './ServicePage';
import FooterPage from './FooterPage';
import { FaBolt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import AboutPage from './AboutPage';
import Navbar from './Navbar';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    /* Styles for tablets and mobile devices */
  }
  
  @media (max-width: 480px) {
    /* Styles for mobile devices */
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center;
  margin: 0 auto; /* Center the header */
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 2em; /* Adjust font size for tablets and mobile */
  margin: 20px;
  color: orange;
  
  @media (max-width: 480px) {
    font-size: 1.5em;
    margin-left: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 1em; /* Adjust font size for tablets and mobile */
  margin-bottom: 20px;
  color: #555;
  
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Service = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px; /* Margin for mobile devices */
  
  @media (min-width: 769px) {
    margin: 0 10px;
    flex: 1;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #007bff;
  
  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1em;
  color: #555;
  
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Portfolio = styled.div`
  margin-top: 30px;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const PortfolioTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #007bff;
  
  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  width: 48%;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto; /* Adjust height for responsiveness */
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
`;

const ProjectDescription = styled.p`
  margin-top: 10px;
  color: #555;
  
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Testimonials = styled.div`
  margin-top: 30px;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Testimonial = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const TestimonialQuote = styled.p`
  font-style: italic;
  
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const Footer = styled.footer`
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  margin-top: 30px;
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Class = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  width: 100vw;
  justify-content: space-between;
  padding: auto 60px auto 0;
height:fit-content;
  // Media query for mobile devices
  @media (max-width: 930px) { // Adjust the max-width value to target different screen sizes
   display:grid;
   grid-template-columns:1fr; // Stack items vertically
    align-items: center;    // Center items horizontally
    padding: 20px;         // Adjust padding for smaller screens
    height:fit-content;
  }
`;


const Item = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  overflow: hidden;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.8);
`;

const Img = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const Dis = styled.p`
color:blue;
  position: absolute;
  width: 90%;
  max-width: 80%;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.3s ease;
  font-size: 15px;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 50px;
  box-sizing: border-box;
  text-shadow: 0 5px 10px #0004;
  
  @media (max-width: 480px) {
    top: 30px;
  }
`;

const Main = styled.h5`
  color: #333;
  margin-bottom: 0;
  margin-top: 20px;
  margin-left: 20px;
  
  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;

const Slider = styled.h2`
  font-size: 2em;
  margin: 0;
  margin-left: 20px;
  
  @media (max-width: 480px) {
    font-size: 1.5em;
    margin-left: 10px;
  }
`;
const P = styled.p`
height:30px;
background-color:blue;
color:white;
margin:0;
text-align:center;`

const Tbnail = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: max-content;
  z-index: 100;
  display: flex;
  gap: 10px;
  transform: translateX(-50%);
  
  @media (max-width: 480px) {
    bottom: 10px;
    gap: 5px;
  }
`;

const Contentd = styled.div`
  width: 120px;
  height: 180px;
  flex-shrink: 0;
  position: relative;
  border-radius: 30px;
  
  @media (max-width: 480px) {
    width: 100px;
    height: 150px;
  }
`;
// Styled container for the text
const TextContainer = styled.div`
box-sizing:border-box;
margin-bottom:150px;
width:50vw;
  height: 100%;
  display: grid;
  grid-template-columns:1fr;
  justify-content: center;
  align-items: center;
  place-items:center;
  padding-left: 60px;
  padding-right:60px;

  p {
 max-width:40vw;
 margin-left:10px;
    font-size: 2.5vw;
    margin-top: 100px;
    
    .highlight {
     font-size:1em;
      display: inline;
      margin-top: -10px;
      color: blue;
    }
  }

  @media (max-width: 930px) {
  margin-top:100px;
  height:fit-content;
  width:100vw;
    flex-direction: column;
    padding-left: 20px;
    
    p {
      font-size: 1,5rem;
      margin-top: 10px;
       max-width:90vw;
      .highlight {
        font-size: 24px;
        margin-top: 0;
      }
    }
  }
`;

// Styled container for the image
const ImageContainer = styled.div`
  height: 100vh;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
width:50vw;
  img {
    height: auto;
    width: 70vw;
  }

  @media (max-width: 930px) {
  margin-top:0;
  display:flex;
  width:100vw;
  justify-content:center;
    padding-right: 20px;
  height: fit-content;
    img {
      height: 40vh;
    }
  @media (max-width: 450px) {
  margin-top:0;
  display:flex;
  width:100vw;
  justify-content:center;
    padding-right: 20px;
  height: fit-content;
    img {
      width: 90vw;
      height:auto;
    }
  }
`;

const Titlet = styled.p`
  text-align: center;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

// Styled component for icon cards
const CardContainer = styled.div`
 max-width:40vw;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  align-items:end;
    @media (max-width: 930px) {
    font-size: 0.8em;
    max-width:90%;
    width:90vw;
  }
    @media (max-width: 450px) {
    font-size: 0.8em;
    max-width:90%;
    width:90vw;
  }
`;

const Card = styled.div`
height:201px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 12vw;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 10px -150px 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 10px 0;
    font-size: 10px;
  }

  p {
    color: #555;
    font-size:1em;
    margin-top:10px;
  }

  svg {
    font-size: 40px;
    color: #007bff;
  }
      @media (max-width: 930px) {
    font-size: 0.8em;
    max-width:90%;
      width: 30vw;
  }
       @media (max-width: 450px) {
       position:relative;
       height:100px;
       border:none;
       svg{
       margin:auto;
       }
       p{
       display:none;}
       }
`;
const T = styled.div`
height:100%;
display:flex;
align-items:end;`

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(imageHome); // Set default image to "Home"

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <Container>
      <Navbar></Navbar>
      <Header id='home'>
     <Class>
     <TextContainer>
      <T>
      <p style={{fontWeight:"bold"}}>Commission-based roles teach you that success is not given; it's earned. The harder you work, <span className="highlight" style={{fontSize:"1.3em"}}>the greater the reward.</span></p>
      </T>
      <CardContainer>
    <Card>
      <FaBolt color = "blue"/>
      <h3>Efficient</h3>
      <p>Streamline your workflow with our tools.</p>
    </Card>
    <Card>
      <FaShieldAlt color = "blue"/>
      <h3>Reliable</h3>
      <p>Dependable solutions you can trust.</p>
    </Card>
    <Card>
      <FaCheckCircle color = "blue" />
      <h3>Easy </h3>
      <p>Quick setup and integration.</p>
    </Card>
  </CardContainer>
    </TextContainer>
    <ImageContainer>
      <img src={images} alt="Commission-Based Work" />
    </ImageContainer>
     </Class>
      </Header>
      <AboutPage></AboutPage>
      <ServicePage ></ServicePage>
<TestimonialPage></TestimonialPage>
     <FooterPage ></FooterPage>
     <P>&copy; Designed By HULU GENERAL COMMISSION </P>
    </Container>
  );
};

export default HomePage;
