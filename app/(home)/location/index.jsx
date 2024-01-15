import Heading from '@/components/shared/common/heading'
import Image from 'next/image'
import React from 'react'
import map from '/public/assets/map.png'
import Button from '@/components/shared/common/customButton'

const Location = () => {
    return (
        <div>
            <div className="md:py-20 py-5 relative md:min-h-screen h-[40vh]">
                <div className="flex flex-col justify-center items-center">
                    <Heading text='You are here. So are we!' style=' '/>
                    <div className="relative md:w-2/5 w-4/5  mx-auto border border-secondary  rounded-lg">
                        <input
                            type="text"
                            id="UserEmail"
                            placeholder="Enter your zipcode"
                            className="w-full rounded-md py-3 px-5 text-black text-lg"
                        />
                        <div className="absolute right-2 -top-2" >
                            <Button label='Check' style='mx-auto !md:px-12 !py-1' />
                        </div>
                    </div>
                    <Image src={map} alt='' layout="fill" className='py-5'/>
                </div>
            </div>
        </div>
    )
}

export default Location