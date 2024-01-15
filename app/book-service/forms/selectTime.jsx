"use client";
import Button from "@/components/shared/common/customButton";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SelectTime = ({ handleNext }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="px-5 py-10 space-y-3 md:px-10">
        <h1 className="text-2xl font-bold text-black text-start">
          Select Arrival Time
        </h1>
        <p className="text-black md:w-3/4 ">
          "Lorem ipsum dolor sit amet, consectetur adipiscing veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip
        </p>

        <div className="w-full calender ">
          <Calendar onChange={onChange} value={value} />
        </div>

        <form action="" className="w-full px-5 space-y-3 rounded-xl">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-center text-black">
              Wednesday , December 2023
            </h1>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 py-5 bg-blue-100 rounded-md ">
                <div className="">
                  <h1 className="text-xl font-bold text-black ">
                    12:00 pm - 3:00 PM
                  </h1>
                  <p className="text-lg text-black ">
                    +$50 Mobile Service Charge
                  </p>
                </div>
                <input
                  type="radio"
                  name="both"
                  value="1"
                  className="w-10 h-10 p-5"
                />
              </div>
              <div className="flex items-center justify-between p-4 py-5 bg-blue-100 rounded-md ">
                <div className="">
                  <h1 className="text-xl font-bold text-black ">
                    12:00 pm - 3:00 PM
                  </h1>
                  <p className="text-lg text-black ">
                    +$50 Mobile Service Charge
                  </p>
                </div>
                <input
                  type="radio"
                  name="both"
                  value="1"
                  className="w-10 h-10 p-5"
                />
              </div>
              <div className="flex items-center justify-between p-4 py-5 bg-blue-100 rounded-md ">
                <div className="">
                  <h1 className="text-xl font-bold text-black ">
                    12:00 pm - 3:00 PM
                  </h1>
                  <p className="text-lg text-black ">
                    +$50 Mobile Service Charge
                  </p>
                </div>
                <input
                  type="radio"
                  name="both"
                  value="1"
                  className="w-10 h-10 p-5"
                />
              </div>
            </div>
            <Button label="Continue" style="!mx-auto" onClick={handleNext} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectTime;
