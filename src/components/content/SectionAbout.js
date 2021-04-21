import React from "react";
import AboutContent from "./AboutContent";
import UrlAbout1 from "../../img/left-image.png";
import UrlAbout2 from "../../img/right-image.png";

const SectionAbout = () => {
  return (
    <>
      <AboutContent
        title="Let’s discuss about you project"
        UrlAbout={UrlAbout1}
        order1="order-1"
        order2="order-2"
      >
        Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit,
        at finibus leo efficitur. Nam gravida purus non sapien auctor, ut
        aliquam magna ullamcorper.
      </AboutContent>

      <AboutContent
        title="We can help you to grow your business"
        UrlAbout={UrlAbout2}
        order1="order-2"
        order2="order-1"
        borderNone="border-none"
      >
        Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a
        bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed
        eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.
      </AboutContent>
    </>
  );
};

export default SectionAbout;
