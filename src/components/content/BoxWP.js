import React from "react";

const BoxWP = ({ UrlImgWP, title, children }) => {
  return (
    <div className="col-xl-2 col-lg-2">
      <div className="word-process-wrapper">
        <div className="word-process-wrapper-img">
          <img src={UrlImgWP} alt="" />
        </div>
        <h2 className="word-process-wrapper-title">{title}</h2>

        <div className="word-process-wrapper-paragraph">{children}</div>
      </div>
    </div>
  );
};

export default BoxWP;
