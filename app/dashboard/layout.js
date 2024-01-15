import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

const layout = ({ children }) => {
  return (
    <div className={`bg-[#f4f6fa] ${nunito.className} `}>
      <div
        className={` flex flex-col h-screen lg:flex-row md:overflow-hidden  `}
      >
        <div className="w-full flex-none lg:w-[220px]">
          <Sidebar />
        </div>
        <div className="flex-grow overflow-auto">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
