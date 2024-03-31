import React from "react";
import Image from "next/image";
const ProtectEnvironment = ({ src, title, subtitle }) => {
  return (
    <div>
      <div className="absolute flex flex-col px-8 mt-8 text-sm text-white lg:h-full lg:justify-center lg:w-6/12 text-start place-content-center lg:mt-0">
        <h1 className="font-bold lg:text-5xl">{title}</h1>
        <p className="text-black">{subtitle}</p>
      </div>
      <Image src={src} width={2400} height={0} className="lg:h-[600px] h-72" />
    </div>
  );
};

export default ProtectEnvironment;
