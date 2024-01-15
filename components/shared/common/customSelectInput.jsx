// customSelectInput.tsx
'use client'
import React, { useState } from 'react';


const CustomSelectInput = ({ label, options, style, onChange }) => {
    const [selectedOption, setSelectedOption] = useState (null);

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        const option = options.find((opt) => opt.value === selectedValue);
        setSelectedOption(option || null);
        onChange(selectedValue); // Call the onChange prop with the selected value
    };

    return (
        <div className={`${style}`}>
            <label htmlFor="custom-select" className="block mb-1 text-lg font-normal text-black">
                {label}
            </label>
            <select
                id="custom-select"
                value={selectedOption?.value || ''}
                onChange={handleOptionChange}
                className="text-black px-5 text-md bg-white border border-black rounded-md
                         focus:outline-none  block w-full p-2 py-4"
            >
                <option value="" disabled>
                    Select an option
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelectInput;