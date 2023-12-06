import React from "react";
import "./Admin.css";

const Admin = () => {
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

      <div className="admin-container">
        {/* Add your admin content here */}
        <h1>Admin</h1>
        <div className="admin-form">
          {/* Add your admin form elements here */}
          <p><a href="/admin/products/1">Products</a></p>
          <p><a href="/admin/productslist">Products List</a></p>

        </div>
      </div>
    </div>
  );
};

export default Admin;
