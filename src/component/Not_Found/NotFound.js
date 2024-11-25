import React from "react";
import "./notfound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="back-to-home">
        Go back to Home
      </a>
    </div>
  );
}

export default NotFound;
