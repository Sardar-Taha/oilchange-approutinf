import Image from 'next/image'
import React from 'react'
import work1 from '/public/assets/weWork/work1.svg'
import icon1 from '/public/assets/weWork/w1.svg'
import work2 from '/public/assets/weWork/work2.svg'
import icon2 from '/public/assets/weWork/w2.svg'
import work3 from '/public/assets/weWork/work3.svg'
import icon3 from '/public/assets/weWork/w3.svg'

const HowWeWork = () => {
    return (
        <div>
            <div className="w-full relative weWork md:py-16 py-10 lg:px-32 md:px-20 px-5">
                <div className="md:text-[40px] text-2xl font-black py-5 text-center">How it Works</div>
                <div className="flex items-center flex-wrap justify-center py-5 gap-5">
                    <div className="lg:w-[30%] md:w-[48%] w-full relative">
                        <Image src={work1} alt="" className='   ' />
                        <Image src={icon1} alt="" className=' absolute md:bottom-[20%] md:left-[28%] bottom-[20%] left-[27%]  hover:scale-105 duration-300 transition-all ' />
                    </div>
                    <div className="lg:w-[30%] md:w-[48%] w-full relative">
                        <Image src={work2} alt="" className='' />
                        <Image src={icon2} alt="" className=' absolute md:bottom-[28%] md:left-[20%] bottom-[25%] left-[20%]  hover:scale-105 duration-300 transition-all ' />
                    </div>
                    <div className="lg:w-[30%] md:w-[48%] w-full relative">
                        <Image src={work3} alt="" className='' />
                        <Image src={icon3} alt="" className=' absolute md:bottom-[25%] md:left-[15%] bottom-[20%] left-[12%]  hover:scale-105 duration-300 transition-all ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork