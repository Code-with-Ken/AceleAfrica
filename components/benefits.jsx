import React from "react";
import Technology_components from "./technology_components";
import WhyChooseUs from "./why_choose_us";
const Benefits = () => {
  return (
    <div>
      <div className="items-center gap-16 px-2 lg:flex lg:px-8">
        <WhyChooseUs />
        <div className="gap-4 md:grid md:grid-cols-2">
          <div>
            <Technology_components
              src="/assets/images/leaf.svg"
              title="Eco Technology"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
          </div>
          <div>
            <Technology_components
              src="/assets/images/technology.svg"
              title="Smart Technology"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
          </div>
          <div>
            <Technology_components
              src="/assets/images/certificate.svg"
              title="Certified Expert"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
          </div>
          <div>
            <Technology_components
              src="/assets/images/customer_support.svg"
              title="Premium Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
