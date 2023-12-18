import  { useState } from "react";
import { SideNavbar } from "./sideNavbar.component";

export const LargeNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <nav className="flex justify-between bg-neutral-600 py-6">
        <div id="logo" className="max-h-32">
          <img
            src="/dummy-logo.png"
            alt="Dummy Img"
            className="ml-5 w-2/4 "
          ></img>
        </div>

        {/* Authenticated Links */}
        {isAuthenticated && (
          <div>
            <ul>
              <li>Dashboard</li>
              <li>Profile</li>
              <li>Logout</li>
            </ul>
          </div>
        )}

        {!isAuthenticated && (
          <div className="flex items-center gap-x-4">
            <div>
              <h4 className="text-lg font-bold">Welcome to custom navbar</h4>
            </div>
            <div>
              <span className="mr-6 bg-slate-50 p-2 rounded-lg shadow-lg hover:bg-red-300">
                Login
              </span>
            </div>
          </div>
        )}

        {/* Public Links */}
        <div className="flex items-center">
          <ul className="flex justify-between">
            <li className="mr-6 bg-slate-50 p-2 rounded-lg shadow-lg hover:bg-red-300">
              Home
            </li>
            <li className="mr-6 bg-slate-50 p-2 rounded-lg shadow-lg hover:bg-red-300">
              About
            </li>
            <li className="mr-6 bg-slate-50 p-2 rounded-lg shadow-lg hover:bg-red-300">
              Contact
            </li>
            <li
              className="mr-6 bg-slate-50 p-2 rounded-lg shadow-lg"
              onClick={handleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>

      {/* Dropdown */}

      {isDropdownOpen && (
        <div >
          <SideNavbar handleDropdown={handleDropdown} />
        </div>
      )}
    </>
  );
};
