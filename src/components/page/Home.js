import React from "react";
import HomeBox from "../content/HomeBox";
import SectionHome from "../content/SectionHome";
import NavBar from "../nav/NavBar";
import UrlImg from "../../img/featured-item-01.png";
import SectionAbout from "../content/SectionAbout";
import SectionWorkProcess from "../content/SectionWorkProcess";
import Heading from "../Heading";
import Testimonial from "../content/Testimonial";
import PricingPlans from "../content/PricingPlans";
import SectionBlogEntry from "../content/SectionBlogEntry";
import SectionContact from "../content/SectionContact";
import Footer from "../Footer";

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
      <div className="about" id="about">
        <SectionAbout className="about"></SectionAbout>
      </div>

      <div className="work-process" id="work-process">
        <Heading title="Work Process">
          Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet
          interdum, vehicula ut ex. Donec ante diam.
        </Heading>
        <SectionWorkProcess />
      </div>
      <div className="testimonial" id="testimonial">
        <Heading
          title="What do they say?"
          colorTitle="colorTitle"
          colorParagraph="colorParagraph"
        >
          Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla,
          at accumsan elit eros a turpis. Ut sagittis lectus libero.
        </Heading>
        <Testimonial></Testimonial>
      </div>

      <div className="pricing-plans" id="pricing-plans">
        <Heading
          title="Pricing Plans"
          colorTitle="colorTitle"
          colorParagraph="colorParagraph"
        >
          Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis
          arcu elementum, quis congue risus volutpat.
        </Heading>
        <PricingPlans></PricingPlans>
      </div>

      <div className="blog-entry" id="blog-entry">
        <Heading
          title="Blog Entries"
          colorTitle="colorTitle"
          colorParagraph="colorParagraph"
        >
          Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet
          nulla vitae, placerat nibh. Cras maximus venenatis molestie.
        </Heading>

        <SectionBlogEntry></SectionBlogEntry>
      </div>

      <div className="contact-us" id="contact-us">
        <Heading
          title="Talk To Us"
          colorTitle="colorTitle"
          colorParagraph="colorParagraph"
        >
          Maecenas pellentesque ante faucibus lectus vulputate sollicitudin.
          Cras feugiat hendrerit semper.
        </Heading>

        <SectionContact></SectionContact>
      </div>
      <Footer></Footer>
    </>
  );
};

export default index;
