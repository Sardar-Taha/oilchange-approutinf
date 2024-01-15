"use client";
import React from "react";


const Button = ({
    label,
    onClick,
    style,
    loadingText,
    loading,
}) => {
    return (
        <div className="my-4 w-full">
            <button
                className={`flex gap-2 bg-secondary text-lg   rounded-md text-center justify-between items-center  text-white py-3 px-4 hover:scale-105 transition-all duration-300 ${style}`}
                onClick={onClick}
                disabled={loading}
            >
                {loading ? (
                    <div className="flex items-center justify-center text-center">

                       {loadingText}
                    </div>
                ) : (
                    label
                )}

            </button>
        </div>
    );
};

export default Button;