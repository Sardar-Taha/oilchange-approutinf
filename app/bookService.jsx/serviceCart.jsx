import React from 'react'
import Button from '../shared/common/customButton';

const ServiceCart = ({handleNext}) => {
  return (
    <div>
          <div className="px-5 py-5 space-y-4">
              <h1 className="text-xl font-bold text-black ">Your Cart</h1>
              <p className="">Vehicle 1</p>
              <h1 className="text-xl font-bold text-black ">BMW 2289 X Drive Gran Coup 2023</h1>
              <p className="pb-2 border-b">Please Add Vehicle Service</p>
              <div className="flex justify-between items-center pb-4">
                  <p className="">Moble Service Charge</p>
                  <h1 className="text-xl font-bold text-black ">$0.00</h1>
              </div>
              <div className="flex justify-between items-center pb-4">
                  <p className="">Subtotal</p>
                  <h1 className="text-xl font-bold text-black ">$0.00</h1>
              </div>
              <div className="flex justify-between items-center pb-4">
                  <p className="">Taxex ( to be calculated at checkout)</p>
                  <h1 className="text-xl font-bold text-black ">$0.00</h1>
              </div>

              <button className="py-4 px-3 border border-dashed border-primary bg-blue-100">Apply Promo Code</button>
              <div className="flex justify-between items-center pb-4">
                  <h1 className="text-xl font-bold text-black ">Estimated Total</h1>
                  <h1 className="text-xl font-bold text-black ">$0.00</h1>
              </div>
              <p className="">Include applicable labor. other restraction , free and taxex may apply</p>

              <Button label="Review Cart" style="!mx-auto py-" onClick={handleNext} />

          </div>
    </div>
  )
}

export default ServiceCart