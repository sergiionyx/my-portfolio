import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-cont">
        <nav className="nav-barr">
          <Link className="link-decor" to="/">
            Sergii Onyshchenko
          </Link>

          <div className="d-flex">
            <Link className="link-decor" to="/">
              About Me
            </Link>
            <Link className="link-decor" to="/portfolio">
              Portfolio
            </Link>
            <Link className="link-decor" to="/contact">
              Contact
            </Link>{" "}
            <Link className="link-decor" to="/resume">
              Resume
            </Link>{" "}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
