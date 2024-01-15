import React from "react";
// import heroBg from '/public/assets/heroBg.svg';
import Button from "@/components/shared/common/customButton";
import HeroNavbar from "../heroNavbar";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div>
      <div>
        <section className={`relative heroBg     `}>
          <HeroNavbar />
          <div className="relative flex items-center justify-center py-10 mx-auto md:py-28">
            <div className="w-full px-5 text-center md:w-3/4 md:space-y-8">
              <h1 className="lg:text-[57px] md:text-[40px] text-2xl leading-normal font-bold text-white">
                Your Ultimate Car Care
                <strong className="block font-extrabold text-primary">
                  {" "}
                  Destination{" "}
                </strong>
              </h1>
              <p className="max-w-lg mx-auto mt-4 text-center text-white sm:text-lg/relaxed">
                Discover the secrets to a smoother ride! From routine upkeep to
                pro tips, our site offers comprehensive guidance on car
                maintenance, ensuring your vehicle stays in peak condition
              </p>

              <Button label="Get Started" style="mx-auto " />

              <div className="relative mx-auto md:w-1/2">
                <input
                  type="text"
                  id="UserEmail"
                  placeholder="Enter your zipcode"
                  className="w-full px-5 py-3 text-lg text-black rounded-md"
                />

                <div className="absolute right-2 -top-2">
                  <Button
                    label="Check"
                    style="mx-auto !md:px-12 !py-1"
                    onClick={() => router.push("/explore")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
