import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-cont">
        <nav className="nav-barr">
          <Link className="link-decor" to="/my-portfolio">
            Sergii Onyshchenko
          </Link>

          <div className="d-flex">
            <Link className="link-decor" to="/my-portfolio/">
              About Me
            </Link>
            <Link className="link-decor" to="/my-portfolio/portfolio">
              Portfolio
            </Link>
            <Link className="link-decor" to="/my-portfolio/contact">
              Contact
            </Link>{" "}
            <Link className="link-decor" to="/my-portfolio/resume">
              Resume
            </Link>{" "}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
