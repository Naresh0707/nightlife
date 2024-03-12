"use client";
import React, { useState } from "react";


export default function VideoList() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const sidebarClass = isSidebarOpen
    ? "navigation-panel expanded"
    : "navigation-panel";

  return (
    <div className="flex mt-5 relative">
      <div>
        <button
          className="toggle-button flex"
          onClick={toggleSidebar}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
       
        <div className={`${sidebarClass} mt-5 absolute`}>
          <p>Navigation content here...</p>
          <p>Navigation content here...</p>

          <p>Navigation content here...</p>

          <p>Navigation content here...</p>

          <p>Navigation content here...</p>
        </div>
      </div>
      <div>
        <h1 className="text-blue-500 ms-3 mt-2">All Videos</h1>
      </div>
    </div>
  );
}
