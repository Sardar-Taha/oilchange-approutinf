import React from "react";
import profileImage from "@/public/images/profileImage.png";
import Image from "next/image";

const ViewModal = ({ handleViewOk, handleViewCancel }) => {
  return (
    <div>
      <div className="p-3">
        <h1 className="text-primary  font-[600]  flex items-center gap-2 ">
          <Image src={profileImage} alt="image" />
          <span>Car Oil Changer</span>
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <div>
          <h1 className="text-primary  text-[16px] font-[600]">Phone Number</h1>
          <p className="textgrayish text-[14px] ">+92 4323 23</p>
        </div>
        <div>
          <h1 className="text-primary  text-[16px] font-[600]">Date</h1>
          <p className="textgrayish text-[14px] ">Fed 10, 2010</p>
        </div>
        <div>
          <h1 className="text-primary  text-[16px] font-[600]">Time</h1>
          <p className="textgrayish text-[14px] ">11:55 AM</p>
        </div>
      </div>

      <hr className="border-1 border-[#D1D1D1] mt-3 " />

      <div className="mt-4 mb-4 ">
        <h1 className="text-primary  text-[16px] font-[600]">Service</h1>
        <p className="textgrayish text-[14px] ">Oil Chnage</p>
      </div>

      <hr className="border-1 border-[#D1D1D1] mt-3 " />

      <div className="flex items-center justify-end gap-2 mt-8 ">
        <button
          onClick={handleViewCancel}
          className="w-[100px] h-[34px] rounded-lg bg-[#CDCDCD] text-white "
        >
          Cancel
        </button>
        <button
          onClick={handleViewOk}
          className="w-[100px] h-[34px] rounded-lg bg-secondary text-white "
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ViewModal;
