import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h1 className="footer-logo">Techyaman</h1>
            <p className="">
              Your go-to destination for the latest in tech and gadgets.
              Explore, Shop, and Stay Techy!
            </p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4 className="text-uppercase">Shop</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/categories/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/categories/clothing">Clothing</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4 className="text-uppercase">Customer Service</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/returns">Returns</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase">Contact Information</h4>
            <ul className="list-unstyled">
              <li>
                <FaEnvelope /> support@techyaman.com
              </li>
              <li>
                <FaPhone /> +1 (555) 123-4567
              </li>
              <li>
                <a href="https://techyaman.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <FaGlobe /> techyaman.netlify.app
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="">
          &copy; {new Date().getFullYear()} Techyaman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
