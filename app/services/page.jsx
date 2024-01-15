import React from "react";
import exploreCardImg from "@/public/assets/exploreCardImg.png";
import { BiPhoneCall } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import Image from "next/image";

const ServicesSection = () => {
  const cardData = [
    {
      id: 1,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div>
      <div className="bg-contactBg bg-no-repeat bg-center bg-cover h-[251px] ">
        <div className="flex items-center justify-center h-[251px] flex-col ">
          <h1 className="text-[40px] font-[700] ">Services</h1>
          <p className="text-[16px]  ">Home {">"} Services</p>
        </div>
      </div>

      <div className="py-4 main-container lg:py-16 ">
        <div className="grid grid-cols-1 gap-6 ">
          {cardData.map((item) => (
            <div
              className="flex flex-col gap-3 px-4 py-3 bg-white lg:flex-row box-shdadow "
              key={item.id}
            >
              <div className="w-full lg:w-[30%] ">
                <Image src={item.img} className="w-full  h-[251px] " />
              </div>

              <div className="w-full lg:w-[70%] ">
                <div className="flex justify-between ">
                  <div>
                    <h1 className="text-[24px] font-[700]  ">{item.header}</h1>
                    <p className="text-[14px] text-[#000000AB] ">
                      Provider: ames Williams
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#000000AB] ">
                      Location New York
                    </p>
                  </div>
                </div>

                <p className="text-[16px mt-3  ">{item.text}</p>

                <div className="flex flex-col gap-2 md:gap-4 md:items-center md:justify-between md:flex-row ">
                  <div className="bg-[#F6EFF9D9] px-3 py-3 rounded-md mt-4 flex  md:items-center gap-4 flex-1 max-md:w-full  ">
                    <div className="flex items-center gap-2 ">
                      <BiPhoneCall className="text-[26px] text-[#182DCF] " />
                      <div>
                        <p className="text-[14px]  ">Call Us:</p>
                        <p className="text-[14px] text-[#000000AB]  ">
                          1 444 6666 6
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <LuClock3 className="text-[26px] text-[#182DCF] " />
                      <div>
                        <p className="text-[14px]  ">Working Hours</p>
                        <p className="text-[14px] text-[#000000AB]  ">
                          9:00 am - 5:00 pm
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 ">
                    <button className="w-full md:w-[305px] bg-[#018FFC] block ml-auto rounded-md mt-4 h-[40px] text-[16px] font-[500] text-white ">
                      Schedule Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
