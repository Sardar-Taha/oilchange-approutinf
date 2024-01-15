"use client";
import { Switch, TimePicker } from "antd";
import React, { useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";

dayjs.extend(customParseFormat);

const BusinessTab = () => {
  const weeksData = [
    {
      id: 1,
      text: "Monday",
    },
    {
      id: 2,
      text: "Tuesday",
    },
    {
      id: 3,
      text: "Wednesday",
    },
    {
      id: 4,
      text: "Thursday",
    },
    {
      id: 5,
      text: "Friday",
    },
  ];

  return (
    <div className="px-2 py-4 lg:px-8">
      <h1 className="text-[18px] font-[500] text-[#3E3E3E] ">
        Configure the standard hours of operation for this location.
      </h1>

      <div className="flex flex-col gap-3 mt-4 md:flex-row md:items-center">
        <p className="text-[18px] w-[120px] font-[600]">Sunday</p>
        <Switch />
        <p className="text-[18px] mr-4 font-[600]">Close</p>
      </div>

      <hr className="border-1 border-[#000] border-opacity-10 mt-4 " />
      {weeksData.map((item, index) => (
        <>
          <div
            className="flex flex-col gap-2 mt-4 md:gap-3 md:flex-row md:items-center"
            key={item.id}
          >
            <p className="text-[18px] w-[120px] font-[600]">{item.text}</p>
            <Switch defaultChecked />
            <p className="text-[18px] mr-4 font-[600]">Open</p>
            <>
              <TimePicker defaultOpenValue={dayjs("00:00", "HH:mm")} />
              <p className="text-[18px] font-[600]">To</p>
              <TimePicker defaultOpenValue={dayjs("00:00", "HH:mm")} />
            </>
          </div>
          <hr className="border-1 border-[#000] border-opacity-10 mt-4 " />
        </>
      ))}

      <div className="flex flex-col gap-3 mt-4 md:flex-row md:items-center">
        <p className="text-[18px] w-[120px] font-[600]">Saturday</p>
        <Switch />
        <p className="text-[18px] mr-4 font-[600]">Close</p>
      </div>
    </div>
  );
};

export default BusinessTab;
