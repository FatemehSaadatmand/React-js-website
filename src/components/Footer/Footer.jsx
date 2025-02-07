import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter">
        <p className="newsletter-title">Sign Up for the <strong>NEWSLETTER</strong></p>
        <div className="newsletter-input">
          <input className="email-input" type="email" placeholder="Enter Your Email" />
          <button className="btn subscribe-email"><i class="fa fa-envelope"></i> Subscribe</button>
        </div>
        <ul className="social-icons">

								<li>
									<a href="#"><i class="social-icons-i fa fa-facebook"></i></a>
								</li>
								<li>
									<a href="#"><i class="social-icons-i fa fa-twitter"></i></a>
								</li>
								<li>
									<a href="#"><i class="social-icons-i fa fa-instagram"></i></a>
								</li>
								<li>
									<a href="#"><i class="social-icons-i fa fa-pinterest"></i></a>
								</li>
        </ul>
      </div>
      <div className="footer-links">
        <div className="about-us">
          <h4>ABOUT US</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, dolores eligendi iure quia quae quasi sunt, cum qui reprehenderit reiciendis explicabo </p>
          <ul >
									<li><a className="about-us-a" href="#"><i class="about-us-i fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
									<li><a className="about-us-a" href="#"><i class="about-us-i fa fa-phone"></i>+021-95-51-84</a></li>
									<li><a className="about-us-a" href="#"><i class="about-us-i fa fa-envelope-o"></i>email@email.com</a></li>
								</ul>
        </div>
        <div className="categories">
          <h4>CATEGORIES</h4>
          <ul>
            <li className='p-10'>Electronics</li>
            <li className='p-10'>Clothing</li>
            <li className='p-10'>Home & Garden</li>
            <li className='p-10'>Books</li>
            <li className='p-10'>Sports</li>
          </ul>
        </div>
        <div className="information">
          <h4>INFORMATION</h4>
          <ul>
            <li className='p-10'>About Us</li>
            <li className='p-10'>Contact Us</li>
            <li className='p-10'>Privacy Policy</li>
            <li className='p-10'>Orders & Returns</li>
            <li className='p-10'>Terms & Conditions</li>

          </ul>
        </div>
        <div className="service">
          <h4>SERVICE</h4>
          <ul>
            <li className='p-10'>My Account</li>
            <li className='p-10'>View Cart</li>
            <li className='p-10'>Wishlist</li>
            <li className='p-10'>Track My Order</li>
            <li className='p-10'>Help</li>

          </ul>
        </div>
      </div>
      <div className="bottom-footer">
						<div>
							<ul class="footer-payments">
								<li><a href="#"><i class="fa fa-cc-visa payment-icons"></i></a></li>
								<li><a href="#"><i class="fa fa-credit-card payment-icons"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-paypal payment-icons"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-mastercard payment-icons"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-discover payment-icons"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-amex payment-icons"></i></a></li>
							</ul>
							<span class="copyright">
								Copyright ©2025 All rights reserved
							</span>
						</div>
			</div>
    </footer>
  );
};

export default Footer;

