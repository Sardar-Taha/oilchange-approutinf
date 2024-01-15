import React, { useState } from "react";
import signup from "/public/assets/siginup.svg";
import mail from "/public/assets/icon/mail 1.png";
import lock from "/public/assets/icon/lock.png";
import user from "/public/assets/icon/user 68.png";
import Image from "next/image";
import CustomInput from "../shared/common/customInput";
import Button from "../shared/common/customButton";

const SignupSection = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      rememberMe: !prevData.rememberMe,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using formData
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className="w-full px-5 py-10 background lg:px-32 md:px-20 md:py-20">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <Image src={signup} alt="" className="" />
          </div>
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <div className="w-full px-2 py-10 lg:w-3/4 bg-background rounded-xl md:px-5">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-lg font-bold md:text-2xl">Welcome Back!</h1>
                <p className="font-normal md:text-lg text-md">
                  Please Log in to Continue
                </p>
              </div>

              <form onSubmit={handleSubmit} className="py-5 space-y-3">
                <CustomInput
                  label="User Name"
                  inputType="text"
                  placeholder="James Williams"
                  style="your-custom-styles"
                  value={formData.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                  name="username"
                  id="username"
                  icon={user}
                />
                <CustomInput
                  label="Enter Email Address"
                  inputType="text"
                  placeholder="user67@email.com"
                  style="your-custom-styles"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  name="email"
                  id="email"
                  icon={mail}
                />
                <CustomInput
                  label="Password"
                  inputType="password"
                  placeholder="*******"
                  style="your-custom-styles"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  name="password"
                  id="password"
                  icon={lock}
                />
                <div className="flex items-center justify-between px-2">
                  <div class="col-span-6">
                    <label
                      for="MarketingAccept"
                      class="flex gap-2 items-center"
                    >
                      <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        checked={formData.rememberMe}
                        onChange={handleCheckboxChange}
                        class="h-4 w-4 rounded-lg border-gray-200 bg-white shadow-sm"
                      />
                      <span class="text-sm text-gray-700">Remember me! </span>
                    </label>
                  </div>
                  <button className="text-md text-primary" type="button">
                    Forgot Password!
                  </button>
                </div>
                <Button label="Sign up" style="!mx-auto mt-3" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
