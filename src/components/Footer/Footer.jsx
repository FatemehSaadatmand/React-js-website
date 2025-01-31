import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter">
        <h3>Sign Up for the NEWSLETTER</h3>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter Your Email" />
          <button><i class="fa fa-envelope"></i> Subscribe</button>
        </div>
        <ul className="social-icons">

								<li>
									<a href="#"><i class="fa fa-facebook"></i></a>
								</li>
								<li>
									<a href="#"><i class="fa fa-twitter"></i></a>
								</li>
								<li>
									<a href="#"><i class="fa fa-instagram"></i></a>
								</li>
								<li>
									<a href="#"><i class="fa fa-pinterest"></i></a>
								</li>
        </ul>
      </div>
      <div className="footer-links">
        <div className="about-us">
          <h4>ABOUT US</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, dolores eligendi iure quia quae quasi sunt, cum qui reprehenderit reiciendis explicabo </p>
          <ul >
									<li><a href="#"><i class="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
									<li><a href="#"><i class="fa fa-phone"></i>+021-95-51-84</a></li>
									<li><a href="#"><i class="fa fa-envelope-o"></i>email@email.com</a></li>
								</ul>
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

