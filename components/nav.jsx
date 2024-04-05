"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const nav = () => {
  const [toggleDropDown, settoggleDropDown] = useState(false);
  return (
    <section className="absolute inset-0 z-30 hidden w-full">
      <div className="flex items-center justify-between py-4 lg:hidden">
        <div className="flex flex-row items-center gap-12 mx-8">
          <div className="flex">
            {toggleDropDown ? (
              <button type="button">
                <Image
                  onClick={() => settoggleDropDown((prev) => !prev)}
                  src="/assets/images/x_mark.svg"
                  width={20}
                  height={0}
                  className=""
                />
              </button>
            ) : (
              <button type="button">
                <Image
                  onClick={() => settoggleDropDown((prev) => !prev)}
                  src="/assets/images/hamberger.svg"
                  width={20}
                  height={0}
                />
              </button>
            )}
          </div>
          <p className="text-sm font-bold">ACELEAFRICA</p>
        </div>
        {toggleDropDown && (
          <div className="absolute flex items-center w-full gap-4 py-3 text-black bg-white rounded-lg top-12 md:relative">
            <ul className="flex flex-col w-full gap-4 text-sm font-bold md:flex-row">
              <li className="hover:text-white hover:bg-[#6EB846] w-full px-3">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-white hover:bg-[#6EB846] w-full px-3">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-white hover:bg-[#6EB846] w-full px-3">
                <Link href="/services">Services</Link>
              </li>
            </ul>
            <button className="bg-[#F6D707] p-2 font-light hover:bg-[#040404] hover:text-white rounded-lg hidden">
              Get Started
            </button>
          </div>
        )}
      </div>
      
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mx-8 mt-4 ">
          <div>
            <p className="text-sm font-bold">ACELEAFRICA</p>
          </div>
          <div className="flex items-center gap-4">
            <ul className="flex gap-4 font-semibold text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
            <button className="bg-[#F6D707] p-2 font-light hover:bg-[#040404] hover:text-white rounded-lg w-32 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default nav;
