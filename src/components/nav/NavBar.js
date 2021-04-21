import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
              top={0}
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
              // onClick={scroll.scrollToTop}
            >
              Home
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="about"
              top={0}
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
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
              duration={100}
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
              duration={100}
              top={0}
            >
              Testimonial
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="pricing-plans"
              spy={true}
              smooth={true}
              duration={100}
              top={0}
            >
              Pricing Tables
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="blog-entry"
              spy={true}
              smooth={true}
              duration={100}
              top={0}
            >
              Blogs entries
            </Link>
          </li>
          <li className="nav-menu-ul-li">
            <Link
              activeClass="active"
              className="nav-link"
              to="contact-us"
              spy={true}
              smooth={true}
              duration={100}
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
