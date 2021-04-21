import React from "react";

const HomeBox = ({ UrlImg, title, children }) => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="home-box-wrapper">
        <div className="home-box-wrapper-img">
          <img src={UrlImg} alt="" />
        </div>
        <h2 className="home-box-wrapper-title">{title}</h2>
        <p className="home-box-wrapper-paragraph">{children}</p>
      </div>
    </div>
  );
};

export default HomeBox;
