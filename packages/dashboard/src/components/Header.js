import React from "react";


const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="logo">My Website</h1>
      </div>
      <div className="right-section">
        <span className="user-icon">👤</span>
      </div>
    </header>
  );
};

export default Header;
