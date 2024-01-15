import Image from 'next/image'
import React from 'react'
import member from '/public/assets/memberMian.svg'
import Heading from '@/components/shared/common/heading'
import Button from '@/components/shared/common/customButton'

const BecomeMember = () => {
    return (
        <div>
            <div className="w-full relative  md:py-16 py-10 lg:px-32 md:px-20 px-5 memberBg">
                <section className="overflow-hidden sm:grid sm:grid-cols-2">
                    <div className="p-5 md:p-12 lg:px-16 lg:py-24">
                        <div className="">
                            <Heading text='Why Become a Member' style='!text-left !py-2 !text-3xl'/>

                            <p className=" text-black md:mt-4block">Discover the secrets to a smoother ride! From routine upkeep to pro tips, our site offers comprehensive guidance on car maintenance, ensuring your vehicle stays in peak condition.
                            </p>

                            <div className="mt-4 md:mt-8">
                                <Button label='Take a membership now' className=''/>
                            </div>
                        </div>
                    </div>

                   <Image src={member} alt='' className=''/>
                </section>
            </div>
        </div>
    )
}

export default BecomeMember