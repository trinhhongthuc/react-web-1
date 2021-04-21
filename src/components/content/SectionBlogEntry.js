import React from "react";
import BoxBlogEntry from "./BoxBlogEntry";
import BoxEntry1 from "../../img/blog-item-01.png";
import BoxEntry2 from "../../img/blog-item-02.png";
import BoxEntry3 from "../../img/blog-item-03.png";
const SectionBlogEntry = () => {
  return (
    <>
      <div className="container ">
        <div className="row margin-blog-entry">
          <BoxBlogEntry
            title="Vivamus ac vehicula dui"
            UrlBlogEntry={BoxEntry1}
          >
            Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
            Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas
            augue.
          </BoxBlogEntry>

          <BoxBlogEntry
            title="Phasellus convallis augue"
            UrlBlogEntry={BoxEntry2}
          >
            liquam commodo ornare nisl, et scelerisque nisl dignissim ac.
            Vestibulum finibus urna ut velit venenatis, vel ultrices sapien
            mattis.
          </BoxBlogEntry>

          <BoxBlogEntry title="Nam gravida purus non" UrlBlogEntry={BoxEntry3}>
            Maecenas eu erat vitae dui convallis consequat vel gravida nulla.
            Vestibulum finibus euismod odio, ut tempus enim varius eu.
          </BoxBlogEntry>
        </div>
      </div>
    </>
  );
};

export default SectionBlogEntry;
