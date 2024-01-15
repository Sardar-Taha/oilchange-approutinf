import Image from "next/image";
import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import contactMap from "@/public/assets/contactMap.png";

const ContactUs = () => {
  const contactData = [
    {
      id: 1,
      icon: <LuPhoneCall className="text-[20px] text-white " />,
      header: "Call Us:",
      text: "+01 4444 44 4",
    },
    {
      id: 1,
      icon: <TfiEmail className="text-[20px] text-white " />,
      header: "Email:",
      text: "user899@email.com",
    },
    {
      id: 1,
      icon: <SlLocationPin className="text-[20px] text-white " />,
      header: "Address:",
      text: "Sreet 12, Apartment 45 ,USA",
    },
  ];

  return (
    <>
      <div className="bg-contactBg bg-no-repeat bg-center bg-cover h-[251px] ">
        <div className="flex items-center justify-center h-[251px] flex-col ">
          <h1 className="text-[40px] font-[700] ">Contact Us</h1>
          <p className="text-[16px]  ">Home {">"} Contact Us</p>
        </div>
      </div>

      <div className="py-4 main-container lg:py-16 ">
        <div className="flex flex-col gap-8 xl:flex-row ">
          <div className="flex-1 ">
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap max-xl:justify-center ">
              {contactData.map((item) => (
                <>
                  <div
                    className="bg-primary w-[44px] h-[44px] flex  items-center justify-center rounded-lg "
                    key={item.id}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[16px] font-[600] max-md:text-center  ">
                      {item.header}
                    </p>
                    <p className="text-[16px] font-[400] max-md:text-center  ">
                      {item.text}
                    </p>
                  </div>
                </>
              ))}
            </div>

            <div className="px-2 md:px-4 py-3 md:py-6 mt-8 bg-background  w-full md:max-xl:w-[700px] mx-auto ">
              <h1 className="text-[28px] md:text-[34px] lg:text-[40px] font-[700]">
                Get in Touch
              </h1>

              <div className="flex items-center gap-3 ">
                <input
                  type="text"
                  placeholder="Name"
                  className="focus:outline-none bg-[#fff] h-[50px] px-3 rounded-lg w-full "
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="focus:outline-none bg-[#fff] h-[50px] px-3 rounded-lg w-full "
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="focus:outline-none mt-4 bg-[#fff] h-[50px] px-3 rounded-lg w-full "
              />

              <textarea
                placeholder="Type message here"
                className="focus:outline-none mt-4 bg-[#fff] h-[171px] px-3 py-2 rounded-lg w-full "
              />

              <button className="w-[137px] h-[50px] bg-[#018FFC] font-[300] text-[18px] mt-8 rounded-lg text-white ">
                Submit
              </button>
            </div>
          </div>

          <div className="flex-1 ">
            <Image src={contactMap} className="max-xl:mx-auto " />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
