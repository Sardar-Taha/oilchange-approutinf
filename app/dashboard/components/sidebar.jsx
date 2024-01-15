"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { LuCalendarDays } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const sidebarData = [
    {
      id: 1,
      text: "Bookings",
      route: "/dashboard",
      image: (
        <LuCalendarDays
          className={` text-2xl mb-1 ${
            pathname === "/dashboard" ? "text-white" : "text-dashboardPrimary"
          }`}
        />
      ),
    },
    {
      id: 2,
      text: "Setting",
      route: "/dashboard/setting",
      image: (
        <IoSettingsOutline
          className={` text-2xl mb-1 ${
            pathname === "/dashboard/setting"
              ? "text-white"
              : "text-dashboardPrimary"
          }`}
        />
      ),
    },
    // {
    //   id: 3,
    //   text: "Reviews",
    //   route: "/reviews",
    //   image: (
    //     <HiOutlineClipboardList
    //       className={`text-dashboardPrimary text-2xl mb-1 ${
    //         pathname === "/reviews" ? "text-white" : ""
    //       }`}
    //     />
    //   ),
    // },
  ];

  return (
    <div className="hidden w-full min-h-screen px-5 my-3 ml-2 overflow-hidden bg-white lg:block rounded-xl ">
      <img
        src={"/images/sidebarLogo.png"}
        alt="Sidebar Logo"
        className="block mx-auto mt-4"
      />
      {sidebarData.map((item) => (
        <div
          key={item.id}
          className={`flex  items-center gap-4  ${
            item.id === 1 ? "mt-6" : "mt-2"
          }  py-4 cursor-pointer px-4 ${
            pathname === item.route ? "bg-dashboardSecondary rounded-lg" : ""
          }

          ${
            item.id === 1 &&
            (pathname === item.route || pathname === "/dashboard")
              ? "bg-dashboardSecondary rounded-lg"
              : ""
          }

          ${
            item.id === 2 &&
            (pathname === item.route || pathname === "/dashboard/setting")
              ? "bg-dashboardSecondary rounded-lg"
              : ""
          }
          ${
            item.id === 3 &&
            (pathname === item.route || pathname === "/reviews")
              ? "bg-dashboardSecondary rounded-lg"
              : ""
          }
     
          `}
          onClick={() => router.push(item.route)}
        >
          {item.image}
          <h1
            className={`text-[16px] font-[500] text-[#000] 
          
          ${item.id === 1 && pathname === item.route ? "text-white" : ""}
          ${item.id === 2 && pathname === item.route ? "text-white" : ""}
          ${item.id === 3 && pathname === item.route ? "text-white" : ""}
          `}
          >
            {item.text}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
