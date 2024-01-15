"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "../shared/footer";

const MainFooter = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return <div>{!isHomePage && <Footer />}</div>;
};

export default MainFooter;
