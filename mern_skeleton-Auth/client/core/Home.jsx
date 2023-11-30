import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LogoImage from "./../assets/images/Logo.png";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./Home.css";
import SparklingMindsLogo from "./../assets/images/Logo.png";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    display: "flex",
    alignItems: "center",
    minHeight: 400,
    width: "50%",
    margin: "0 auto",
    height: "100%",
    objectFit: "cover",
    marginBottom: theme.spacing(2),
  },
  navbar: {
    backgroundColor: "#333",
    padding: "15px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between", // Adjusted to space out the links and cart
    alignItems: "center", // Center items vertically
  },
  navbarLink: {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontWeight: "bold",
    transition: "color 0.3s ease-in-out",
  },
  navbarLinkHover: {
    textDecoration: "underline",
  },
  cartIcon: {
    color: "white",
    fontSize: 24,
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
  },
  cartIconHover: {
    color: "#e44d26",
  },
  iconButton: {
    color: "white",
    fontSize: 24,
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
  },
  search: {
    marginLeft: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([]);
  const cartIcon = "🛒";

  const handleCartClick = () => {
    // Handle your cart click logic here
    console.log("Show Cart:", cartItems);
  };

  const handleCartKeyPress = (event) => {
    // Handle keyboard interaction (e.g., Enter key) for the cart
    if (event.key === "Enter") {
      handleCartClick();
    }
  };
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
      {/* Render the navbar */}
      <div className={classes.navbar}>
        <div>
          {/* Add the Sparkling Minds logo */}
          <img
            src={SparklingMindsLogo}
            alt="Sparkling Minds Logo"
            className={classes.logoImage}
          />
          {/* Render the navbar */}
          <div className={classes.navbar}>
            <div>
              <Link to="/" className={classes.navbarLink}>
                Home
              </Link>{" "}
              |{" "}
              <Link to="/users" className={classes.navbarLink}>
                Users
              </Link>{" "}
              |{" "}
              <Link to="/signup" className={classes.navbarLink}>
                Signup
              </Link>{" "}
              |{" "}
              <Link to="/signin" className={classes.navbarLink}>
                Signin
              </Link>{" "}
              |{" "}
              <Link to="/" className={classes.navbarLink}>
                Sign-out
              </Link>{" "}
              |{" "}
              <Link to="/about" className={classes.navbarLink}>
                About
              </Link>{" "}
              |{" "}
              <Link to="/products" className={classes.navbarLink}>
                Products
              </Link>{" "}
              |{" "}
              <Link to="/contact" className={classes.navbarLink}>
                Contact
              </Link>{" "}
              |{" "}
              <Link to="/admin" className={classes.navbarLink}>
                Admin
              </Link>
              <Link to="/testpage" className={classes.navbarLink}>
                Security Test
              </Link>
            </div>
            {/* Search Bar, Loved Items, and Cart Icons */}
            <div className={classes.navbarLink}>
              <TextField
                id="search"
                label="Search"
                variant="outlined"
                className={classes.search}
              />
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <button
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCartKeyPress(e);
                  }
                }}
                onClick={() => addToCart(/* pass your item here */)}
              >
                {cartIcon}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render the card */}
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Sparkling Minds
        </Typography>
        <CardMedia
          className={classes.media}
          image={LogoImage}
          title="Sparkling Minds"
        />
        <CardContent>
          <Typography variant="body2" component="p">
            Sparkle in Every Story. Find Your Glitter. Find that special
            something for that special someone, from simple to statement to
            sentimental. Shop our top categories.
          </Typography>
        </CardContent>
      </Card>
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
          <p>Email: info@example.com</p>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
