import React from "react";

export const PlaneteBase = ({ t }) => {
  return (
    <div className="bg-[#FFE967] py-20 px-0 flex flex-col items-center gap-10 text-center">
      <div>
        <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:text-[4rem]">
          {t("planete.title")}
        </h2>
      </div>
      <div>
        <p className="w-60 font-[Ultra-Ultra] text-[1.5rem] not-italic font-[700] leading-7 lg:w-96">
          {t("planete.text")}
        </p>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-center lg:gap-7">
        <div className="bg-[#FFFBE1] w-60 rounded-[1.875rem] m-6 p-7 lg:w-1/5 lg:h-80 lg:m-0 lg:p-0">
          <p className="font-[Ultra-Ultra] text-[4rem] not-italic font-[1000] lg:text-[8rem]">
            110
          </p>
          <p className="text-[1rem] not-italic font-semibold leading-5 lg:w-2/3 lg:m-auto">
            {t("planete.info1")}
          </p>
        </div>
        <div className="bg-[#FFFBE1] w-60 rounded-[1.875rem] m-6 p-7 lg:w-1/5 lg:h-80 lg:m-0 lg:p-0">
          <p className="font-[Ultra-Ultra] text-[4rem] not-italic font-[1000] lg:text-[8rem]">
            6
          </p>
          <p className="text-[1rem] not-italic font-semibold leading-5 lg:w-2/3 lg:m-auto">
            {t("planete.info2")}
          </p>
        </div>
        <div className="bg-[#FFFBE1] w-60 rounded-[1.875rem] m-6 p-7 lg:w-1/5 lg:h-80 lg:m-0 lg:p-0">
          <p className="font-[Ultra-Ultra] text-[4rem] not-italic font-[1000] lg:text-[8rem]">
            35
          </p>
          <p className="text-[1rem] not-italic font-semibold leading-5 lg:w-2/3 lg:m-auto">
            {t("planete.info3")}
          </p>
        </div>
        <div className="bg-[#FFFBE1] w-60 rounded-[1.875rem] m-6 p-7 lg:w-1/5 lg:h-80 lg:m-0 lg:p-0">
          <p className="font-[Ultra-Ultra] text-[4rem] not-italic font-[1000] lg:text-[8rem]">
            6,5
          </p>
          <p className="text-[1rem] not-italic font-semibold leading-5 lg:w-2/3 lg:m-auto">
            {t("planete.info4")}
          </p>
        </div>
      </div>
    </div>
  );
};
