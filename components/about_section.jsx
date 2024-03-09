import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="text-[#1A3240] bg-red-400">
      
      <section className="grid mx-6 lg:grid-cols-2">
        <div className="rounded-lg lg:mr-12">
          <h2 className="text-[#6EB846]">WHO WE ARE</h2>
          <p className="py-4 text-lg font-bold">Keep your environment clean make the earth green.</p>
          <p className="text-xs">
            AceleAfrica is Africa’s leading battery technology company that stands at the forefront of innovation, having pioneered Africa's most sustainable lithium battery packs with a comprehensive circular economy approach.
            AceleAfrica, a pioneering advanced lithium battery developer headquartered in Nairobi, is dedicated to accelerating the Africa transition towards cleaner, renewable energy sources. Our mission is twofold: to facilitate widespread access to sustainable battery technology and to enable individuals to reap the benefits of cleaner energy solutions.
            Anticipating a future with tonnes of unnecessary battery waste, we have designed a battery pack which is built with sustainability in mind. Africa’s most sustainable lithium battery pack in a full circular economy approach, serviceable, upgradable, and recyclable. Here, we are motivated to empower Africa communities by increasing access to energy storage solutions for our customers around the continent. 

            Operating in East Africa, we specialize in developing cutting-edge storage technology that simplifies lithium battery pack servicing, allows for customizable feature enhancements, and eliminates the need for costly disposal by enabling energy cell refilling.
            Our overarching goal is to make a positive impact on lives worldwide. We achieve this by continuously enhancing our solutions and capabilities, offering top-tier lithium batteries and conducting rigorous rapid testing to ensure optimal reuse and quality.
          </p>
          <button className="bg-[#F6D707] py-3 px-6 font-light hover:bg-[#040404] hover:text-white rounded-lg my-7">Discover more</button>
        </div>
        <div className="bg-red-400 rounded-lg lg:max-h-[500px] h-56">
          <div className="overflow-hidden bg-green-700 rounded-lg ">
            <Image src="/assets/images/dispose.jpg" width={1200} height={500} className="object-cover object-center w-full h-full"/>
          </div>
          <div className="absolute flex flex-col items-center w-5/12 p-6 text-center -translate-x-6 -translate-y-24 bg-white rounded-lg lg:w-3/12 lg:-translate-y-32">
            <div className="px-8">
              <Image src="/assets/images/icons8-lightning-50.png" width={30} height={20} />
            </div>
            <p className="py-2 text-xs text-[#6EB846]">RENEWABLE ENERGY</p>
            <p className="text-sm font-semibold lg:font-bold lg:text-2xl">Energy is the future, make it brilliant.</p>
          </div>
        </div>
      </section>
      <div className='bg-green-400'>ken</div>
    </section>
  )
}

export default AboutSection