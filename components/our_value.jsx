import React from "react";
import Image from "next/image";
const OurValue = () => {
  return (
    <div>
      <div className="grid-cols-2 lg:grid">
        <div className="bg-[#1A3240] text-white mr-0.5 text-sm  rounded-tr-3xl py-8 px-8">
          <h6 className="text-[#6EB846]">OUR VALUE</h6>
          <p className="py-3 text-xl font-bold">
            Where technology meets business.
          </p>
          <p className="pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div>
            <div className="flex flex-row items-center py-3">
              <Image
                src="/assets/images/light-bulb.png"
                width={30}
                height={0}
                className="w-10 h-10"
              />
              <div className="flex flex-col px-2">
                <span>Vision</span>
                <p>
                  To enable individuals to reap the benefits of cleaner energy
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center pb-3">
              <Image
                src="/assets/images/icons8-recycle-480.png"
                width={30}
                height={0}
                className="w-10 h-10"
              />
              <div className="flex flex-col px-2 pt-6">
                <span>Mission</span>
                <p>
                  To facilitate widespread access to sustainable battery
                  technology
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/solar-energy-panels.jpg"
            width={400}
            height={0}
            className="w-full lg:pt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default OurValue;
