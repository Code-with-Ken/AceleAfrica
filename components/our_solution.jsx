import React from "react";
import Image from "next/image";
import Button from "./button";
const OurSolution = () => {
  return (
    <div className="bg-[#1d4ed8] px-1  py-6 lg:px-8">
      <div className="pt-12 text-center">
        <p className="text-[#6EB846]">our solution</p>
        <h1 className="text-lg font-bold text-white lg:text-3xl">
          Keep your environment clean make the earth green.
        </h1>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="grid-cols-2 gap-4 lg:grid">
        <div className="z-10 items-start mt-6 overflow-hidden bg-white rounded-lg ">
          <div>
            <Image
              src="/assets/images/solar-energy-panels.jpg"
              width={400}
              height={0}
              className="w-full"
            />
          </div>
          <div className="px-2 py-6 rounded-b-lg ">
            <Image
              src="/assets/images/icon_residential-64.png"
              width={20}
              height={0}
            />
            <p className="py-2 text-lg">Residential</p>
            <p className="pb-3 text-xs lg:text-sm">
              Fermentum interdum turpis vivamus proin libero ipsum facilisis
              ridiculus potenti netus faucibus.
            </p>
            <button className="p-1 text-sm bg-[#F6D707] rounded-lg rounded-xs">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative z-10 items-start mt-6 overflow-hidden bg-white rounded-lg">
          <div>
            <Image
              src="/assets/images/solar-energy-panels.jpg"
              width={400}
              height={0}
              className="w-full"
            />
          </div>
          <div className="px-2 py-6 rounded-b-lg">
            <Image
              src="/assets/images/icons_commercial-50.png"
              width={20}
              height={0}
            />
            <p className="py-2 text-lg">Commercial</p>
            <p className="pb-3 text-xs lg:text-sm">
              Fermentum interdum turpis vivamus proin libero ipsum facilisis
              ridiculus potenti netus faucibus.
            </p>
            <button className="p-1 text-sm bg-[#F6D707] rounded-lg rounded-xs">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
