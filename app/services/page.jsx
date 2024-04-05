import React from "react";
import Header from "@/components/header";
import Services from "@/components/services";
import Protect_environment from "@/components/protect_environment";
import OurSolution from "@/components/our_solution";
import Why_choose_us from "@/components/why_choose_us";
import Technology_components from "@/components/technology_components";
import WhatWeOffer from "@/components/what_we_offer";
import Benefits from "@/components/benefits";
const services = () => {
  return (
    <div className="hidden">
      <Header
        src="/assets/images/bat-2.jpg"
        title="Services"
        subtitle="Renewable Energy for a Sustainable World."
        alt="about us"
      />
      <WhatWeOffer />
      <div>
        <OurSolution />
      </div>
      <Benefits />
      <div className="w-full mt-8 bg-rose-500">
        <Protect_environment
          src="/assets/images/turbine2.jpg"
          title="Let’s practice environmental awareness to get our globe clean."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
      </div>
    </div>
  );
};

export default services;
