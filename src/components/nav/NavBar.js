import React from "react";
import { Link } from "react-scroll";
import "../sass/style.scss";
import Logo from "../../img/logo.png";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-menu">
        <ul className="nav-menu-ul">
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              top={0}
            >
              Home
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              top={0}
            >
              About
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="work-process"
              spy={true}
              smooth={true}
              duration={1000}
              top={0}
            >
              Work process
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="testimonial"
              spy={true}
              smooth={true}
              duration={1000}
              top={0}
            >
              Testimonial
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="pricing-table"
              spy={true}
              smooth={true}
              duration={1000}
              top={0}
            >
              Pricing Tables
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="blogs-entries"
              spy={true}
              smooth={true}
              duration={1000}
              top={0}
            >
              Blogs entries
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              top={0}
            >
              Contacts us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
