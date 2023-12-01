import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

const Users = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '', 
  });

  const [editable, setEditable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
  };

  return (
    <>
        {/* Render the navbar */}
        <div className="navbar">
          <Link to="/" className="link">
            Home
          </Link>{' '}
          |{' '}
          <Link to="/users" className="link">
            USERS
          </Link>{' '}
          |{' '}
          <Link to="/signup" className="link">
            SIGNUP
          </Link>{' '}
          |{' '}
          <Link to="/signin" className="link">
            SIGNIN
          </Link>{' '}
          |{' '}
          <Link to="/" className="link">
            Sign-out
          </Link>{' '}
          |{' '}
          <Link to="/about" className="link">
            About
          </Link>{' '}
          |{' '}
          <Link to="/products" className="link">
            Products
          </Link>{' '}
          |{' '}
          <Link to="/contact" className="link">
            Contact
          </Link>{' '}
          |{' '}
          <Link to="/admin" className="link">
            Admin
          </Link>
        </div>
      {/* User Profile Section */}
      <div className="user-profile-box">
        <h2>User Profile</h2>
        <div className="user-profile"></div>
        {editable ? (
          <form>
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              id="userEmail"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="userPassword">Password:</label>
            <input
              type="password"
              id="userPassword"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <br />

            <button onClick={handleSave}>Save</button>
          </form>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Password:</strong> ***** 
            </p>

            <button onClick={handleEdit}>Edit</button>
          </>
        )}

      </div>
        <footer className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.jpg" alt="Instagram" />
          </a>
          <br></br>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
        </div>
      </footer>
           
      </>
    );
  };

export default Users;