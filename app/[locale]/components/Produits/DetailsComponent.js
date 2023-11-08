"use client";

import React, { useState } from "react";
import StepModele from "./StepModele";
import Gel1 from "../../../../public/assets/images/Gel1.png";
import Step1 from "../../../../public/assets/images/Step1.png";
import Gel2 from "../../../../public/assets/images/Gel2.png";
import Step2 from "../../../../public/assets/images/Step2.png";
import Gel3 from "../../../../public/assets/images/Gel3.png";
import Step3 from "../../../../public/assets/images/Step3.png";
import Gel4 from "../../../../public/assets/images/Gel4.png";
import Step4 from "../../../../public/assets/images/Step4.png";

function DetailsComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details
      className="rounded-[1.125rem] border-[1px] border-[var(--new-palette-900-grey,#BBBABA)] w-3/4 lg:w-1/2"
      open={isOpen}
    >
      <summary
        className="text-[0.9rem] not-italic font-semibold p-6 "
        onClick={toggleDetails}
      >
        <span>{isOpen ? "+" : "-"}</span>
      </summary>
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-start lg:content-start">
        <StepModele
          stepInfo={{
            srcGelImage: Gel1,
            altGelImage: "Gel1",
            srcStepImage: Step1,
            altStepImage: "Step1",
            stepText: t("produits.step1"),
          }}
        />
        <StepModele
          stepInfo={{
            srcGelImage: Gel2,
            altGelImage: "Gel2",
            srcStepImage: Step2,
            altStepImage: "Step2",
            stepText: t("produits.step2"),
          }}
        />
        <StepModele
          stepInfo={{
            srcGelImage: Gel3,
            altGelImage: "Gel3",
            srcStepImage: Step3,
            altStepImage: "Step3",
            stepText: t("produits.step3"),
          }}
        />
        <StepModele
          stepInfo={{
            srcGelImage: Gel4,
            altGelImage: "Gel4",
            srcStepImage: Step4,
            altStepImage: "Step4",
            stepText: t("produits.step4"),
          }}
        />
      </div>
    </details>
  );
}

export default DetailsComponent;
