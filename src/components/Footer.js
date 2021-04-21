import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiRss } from "react-icons/bi";
import { DiReact } from "react-icons/di";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer-margin">
          <div className="footer-wrapper">
            <div className="footer-wrapper-icon">
              <AiFillFacebook />
            </div>
            <div className="footer-wrapper-icon">
              <AiFillTwitterCircle />
            </div>
            <div className="footer-wrapper-icon">
              <AiFillLinkedin />
            </div>
            <div className="footer-wrapper-icon">
              <BiRss />
            </div>
            <div className="footer-wrapper-icon">
              <DiReact />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="footer-paragraph">
            COPYRIGHT © 2020 SOFTY PINKO COMPANY - DESIGN: TEMPLATEMO
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
