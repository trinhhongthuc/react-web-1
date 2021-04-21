import React from "react";
import Button from "../Button";

const BoxBlogEntry = ({ title, UrlBlogEntry, children }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="blog-entry-wrapper">
          <div className="blog-entry-wrapper-img">
            <img src={UrlBlogEntry} alt="" />
          </div>

          <h3 className="blog-entry-wrapper-title">{title}</h3>

          <div className="blog-entry-wrapper-paragraph">{children}</div>
          <div className="blog-entry-wrapper-button">
            <Button title="Read more"></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxBlogEntry;
