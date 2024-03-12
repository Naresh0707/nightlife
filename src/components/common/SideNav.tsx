"use client"
import React, { useState } from 'react';
import { data } from "./data/SideNavData";
import Link from 'next/link';

const Sidenav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavItemClick = () => {
    // Close the sidebar when a navigation item is clicked
    setSidebarOpen(false);
  };

  return (
    <section>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          ✕
        </button>
        <div className="h-full py-1 text-sm overflow-y-auto rounded-[10px] ms-3">
          <ul className="space-y-1 bg-white font-medium">
            {data.map((a) => (
              <li
                key={a.id}
                className={`group pt-1 bg-gray-100 ${a.color} dark:bg-gray-800 group hover-class hov`}
              >
                <a
                  href="#"
                  data-id={`#${a.id}`}
                  className="border-l-2 flex items-center p-2"
                  style={{ borderColor: a.color }}
                  onClick={handleNavItemClick}
                >
                  <img src={a.svg} className="hover" alt={a.nav_name} />
                  <span className="ms-3">{a.nav_name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!isSidebarOpen && (
        <div id="main">
          <button
            id="openbtn"
            className="openbtn"
            onClick={openSidebar}
          >
            ☰
          </button>
        </div>
      )}

      <aside
        className={`fixed z-40 h-screen transition-transform ${isSidebarOpen ? '' : '-translate-x-full sm:translate-x-0'}`}
        aria-label="Sidebar"
      >
        <div className="h-full Sidenav py-1 text-sm overflow-y-auto bg-gray-100  rounded-[10px] ms-3 ">
          <ul className="space-y-1  bg-white font-medium">
            {data.map((a) => (
              <li
                id={`item-${a.id}`}
                key={a.id}
                className={`group pt-1 bg-gray-100 ${a.color} dark:bg-gray-800 group  hover-class hov`}
              >
                <Link
                  href={`${a.link}`}
                  data-id={`#${a.id}`}
                  className={`border-l-2 flex items-center p-2`}
                  style={{ borderColor: a.color }}
                  onClick={handleNavItemClick}
                >
                  <img src={a.svg} className="hover" alt={a.nav_name} />
                  <span className="ms-3 ">{a.nav_name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default Sidenav;

