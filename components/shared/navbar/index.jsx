"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "/public/assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";



const menuItems = [
    { label: "Home", url: "/" },
    { label: "Features", url: "/feaures" },
    { label: "Pricing", url: "/pricing" },
    { label: "Contact", url: "/contact" },
];

const Navbar = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = usePathname();

    const isActive = (path) => {
        return router === path ? "!text-white !bg-secondary " : "";
    };
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <nav
                className={` lg:px-10 px-4 flex items-start relative top-0 left-0 w-full z-20 text-white bg-primary`} >

                <div className="md:px-20 md:pr-10 flex justify-between items-center flex-shrink-0 w-full">
                    <Image src={logo} alt="" className=" bg-white md:py-3 py-2 hover:scale-105  duration-300 transition-all" />
                    <div className="lg:flex hidden gap-7 ">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.url}
                                className=" font-medium text-xl hover:scale-105 hover:text-secondary duration-300 transition-all"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 ">
                        <Link
                            href="/login"
                            className={`${isActive(
                                "/login"
                            )} md:block hidden  py-2 px-4 rounded-md text-xl hover:scale-105 hover:text-secondary duration-300 transition-all`} >
                            Sign in
                        </Link>
                        <Link
                            href="/sellerRegistration"
                            className={`md:block hidden rounded-md  py-2 px-4  bg-secondary border border-primary hover:bg-white hover:text-primary duration-300 transition-all text-white text-xl `} >
                            Register
                        </Link>
                        <button onClick={() => setIsModalOpen(!isModalOpen)} className="lg:hidden block ">  <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                        >
                            <path
                                d="M3.5 15H21.5M3.5 9H21.5"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg></button>
                    </div>


                </div>
            </nav>
            {isModalOpen && <div className="bg-primary absolute md:top-28 top-16 left-0 w-full px-10 z-20 py-10 transition-all duration-300">
                <div className="flex flex-col justify-center gap-2 ">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.url}
                            className="text-white font-medium text-lg hover:scale-105 hover:text-primary duration-300 transition-all"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/"
                        className={`${isActive(
                            "/signin"
                        )} md:block hidden text-white text-lg hover:scale-105 hover:text-primary duration-300 transition-all`} >
                        Sign in
                    </Link>
                    <Link
                        href="/sellerRegistration"
                        className={`md:block w-1/4 hidden  py-2 px-4 rounded-full bg-secondary border border-primary hover:bg-white hover:text-primary duration-300 transition-all text-white text-lg `} >
                       Register
                    </Link>
                </div>
            </div>}
        </>
    );
};

export default Navbar;