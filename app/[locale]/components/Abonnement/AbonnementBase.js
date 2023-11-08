import React from "react";

export const AbonnementBase = ({ t }) => {
  return (
    <div className="bg-[var(--new-palette-900-very-light-green,_#E4FFEE)] flex flex-col items-center text-center gap-6 py-10 lg:py-20 lg:gap-10">
      <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] text-[#36AB63] lg:leading-[3.75rem] lg:text-[4rem] lg:w-2/3">
        {t("abonnement.title")}
      </h2>
      <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
        {t("abonnement.question1")}
      </h3>
      <div className="lg:flex lg:flex-row lg:gap-16 lg:w-2/3 lg:justify-center lg:items-start">
        <div className="w-64 m-auto p-3 lg:m-0">
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
            {t("abonnement.reason1")}
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5">
            {t("abonnement.info1")}
          </p>
        </div>
        <div className="w-64 m-auto p-3 lg:m-0">
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
            {t("abonnement.reason2")}
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5">
            {t("abonnement.info2")}
          </p>
        </div>
        <div className="w-64 m-auto p-3 lg:m-0">
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
            {t("abonnement.reason3")}
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5">
            {t("abonnement.info3")}
          </p>
        </div>
      </div>
      <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem]">
        {t("abonnement.question2")}
      </h3>
      <div className="lg:flex lg:flex-row lg:gap-24">
        <div className="bg-[var(--new-palette-900-light-blue,_#C7E5FA)] rounded-full h-[18rem] flex flex-col justify-center gap-2 w-72 p-12 m-5 lg:h-[22.0625rem] lg:w-[22.0625rem]">
          <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:leading-[3.75rem] lg:text-[4rem]">
            #1
          </h2>
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem] lg:leading-[1.875rem]">
            {t("abonnement.step1")}
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5 lg:text-[1.25rem] lg:font-normal lg:leading-6">
            {t("abonnement.action1")}
          </p>
        </div>
        <div className="bg-[var(--new-palette-900-light-pink,_#FFADD5)] rounded-full h-[18rem] flex flex-col justify-center gap-2 w-72 p-12 m-5 lg:h-[22.0625rem] lg:w-[22.0625rem]">
          <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:leading-[3.75rem] lg:text-[4rem]">
            #2
          </h2>
          <h3 className="font-[Ultra-Ultra] text-[1.2rem] not-italic font-[1000] lg:text-[2rem] lg:leading-[1.875rem]">
            {t("abonnement.step2")}
          </h3>
          <p className="text-[0.9rem] not-italic font-semibold leading-5 lg:text-[1.25rem] lg:font-normal lg:leading-6">
            {t("abonnement.action2")}
          </p>
        </div>
      </div>
    </div>
  );
};
