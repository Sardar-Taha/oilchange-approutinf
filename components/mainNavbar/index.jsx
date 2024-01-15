"use client";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import Navbar from "../shared/navbar";

const MainNavbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return <div>{!isHomePage && <Navbar />}</div>;
};

export default MainNavbar;
