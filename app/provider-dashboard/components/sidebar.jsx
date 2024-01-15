"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div>
      Sidebar
      <div onClick={() => router.push("/provider-dashboard/abc")}>abc</div>
      <div onClick={() => router.push("/provider-dashboard/def")}>def</div>
    </div>
  );
};

export default Sidebar;
