import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="lg:grid grid-cols-3 px-8 bg-[#1A3240] text-white py-12">
      <div>
        <h1 className="text-sm font-bold uppercase text-[#6EB846]">services</h1>

        <p className="py-1 text-xs lg:text-sm">
          <Link href="/services">
            Lithium battery testing and Refurbishment.
          </Link>
        </p>
        <p className="py-1 text-xs lg:text-sm">
          <Link href="/services">Lithium Battery Diagnosis. </Link>
        </p>
        <p className="py-1 text-xs lg:text-sm">
          <Link href="/services">Testing & Analysis </Link>
        </p>
        <p className="py-1 text-xs lg:text-sm">
          <Link href="/services">
            Acelerone Operational Trinity – R&D, Testing and Production, Sales &
            Services.{" "}
          </Link>
        </p>
      </div>
      <div className="justify-center py-5 lg:flex">
        <div>
          <h1 className="text-sm font-bold uppercase text-[#6EB846]">
            company
          </h1>
          <p className="text-xs lg:text-sm">
            <Link href="/about_us">About Us</Link>
          </p>
          <p className="py-1 text-xs lg:text-sm">
            <Link href="/about_us">Our Team</Link>
          </p>
          <p className="py-1 text-xs lg:text-sm">
            <Link href="/services">Our Services</Link>
          </p>
        </div>
      </div>
      <div className="justify-center lg:flex">
        <div>
          <h1 className="text-sm font-bold uppercase text-[#6EB846]">
            Get in touch
          </h1>
          <p className="py-1 text-xs lg:text-sm">
            <span>Street:</span> Kimathi Street
          </p>
          <p className="py-1 text-xs lg:text-sm">Nairobi</p>
          <p className="py-1 text-xs lg:text-sm">
            <span>Email:</span> info@aceleafrica.com
          </p>
          <p className="py-1 text-xs lg:text-sm">
            <span>Tel:</span> +254 123456789
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
