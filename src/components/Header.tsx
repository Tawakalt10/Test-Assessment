import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        Free sample with every order! Free Shipping on Orders Above ₹1200
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-container">
          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo-placeholder">
              {/* LEAVE SPACE FOR LOGO IMAGE HERE */}
               {/* <img src="/" alt="Are-zōu" className="logo-image" />  */}
            </div>
            <div className="brand-text">
              <h1 className="brand-name">Are-zōu</h1>
              <p className="brand-tagline">By T. Raheem</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="nav-menu">
            <a href="#shop" className="nav-link">SHOP</a>
            <a href="#resources" className="nav-link">RESOURCES</a>
            <a href="#about" className="nav-link">ABOUT US</a>
          </nav>

          {/* Action Icons */}
          <div className="header-actions">
            <button className="icon-button" aria-label="Search">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <button className="icon-button" aria-label="Account">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="4" strokeWidth="2" />
              </svg>
            </button>

            <button className="icon-button" aria-label="Cart">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1" strokeWidth="2" />
                <circle cx="20" cy="21" r="1" strokeWidth="2" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;