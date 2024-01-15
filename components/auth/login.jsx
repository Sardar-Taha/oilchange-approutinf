"use client";
import React, { useState } from "react";
import login from "/public/assets/login.svg";
import mail from "/public/assets/icon/mail 1.png";
import lock from "/public/assets/icon/lock.png";
import Image from "next/image";
import CustomInput from "../shared/common/customInput";
import Link from "next/link";
import Button from "../shared/common/customButton";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your login logic here with 'email', 'password', and 'rememberMe'
    // For example, you can log the values to the console:
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div>
      <div className="w-full px-5 py-10 background lg:px-32 md:px-20 md:py-20">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <Image src={login} alt="" className="" />
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
                  label="Enter Email Address"
                  inputType="text"
                  placeholder="user67@email.com"
                  style="your-custom-styles"
                  value={email}
                  onChange={handleEmailChange}
                  name="email"
                  id="email"
                  icon={mail}
                />
                <CustomInput
                  label="Password"
                  inputType="password"
                  placeholder="*******"
                  style="your-custom-styles"
                  value={password}
                  onChange={handlePasswordChange}
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
                        class="h-4 w-4 rounded-lg border-gray-200 bg-white shadow-sm"
                      />
                      <span class="text-sm text-gray-700">Remember me! </span>
                    </label>
                  </div>
                  <Link href="/forgetPassword" className="text-md text-primary">
                    Forgot Password!
                  </Link>
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
      </div>
    </div>
  );
};

export default LoginSection;
