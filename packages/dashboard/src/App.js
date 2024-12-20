import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import './App.css';
import'./Header.css';
import'./sidebar.css';
import'./Dashboard.css';

const App = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="app">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Main Container */}
      <div className="main">
        {/* Sidebar */}
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} />

        {/* Dashboard */}
        <Dashboard />
      </div>
    </div>
  );
};
export default App;
