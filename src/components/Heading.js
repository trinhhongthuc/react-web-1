import React from "react";

const Heading = ({ title, children, colorTitle, colorParagraph }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-3">
            <div className="wraptper-components">
              <h1 className={"heading-component " + colorTitle}>{title}</h1>
              <p className={"paragraph-components " + colorParagraph}>
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
