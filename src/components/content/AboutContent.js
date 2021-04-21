import React from "react";

const AboutContent = ({
  title,
  children,
  UrlAbout,
  order1,
  order2,
  borderNone,
}) => {
  return (
    <div className={"container border-bottom " + borderNone}>
      <div className="row">
        <div className={"col-xl-6 col-lg-6 " + order1}>
          <div className={"about-content-wrapper-img  "}>
            <img src={UrlAbout} alt="" />
          </div>
        </div>
        <div className={"col-xl-6 col-lg-6 " + order2}>
          <div className="about-content-wrapper-content">
            <h1 className="about-content-wrapper-content-title">{title}</h1>
            <div className="about-content-wrapper-content-paragraph">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
