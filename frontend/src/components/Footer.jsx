/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Binary Bites</div>
          <div className="right">
            <p>MG Road, Bengaluru</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By AIML-DSCE</p>
          </div>
          <div className="centre">
            <p>Helped by Reshma Ma'am</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By AIML-DSCE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;