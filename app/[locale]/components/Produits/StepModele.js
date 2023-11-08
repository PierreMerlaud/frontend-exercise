import React from "react";
import Image from "next/image";

const StepModele = ({ stepInfo }) => {
  return (
    <div className="flex flex-row gap-8 p-8 lg:p-4 lg:mb-8 lg:w-2/5">
      <Image
        src={stepInfo.srcGelImage}
        alt={stepInfo.altGelImage}
        className="h-36"
      />
      <div className="flex flex-col justify-center items-start gap-3">
        <Image
          src={stepInfo.srcStepImage}
          alt={stepInfo.altStepImage}
          className="w-12"
        />
        <p className="text-[0.9rem] not-italic font-normal leading-6 lg:text-[1.25rem]">
          {stepInfo.stepText}
        </p>
      </div>
    </div>
  );
};

export default StepModele;
