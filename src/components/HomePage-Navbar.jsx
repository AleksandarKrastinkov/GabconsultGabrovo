import React, { useState } from 'react';
import navIcon1 from '../assets/Img/nav-icon1.svg';
import navIcon2 from '../assets/Img/nav-icon2.svg';
import navIcon3 from '../assets/Img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

const HomePageNavbar = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="d-flex">
          {['Cameras', 'Lenses', 'Accessories'].map((button, index) => (
            <div
              key={index}
              className="navbar-item"
              onMouseEnter={() => handleMouseEnter(button)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="navbar-button btn btn-dark">
                {button}
                <span className={`arrow ${hoveredButton === button ? 'up' : 'down'}`}></span>
              </button>
              {hoveredButton === button && (
                <div className="dropdown">
                  <div className="dropdown-left">
                    <button className="dropdown-left-button">Learn More</button>
                  </div>
                  <div className="dropdown-right">
                    {['Overview', 'Specifications', 'Reviews'].map((option, idx) => (
                      <button key={idx} className="dropdown-right-button btn btn-dark">
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <span className="navbar-text ml-auto d-flex align-items-center">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/aleksandar-krastinkov-14b755308"><img src={navIcon1} alt="" /></a>
            <a href="https://www.facebook.com/profile.php?id=100009374042970"><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/alexsandar_kr/"><img src={navIcon3} alt="" /></a>
          </div>
          <HashLink to='#connect'>
            <button className="vvd"><span>Let’s Connect</span></button>
          </HashLink>
        </span>
      </div>
    </nav>
  );
};

export default HomePageNavbar;
