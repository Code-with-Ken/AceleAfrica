import React from "react";
import Image from "next/image";

const Services = ({ src, header, description }) => {
  return (
    <div className="mb-3  w-96">
      <div className="pb-3 mx-8 overflow-hidden bg-white rounded-lg">
        <Image src={src} width={800} height={0} className="w-full"/>
        <div className="px-4">
          <div className="bg-[#6EB846] h-1 w-6 my-3 rounded-3xl"></div>
          <p className="pb-3 font-semibold ">{header}</p>
          <p className="text-xs">{description}</p>
          <button className="bg-[#F6D707] py-1 px-3 hover:bg-[#040404] hover:text-white rounded-lg mt-3 text-xs">
          Learn More
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
