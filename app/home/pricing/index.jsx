import Heading from "@/components/shared/common/heading";
import Image from "next/image";
import React from "react";
import card1 from "/public/assets/priceCard1.png";
import card2 from "/public/assets/priceCard2.svg";

const card = [
  { service: "Full Synthetic Oil Change" },
  { service: "Engine Air Filter" },
  { service: "Cabin Air Filter Tire Rotatiob" },
  { service: "Full Synthetic Oil Change" },
];
const Pricing = () => {
  return (
    <div id="Pricing">
      <div className="relative w-full px-5 py-10 md:py-16 lg:px-32 md:px-20 priceBg">
        <Heading text="Pricing" style="!text-white" />
        <div className="flex flex-wrap items-center justify-center gap-5 py-5">
          <div className="lg:w-[30%] md:w-[48%] w-full relative ">
            <div className="px-5 py-8 space-y-2 bg-white rounded-lg">
              <Image src={card1} alt="" />
              <h1 className="text-lg font-semibold text-black md:text-xl ">
                Gas Engine
              </h1>
              <h1 className="text-xl font-semibold text-primary md:text-2xl ">
                $100/Service
              </h1>
              <h1 className="font-semibold text-black md:text-lg text-md ">
                Billed every 6 months
              </h1>
              {card.map((item, index) => (
                <div key={index} className="flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M18.7375 7.75179C18.4009 7.4 18.0527 7.0375 17.9214 6.71875C17.8 6.42679 17.7929 5.94286 17.7857 5.47411C17.7723 4.60268 17.758 3.61518 17.0714 2.92857C16.3848 2.24196 15.3973 2.22768 14.5259 2.21429C14.0571 2.20714 13.5732 2.2 13.2812 2.07857C12.9634 1.94732 12.6 1.59911 12.2482 1.2625C11.6321 0.670536 10.9321 0 10 0C9.06786 0 8.36875 0.670536 7.75179 1.2625C7.4 1.59911 7.0375 1.94732 6.71875 2.07857C6.42857 2.2 5.94286 2.20714 5.47411 2.21429C4.60268 2.22768 3.61518 2.24196 2.92857 2.92857C2.24196 3.61518 2.23214 4.60268 2.21429 5.47411C2.20714 5.94286 2.2 6.42679 2.07857 6.71875C1.94732 7.03661 1.59911 7.4 1.2625 7.75179C0.670536 8.36786 0 9.06786 0 10C0 10.9321 0.670536 11.6312 1.2625 12.2482C1.59911 12.6 1.94732 12.9625 2.07857 13.2812C2.2 13.5732 2.20714 14.0571 2.21429 14.5259C2.22768 15.3973 2.24196 16.3848 2.92857 17.0714C3.61518 17.758 4.60268 17.7723 5.47411 17.7857C5.94286 17.7929 6.42679 17.8 6.71875 17.9214C7.03661 18.0527 7.4 18.4009 7.75179 18.7375C8.36786 19.3295 9.06786 20 10 20C10.9321 20 11.6312 19.3295 12.2482 18.7375C12.6 18.4009 12.9625 18.0527 13.2812 17.9214C13.5732 17.8 14.0571 17.7929 14.5259 17.7857C15.3973 17.7723 16.3848 17.758 17.0714 17.0714C17.758 16.3848 17.7723 15.3973 17.7857 14.5259C17.7929 14.0571 17.8 13.5732 17.9214 13.2812C18.0527 12.9634 18.4009 12.6 18.7375 12.2482C19.3295 11.6321 20 10.9321 20 10C20 9.06786 19.3295 8.36875 18.7375 7.75179ZM14.0768 8.3625L9.07679 13.3625C9.01045 13.4289 8.93167 13.4816 8.84496 13.5175C8.75824 13.5535 8.6653 13.572 8.57143 13.572C8.47756 13.572 8.38461 13.5535 8.2979 13.5175C8.21119 13.4816 8.13241 13.4289 8.06607 13.3625L5.92321 11.2196C5.85685 11.1533 5.80421 11.0745 5.76829 10.9878C5.73237 10.9011 5.71389 10.8081 5.71389 10.7143C5.71389 10.6204 5.73237 10.5275 5.76829 10.4408C5.80421 10.3541 5.85685 10.2753 5.92321 10.2089C6.05724 10.0749 6.23903 9.9996 6.42857 9.9996C6.52243 9.9996 6.61536 10.0181 6.70207 10.054C6.78878 10.0899 6.86756 10.1426 6.93393 10.2089L8.57143 11.8473L13.0661 7.35179C13.1324 7.28542 13.2112 7.23278 13.2979 7.19686C13.3846 7.16095 13.4776 7.14246 13.5714 7.14246C13.6653 7.14246 13.7582 7.16095 13.8449 7.19686C13.9316 7.23278 14.0104 7.28542 14.0768 7.35179C14.1432 7.41815 14.1958 7.49694 14.2317 7.58365C14.2676 7.67035 14.2861 7.76329 14.2861 7.85714C14.2861 7.951 14.2676 8.04393 14.2317 8.13064C14.1958 8.21735 14.1432 8.29614 14.0768 8.3625Z"
                      fill="#0059E6"
                    />
                  </svg>
                  <p className="text-black md:text-lg text-md ">
                    {item.service}
                  </p>
                </div>
              ))}
              <div className="bg-[#EBF4FF] p-2">
                No hidden fees or high pressure sales. just on scedule auto
                mainance.
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] md:w-[48%] w-full relative ">
            <div className="px-5 py-8 space-y-2 bg-white rounded-lg">
              <Image src={card2} alt="" />
              <h1 className="text-lg font-semibold text-black md:text-xl ">
                Diesel Engine
              </h1>
              <h1 className="text-xl font-semibold text-primary md:text-2xl ">
                $100/Service
              </h1>
              <h1 className="font-semibold text-black md:text-lg text-md ">
                Billed every 6 months
              </h1>
              {card.map((item, index) => (
                <div key={index} className="flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M18.7375 7.75179C18.4009 7.4 18.0527 7.0375 17.9214 6.71875C17.8 6.42679 17.7929 5.94286 17.7857 5.47411C17.7723 4.60268 17.758 3.61518 17.0714 2.92857C16.3848 2.24196 15.3973 2.22768 14.5259 2.21429C14.0571 2.20714 13.5732 2.2 13.2812 2.07857C12.9634 1.94732 12.6 1.59911 12.2482 1.2625C11.6321 0.670536 10.9321 0 10 0C9.06786 0 8.36875 0.670536 7.75179 1.2625C7.4 1.59911 7.0375 1.94732 6.71875 2.07857C6.42857 2.2 5.94286 2.20714 5.47411 2.21429C4.60268 2.22768 3.61518 2.24196 2.92857 2.92857C2.24196 3.61518 2.23214 4.60268 2.21429 5.47411C2.20714 5.94286 2.2 6.42679 2.07857 6.71875C1.94732 7.03661 1.59911 7.4 1.2625 7.75179C0.670536 8.36786 0 9.06786 0 10C0 10.9321 0.670536 11.6312 1.2625 12.2482C1.59911 12.6 1.94732 12.9625 2.07857 13.2812C2.2 13.5732 2.20714 14.0571 2.21429 14.5259C2.22768 15.3973 2.24196 16.3848 2.92857 17.0714C3.61518 17.758 4.60268 17.7723 5.47411 17.7857C5.94286 17.7929 6.42679 17.8 6.71875 17.9214C7.03661 18.0527 7.4 18.4009 7.75179 18.7375C8.36786 19.3295 9.06786 20 10 20C10.9321 20 11.6312 19.3295 12.2482 18.7375C12.6 18.4009 12.9625 18.0527 13.2812 17.9214C13.5732 17.8 14.0571 17.7929 14.5259 17.7857C15.3973 17.7723 16.3848 17.758 17.0714 17.0714C17.758 16.3848 17.7723 15.3973 17.7857 14.5259C17.7929 14.0571 17.8 13.5732 17.9214 13.2812C18.0527 12.9634 18.4009 12.6 18.7375 12.2482C19.3295 11.6321 20 10.9321 20 10C20 9.06786 19.3295 8.36875 18.7375 7.75179ZM14.0768 8.3625L9.07679 13.3625C9.01045 13.4289 8.93167 13.4816 8.84496 13.5175C8.75824 13.5535 8.6653 13.572 8.57143 13.572C8.47756 13.572 8.38461 13.5535 8.2979 13.5175C8.21119 13.4816 8.13241 13.4289 8.06607 13.3625L5.92321 11.2196C5.85685 11.1533 5.80421 11.0745 5.76829 10.9878C5.73237 10.9011 5.71389 10.8081 5.71389 10.7143C5.71389 10.6204 5.73237 10.5275 5.76829 10.4408C5.80421 10.3541 5.85685 10.2753 5.92321 10.2089C6.05724 10.0749 6.23903 9.9996 6.42857 9.9996C6.52243 9.9996 6.61536 10.0181 6.70207 10.054C6.78878 10.0899 6.86756 10.1426 6.93393 10.2089L8.57143 11.8473L13.0661 7.35179C13.1324 7.28542 13.2112 7.23278 13.2979 7.19686C13.3846 7.16095 13.4776 7.14246 13.5714 7.14246C13.6653 7.14246 13.7582 7.16095 13.8449 7.19686C13.9316 7.23278 14.0104 7.28542 14.0768 7.35179C14.1432 7.41815 14.1958 7.49694 14.2317 7.58365C14.2676 7.67035 14.2861 7.76329 14.2861 7.85714C14.2861 7.951 14.2676 8.04393 14.2317 8.13064C14.1958 8.21735 14.1432 8.29614 14.0768 8.3625Z"
                      fill="#0059E6"
                    />
                  </svg>
                  <p className="text-black md:text-lg text-md ">
                    {item.service}
                  </p>
                </div>
              ))}
              <div className="bg-[#EBF4FF] p-2">
                No hidden fees or high pressure sales. just on scedule auto
                mainance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;