import React from "react";
import HomeBox from "../content/HomeBox";
import SectionHome from "../content/SectionHome";
import NavBar from "../nav/NavBar";
import UrlImg from "../../img/featured-item-01.png";

const index = () => {
  return (
    <>
      <NavBar />
      <SectionHome />
      <div className="container">
        <div className="row box--home">
          <HomeBox title="Modern Strategy" UrlImg={UrlImg}>
            Customize anything in this template to fit your website needs
          </HomeBox>
          <HomeBox title="Best Relationship" UrlImg={UrlImg}>
            Contact us immediately if you have a question in mind
          </HomeBox>
          <HomeBox title="Ultimate Marketing" UrlImg={UrlImg}>
            You just need to tell your friends about our free templates
          </HomeBox>
        </div>
      </div>
    </>
  );
};

export default index;
