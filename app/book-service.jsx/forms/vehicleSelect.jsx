import Button from "@/components/shared/common/customButton";
import CustomSelectInput from "@/components/shared/common/customSelectInput";
import React from "react";

const VehicleSelect = ({ handleNext }) => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < 15; i++) {
    const year = currentYear - i;
    years.push({ label: `${year}`, value: `${year}` });
  }

  // Replace Makers with the appropriate data source
  const makers = [
    { label: "Maker1", value: "maker1" },
    { label: "Maker2", value: "maker2" },
    // Add more makers as needed
  ];

  return (
    <div>
      <div className="px-12 py-5">
        <h1 className="text-2xl font-bold text-black ">Service Location</h1>
        <p className="text-lg text-black ">
          "Lorem ipsum dolor sit amet, consectetur adipiscing veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip
        </p>

        <h1 className="mt-4 font-[600] text-[16px] ">
          All fields are mendatory unless indicated as optional
        </h1>
        <form action="" className="space-y-3 ">
          <div className="">
            <input
              type="text"
              placeholder="Address"
              className="w-full h-[48px] mt-1 border px-4 border-[#00000047] focus:outline-none rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full h-[48px] mt-6 border px-4 border-[#00000047] focus:outline-none rounded-md"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="w-full h-[48px] mt-6 border px-4 border-[#00000047] focus:outline-none rounded-md"
            />
            <input
              type="number"
              placeholder="Zip Code"
              className="w-full h-[48px] mt-6 border px-4 border-[#00000047] focus:outline-none rounded-md"
            />
          </div>
          <Button
            label="Continue Service"
            style="!mx-auto"
            onClick={handleNext}
          />
        </form>
      </div>
    </div>
  );
};

export default VehicleSelect;
