import React from "react";
import Image from "next/image";

import ProduitsImage from "../../../../public/assets/images/ProduitsImage.png";

import { useTranslation } from "../../../i18n";
import DetailsComponent from "./DetailsComponent";

export default async function ProduitsBase({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex flex-col items-center">
      <div className="p-5">
        <h2 className="font-[Ultra-Ultra] text-[2rem] not-italic font-[1000] text-center p-5 lg:text-[4rem] ">
          {t("produits.title")}
        </h2>
        <Image src={ProduitsImage} alt="Produits" className="w-[85%] m-auto" />
      </div>
      <details
        className="rounded-[1.125rem] border-[1px] border-[var(--new-palette-900-grey,#BBBABA)] w-3/4 lg:w-1/2"
        open={isOpen}
      >
        <summary
          className="text-[0.9rem] not-italic font-semibold p-6 "
          onClick={toggleDetails}
        >
          <span>{t("produits.question")}</span>
          <span className="text-[1.5rem]">{isOpen ? "+" : "-"}</span>
        </summary>
      </details>
    </div>
  );
}
