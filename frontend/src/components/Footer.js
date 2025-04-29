import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>PowerLiftZone</h3>
          <p>500 Terry Francine Street</p>
          <p>San liverpool, EU abc street</p>
          <p>Email: info@PowerLiftZone.com</p>
          <p>Phone: 123-456-7890</p>
          <div className="social-icons">
            <a href="www.instagram.com" className="fab fa-instagram"><span></span></a><br/>
            <a href="www.facebook.com" className="fab fa-facebook"><span></span></a>
            <a href="www.x.com" className="fab fa-twitter"><span></span></a>
          </div>
          <div className="app-links">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111"
              alt="App Store"
            />
          </div>
        </div>

        {/* Membership Form */}
        <div className="membership-form">
          <h3>Not a Member? Get a 45 Day Free-Trial</h3>
          <p>Fill out the form below and a sales rep will get in touch shortly.</p>
          <form>
            <div>
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name *" />
            </div>
            <input type="email" placeholder="Email *" />
            <textarea placeholder="Add a message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="menu-links">
          <h3>Menu</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/facility">Facilities</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/feedbackform">Feedback</a></li>
            <li><a href="/membership">Membership</a></li>
            {/* <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li> */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 PowerLiftZone . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
