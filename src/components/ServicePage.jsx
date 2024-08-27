import React from 'react';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';
import { faUser, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
const IconWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;
// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color:blue;
  margin-bottom: 20px;
  text-align: center;
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ServiceCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Icon = styled.div`
  font-size: 3em;
  color: #007bff;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
`;

// Main Component
const ServicePage = () => {
  const services = [
    {
      id: 1,
      icon: (
        <div>
    <FontAwesomeIcon icon={faHome} title="Rent" color="blue" />
    <FontAwesomeIcon icon={faMapSigns} title="Sale" color="blue"  />
  </div>
      ),
      title: 'Land Sell and Rent',
      description: 'We build high-quality, responsive websites tailored to your needs.',
    },
    {
      id: 2,
      icon:(    <div>
    <FaTiktok color='blue'/>
    <FaInstagram color='blue'/>
    <FaFacebook color='blue'/>
    <FaYoutube color='blue'/>
      </div>),
      title: 'social Media marketing and event Organizer',
      description: 'Create user-friendly mobile applications for both iOS and Android.',
    },
  
    {
      id: 3,
      icon: (
        <svg 
        fill="blue" 
        viewBox="0 0 50 50" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        stroke="blue"
        height="110px" 
        width="110px"
    >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M18 0C13.515625 0 10 3.515625 10 8C10 12.484375 13.515625 16 18 16C22.484375 16 26 12.484375 26 8C26 3.515625 22.484375 0 18 0 Z M 30.40625 4C30.210938 4 30.007813 4.046875 29.84375 4.15625L28.6875 4.96875L27.5625 4.15625C27.457031 4.085938 27.34375 4.058594 27.21875 4.03125C27.730469 5.242188 28 6.582031 28 8C28 9.429688 27.707031 10.78125 27.1875 12L37 12C37.265625 12 37.53125 11.90625 37.71875 11.71875L39.71875 9.71875C39.90625 9.53125 40 9.265625 40 9L40 7C40 6.734375 39.90625 6.46875 39.71875 6.28125L37.71875 4.28125C37.53125 4.09375 37.265625 4 37 4L35.3125 4C35.046875 4 34.8125 4.09375 34.625 4.28125L33.5 5.4375L32.375 4.28125C32.1875 4.09375 31.921875 4 31.65625 4 Z M 16 6C17.105469 6 18 6.894531 18 8C18 9.105469 17.105469 10 16 10C14.894531 10 14 9.105469 14 8C14 6.894531 14.894531 6 16 6 Z M 15.6875 18C13.667969 18 11.832031 19.242188 11.09375 21.09375L8.125 28L7 28C5.347656 28 4 29.347656 4 31C4 32.652344 5.347656 34 7 34L7 47C7 48.652344 8.347656 50 10 50L13 50C14.652344 50 16 48.652344 16 47L16 46L34 46L34 47C34 48.652344 35.347656 50 37 50L40 50C41.652344 50 43 48.652344 43 47L43 34C44.652344 34 46 32.652344 46 31C46 29.347656 44.652344 28 43 28L41.875 28L38.9375 21.125C38.191406 19.253906 36.332031 18 34.3125 18 Z M 15.6875 20L34.3125 20C35.523438 20 36.636719 20.765625 37.09375 21.90625L39.90625 28.53125L38.9375 29.1875C38.152344 29.738281 37.234375 30 36.1875 30L13.8125 30C12.765625 30 11.867188 29.71875 11.0625 29.15625L10.09375 28.53125L12.9375 21.875C13.386719 20.757813 14.476563 20 15.6875 20 Z M 14.5 36C15.898438 36 17 37.101563 17 38.5C17 39.898438 15.898438 41 14.5 41C13.101563 41 12 39.898438 12 38.5C12 37.101563 13.101563 36 14.5 36 Z M 35.5 36C36.898438 36 38 37.101563 38 38.5C38 39.898438 36.898438 41 35.5 41C34.101563 41 33 39.898438 33 38.5C33 37.101563 34.101563 36 35.5 36Z"></path>
        </g>
    </svg>
    
      ),
      title: 'Car Rent and Sell',
      description: 'Efficient and secure database management solutions for your business.',
    },
    {
      id: 4,
      icon: (
        <IconWrapper>
        <div>
          <FontAwesomeIcon icon={faUser} size="1x" color='blue' />
        </div>
        <div>
          <FontAwesomeIcon icon={faUsers} size="1x" color='blue'/>
        </div>
        <div>
          <FontAwesomeIcon icon={faUserTie} size="1x" color='blue' />
        </div>
      </IconWrapper>
    
      ),
      title: 'Human Resource',
      description: 'Human resource management with effective practices.',
    },
    {
      id:5,
      icon:(
        <FontAwesomeIcon icon={faHome} size="2x" color='blue' />
      ),
      title: 'Home Rental and Sell',
      discription:"sdfsdf"
      },
      {
        id:6,
        icon:(
          <svg
          fill="#0000ff"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          stroke="#0000ff"
          width="116"
          height="116"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="app--developer_1_"
              d="M3.254,9.254L2.746,8.746L3.991,7.5L2.746,6.254l0.509-0.509L5.009,7.5L3.254,9.254z M3,2 C2.724,2,2.5,2.224,2.5,2.5S2.724,3,3,3s0.5-0.224,0.5-0.5S3.276,2,3,2z M5.5,2.5C5.5,2.776,5.276,3,5,3S4.5,2.776,4.5,2.5 S4.724,2,5,2S5.5,2.224,5.5,2.5z M7.5,2.5C7.5,2.776,7.276,3,7,3S6.5,2.776,6.5,2.5S6.724,2,7,2S7.5,2.224,7.5,2.5z M18.5,6.5 C18.5,6.776,18.276,7,18,7s-0.5-0.224-0.5-0.5S17.724,6,18,6S18.5,6.224,18.5,6.5z M20.5,6.5C20.5,6.776,20.276,7,20,7 s-0.5-0.224-0.5-0.5S19.724,6,20,6S20.5,6.224,20.5,6.5z M22.5,6.5C22.5,6.776,22.276,7,22,7s-0.5-0.224-0.5-0.5S21.724,6,22,6 S22.5,6.224,22.5,6.5z M5.5,24.5C5.5,24.776,5.276,25,5,25s-0.5-0.224-0.5-0.5S4.724,24,5,24S5.5,24.224,5.5,24.5z M13,14.36H1 c-0.199,0-0.36-0.161-0.36-0.36V1c0-0.199,0.161-0.36,0.36-0.36h12c0.199,0,0.36,0.161,0.36,0.36v13 C13.36,14.199,13.199,14.36,13,14.36z M12.64,4.36H1.36v9.28h11.28C12.64,13.64,12.64,4.36,12.64,4.36z M12.64,1.36H1.36v2.281 h11.28C12.64,3.641,12.64,1.36,12.64,1.36z M31.36,5v17c0,0.199-0.161,0.36-0.36,0.36H19.691c-0.301,0.471-0.69,0.885-1.152,1.215 c2.875,1.05,4.819,3.778,4.819,6.902l0.002,0.521L22.639,31l-0.002-0.522c0-3.078-2.09-5.729-5.083-6.45 c-0.15-0.035-0.26-0.163-0.274-0.316s0.07-0.299,0.211-0.361c1.315-0.592,2.165-1.9,2.165-3.334c0-2.017-1.64-3.657-3.656-3.657 c-2.018,0-3.66,1.64-3.66,3.657c0,1.434,0.85,2.742,2.166,3.334c0.141,0.062,0.225,0.208,0.211,0.361s-0.125,0.281-0.274,0.316 c-2.993,0.721-5.084,3.372-5.084,6.449l0.001,0.521L8.64,31l-0.001-0.522c0-3.125,1.943-5.854,4.819-6.903 c-1.138-0.812-1.838-2.134-1.838-3.559c0-2.292,1.772-4.178,4.02-4.362V5c0-0.199,0.161-0.36,0.36-0.36h15 C31.199,4.64,31.36,4.801,31.36,5z M30.64,8.36H16.36v7.295c2.246,0.184,4.017,2.07,4.017,4.362c0,0.566-0.11,1.115-0.315,1.623 H30.64V8.36z M30.64,5.36H16.36v2.28h14.28V5.36z M22,11.64h-4v0.72h4V11.64z M23.64,17.5c0-1.577,1.283-2.86,2.86-2.86 s2.86,1.283,2.86,2.86s-1.283,2.86-2.86,2.86S23.64,19.077,23.64,17.5z M28.242,16.266l-1.383,1.383l-0.004,1.955 c1.01-0.171,1.784-1.046,1.784-2.104C28.64,17.04,28.49,16.615,28.242,16.266z M24.36,17.5c0,1.055,0.769,1.928,1.774,2.103 l0.006-2.253l1.592-1.593c-0.349-0.248-0.773-0.397-1.233-0.397C25.32,15.36,24.36,16.32,24.36,17.5z M8,9.64H5v0.72h3V9.64z M3.5,21.36h3v-0.72h-3V21.36z M3.5,19.36h3v-0.72h-3V19.36z M22,13.64h-4v0.72h4V13.64z M29,11.64h-4v0.72h4V11.64z M29,9.64h-4 v0.72h4V9.64z M22,9.64h-4v0.72h4V9.64z M8.36,17.584v7.832c0,0.521-0.423,0.944-0.944,0.944H2.584 c-0.521,0-0.944-0.424-0.944-0.944v-7.832c0-0.521,0.423-0.944,0.944-0.944h4.832C7.937,16.64,8.36,17.063,8.36,17.584z M7.64,23.36 H2.36v2.056c0,0.123,0.101,0.224,0.224,0.224h4.832c0.124,0,0.224-0.101,0.224-0.224C7.64,25.416,7.64,23.36,7.64,23.36z M7.64,17.584c0-0.123-0.101-0.224-0.224-0.224H2.584c-0.124,0-0.224,0.101-0.224,0.224v5.056h5.28 C7.64,22.64,7.64,17.584,7.64,17.584z"
            />
            <rect
              id="_Transparent_Rectangle"
              style={{ fill: 'none' }}
              width="32"
              height="32"
            ></rect>
          </g>
        </svg>
        ),
        title: 'Software Development and website Design',
        discription:"sdfsdf"
      }
  ];

  return (
    <Container id='services'>
      <Title>Our Services</Title>
      <Services>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <Icon>{service.icon}</Icon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <Description>{service.description}</Description>
          </ServiceCard>
        ))}
      </Services>
    </Container>
  );
};

export default ServicePage;