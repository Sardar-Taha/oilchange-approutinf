import Image from "next/image";
import React from "react";
import exploreDetailImg from "@/public/assets/exploreDetailImg.png";
import { MdPlayArrow } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const ExploreDetailSection = () => {
  const weekData = [
    {
      id: 1,
      header: "Monday",
    },
    {
      id: 2,
      header: "Tuesday",
    },
    {
      id: 3,
      header: "Wednesday",
    },
    {
      id: 4,
      header: "Thursday",
    },
    {
      id: 5,
      header: "Friday",
    },
    {
      id: 6,
      header: "Saturday",
    },
  ];

  return (
    <div>
      <div className="bg-contactBg bg-no-repeat bg-center bg-cover h-[251px] ">
        <div className="flex items-center justify-center h-[251px] flex-col ">
          <h1 className="text-[40px] font-[700] ">Explore</h1>
          <p className="text-[16px]  ">Home {">"} Explore</p>
        </div>
      </div>

      <div className="py-4 main-container lg:py-16 ">
        <div className="flex flex-col gap-12 xl:flex-row ">
          <div>
            <Image
              src={exploreDetailImg}
              className="box-shdadow max-xl:mx-auto max-md:w-full "
            />
          </div>
          <div className="w-full md:w-[499px] max-xl:mx-auto bg-white box-shdadow px-2 md:px-6 py-4 rounded-lg ">
            <h1 className="text-[24px] font-[500]  ">Opening Hours</h1>
            <div className="flex gap-12 mt-3 ">
              <h1 className="text-[18px] font-[600]">Sunday</h1>

              <p className="text-[18px] font-[500] ">Close</p>
            </div>

            {weekData.map((item) => (
              <>
                <div
                  className="flex flex-col gap-2 mt-8 sm:flex-row sm:gap-12 sm:flexr "
                  key={item.id}
                >
                  <div>
                    <h1 className="text-[18px] font-[600]  w-[100px] ">
                      {item.header}
                    </h1>
                  </div>

                  <div className="flex items-center gap-3 ">
                    <div className="border border-[#C7C7C7] px-5 py-1 ">
                      <p className="text-[15px] font-[500] ">09:00 AM</p>
                    </div>
                    <p className="text-[16px] font-[500] "> TO</p>
                    <div className="border border-[#C7C7C7] px-5 py-1 ">
                      <p className="text-[15px] font-[500] ">05:00 pM</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="mt-4 ">
          <h1 className="text-[40px] font-[700] ">Oil Change Cotton Creek</h1>

          <p className="text-[#00000078] flex items-center gap-2 text-[16px] mt-3 ">
            <SlLocationPin />
            New York
          </p>

          <p className="text-[16px] w-full md:w-[717px] mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>

          <div className="bg-[#F6EFF9D9] px-3 py-3 rounded-md mt-4 w-full md:w-[685px] flex flex-col sm:flex-row sm:items-center gap-4 ">
            <div className="flex items-center gap-2 ">
              <BiPhoneCall className="text-[26px] text-[#182DCF] " />
              <div>
                <p className="text-[14px]  ">Call Us:</p>
                <p className="text-[14px] text-[#000000AB]  ">1 444 6666 6</p>
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

          <div className="bg-[#F6EFF9D9] px-2 sm:px-4 py-4 mt-8 ">
            <h1 className="text-[29px] sm:text-[32px] md:text-[36px] lg:text-[40px] low font-[700] ">
              Services at this Location
            </h1>
            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
                <div className="bg-white hover:bg-[#182DCF] hover-container cursor-pointer hover:text-white px-2 sm:px-4 h-[38px] flex items-center  transition-all duration-500 ">
                  <p className="text-[#182DCF] text-[20px] ">
                    <MdPlayArrow />
                  </p>
                  <p className="text-[20px] font-[500] flex items-center gap-1 ">
                    Air Conditions Services
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetailSection;
