import React from "react";

const ProfileTab = () => {
  return (
    <div>
      <div className="flex flex-col-reverse gap-8 px-2 py-4 md:flex-row lg:px-8 ">
        <div className="flex flex-col gap-3 md:w-[80%] ">
          <div className="flex flex-col w-full gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-col flex-1 gap-2 ">
              <label>First Name</label>
              <input
                type="text"
                placeholder=""
                className="focus:outline-none  rounded-xl w-full bg-[#F6EFF9D9] px-3 h-[50px]  "
              />
            </div>
            <div className="flex flex-col flex-1 gap-2 ">
              <label>Last Name</label>
              <input
                type="text"
                placeholder=""
                className="focus:outline-none rounded-xl w-full  bg-[#F6EFF9D9] px-3 h-[50px]  "
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-col flex-1 gap-2 ">
              <label>Email Address</label>
              <input
                type="email"
                placeholder=""
                className="focus:outline-none  rounded-xl w-full bg-[#F6EFF9D9] px-3 h-[50px]  "
              />
            </div>
            <div className="flex flex-col flex-1 gap-2 ">
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

export default ProfileTab;
