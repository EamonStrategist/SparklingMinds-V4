import React, { useState } from "react";
import "./About.css";

const About = () => {
  const images = [
    "/images/pexels-ari-roberts-9649448.jpg",
    "/images/pexels-castorly-stock-3641056.jpg",
    "/images/pendants (2).jpg",
    "/images/necklaces (2).jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/signup">Signup</a>
        <a href="/signin">Signin</a>
        <a href="/signout">Sign-out</a>
        <a href="/about">About Us</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
        <a href="/admin">Admin</a>
        {/* Add more links as needed */}
      </div>

      <h1>About Us</h1>
      {/* Image Carousel */}
      <div className="image-carousel">
        <button onClick={handlePrev} aria-label="Previous">
          &#9665;
        </button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button onClick={handleNext} aria-label="Next">
          &#9655;
        </button>
      </div>
      {/* Explore by Category */}
      <div className="explore-section">
        <h2>EXPLORE BY CATEGORY</h2>
        <div className="category-images">
          <a href="/earrings">
            <img src="/images/earrings.jpg" alt="Earrings" />
          </a>
          <a href="/necklaces">
            <img src="/images/necklaces.jpg" alt="Necklaces" />
          </a>
          <a href="/rings">
            <img src="/images/rings.jpg" alt="Rings" />
          </a>
          <a href="/bracelets">
            <img src="/images/bracelets (2).jpg" alt="Bracelets" />
          </a>
          <a href="/bracelets">
            <img
              src="/images/pexels-kristina-paukshtite-885218.jpg"
              alt="Different Bracelet"
            />
          </a>

          <a href="/pendants">
            <img src="/images/pendants.jpg" alt="Pendants" />
          </a>
          <a href="/pendants">
            <img src="/images/earrings (2).jpg" alt="Pendants" />
          </a>
          <a href="/pendants">
            <img src="/images/necklaces (2).jpg" alt="Pendants" />
          </a>
        </div>
      </div>
      {/* Add your content here */}
      {/* Mission and Vision */}
      <div className="mission-vision-section">
        <h2>Our Mission</h2>
        <p>
          "To provide exquisite, handcrafted jewelry that celebrates life's
          special moments, offering timeless elegance and lasting beauty. We are
          committed to delivering exceptional craftsmanship, unparalleled
          quality, and personalized service to our customers, making each piece
          a cherished symbol of love, style, and individuality."
        </p>
        <h2>Our Vision</h2>
        <p>
          "To be the preferred destination for discerning individuals seeking
          uniquely crafted jewelry that transcends trends and stands the test of
          time. We envision a world where our jewelry becomes an integral part
          of life's most meaningful occasions, inspiring joy, and creating
          lasting memories. Through innovation, passion, and a dedication to
          excellence, we aim to be a leader in the jewelry industry, known for
          our artistry, integrity, and commitment to customer satisfaction."
        </p>

        {/* Testimonials */}
        <div className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <p>
              "I absolutely love the jewelry from Sparkling Minds! Each piece is
              beautifully crafted and unique. The attention to detail is
              exceptional."
            </p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star-icon">
                  ★
                </span>
              ))}
            </div>
            <p>- Sarah D.</p>
          </div>

          <div className="testimonial">
            <p>
              "The quality of the jewelry is outstanding. I've purchased
              multiple pieces for myself and as gifts, and they are always
              well-received."
            </p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star-icon">
                  ★
                </span>
              ))}
            </div>
            <p>- Michael S.</p>
          </div>

          <div className="testimonial">
            <p>
              "Sparkling Minds has a fantastic selection of jewelry. The online
              shopping experience is seamless, and the customer service is
              top-notch."
            </p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star-icon">
                  ★
                </span>
              ))}
            </div>
            <p>- Emily W.</p>
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
            <p>Contact us:</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@sparklingMinds.com</p>
          </div>

          {/* Copyright */}
          <div className="copyright">
            <p>&copy; 2023 Sparkling Minds. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
