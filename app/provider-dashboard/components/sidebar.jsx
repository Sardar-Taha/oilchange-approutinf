"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineAddCard } from "react-icons/md";
import { MdCreditCard } from "react-icons/md";
import { LuUserCheck } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const sidebarData = [
    {
      id: 1,
      text: "Dashboard",
      route: "/provider-dashboard",
      image: (
        <LuLayoutDashboard
          className={`text-providerPrimary text-2xl mb-1 ${
            pathname === "/provider-dashboard" ? "text-white" : ""
          }`}
        />
      ),
    },
    {
      id: 2,
      text: "Appointments ",
      route: "/provider-dashboard/appointments",
      image: (
        <AiOutlineUser
          className={`text-providerPrimary text-2xl mb-1 ${
            pathname === "/provider-dashboard/appointments" ? "text-white" : ""
          }`}
        />
      ),
    },

    {
      id: 3,
      text: "Services",
      route: "/provider-dashboard/service",
      image: (
        <RiCustomerService2Fill
          className={`text-providerPrimary text-2xl mb-1 ${
            pathname === "/provider-dashboard/service" ? "text-white" : ""
          }`}
        />
      ),
    },
    {
      id: 4,
      text: "Customers",
      route: "/provider-dashboard/customers",
      image: (
        <LuUserCheck
          className={`text-providerPrimary text-2xl mb-1 ${
            pathname === "/provider-dashboard/customers" ? "text-white" : ""
          }`}
        />
      ),
    },

    {
      id: 5,
      text: "Reportings",
      route: "/provider-dashboard/reporting",
      image: (
        <BsGraphUpArrow
          className={`text-providerPrimary text-2xl mb-1 ${
            pathname === "/provider-dashboard/reporting" ? "text-white" : ""
          }`}
        />
      ),
    },
    {
      id: 6,
      text: "Subscription",
      route: "/provider-dashboard/subscription",
      routeTwo: "/provider-dashboard/add-plans",
      image:
        pathname === "/provider-dashboard/add-plans" ? (
          <MdCreditCard
            className={`text-providerPrimary text-2xl mb-1 ${
              pathname === "/provider-dashboard/subscription"
                ? "text-white"
                : ""
            }  
          ${pathname === "/provider-dashboard/add-plans" ? "text-white" : ""}
          `}
          /> ? (
            <MdOutlineAddCard
              className={`text-providerPrimary text-2xl mb-1 ${
                pathname === "/provider-dashboard/subscription"
                  ? "text-white"
                  : ""
              }  
            ${pathname === "/provider-dashboard/add-plans" ? "text-white" : ""}
            `}
            />
          ) : (
            <MdCreditCard
              className={`text-providerPrimary text-2xl mb-1 ${
                pathname === "/provider-dashboard/subscription"
                  ? "text-white"
                  : ""
              }  
      ${pathname === "/provider-dashboard/add-plans" ? "text-white" : ""}
      `}
            />
          )
        ) : (
          <MdCreditCard
            className={`text-providerPrimary text-2xl mb-1 ${
              pathname === "/provider-dashboard/subscription"
                ? "text-white"
                : ""
            }  
      ${pathname === "/provider-dashboard/add-plans" ? "text-white" : ""}
      `}
          />
        ),
    },
    {
      id: 7,
      text: "Settings",
      route: "/provider-dashboard/setting",
      image: (
        <IoSettingsOutline
          className={`text-providerPrimary text-2xl mb-1 ${
            pathname === "/provider-dashboard/setting" ? "text-white" : ""
          }`}
        />
      ),
    },
  ];

  return (
    <div className="hidden w-full h-screen px-5 my-3 ml-2 overflow-hidden bg-white lg:block rounded-xl ">
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
            pathname === item.route ? "bg-providerSecondary rounded-lg" : ""
          }

           ${
             pathname === item.routeTwo
               ? "bg-providerSecondary rounded-lg"
               : item.route
           }
 
          `}
          onClick={() => router.push(item.route)}
        >
          {item.image}
          <h1
            className={` ${
              pathname === item.route
                ? "text-[16px] font-[500] text-[#fff]"
                : "text-[16px] font-[500] text-[#000]"
            }

           ${
             pathname === item.routeTwo
               ? "text-[16px] font-[500] text-[#fff]"
               : item.route
           }
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
