import React from "react";
import Button from "../Button";

const BoxPricingPlans = ({ title, price, arr, backgroundColorPricing }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="pricing-plan-wrapper">
          <h3 className="pricing-plan-wrapper-title">{title}</h3>

          <div
            className={"pricing-plan-wrapper-price " + backgroundColorPricing}
          >
            <span className="pricing-plan-wrapper-price-number">{price}</span>
            <span className="pricing-plan-wrapper-price-text">monthly</span>
          </div>
          <ul className="pricing-plan-wrapper-ul">
            {arr.map((items, index) => {
              let complete = "";
              if (items.isComplete == true) {
                complete = "complete";
              }
              return (
                <li
                  key={index}
                  className={"pricing-plan-wrapper-ul-li " + complete}
                >
                  {items.heading}
                </li>
              );
            })}
          </ul>

          <div className="pricing-plan-wrapper-ul-button">
            <Button title="Purchase Now"></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxPricingPlans;
