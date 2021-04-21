import React from "react";

const Heading = ({ title, children }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-3">
            <div className="wraptper-components">
              <h1 className="heading-component">{title}</h1>
              <p className="paragraph-components">{children}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
