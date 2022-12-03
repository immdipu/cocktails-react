import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg py-1">
      <div className="flex justify-between px-16 py-5 items-center">
        <Link to="/">
          <img
            src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg"
            alt="cocktail db logo"
          />
        </Link>
        <ul className="flex gap-7">
          <li>
            <NavLink to="/" className="text-xl font-semibold text-gray-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-xl font-semibold text-gray-600"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
