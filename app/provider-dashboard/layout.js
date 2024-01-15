import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col h-screen lg:flex-row md:overflow-hidden ">
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
