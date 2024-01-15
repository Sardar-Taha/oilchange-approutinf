import React from "react";
import exploreCardImg from "@/public/images/exploreCardImg.png";

const Service = () => {
  return (
    <div className="flex flex-col gap-3 px-4 py-4 mx-2 mt-4 bg-white rounded-md lg:mx-7 ">
      <div className="flex flex-col flex-1 gap-2 ">
        <label>Service Name</label>
        <select
          type="text"
          placeholder="Select Location"
          className="report-placeholder  w-full  h-[50px] py-2 px-3  bg-[#F6EFF9D9]  rounded shadow-none focus:outline-none   text-[#000] text-opacity-[0.58] "
        >
          <option>All Users</option>
          <option>Service</option>
          <option>Customer</option>
        </select>
      </div>

      <div className="flex flex-col flex-1 gap-2 ">
        <label>Add Time</label>
        <input
          type="time"
          placeholder=""
          className="focus:outline-none  rounded-xl w-full bg-[#F6EFF9D9] px-3 h-[50px]  "
        />
      </div>

      <div className="flex flex-col flex-1 gap-2 ">
        <label>Price</label>
        <input
          type="number"
          placeholder=""
          className="focus:outline-none  rounded-xl w-full bg-[#F6EFF9D9] px-3 h-[50px]  "
        />
      </div>

      <button className="bg-secondary w-[188px] h-[50px] rounded-lg  text-[16px] text-white  ">
        Save Changes
      </button>
    </div>
  );
};

export default Service;
