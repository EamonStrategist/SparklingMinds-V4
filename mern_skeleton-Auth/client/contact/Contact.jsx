import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/signup">Signup</a>
        <a href="/signin">Signin</a>
        <a href="/signout">Sign-out</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
        <a href="/admin">Admin</a>
        {/* Add more links as needed */}
      </div>

      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-form">
          <div className="input-group">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input className="input" type="text" id="name" name="name" />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input className="input" type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="message">
              Message:
            </label>
            <textarea
              className="input"
              id="message"
              name="message"
              rows="4"
            ></textarea>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          {/* Social media icons */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram.jpg" alt="Instagram" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter.jpg" alt="twitter" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
        </div>
        {/* Gmail icon for more info */}
        <div className="gmail-icon">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
        {/* Contact Information */}
        <div className="contact-info">
          <p>Contact us: </p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; 2023 Sparkling Minds. All rights reserved.</p>
          <p>Email: info@sparklingMinds.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
