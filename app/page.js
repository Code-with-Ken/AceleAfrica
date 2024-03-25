import Image from "next/image";

import WhoWeAre from "@/components/who_we_are";
import OurPartners from "@/components/our_partners";
import OurSolution from "@/components/our_solution";
import WhatWeOffer from "@/components/what_we_offer";

import Benefits from "@/components/benefits";
export default function Home() {
  return (
    <main className="">
      <div>
        <div className="overflow-hidden lg:h-[600px] h-[450px] flex flex-col bg-red-200">
          <Image
            src="/assets/images/solar-energy-panels.jpg"
            width={1200}
            height={0}
            className="h-full"
          />
          <div className="absolute flex flex-col items-center justify-center w-full h-full text-center text-white lg:px-60">
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
    </main>
  );
}
