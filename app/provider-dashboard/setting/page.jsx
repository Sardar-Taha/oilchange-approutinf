"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProfileTab from "./profileTab";
import BusinessTab from "./businessTab";

const Setting = () => {
  const [businessTab, setBusinessTab] = useState(true);
  const [profileTab, setProfileTab] = useState(false);

  const handleBusinessTabButton = () => {
    setBusinessTab(true);
    setProfileTab(false);
  };

  const handleProfileTabButton = () => {
    setBusinessTab(false);
    setProfileTab(true);
  };

  return (
    <div className="bg-[#fff] my-7  mx-2  lg:mx-7 min-h-[calc(532px-150px)] rounded-xl">
      <div className="flex items-center gap-2 ">
        <h1
          className={`w-full sm:w-[192px] h-[55px] text-[16px] font-[500] text-center flex items-center justify-center  rounded-tl-xl cursor-pointer ${
            businessTab && "bg-[#00000012] border border-[#E6E6E6] "
          } `}
          onClick={handleBusinessTabButton}
        >
          Business Hour
        </h1>
        <h1
          className={`w-full sm:w-[192px] h-[55px] text-[16px] font-[500] text-center flex items-center justify-center max-sm:rounded-tr-xl  cursor-pointer ${
            profileTab && "bg-[#00000012] border border-[#E6E6E6] "
          } `}
          onClick={handleProfileTabButton}
        >
          Profile
        </h1>
      </div>

      {businessTab && (
        <AnimatePresence>
          <motion.div
            key={"j"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BusinessTab />
          </motion.div>
        </AnimatePresence>
      )}

      {profileTab && (
        <AnimatePresence>
          <motion.div
            key={"l"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProfileTab />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Setting;
