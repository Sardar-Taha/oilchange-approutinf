"use client";
import Image from "next/image";
import React from "react";
import exploreCardImg from "@/public/assets/exploreCardImg.png";
import exploreMap from "@/public/assets/exploreMap.png";
import { BiPhoneCall } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import { useRouter } from "next/navigation";

const ExploreSection = () => {
  const router = useRouter();

  const cardData = [
    {
      id: 1,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      img: exploreCardImg,
      header: "Provider Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
          {cardData.map((item) => (
            <div
              className="flex flex-col gap-3 px-4 py-3 bg-white sm:flex-row box-shdadow "
              key={item.id}
            >
              <div className="w-full sm:w-[30%] ">
                <Image
                  src={item.img}
                  className="w-full sm:w-[241px] h-[220px] "
                />
              </div>

              <div className="w-full sm:w-[70%] ">
                <h1 className="text-[24px] font-[700]  ">{item.header}</h1>

                <p className="text-[16px]  ">{item.text}</p>

                <div className="bg-[#F6EFF9D9] px-3 py-3 rounded-md mt-4 flex flex-col sm:flex-row sm:items-center gap-4 ">
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

                <button
                  className=" bg-[#018FFC] w-full rounded-md mt-4 h-[40px] text-[16px] font-[500] text-white "
                  onClick={() => router.push("explore-detail")}
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        <Image src={exploreMap} className="w-full mt-8 " />
      </div>
    </div>
  );
};

export default ExploreSection;
