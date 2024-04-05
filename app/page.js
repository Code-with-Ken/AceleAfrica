import Image from "next/image";

import WhoWeAre from "@/components/who_we_are";
import OurPartners from "@/components/our_partners";
import OurSolution from "@/components/our_solution";
import WhatWeOffer from "@/components/what_we_offer";

import Benefits from "@/components/benefits";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-red-400">
      <div className="relative h-full overflow-hidden bg-blue-400">
        <Image
          src="/assets/images/preview.jpeg"
          width={1200}
          height={0}
          className="object-cover object-center w-full h-full"
        />
        <p className="text-2xl text-[#F6D707] absolute top-28 lg:top-56 text-center bg-fuchsia-600 w-full">
          THIS WEBSITE IS CURRENTLY BEING DEVELOPED
        </p>
      </div>
      <div className="relative flex flex-col hidden h-full overflow-hidden bg-blue-400">
        <div className="absolute flex flex-col items-center justify-center hidden w-full h-full text-center text-white lg:px-60">
          <p className="text-xs text-[#F6D707]">WELCOME TO ACELEAFRICA</p>
          <p className="my-6 text-2xl font-bold lg:text-4xl">
            The better source of energy for the better tomorrow
          </p>
          <p className="mb-6 font-semibold lg:text-xl">
            Help protect the environment by powering your home with 100%
            renewable energy.
          </p>
          <div className="flex flex-col gap-3 lg:flex-row">
            <button className="bg-[#F6D707] py-3 px-16 w-72 hover:bg-[#040404] hover:text-white rounded-lg">
              Get Started
            </button>
            <button className="border-2 border-white rounded-lg w-72 px-16 hover:bg-[#040404] py-3">
              Discover More
            </button>
          </div>
        </div>
      </div>

      <div className="py-20">
        <WhoWeAre />
      </div>

      <div className="pb-12">
        <OurPartners />
      </div>
      <OurSolution />
      <div>
        <WhatWeOffer />
      </div>
      <div className="py-16">
        <Benefits />
      </div>
    </div>
  );
}
