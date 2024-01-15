import Button from '@/components/shared/common/customButton'
import CustomInput from '@/components/shared/common/customInput'
import React from 'react'

const SelectService = ({ handleNext }) => {
    return (
        <div>
            <div className="space-y-3 py-10 md:px-10 px-5">
                <h1 className="text-2xl font-bold text-black text-center">BMW 230i 2022</h1>

                <form action="" className=" space-y-3 border rounded-xl w-full px-5">
                   <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b ">
                            <p className="">New Tires</p>
                            <div className="p-3 rounded-full bg-blue-300"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M13.2636 7.8952H7.8952V13.2636H6.10573V7.8952H0.737305V6.10573H6.10573V0.737305H7.8952V6.10573H13.2636V7.8952Z" fill="white" />
                            </svg></div>
                        </div>
                        <div className=" space-y-2">
                            <h1 className="text-xl font-bold text-black ">How do I check my tire size?</h1>
                            <li>The tire size is located on the side of your tire.</li>
                            <li className="">If you don’t see the size, check your owner's manual or contact the manufacturer.</li>
                            <li className="">It is important to select the correct tire size so our mobile specialists source the right tires for your vehicle</li>
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold text-black ">Please select your tire sizes for your BMW 228i xDrive Gran Coupe</h1>
                            <div className="bg-blue-100 p-4 rounded-md flex justify-between items-center ">
                                <h1 className="text-xl font-bold text-black ">BOTH: 225/40R19/XL 93Y</h1>
                                <input type='radio' name='both' value='1' className='p-2' />
                            </div>
                            <div className="bg-blue-100 p-4 rounded-md flex justify-between items-center ">
                                <h1 className="text-xl font-bold text-black ">BOTH: 225/40R19/XL 93Y</h1>
                                <input type='radio' name='both' value='1' className='p-2' />
                            </div>
                            <div className="bg-blue-100 p-4 rounded-md flex justify-between items-center ">
                                <h1 className="text-xl font-bold text-black ">BOTH: 225/40R19/XL 93Y</h1>
                                <input type='radio' name='both' value='1' className='p-2' />
                            </div>

                        </div>
                        <Button label="Select Your Tire" style="!mx-auto" onClick={handleNext} />
                   </div>
                    <CustomInput label="Oil Change" />
                    <CustomInput label="Tire Change" />
                    <CustomInput label="Battery Change" />
                    <CustomInput label="Break Service" />
                </form>
            </div>
        </div>
    )
}

export default SelectService