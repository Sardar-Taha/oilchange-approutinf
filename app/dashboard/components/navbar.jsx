"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MobileDrawer from "./mobileDrawer";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between  bg-white h-[80px] rounded-xl px-4  mx-2 lg:mx-7 mt-3 ">
      <div>
        <h1 className="text-[24px] font-[700] text-dashboardPrimary ">
          {pathname === "/dashboard" && "Bookings"}
          {pathname === "/dashboard/setting" && "Setting"}
        </h1>
      </div>
      <div className="items-center hidden gap-4 lg:flex ">
        <div className="border-l border-[#00000026] border-r">
          <img
            src={"/images/navNotification.png"}
            alt="Profile Img"
            className="w-[30px] mx-4 mb-3  mt-2 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-3 ">
          {" "}
          <img
            src={"/images/profileImage.png"}
            alt="Profile Img"
            className=""
          />
          <div>
            <h1 className="text-[16px] font-[500]">James Williams</h1>
            <p className="text-[#000] -mt-1 text-[14px] text-opacity-[0.65]">
              Designer
            </p>
          </div>
        </div>

        {/* profile */}

        {/* profile */}
      </div>

      <div className="lg:hidden">
        <CgMenuLeft
          className="text-[42px] text-[#8B8B8B] block  rotate-180 cursor-pointer"
          onClick={() =>
            setTimeout(() => {
              setOpen(true);
            }, 100)
          }
        />
      </div>

      <AnimatePresence>
        {open && <MobileDrawer open={open} setOpen={setOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
