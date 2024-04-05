import Header from "@/components/header";
import OurValue from "@/components/our_value";
import WhoWeAre from "@/components/who_we_are";
import Image from "next/image";
import Team from "@/components/team";
import TeamNames from "@/components/team_names";
import ProtectEnvironment from "@/components/protect_environment";
import OurPartners from "@/components/our_partners";
const About = () => {
  return (
    <div className="hidden">
      {/* banner */}
      <Header
        src="/assets/images/bat-2.jpg"
        title="About us"
        subtitle="Renewable Energy for a Sustainable World."
        alt="about us"
      />
      <OurValue />
      <div className="pt-16 pb-24 lg:pb-16 lg:pt-32">
        <WhoWeAre />
      </div>
      <div className="pb-12">
        <OurPartners />
      </div>

      <div className="grid-cols-2 mt-24 lg:grid ">
        <div className="flex px-10 ml-3 bg-white rounded-lg item">
          <div className="mt-16 lg:order-last">
            <span className="text-[#6EB846] text-xs ">OUR HISTORY</span>
            <p className="py-4 font-bold lg:text-4xl">
              The better source of energy for the better tomorrow
            </p>
            <p className="text-sm">
              Tempus quisque taciti luctus laoreet sagittis hac quis habitasse
              mattis parturient. Fringilla a dictumst scelerisque nisi phasellus
              lectus lacus per tortor ipsum. Volutpat proin vestibulum senectus
              donec et massa justo hac nec facilisis mus. Aliquam ornare rutrum
              eget per primis in posuere rhoncus tempor.
            </p>
            <br />
            <p className="pb-4 text-sm">
              Tempus quisque taciti luctus laoreet sagittis hac quis habitasse
              mattis parturient. Fringilla a dictumst scelerisque nisi phasellus
              lectus lacus per tortor ipsum. Volutpat proin vestibulum senectus
              donec et massa justo hac nec facilisis mus. Aliquam ornare rutrum
              eget per primis in posuere rhoncus tempor.
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 lg:order-first">
          <Image
            src="/assets/images/wind-turbine.jpg"
            width={400}
            height={0}
            className="object-cover h-full rounded-lg lg:w-full"
          />
        </div>
      </div>
      <div className="text-center">
        <span className="text-[#6EB846] text-xs font-light">MEET OUR TEAM</span>
        <p className="py-4 text-xl font-bold">Teamwork makes the dream work.</p>
        <p className="px-4 text-sm lg:mx-40">
          The AceleAfrica team comprises a diverse and experienced group of
          professionals dedicated to driving innovation and sustainability in
          the energy sector. Led by visionary leaders with expertise in battery
          technology, renewable energy, and business management, the team is
          united by a shared commitment to delivering impactful solutions to
          pressing energy challenges.
        </p>
        <div className="flex flex-col grid-cols-4 gap-3 px-8 mt-6 lg:grid lg:py-4">
          <div className="overflow-hidden bg-white rounded-lg">
            <Team src="/assets/images/man_2.jpg" />
            <TeamNames name="James Kariuki" role="Founder" />
          </div>
          <div className="overflow-hidden bg-white rounded-lg ">
            <Team src="/assets/images/man_2.jpg" />
            <TeamNames name="James Kariuki" role="Co-Founder" />
          </div>
          <div className="overflow-hidden bg-white rounded-lg">
            <Team src="/assets/images/man_2.jpg" />
            <TeamNames name="James Kariuki" role="Co-Founder" />
          </div>
          <div className="overflow-hidden bg-white rounded-lg ">
            <Team src="/assets/images/man_2.jpg" />
            <TeamNames name="James Kariuki" role="Co-Founder" />
          </div>
        </div>
        <div className="w-full mt-8 bg-rose-500">
          <ProtectEnvironment
            src="/assets/images/turbine2.jpg"
            title="Let’s practice environmental awareness to get our globe clean."
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
