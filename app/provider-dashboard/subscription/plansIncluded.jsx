import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const PlansIncluded = () => {
  return (
    <div className="px-4 py-4 mt-8 bg-white ">
      <h1 className="text-[18px] font-[600] ">All Plans Includes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 max-xl:gap-2 xl:grid-cols-3 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((__, index) => (
          <p
            className={`text-[14px] ${
              index === 0 ? "mt-3" : "mt-2 "
            }   flex items-center gap-1 `}
            key={index}
          >
            <BiSolidRightArrow className="rounded-lg text-secondary " />
            lorem ipsum dolor sit amet, consectetur dolo
          </p>
        ))}
      </div>
    </div>
  );
};

export default PlansIncluded;
