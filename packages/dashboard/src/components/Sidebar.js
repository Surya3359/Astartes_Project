import React from "react";

const Sidebar = ({ isSidebarCollapsed }) => {
  return (
    <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-logo">🌐</div>
      {!isSidebarCollapsed && (
       <ul className="nav-links">
       <li>
         <span role="img" aria-label="Home">🏠</span>Home 
       </li>
       <li>
         <span role="img" aria-label="Domains">🌍</span>Domains 
       </li>
       <li>
         <span role="img" aria-label="Manage Contact">📇</span>Manage Contact 
       </li>
       <li>
         <span role="img" aria-label="Terms & Policies">📜</span>Terms & Policies 
       </li>
       <li>
         <span role="img" aria-label="Settings">⚙️</span>Settings 
       </li>
     </ul>
      )}
    </aside>
  );
};

export default Sidebar;
