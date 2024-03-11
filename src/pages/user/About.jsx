import React from 'react';
import ResponsiveAppBar from '../user/Navbar';
// import hppage from '../../assets/images/hm.jpg';
import '../../assets/css/About.css';
import { colors } from '@mui/material';
import MediaCard from '../user/card';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="containerabout">
        <h1 className="heading">Welcome to Agro Cloud Finance</h1>
        <p className="paragraph">
          Where innovation meets agriculture. Our mission is to revolutionize the financial landscape for farmers and agribusinesses worldwide. With a deep understanding of the challenges faced by those in the agricultural sector, we've developed cutting-edge financial solutions tailored to meet their unique needs.
        </p>
        <p className="paragraph">
          At Agro Cloud Finance, we believe in harnessing the power of technology to empower farmers, increase efficiency, and drive sustainable growth. Through our user-friendly platform, farmers can access a range of financial services, including loans, insurance, and investment opportunities, all designed to optimize their operations and maximize profitability.
        </p>
        <p className="paragraph">
          Backed by a team of experts with extensive experience in both finance and agriculture, we're committed to providing our clients with personalized support and guidance every step of the way. Whether you're a small-scale farmer or a large agribusiness, Agro Cloud Finance is your trusted partner for success in the ever-evolving world of agriculture.
        </p>
        <p className="paragraph">
          Join us as we pave the way for a brighter future in agriculture, where financial barriers are a thing of the past, and opportunities abound. Discover the power of Agro Cloud Finance today.
        </p>
      </div>
      <br />
      <MediaCard  />
      <div className="button-container">
        <a href='/loanapply' className="btn"><span>APPLY LOAN</span></a>
      </div>
      <br/>
      <br/>
      <Footer />
    </>
  );
}

export default About;