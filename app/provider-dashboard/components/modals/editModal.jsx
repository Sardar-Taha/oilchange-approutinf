import React from "react";

const EditModal = ({ handleEditOk, handleEditCancel }) => {
  return (
    <div>
      <h1 className="text-[16px] font-[500] ">
        Are you sure you want to edit?{" "}
      </h1>

      <div className="flex items-center justify-end gap-2 mt-8 ">
        <button
          onClick={handleEditCancel}
          className="w-[100px] h-[34px] rounded-lg bg-[#CDCDCD] text-white "
        >
          Cancel
        </button>
        <button
          onClick={handleEditOk}
          className="w-[100px] h-[34px] rounded-lg bg-secondary text-white "
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditModal;
