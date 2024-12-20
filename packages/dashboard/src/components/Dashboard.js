import React, { useState } from "react";

const Dashboard = () => {
  const templates = [
    "https://imgcdn.stablediffusionweb.com/2024/9/27/df5d9c00-d1cd-4f0e-b542-097b5d1da946.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/9/15/b70796b2-acfb-4425-980a-2037e664f906.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/4/12/66a83d40-deb9-4ae8-82a6-3ccc4bbde545.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/11/26/f2394122-e813-4829-8905-0f2fb72b5973.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/10/10/f488af29-0644-49d6-9e35-ead855a81255.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/9/27/e1ba24a5-b7c2-43e8-b4f6-772a15207043.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/10/17/898ee56d-9729-4fa4-8f5c-fb514cdd37d9.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/10/23/b5ba9baa-d55f-4851-9117-e977f10dc64f.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/12/17/e5d6d935-5545-4da9-9b39-d815a8479467.jpg",
  ];

  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const templatesPerPage = 9; // Number of templates per page
  const totalPages = Math.ceil(templates.length / templatesPerPage);

  const handleMouseEnter = (index) => {
    setHoveredTemplate(index);
    setShowEdit(false);
    setShowView(false);

    // Sequentially display the buttons
    setTimeout(() => {
      setShowEdit(true);
      setTimeout(() => {
        setShowView(true);
      }, 200); // Delay for the second button
    }, 200); // Delay for the first button
  };

  const handleMouseLeave = () => {
    setHoveredTemplate(null);
    setShowEdit(false);
    setShowView(false);
  };

  // Get templates for the current page
  const startIndex = (currentPage - 1) * templatesPerPage;
  const currentTemplates = templates.slice(startIndex, startIndex + templatesPerPage);

  // Pagination controls
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <main className="content">
      <div className="breadcrumb">
        Home / <span className="active">Dashboard</span>
      </div>
      <h2 className="title">Select Your Template To Host</h2>
      <p className="subtitle">
        Browse the latest free and paid business, portfolio, and responsive website templates. Customize any template
        in our App and host with your own paid domain.
      </p>
      <select className="category-dropdown">
        <option>Select Category</option>
        <option>Business</option>
        <option>Portfolio</option>
        <option>Education</option>
      </select>

      <div className="template-section">
        <div className="template-grid">
          {currentTemplates.map((template, index) => (
            <div
              className="template-card"
              key={startIndex + index}
              onMouseEnter={() => handleMouseEnter(startIndex + index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`template-overlay ${
                  hoveredTemplate === startIndex + index ? "active" : ""
                }`}
              ></div>
              <img
                src={template}
                alt={`Template ${startIndex + index + 1}`}
                className={`template-image ${
                  hoveredTemplate === startIndex + index ? "zoom" : ""
                }`}
              />
              {hoveredTemplate === startIndex + index && (
                <div className="buttons-container">
                  {showEdit && <button className="edit-button">Edit</button>}
                  {showView && <button className="view-button">View</button>}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
 