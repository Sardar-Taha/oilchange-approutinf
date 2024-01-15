import Heading from "@/components/shared/common/heading";
import Image from "next/image";
import React from "react";
import icon1 from "/public/assets/serviceIcon1.png";
import icon2 from "/public/assets/serviceIcon2.png";
import main from "/public/assets/serviceMain.svg";
import Button from "@/components/shared/common/customButton";
import Link from "next/link";

const services = [
  {
    icon: icon2,
    title: "Replace Starter",
  },
  {
    icon: icon2,
    title: "Replace Alternator",
  },
  {
    icon: icon2,
    title: "Replace Battery",
  },
  {
    icon: icon2,
    title: "Brake Replacement",
  },
  {
    icon: icon2,
    title: "Replace Battery",
  },
];
const Services = () => {
  return (
    <div id="Features">
      <div className="w-full relative bg-[#EBF4FF] md:py-16 py-10 lg:px-32 md:px-20 px-5 ">
        <Heading text="Explore Our Services" style="" />
        <div className="flex flex-wrap items-center justify-center gap-5 py-5">
          <div className="lg:w-[30%] md:w-[48%] w-full relative space-y-2">
            <div className="flex items-center gap-5 p-4 px-3 text-xl font-semibold text-white rounded-lg bg-secondary">
              <Image src={icon1} alt="" className="" />
              <h1 className="">Oil Change</h1>
            </div>
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-4 px-3 text-xl font-semibold text-black transition-all duration-300 bg-white rounded-lg hover:bg-secondary hover:text-white"
              >
                <Image src={icon2} alt="" className="" />
                <h1 className="">{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="lg:w-[30%] md:w-[48%] w-full relative space-y-2">
            <Image src={main} alt="" className="" />
          </div>
          <div className="lg:w-[30%] md:w-[48%] w-full relative space-y-2">
            <Heading
              text="Discover the secrets to a smoother ride!"
              style="!text-left !text-4xl !font-bold"
            />
            <p className="text-black text-md ">
              Discover the secrets to a smoother ride! From routine upkeep to
              pro tips, our site offers comprehensive guidance on car
              maintenance, ensuring your vehicle stays in peak condition <br />
              Discover the secrets to a smoother ride! From routine upkeep to
              pro tips, our site offers comprehensive guidance on car
              maintenance, ensuring your vehicle stays in peak condition
            </p>
            <Link
              href="/bookService"
              className="block w-1/4 px-4 py-3 mt-10 text-lg text-center text-white transition-all duration-300 rounded-md bg-secondary hover:scale-105 "
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
