import React from "react";
import Image from "next/image";

const Team = ({ src, alt }) => {
  return (
    <div>
      <div>
        <Image src={src} width={1200} height={0} alt={alt} />
      </div>
    </div>
  );
};

export default Team;
