import React from "react";

const AddPlans = () => {
  return (
    <div className="py-4 mx-2 lg:mx-7 ">
      <div className="flex flex-col gap-3 px-2 py-4 bg-white rounded-md lg:px-8 ">
        <div className="flex flex-col w-full gap-4 sm:flex-row sm:items-center ">
          <div className="flex flex-col flex-1 gap-2 ">
            <label>Package Name</label>
            <input
              type="text"
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
        </div>
        <label>Plan Included</label>
        <textarea className="focus:outline-none w-full rounded-lg px-3 py-1 h-[137px] bg-[#F6EFF9D9] " />

        <button className="bg-secondary w-[140px] h-[50px] mt-2 rounded-lg  text-[16px] text-white  ">
          Add Plan
        </button>
      </div>
    </div>
  );
};

export default AddPlans;
