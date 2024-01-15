import React from "react";
import { FiUserCheck } from "react-icons/fi";
import { IoCarOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";

const cardData = [
  {
    id: 1,
    icon: <FiUserCheck className="text-greenish text-[20px]  " />,
    header: "Total Customers",
    text: "1200",
  },
  {
    id: 2,
    icon: <IoCarOutline className="text-greenish text-[20px]  " />,
    header: "Total Provider",
    text: "100",
  },
  {
    id: 3,
    icon: <LuCalendarDays className="text-greenish text-[20px]  " />,
    header: "Total Bookings",
    text: "1200",
  },
  {
    id: 4,
    icon: <TbMoneybag className="text-greenish text-[20px]  " />,
    header: "Total Earning",
    text: "1200",
  },
];

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-3 xl:gap-6    ">
        {cardData.map((item) => (
          <div
            className=" bg-white flex px-4  gap-2 rounded-lg py-6 "
            key={item.id}
          >
            <div className="border-2 border-greenish rounded-lg w-[40px] h-[53px] flex items-center justify-center ">
              {item.icon}
            </div>

            <div>
              <h1 className="text-[16px] text-grayish  font-[600] ">
                {item.header}
              </h1>
              <p className="text-[24px] font-[700] -mt-1 text-greenish ">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
