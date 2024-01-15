"use client";

import { useRouter } from "next/navigation";
import PriceCard from "./priceCard";
import PlansIncluded from "./plansIncluded";

const Subscription = () => {
  const rounter = useRouter();

  return (
    <div className="py-4 mx-2 lg:mx-7 ">
      <button
        className="w-[140px] h-[50px] text-white block ml-auto  text-[16px]  font-[500] bg-secondary rounded-md  "
        onClick={() => rounter.push("/provider-dashboard/add-plans")}
      >
        Add Plan
      </button>

      <PriceCard />
      <PlansIncluded />
    </div>
  );
};

export default Subscription;
