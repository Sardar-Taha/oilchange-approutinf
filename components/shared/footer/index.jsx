import Image from 'next/image'
import React from 'react'
import logo from '/public/assets/logo2.svg'
import Link from 'next/link'
import Button from '../common/customButton'

const Footer = () => {
    return (
        <div>
            <div className="bg-background xl:px-32 lg:px-24 md:px-20 px-5 md:py-20 py-10">
                <div className="flex justify-between items-center flex-wrap gap-4 lg:gap-0 md:text-[14px] text-[12px] text-black">
                    <div className="lg:w-[23%] md:w-[47%] w-full space-y-2">
                        <Image src={logo} alt='' className='' />
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="lg:w-[18%] w-[47%] space-y-2">
                        <h2 className="font-medium">RESOURCES</h2>
                        <Link href='/' className='block'>Flowbite</Link>
                        <Link href='/' className='block'>Tailwind</Link>
                    </div>
                    <div className="lg:w-[18%] w-[47%] space-y-2">
                        <h2 className="font-medium">Follow Us</h2>
                        <Link href='/' className='block'>GitHub</Link>
                        <Link href='/' className='block'>Discord</Link>
                    </div>
                    <div className="lg:w-[18%] w-[47%] space-y-2">
                        <h2 className="font-medium">Legal</h2>
                        <Link href='/' className='block'>Privacy & policy</Link>
                        <Link href='/' className='block'>Terms & condition</Link>
                    </div>
                    <div className="lg:w-[23%] md:w-[47%] w-full space-y-2">
                        <h2 className="font-medium">Register as provider</h2>
                        <div className="flex items-center gap-4">
                            <input type='text' placeholder='Enter Your Email Address' className='py-3 px-4 rounded-lg border'/>
                            <Button label='Register' style='!py-3'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer