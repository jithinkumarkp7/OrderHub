import { useState } from "react";
import { FaBars, FaBell, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const iconSize = 20;

  return (
    <>
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-gray-600 mr-4 bg-transparent p-2 focus:outline-none md:hidden"
          >
            <FaBars />
          </button>

          <h1 className="text-2xl font-bold text-gray-800 font-sans">
            OrderHub
          </h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/notification" className="hover:text-gray-500">
                <FaBell size={iconSize} />
              </Link>
            </li>
            <li>
              <Link to="/messages" className="hover:text-gray-500">
                <FaEnvelope size={iconSize} />
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center hover:text-gray-500"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnBqL5IX6pxZ9vUFfeqc-ezMlPfqveUbJ5yvY8xJs0u5GoYBKWXkpKXk2iv5PB53VSvQ&usqp=CAU"
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="ml-2">Jithin</span>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="hover:text-gray-500">
                <FaSignOutAlt size={iconSize} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          <div
            className={`relative bg-white w-64 h-full shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar
              isCollapsed={false}
              children={
                <>
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <Link to="/notification">
                        <FaBell size={iconSize} />
                      </Link>
                      <Link to="/messages">
                        <FaEnvelope size={iconSize} />
                      </Link>
                      <Link to="/logout">
                        <FaSignOutAlt size={iconSize} />
                      </Link>
                    </div>

                    <Link to="/profile" className="flex items-center mt-4">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnBqL5IX6pxZ9vUFfeqc-ezMlPfqveUbJ5yvY8xJs0u5GoYBKWXkpKXk2iv5PB53VSvQ&usqp=CAU"
                        alt="User"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="ml-2">Jithin</span>
                    </Link>
                  </div>
                </>
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
