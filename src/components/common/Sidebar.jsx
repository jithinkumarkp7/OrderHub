import React from "react";
import { Link } from "react-router-dom";
import { FaAssistiveListeningSystems, FaHome, FaUser } from "react-icons/fa";

const Sidebar = ({ isCollapsed, children }) => {
  const iconSize = isCollapsed ? 23 : 20;

  return (
    <div
      className={`bg-white h-screen p-5 transition-all duration-300 sticky top-0 
      ${isCollapsed ? "w-[60px]" : "w-64"}`}
    >
      <ul>
        <li className="mb-5">
          <Link to="/" className="flex items-center hover:text-gray-500">
            <FaHome
              size={iconSize}
              color={"black"}
              className={`${isCollapsed ? "" : "mr-3"}`}
            />
            {!isCollapsed && <span className="font-sans text-black">Home</span>}
          </Link>
        </li>
        <li className="mb-5">
          <Link to="/profile" className="flex items-center hover:text-gray-500">
            <FaUser
              size={iconSize}
              color={"black"}
              className={`${isCollapsed ? "" : "mr-3"}`}
            />
            {!isCollapsed && (
              <span className="font-sans text-black">Profile</span>
            )}
          </Link>
        </li>
        <li className="mb-5">
          <Link
            to="/settings"
            className="flex items-center hover:text-gray-500"
          >
            <FaAssistiveListeningSystems
              size={iconSize}
              color={"black"}
              className={`${isCollapsed ? "" : "mr-3"}`}
            />
            {!isCollapsed && (
              <span className="font-sans text-black">Settings</span>
            )}
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Sidebar;
