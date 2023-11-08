import React from "react";
import Image from "next/image";
import HeroImage from "../../../../public/assets/images/HeroImage.png";
import { useTranslation } from "../../../i18n";

export default async function Herobase({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="mx-10 flex flex-col lg:flex lg:flex-row lg:m-0 lg:w-full">
      <div className="m-auto pb-4 order-2 lg:max-w-[50%] lg:pb-0">
        <Image src={HeroImage} alt="Hero" className="" />
      </div>
      <div className="flex flex-col justify-center gap-4 order-1 lg:order-2 lg:max-w-[50%] lg:py-10 lg:px-20 lg:gap-8">
        <h1 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] lg:text-[4rem]">
          {t("hero.title")}
        </h1>
        <p className="text-[0.9rem] not-italic font-normal leading-6 lg:text-[1.25rem]">
          {t("hero.text1")}
        </p>
        <h3 className="font-[Ultra] text-[1.2rem] not-italic font-bold lg:text-[1.5rem]">
          {t("hero.h3")}
        </h3>
        <p className="text-[0.9rem] not-italic font-normal leading-6 pb-5 lg:text-[1.25rem]">
          {t("hero.text2")}
        </p>
      </div>
    </div>
  );
}
