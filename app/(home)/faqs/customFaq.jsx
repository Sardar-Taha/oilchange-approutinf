"use client";
import React, { useState } from 'react';

const CustomFaq = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item w-full my-4">
                    <button
                        className="faq-toggle-btn w-full flex justify-between gap-6 items-center md:text-xl text-lg py-5 text-black bg-white p-3 rounded-md"
                        onClick={() => handleToggle(index)}
                        aria-expanded={activeIndex === index}
                    >
                        <div className="">
                            {faq.question}
                        </div>
                        <div className="">
                            {activeIndex === index ? (
                                <div className="w-7 h-7 rounded-full bg-primary flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="2" viewBox="0 0 13 2" fill="none">
                                        <path d="M12.1875 0H0.8125C0.597012 0 0.390349 0.105357 0.237976 0.292893C0.0856026 0.48043 0 0.734784 0 1C0 1.26522 0.0856026 1.51957 0.237976 1.70711C0.390349 1.89464 0.597012 2 0.8125 2H12.1875C12.403 2 12.6097 1.89464 12.762 1.70711C12.9144 1.51957 13 1.26522 13 1C13 0.734784 12.9144 0.48043 12.762 0.292893C12.6097 0.105357 12.403 0 12.1875 0Z" fill="white" />
                                    </svg>
                                </div>
                            ) : (
                                    <div className="w-7 h-7 rounded-full bg-primary flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M9.28571 5.71429H5.71429V9.28571C5.71429 9.47515 5.63903 9.65684 5.50508 9.79079C5.37112 9.92475 5.18944 10 5 10C4.81056 10 4.62888 9.92475 4.49492 9.79079C4.36097 9.65684 4.28571 9.47515 4.28571 9.28571V5.71429H0.714286C0.524845 5.71429 0.343164 5.63903 0.20921 5.50508C0.075255 5.37112 0 5.18944 0 5C0 4.81056 0.075255 4.62888 0.20921 4.49492C0.343164 4.36097 0.524845 4.28571 0.714286 4.28571H4.28571V0.714286C4.28571 0.524845 4.36097 0.343164 4.49492 0.209209C4.62888 0.0752547 4.81056 0 5 0C5.18944 0 5.37112 0.0752547 5.50508 0.209209C5.63903 0.343164 5.71429 0.524845 5.71429 0.714286V4.28571H9.28571C9.47515 4.28571 9.65684 4.36097 9.79079 4.49492C9.92475 4.62888 10 4.81056 10 5C10 5.18944 9.92475 5.37112 9.79079 5.50508C9.65684 5.63903 9.47515 5.71429 9.28571 5.71429Z" fill="white" />
                                        </svg>
                                    </div>
                            )}
                        </div>
                    </button>
                    {activeIndex === index && (
                    <div className="text-black bg-white p-3 my-3">
                            <p data-aos="zoom-in" className="faq-answer duration-300 transition-all text-lg font-normal py-5">
                                {faq.answer}
                            </p>
                    </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CustomFaq;
