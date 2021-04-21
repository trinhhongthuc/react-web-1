import React from "react";
import Button from "../Button";

const SectionContact = () => {
  return (
    <div className="container">
      <div className="row margin-bottom-contact">
        <div className="col-xl-4 col-lg-4">
          <div className="contact-warper-left">
            <h3 className="contact-warper-left-title">Keep in touch</h3>

            <p className="contact-warper-left-paragraph">
              110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor
              non lorem
            </p>
            <p className="contact-warper-left-paragraph">
              You are NOT allowed to re-distribute Softy Pinko template on any
              template collection websites. Thank you.
            </p>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="contact-us-form">
            <div className="contact-us-form-wrapper">
              <div className="contact-us-form-wrapper-input">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="contact-us-form-wrapper-input">
                <input type="text" placeholder="Email Adresses" />
              </div>
            </div>

            <div className="contact-us-form-wrapper">
              <textarea
                placeholder="Your message"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="contact-us-form-wrapper-button">
              <Button title="send message"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
