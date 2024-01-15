import Heading from '@/components/shared/common/heading'
import React from 'react'
import CustomFaq from './customFaq'
const faqs=[
    { question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore", answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    { question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore", answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    { question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore", answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    { question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore", answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
]

const FAQs = () => {
    return (
        <div>
            <div className="w-full relative bg-[#EBF4FF] md:py-16 py-10 lg:px-32 md:px-20 px-5 ">
                <Heading text='frequently Asked Questions' style='' />
                <div className="flex items-start flex-wrap justify-center py-5 md:gap-3 gap-2 w-full ">
                    <div className="flex items-center flex-wrap justify-center  md:w-[47%] w-full">
                        <CustomFaq faqs={faqs} />
                    </div>
                    <div className="flex items-center flex-wrap justify-center  md:w-[47%] w-full">
                        <CustomFaq faqs={faqs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs