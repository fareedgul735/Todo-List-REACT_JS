import React from "react";
import "./Navbar.css";

const Navbar = ({ theme, toggle }) => {
  // console.log(props);
  // const { theme, toggle } = props;
  return (
    <nav className="navbar fade-in">
      <div className="logo">📝 My Todo List</div>
      <div className="btns">
        {!theme ? (
          <button className="light-btn" onClick={toggle}>
            <i className="fa-solid fa-sun"></i>
          </button>
        ) : (
          <button className="dark-btn" onClick={toggle}>
            <i className="fa-solid fa-moon"></i>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
