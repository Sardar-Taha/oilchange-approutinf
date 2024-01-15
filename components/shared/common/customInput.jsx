"use client";

import React, { useState } from "react";
import eyeClose from '/public/assets/cloceEye.svg';
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";


const CustomInput = (props) => {
    const {
        label,
        inputType,
        placeholder,
        style,
        value,
        name,
        id,
        onChange,
        icon
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
         
            <div className={`flex flex-col ${style}`}>
                <label htmlFor="input-group-1" className="block mb-1 text-lg font-normal text-black">
                    {label}
                </label>
                <div className="relative bg-transparent flex items-center">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <div className="py-3 mt-1">
                            {icon && <Image src={icon} alt="" width={20} height={20} />}
                        </div>
                    </div>
                    {inputType === "password" ? (
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle input type
                            className="text-grey1 text-md bg-white border border-grey3 rounded-md
                        focus:border-primary focus:outline-none block w-full pl-10 p-2.5 py-3"
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            name={name}
                            id={id}
                        />
                    ) : (
                        <input
                            type={inputType}
                            className="text-grey1 text-md bg-white border border-grey3 rounded-md
                        focus:border-primary focus:outline-none block w-full pl-10 p-2.5 py-3"
                                placeholder={placeholder}
                                onChange={onChange}
                                value={value}
                                name={name}
                                id={id}
                        />
                    )}
                    {inputType === "password" && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer" onClick={togglePasswordVisibility}>
                            <div className="py-3">
                                {showPassword ? 
                                    <Image src={eyeClose} alt='' width={20} height={20} />
                                : <IoEyeOutline  className="text-gray-500 text-xl"/>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CustomInput;