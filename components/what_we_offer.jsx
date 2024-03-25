import React from "react";
import Services from "./services";
const WhatWeOffer = () => {
  return (
    <div className="pt-20">
      <div className="flex flex-col px-8 text-center lg:px-72 lg:mb-8">
        <p className="text-[#6EB846] text-xs font-light uppercase">
          what we offer
        </p>
        <p className="py-4 text-xl font-bold lg:text-3xl">
          Make the energy choice that’s good for business — and the planet.
        </p>
      </div>
      <div className="flex flex-col grid-cols-3 gap-2 md:grid place-items-center">
        <Services
          src="/assets/images/bat_1.jpg"
          header="Lithium battery testing and Refurbishment."
          description="Anticipating a future with tonnes of unnecessary battery waste, we have designed a battery pack which is built with sustainability in mind. Africa’s most sustainable lithium battery pack in a full circular economy approach, serviceable, upgradable, and recyclable. Here, we are motivated to empower Africa communities by increasing access to energy storage solutions for our customers around the continent. "
        />
        <Services
          src="/assets/images/bat_1.jpg"
          header="Lithium Battery Diagnosis"
          description="Fermentum interdum turpis vivamus proin libero ipsum facilisis ridiculus potenti netus faucibus."
        />
        <Services
          src="/assets/images/bat_1.jpg"
          header="Testing and Analysis"
          description="Our overarching goal is to make a positive impact on lives worldwide. We achieve this by continuously enhancing our solutions and capabilities, offering top-tier lithium batteries and conducting rigorous rapid testing to ensure optimal reuse and quality."
        />
        <Services
          src="/assets/images/bat_1.jpg"
          header="Acelerone Operational Trinity – R&D, Testing and Production, Sales & Services"
          description="Fermentum interdum turpis vivamus proin libero ipsum facilisis ridiculus potenti netus faucibus."
        />
        <Services
          src="/assets/images/bat_1.jpg"
          header="Light Mobility Batteries"
          description="Fermentum interdum turpis vivamus proin libero ipsum facilisis ridiculus potenti netus faucibus."
        />
        <Services
          src="/assets/images/bat_1.jpg"
          header="Energy Storage Systems"
          description="Operating in East Africa, we specialize in developing cutting-edge storage technology that simplifies lithium battery pack servicing, allows for customizable feature enhancements, and eliminates the need for costly disposal by enabling energy cell refilling."
        />
      </div>
    </div>
  );
};

export default WhatWeOffer;
