"use client";

import Image from "next/image";
import React, { useState } from "react";

const CustomFileUpload = (props) => {
    const { label, name, onChange, id } = props;

    const [showPassword, setShowPassword] = useState(false);
    const [filePreviews, setFilePreviews] = useState  ([]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFileChange = async (e) => {
        if (onChange) {
            onChange(e);

            // Display file previews
            const files = e.target.files;
            if (files) {
                const previews = await Promise.all(
                    Array.from(files).map(async (file) => {
                        return new Promise < string > ((resolve) => {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                                const result = event.target?.result;
                                if (result && typeof result === "string") {
                                    resolve(result);
                                } else {
                                    resolve("");
                                }
                            };
                            reader.readAsDataURL(file);
                        });
                    })
                );

                setFilePreviews([...filePreviews, ...previews]);
            }
        }
    };

    const cancelFile = (index) => {
        const updatedPreviews = [...filePreviews];
        updatedPreviews.splice(index, 1);
        setFilePreviews(updatedPreviews);
    };

    return (
        <>
            <div className="flex flex-col w-full">
                <label
                    htmlFor="input-group-1"
                    className="block mb-1 text-lg font-medium text-black"
                >
                    {label}
                </label>
                {/* Display file previews */}
                {filePreviews.length > 0 && (
                    <span className="text-sm text-black font-medium">
                        {" "}
                        Files ({filePreviews.length})
                    </span>
                )}
                <div className="flex">
                    {filePreviews.map((preview, index) => (
                        <div key={index} className="w-full flex gap-2 flex-wrap relative">
                            <Image
                                src={preview}
                                width={50}
                                height={20}
                                alt={`File Preview ${index + 1}`}
                                className="w-16 h-16 object-cover mb-2"
                            />
                            <button
                                onClick={() => cancelFile(index)}
                                className="text-sm text-red-500 cursor-pointer absolute top-0 left-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 33" fill="none">
                                    <rect y="0.5" width="32" height="32" rx="8" fill="#F8F8F8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4002 16.5L8.79989 10.8997C8.35812 10.4579 8.35812 9.74165 8.79989 9.29989C9.24165 8.85812 9.9579 8.85812 10.3997 9.29989L16 14.9002L21.6003 9.29989C22.0421 8.85812 22.7583 8.85812 23.2001 9.29989C23.6419 9.74165 23.6419 10.4579 23.2001 10.8997L17.5998 16.5L23.2001 22.1003C23.6419 22.5421 23.6419 23.2583 23.2001 23.7001C22.7583 24.1419 22.0421 24.1419 21.6003 23.7001L16 18.0998L10.3997 23.7001C9.95789 24.1419 9.24165 24.1419 8.79989 23.7001C8.35812 23.2583 8.35812 22.5421 8.79989 22.1003L14.4002 16.5Z" fill="#949494" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor={id}
                        className="flex flex-col items-center justify-center w-full cursor-pointer bg-[#F9F9F9] "
                    >
                        <div className="flex flex-col items-center justify-center ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="56" viewBox="0 0 68 56" fill="none">
                                    <path d="M42.5333 43H52.6667C60 43 66 39.0605 66 31.725C66 24.3895 58.9333 20.7373 53.2 20.45C52.0147 8.97809 43.7333 2 34 2C24.8 2 18.8747 8.17563 16.9333 14.3C8.93333 15.0688 2 20.218 2 28.65C2 37.082 9.2 43 18 43H25.4667" stroke="#182DCF" stroke-opacity="0.19" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M43 27.7357L34 19L25 27.7357M34 54V21.1839" stroke="#182DCF" stroke-opacity="0.19" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    {" "}
                                    Drag and drop file here{" "}
                                </p>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    {" "}
                                    or{" "}
                                </p>
                                <p className="text-xs text-blue-500 dark:text-gray-400">
                                    BChoose File
                                </p>
                            </div>
                        </div>
                        <input
                            id={id}
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            name={name}
                            multiple
                        />
                    </label>
                </div>
            </div>
        </>
    );
};

export default CustomFileUpload;