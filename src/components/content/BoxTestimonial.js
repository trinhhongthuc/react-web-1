import React from "react";

const BoxTestimonial = ({ UrlImgBoxTestimonial, children, name, note }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="box-testimonial-wrapper">
          <div className="box-testimonial-wrapper-img">
            <img src={UrlImgBoxTestimonial} alt="" />
          </div>
          <div className="box-testimonial-wrapper-paragraph">{children}</div>

          <div className="box-testimonial-wrapper-content">
            <div className="box-testimonial-wrapper-content-avatar"></div>
            <div className="box-testimonial-wrapper-content-info">
              <div className="box-testimonial-wrapper-content-info-name">
                {name}
              </div>
              <div className="box-testimonial-wrapper-content-info-note">
                {note}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxTestimonial;
