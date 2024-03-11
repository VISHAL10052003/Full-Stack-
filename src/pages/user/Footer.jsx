import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import '../../assets/css/Footer.css';

const ListHeader = ({ children }) => {
  return <h3 className="list-header">{children}</h3>;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <motion.a
      href={href}
      className="social-button"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <ListHeader>Company</ListHeader>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-section">
          <ListHeader>Support</ListHeader>
          <a href="#">Help Center</a>
          <a href="#">Safety Center</a>
          <a href="#">Community Guidelines</a>
        </div>

        <div className="footer-section">
          <ListHeader>Legal</ListHeader>
          <a href="#">Cookie Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Law Enforcement</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">©️ Event Management. All rights reserved</p>
        <div className="social-icons">
          <SocialButton label={"Twitter"} href={"https://www.twitter.com/"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"https://www.youtube.com/"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://www.instagram.com/"}>
            <FaInstagram />
          </SocialButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;