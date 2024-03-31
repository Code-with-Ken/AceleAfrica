import React from "react";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <div className="px-2">
      <div className="py-4">
        <p className="text-[#6EB846] font-light text-xs">WHY CHOOSE US</p>
        <h1 className="text-lg font-bold lg:text-3xl">
        Live Green, Love Green, Think Green.
        </h1>
        <p className="pb-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="h-48 overflow-hidden rounded-lg md:h-56">
            <Image src="/assets/images/turbine2.jpg" width={400} height={0} className="w-full "/>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
