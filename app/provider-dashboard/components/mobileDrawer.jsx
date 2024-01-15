"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";
import SidebarLogo from "@/public/images/sidebarLogo.png";
import Image from "next/image";
import { LuLayoutDashboard, LuUserCheck } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdCreditCard, MdOutlineAddCard } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const MobileDrawer = ({ open, setOpen }) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = open ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="fixed inset-0 z-20 flex items-start justify-start w-full h-full bg-[rgba(0,0,0,0.10)] backdrop-blur-[3px] lg:hidden "
      onClick={() => setOpen(false)}
    >
      <motion.div
        className={`flex flex-col  h-screen w-60  overflow-x-hidden overflow-y-auto px-3 py-2  bg-white `}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ delay: 0.1, duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between h-screen ">
          <div>
            <div className="flex items-center justify-between ">
              <Image src={SidebarLogo} className="w-[130px] " />

              <motion.div
                whileHover={{ rotate: 360 }}
                onClick={() => setOpen(false)}
              >
                <RxCross2 className="text-[20px]  cursor-pointer " />
              </motion.div>
            </div>

            <div>
              {sidebarData.map((item) => (
                <div
                  key={item.id}
                  className={`flex  items-center gap-4  ${
                    item.id === 1 ? "mt-6" : "mt-2"
                  }  py-4 cursor-pointer px-4 ${
                    pathname === item.route
                      ? "bg-providerSecondary rounded-lg"
                      : ""
                  }

           ${
             pathname === item.routeTwo
               ? "bg-providerSecondary rounded-lg"
               : item.route
           }
 
          `}
                  onClick={() => {
                    router.push(item.route);
                    setOpen(false);
                  }}
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
          </div>

          <div>
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileDrawer;
