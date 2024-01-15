"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomInput from "@/components/shared/common/customInput";
import Button from "@/components/shared/common/customButton";
import CustomSelectInput from "@/components/shared/common/customSelectInput";
import CustomFileUpload from "@/components/shared/common/fileUploadInput";

const Seller_Registration = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phoneNumber: "",
    serviceArea: "",
    zipCode: "",
    service: "",
    setHours: "",
    description: "",
    marketingAccept: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const serviceArea = [
    { label: "lhr", value: "lhr" },
    { label: "lhr", value: "lhr" },
  ];
  return (
    <div>
      <div className="flex justify-center w-full px-5 py-10 background md:py-16 lg:px-32 md:px-20 ">
        <div className="w-full px-2 py-10 lg:w-1/2 md:w-3/4 bg-background rounded-xl md:px-5">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg font-bold md:text-2xl">
              Seller Registration!
            </h1>
            <p className="font-normal md:text-lg text-md">
              Please Log in to Continue
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap justify-between py-5 space-y-3 "
          >
            <CustomInput
              label="Business Name"
              inputType="text"
              placeholder="Business Name"
              style="w-full"
              value=""
              onChange={handleChange}
              name="businessName"
              id="businessName"
            />
            <CustomInput
              label="Enter Email Address"
              inputType="email"
              placeholder="user67@email.com"
              style="lg:w-[47%] w-full"
              value=""
              onChange={handleChange}
              name="email"
              id="email"
            />
            <CustomInput
              label="Phone Number"
              inputType="text"
              placeholder="+012888885 5555"
              style="lg:w-[47%] w-full"
              value=""
              onChange={handleChange}
              name="phoneNumber"
              id="phoneNumber"
            />
            <CustomSelectInput
              label="Service Areas"
              placeholder="Select Service Area"
              options={serviceArea}
              style="w-full"
              name="serviceArea"
              id="serviceArea"
            />
            <CustomInput
              label="Zip Code"
              inputType="text"
              placeholder="Zip Code"
              style="w-full"
              value=""
              onChange={handleChange}
              name="zipCode"
              id="zipCode"
            />
            <CustomSelectInput
              label="Service"
              placeholder="Select Service "
              options={serviceArea}
              style="w-full"
              id="service"
              name="service"
            />
            <CustomInput
              label="Set Hours"
              inputType="time"
              placeholder="Set Hours"
              style="w-full"
              value=""
              onChange={handleChange}
              name="setHours"
              id="setHours"
            />
            <div className={`flex flex-col w-full `}>
              <label
                htmlFor="input-group-1"
                className="block mb-1 text-lg font-normal text-black"
              >
                Discription
              </label>
              <div className="relative flex items-center bg-transparent">
                <textarea
                  className="text-grey1 text-md bg-white border border-grey3 rounded-md
                        focus:border-primary focus:outline-none block w-full pl-10 p-2.5 py-3"
                  placeholder="Write here"
                  onChange={handleChange}
                  rows={4}
                  cols={10}
                  id="description"
                  name="description"
                />
              </div>
            </div>
            <CustomFileUpload
              label="Uplaod Document 0r Logo"
              onChange={handleChange}
            />
            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketingAccept"
                  checked={formData.marketingAccept}
                  onChange={handleCheckboxChange}
                  class="h-4 w-4 rounded-lg border-gray-200 bg-white shadow-sm"
                />
                <span class="text-sm text-gray-700">
                  I agree company all terms & conditions and privacy & policy.
                </span>
              </label>
            </div>
            <Button
              label="Sign in"
              style="!mx-auto mt-3"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Seller_Registration;
