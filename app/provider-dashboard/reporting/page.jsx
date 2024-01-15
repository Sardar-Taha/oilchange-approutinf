import React from "react";
import { CiImport } from "react-icons/ci";
import LineChart from "../components/charts/lineChart";

const Reporting = () => {
  return (
    <div className="px-4 py-4 mx-2 mt-4 bg-white rounded-md lg:mx-7 ">
      <div className="flex flex-col items-center justify-between gap-2 mb-4 sm:flex-row ">
        <h1 className="text-[18px] lg:text-[24px] font-[500]  ">
          Maintenance Statistics
        </h1>

        <div className="flex items-center gap-2 ">
          <select className="border border-[#D4D4D4] h-[40px] rounded-md focus:outline-none ">
            <option>Time Period</option>
            <option>Period 1</option>
            <option>Period 1</option>
            <option>Period 1</option>
          </select>
          <button className="px-4  h-[40px] bg-white  rounded-lg font-[16px] flex items-center justify-center gap-1  border border-[#D4D4D4] ">
            <CiImport className=" text-[19px]" /> Download Report
          </button>
        </div>
      </div>

      <LineChart />
    </div>
  );
};

export default Reporting;
