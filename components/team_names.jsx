import React from "react";

const TeamNames = ({ name, role }) => {
  return (
    <div className="py-5">
      <p className="font-bold">{name}</p>
      <p className="text-[#6EB846] text-xs font-light capitalize">{role}</p>
    </div>
  );
};

export default TeamNames;
