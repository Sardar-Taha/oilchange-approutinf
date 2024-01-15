"use client";
import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import VehicleSelect from "./forms/vehicleSelect";
import SelectService from "./forms/selectService";
import ServiceCart from "./serviceCart";
import SelectTime from "./forms/selectTime";

const BookService = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const steps = [
    {
      label: "Select Vehicle",
      component: <VehicleSelect handleNext={handleNext} />,
    },
    {
      label: "Select Service",
      component: <SelectService handleNext={handleNext} />,
    },
    { label: "Location", component: <SelectTime handleNext={handleNext} /> },
    { label: "Schedule", component: <VehicleSelect handleNext={handleNext} /> },
    { label: "Reserve", component: <VehicleSelect handleNext={handleNext} /> },
  ];

  const stepStyle = {
    activeBgColor: "#007bff",
    activeTextColor: "#ffffff",
    completedBgColor: "#018FFC",
    completedTextColor: "#ffffff",
    inactiveBgColor: "#6c757d",
    inactiveTextColor: "#ffffff",
    size: "2.5em",
    circleFontSize: "1rem",
    labelFontSize: "0.875rem",
    borderRadius: "50%",
    fontWeight: "500",
  };
  const connectorStyle = {
    disabledColor: "#6c757d",
    activeColor: "#018FFC",
    size: "6px",
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 py-10 md:py-20 lg:px-32 md:px-12 ">
        <div className="relative w-full py-10 shadow-xl md:w-3/4 md:py-16 lg:px-32 md:px-20">
          <Stepper
            activeStep={currentStep}
            className=""
            styleConfig={stepStyle}
            connectorStateColors={true}
            connectorStyleConfig={connectorStyle} // Add this line for connector styles
          >
            {steps.map((step, index) => (
              <Step key={index} label={step.label} />
            ))}
          </Stepper>

          <div className="" style={{ marginTop: "20px" }}>
            {steps[currentStep]?.component}
          </div>
        </div>
        {currentStep !== 0 && (
          <div className="md:w-[23%] w-full shadow-lg">
            <ServiceCart handleNext={handleNext} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookService;
