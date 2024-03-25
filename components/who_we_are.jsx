import React from "react";
import Image from "next/image";
import Button from "./button";
const WhoWeAre = () => {
  return (
    <div>
      <section className="grid mx-6 lg:grid-cols-2">
        <div className="w-full px-4 rounded-lg lg:pr-16">
          <h2 className="text-[#6EB846]">WHO WE ARE</h2>
          <p className="py-4 text-lg font-bold">
            Keep your environment clean make the earth green.
          </p>
          <p className="text-sm">
            AceleAfrica is Africa’s leading battery technology company that
            stands at the forefront of innovation, having pioneered Africa's
            most sustainable lithium battery packs with a comprehensive circular
            economy approach.{" "}
          </p>
          <p className="mt-2 text-sm">
            AceleAfrica, a pioneering advanced lithium battery developer
            headquartered in Nairobi, is dedicated to accelerating the Africa
            transition towards cleaner, renewable energy sources.
          </p>
          <div className="lg:pt-8">
            <Button title="Discover More" />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center px-2 rounded-lg">
            <Image
              src="/assets/images/dispose.jpg"
              width={400}
              height={0}
              className="object-cover object-center w-full h-[300px] lg:h-[300px] rounded-lg"
            />
            <div className="absolute flex flex-col items-center justify-center w-6/12 py-4 text-center -translate-x-24 translate-y-32 bg-white rounded-lg lg:px-8 md:w-60 md:-translate-x-60 lg:-translate-x-44 lg:translate-y-24">
              <div className="px-8">
                <Image
                  src="/assets/images/icons8-lightning-50.png"
                  width={30}
                  height={20}
                />
              </div>
              <p className="py-2 text-xs text-[#6EB846]">RENEWABLE ENERGY</p>
              <p className="text-lg font-bold lg:font-bold text-[#040404] lg:text-2xl">
                Energy is the future, make it brilliant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
