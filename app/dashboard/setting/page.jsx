import React from "react";

const Setting = () => {
  return (
    <div className="bg-[#fff] my-7 py-4 mx-2  lg:mx-7 min-h-[calc(532px-150px)] rounded-xl">
      <div className="flex gap-8 flex-col-reverse md:flex-row px-2 lg:px-8 ">
        <div className="flex flex-col gap-3 md:w-[80%] ">
          <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4">
            <div className="flex flex-col gap-2 flex-1 ">
              <label>First Name</label>
              <input
                type="text"
                placeholder=""
                className="focus:outline-none  rounded-xl w-full bg-[#F6EFF9D9] px-3 h-[50px]  "
              />
            </div>
            <div className="flex flex-col gap-2 flex-1 ">
              <label>Last Name</label>
              <input
                type="text"
                placeholder=""
                className="focus:outline-none rounded-xl w-full  bg-[#F6EFF9D9] px-3 h-[50px]  "
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4">
            <div className="flex flex-col gap-2 flex-1 ">
              <label>Email Address</label>
              <input
                type="email"
                placeholder=""
                className="focus:outline-none  rounded-xl w-full bg-[#F6EFF9D9] px-3 h-[50px]  "
              />
            </div>
            <div className="flex flex-col gap-2 flex-1 ">
              <label>Password</label>
              <input
                type="password"
                placeholder=""
                className="focus:outline-none rounded-xl w-full  bg-[#F6EFF9D9] px-3 h-[50px]  "
              />
            </div>
          </div>
          <label>About me</label>
          <textarea className="focus:outline-none w-full rounded-lg px-3 py-1 h-[137px] bg-[#F6EFF9D9] " />

          <button className="bg-secondary w-[188px] h-[50px] mt-8 rounded-lg  text-[16px] text-white  ">
            Save Changes
          </button>
        </div>

        <div className="md:w-[20%] mt-8 ">
          <div className="size-[136px] bg-[#D9D9D9] rounded-md md:mx-auto max-md:ml-6 max-sm:mx-auto  " />

          <div className="bg-[#018FFC33] flex items-center justify-center  max-md:w-[188px] h-[32px] mt-4 rounded-sm max-sm:mx-auto  ">
            <p className="text-[14px] font-[600] ">Upload Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
