"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "/public/assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const menuItems = [
  { label: "Home", pathname: "/" },
  { label: "Features" },
  { label: "Pricing" },
  { label: "Contact" },
];

const HeroNavbar = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = usePathname();
  const pathname = usePathname();

  const isActive = (path) => {
    return router === path ? "!text-white !bg-secondary " : "";
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleHome = () => {
    if (pathname === "/") {
      pathname === "/";
    }
  };

  return (
    <>
      <nav
        className={` lg:w-[90%] mx-auto px-4 flex items-start relative md:top-10 left-0 w-full z-20 text-black bg-white`}
      >
        <div className="flex items-center justify-between flex-shrink-0 w-full md:px-20 md:pr-10">
          <Image
            src={logo}
            alt=""
            className="py-2 transition-all duration-300 bg-white md:py-3 hover:scale-105"
          />
          <div className="hidden lg:flex gap-7 ">
            {menuItems.map((item) => (
              <p
                key={item.label}
                className="text-lg font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:text-secondary"
                onClick={() => {
                  scrollToSection(item.label), handleHome;
                }}
              >
                {item.label}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-4 ">
            <Link
              href="/login"
              className={`${isActive(
                "/login"
              )} md:block hidden  py-2 px-4 rounded-md text-lg hover:scale-105 hover:text-secondary duration-300 transition-all`}
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className={`md:block hidden rounded-md  py-2 px-4  bg-secondary border border-primary hover:bg-white hover:text-primary duration-300 transition-all text-white text-xl `}
            >
              Register
            </Link>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="block lg:hidden "
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M3.5 15H21.5M3.5 9H21.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <div className="absolute left-0 z-20 w-full px-10 py-10 transition-all duration-300 bg-black md:top-28 top-16">
          <div className="flex flex-col justify-center gap-2 ">
            {menuItems.map((item) => (
              <p
                key={item.label}
                onClick={handleHome}
                className="text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:text-primary"
              >
                {item.label}
              </p>
            ))}
            <Link
              href="/"
              className={`${isActive(
                "/signin"
              )} md:block hidden text-white text-lg hover:scale-105 hover:text-primary duration-300 transition-all`}
            >
              Sign in
            </Link>
            <Link
              href="/"
              className={`md:block w-1/4 hidden  py-2 px-4 rounded-full bg-secondary border border-primary hover:bg-white hover:text-primary duration-300 transition-all text-white text-lg `}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroNavbar;
