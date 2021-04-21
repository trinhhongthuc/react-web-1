import React from "react";
import BoxPricingPlans from "./BoxPricingPlans";

const PricingPlans = () => {
  const arr1 = [
    { heading: "60 GB space", isComplete: false },
    { heading: "600 GB transfer", isComplete: false },
    { heading: "Pro Design Panel", isComplete: false },
    { heading: "15-minute support", isComplete: true },
    { heading: "Unlimited Emails", isComplete: true },
    { heading: "24/7 Security", isComplete: true },
  ];

  const arr2 = [
    { heading: "120 GB space", isComplete: false },
    { heading: "1200 GB transfer", isComplete: false },
    { heading: "Pro Design Panel", isComplete: false },
    { heading: "15-minute support", isComplete: false },
    { heading: "Unlimited Emails", isComplete: true },
    { heading: "24/7 Security", isComplete: true },
  ];

  const arr3 = [
    { heading: "250 GB space", isComplete: false },
    { heading: "5000 GB transfer", isComplete: false },
    { heading: "Pro Design Panel", isComplete: false },
    { heading: "15-minute support", isComplete: false },
    { heading: "Unlimited Emails", isComplete: false },
    { heading: "24/7 Security", isComplete: false },
  ];
  return (
    <div className="container">
      <div className="row">
        <BoxPricingPlans
          title="Starter"
          price="$14.0"
          arr={arr1}
          backgroundColorPricing="colorBlu"
        ></BoxPricingPlans>
        <BoxPricingPlans
          title="Starter"
          price="$14.0"
          arr={arr2}
          backgroundColorPricing="colorPrimary"
        ></BoxPricingPlans>
        <BoxPricingPlans
          title="Starter"
          price="$14.0"
          arr={arr3}
          backgroundColorPricing="colorBlu"
        ></BoxPricingPlans>
      </div>
    </div>
  );
};

export default PricingPlans;
