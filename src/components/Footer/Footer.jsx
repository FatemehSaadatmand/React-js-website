import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter">
        <h3>Sign Up for the NEWSLETTER</h3>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
        <div className="social-icons">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>
      </div>
      <div className="footer-links">
        <div className="about-us">
          <h4>ABOUT US</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, dolores eligendi iure quia quae quasi sunt, cum qui reprehenderit reiciendis explicabo </p>
        </div>
        <div className="categories">
          <h4>CATEGORIES</h4>
          <ul>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home & Garden</li>
            <li>Books</li>
            <li>Sports</li>
          </ul>
        </div>
        <div className="information">
          <h4>INFORMATION</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Orders & Returns</li>
            <li>Terms & Conditions</li>

          </ul>
        </div>
        <div className="service">
          <h4>SERVICE</h4>
          <ul>
            <li>My Account</li>
            <li>View Cart</li>
            <li>Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>

          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

