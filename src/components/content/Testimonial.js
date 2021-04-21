import React from "react";
import BoxTestimonial from "./BoxTestimonial";
import UrlImgBoxTestimonial from "../../img/testimonial-icon.png";

const Testimonial = () => {
  return (
    <div className="container margin-top-testimonial">
      <div className="row">
        <BoxTestimonial
          name="Catherine Soft"
          note="Managing Director"
          UrlImgBoxTestimonial={UrlImgBoxTestimonial}
        >
          Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas
          scelerisque orci. Maecenas a finibus odio.
        </BoxTestimonial>
        <BoxTestimonial
          name="Kelvin Wood"
          note="Digital Marketer"
          UrlImgBoxTestimonial={UrlImgBoxTestimonial}
        >
          Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet
          nulla vitae, placerat nibh. Cras maximus venenatis molestie.
        </BoxTestimonial>
        <BoxTestimonial
          name="David Martin"
          note="Website Manager"
          UrlImgBoxTestimonial={UrlImgBoxTestimonial}
        >
          Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras
          quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.
        </BoxTestimonial>
      </div>
    </div>
  );
};

export default Testimonial;
