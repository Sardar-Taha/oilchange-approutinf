import React from "react";
import LineChart from "../components/charts/lineChart";

const GraphSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 my-4 xl:flex-row ">
        <div className="w-full px-4 py-2 bg-white rounded-lg ">
          <div className="flex items-center justify-between ">
            <h1 className="text-[18px] lg:text-[24px] font-[500] ">
              Order Completion
            </h1>

            <select className="border border-l-grayish h-[40px] rounded-md focus:outline-none ">
              <option> This month</option>
              <option>month 1</option>
              <option>month 1</option>
              <option>month 1</option>
            </select>
          </div>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
