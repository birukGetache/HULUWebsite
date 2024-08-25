import React from 'react';
import styled from '@emotion/styled';
import teamImage1 from '../assets/home.jpg'; // Update with actual paths to your images
import teamImage2 from '../assets/home.jpg';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  padding-top:80px;
  background-color: transparent;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: blue;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

const Section = styled.section`
  flex: 1 1 45%; /* Adjusts width based on available space */
  min-width: 300px; /* Minimum width for smaller screens */
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Stack vertically on small screens */
  }
`;

const SubTitle = styled.h2`
  font-size: 2em;
  color: blue;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  text-align: center; /* Center align text for better readability */
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: center; /* Center team members horizontally */
  gap: 30px; /* Increase space between team members */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on small screens */
    align-items: center; /* Center align items */
    gap: 20px; /* Adjust gap on smaller screens */
  }
`;

const TeamMember = styled.div`
  flex: 1 1 280px; /* Flex-grow, flex-shrink, and flex-basis */
  max-width: 320px; /* Slightly larger max-width */
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px; /* Increased padding for better spacing */
`;

const TeamImage = styled.img`
  width: 120px; /* Set a fixed width for images */
  height: 120px; /* Set a fixed height for images */
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover; /* Ensure images cover their container */
`;

const TeamName = styled.h3`
  font-size: 1.6em;
  color: #333;
  margin-bottom: 5px;
`;

const TeamRole = styled.p`
  font-size: 1.1em;
  color: #555;
`;

const AboutPage = () => {
  return (
    <AboutContainer  id='about'>
      <Title>About Us</Title>

      <SectionWrapper>
        <Section>
          <SubTitle>Our Mission</SubTitle>
          <Paragraph>
            Our mission is to provide exceptional service and innovative solutions to meet our clients' needs. We are committed to excellence, integrity, and customer satisfaction. Our team of experts works tirelessly to deliver top-notch results and build lasting relationships.
          </Paragraph>
        </Section>

        <Section>
          <SubTitle>Our History</SubTitle>
          <Paragraph>
            Founded in 2010, we have grown from a small startup to a leading company in our industry. Over the years, we have expanded our services, embraced new technologies, and built a team of skilled professionals dedicated to achieving our goals.
          </Paragraph>
        </Section>
      </SectionWrapper>
    </AboutContainer>
  );
};

export default AboutPage;
