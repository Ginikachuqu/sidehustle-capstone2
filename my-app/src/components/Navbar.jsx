import React from "react";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // Hooks
  const navigate = useNavigate();

  // Functions
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={handleClick}>
        <img src={logo} alt="" />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/products"> Products </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
