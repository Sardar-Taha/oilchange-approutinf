import React from "react";

const RejectModal = ({ handleOk, handleCancel }) => {
  return (
    <div>
      <h1 className="text-[16px] font-[500] ">
        Are you sure you want to reject?{" "}
      </h1>

      <div className="mt-8 flex justify-end items-center gap-2 ">
        <button
          onClick={handleCancel}
          className="w-[100px] h-[34px] rounded-lg bg-[#CDCDCD] text-white "
        >
          Cancel
        </button>
        <button
          onClick={handleOk}
          className="w-[100px] h-[34px] rounded-lg bg-[red] text-white "
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default RejectModal;
