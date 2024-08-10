import { Link } from "react-router-dom";
import headingImg from "./website-logo.png";
import { useState } from "react";
import menuIcon from './menu-icon.png'
function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src={headingImg}
          onClick={handleMenu}
          className="h-12 w-14 rounded mr-2 cursor-pointer"
          alt="headingImage"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-auto">
          Flat Spot
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenu ? "true" : "false"}
          onClick={handleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <img src={menuIcon} alt="Menu Icon" className="w-8 h-7" />

        </button>
        <div className={`w-full md:block md:w-auto ${isMenu ? "" : "hidden"}`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block py-2 px-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:py-2 dark:text-white md:dark:text-blue-500"
                aria-current="page"
                onClick={handleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/booking"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to={"/review"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}
              >
                Review
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
