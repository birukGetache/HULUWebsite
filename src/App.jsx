import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import { Helmet } from 'react-helmet';
import Home from './components/Home'
// Sample pages for routing
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Services = () => <h2>Services Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
        <Helmet>
        <title>My React App</title>
        <meta name="description" content="A sample React application for general commission information and more." />
        <meta name="keywords" content="HULU, General Commission, Ethiopia, commission company, Hullu, soming else" />
        <meta name="author" content="Your Name" />
      </Helmet>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes> */}

      <Home/>
    </Router>
  );
}

export default App;
