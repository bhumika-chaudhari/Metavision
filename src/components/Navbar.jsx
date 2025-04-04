import React, { useState, useContext } from "react";
import { ThemeContext } from "../components/ThemeContext"; 
import { navItems } from "../constants/index";
import logo from "../assets/logo.png";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleNav = () => {
    setDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 py-3 backdrop-blur-lg border-b ${
        theme === "dark" ? "bg-black text-white border-neutral-700/80" : "bg-white text-black border-neutral-300"
      }`}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">MetaVision</span>
          </div>

          {/* Navigation Items */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="no-underline text-lg text-inherit hover:text-orange-400 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-800"
          >
            {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-900" />}
          </button>

          {/* Auth Buttons */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <Link to="/signin" className="py-2 px-4 border border-orange-500 rounded-md no-underline text-inherit">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white no-underline"
            >
              Create an Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNav}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileDrawerOpen && (
          <div
            className={`fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href} className="no-underline text-inherit">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="/signin" className="py-2 px-3 border rounded-md no-underline text-inherit">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white no-underline"
              >
                Create an Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
