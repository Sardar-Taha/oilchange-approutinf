import Image from "next/image";
import React from "react";
import modalImage from "@/public/images/modalImage.png";
import { IoMdStar } from "react-icons/io";

const ReviewModal = ({ handleReviewOk, handleReviewCancek }) => {
  return (
    <div>
      <h1 className="text-[24px] font-[700] ">Post a Review</h1>
      <div className="flex gap-2 mt-2 ">
        <div>
          <Image src={modalImage} className="" />
        </div>
        <div>
          <h1 className="text-[18px] font-[600] ">James Williams</h1>
          <p className="text-[16px] font-[500] -mt-1 text-[#000000BF]  ">
            Posting Publicly
          </p>
          <div className="flex gap-1 mt-2 ">
            <IoMdStar className="text-[#FFC853] text-[20px] " />
            <IoMdStar className="text-[#FFC853] text-[20px] " />
            <IoMdStar className="text-[#FFC853] text-[20px] " />
            <IoMdStar className="text-[#FFC853] text-[20px] " />
            <IoMdStar className="text-[#FFC853] text-[20px] " />
          </div>
        </div>
      </div>

      <textarea
        placeholder="Write your review here"
        className="focus:outline-none border border-[#D9D9D9]  mt-4 w-full h-[130px]  rounded-md px-3 py-2 "
      />

      <div className="flex justify-between gap-1 mt-4 ">
        <button
          className="w-[140px] h-[40px] bg-secondary text-white text-[14px] font-[500]  rounded-lg "
          onClick={handleReviewOk}
        >
          Post
        </button>
        <button
          className="w-[140px] h-[40px] bg-[#CDCDCD] text-black text-[14px] font-[500]  rounded-lg "
          onClick={handleReviewCancek}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
