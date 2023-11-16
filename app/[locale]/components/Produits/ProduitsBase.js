import React, { useState, useEffect } from "react";
import Image from "next/image";
import StepModele from "./StepModele";
import ProduitsImage from "../../../../public/assets/images/ProduitsImage.png";
import Gel1 from "../../../../public/assets/images/Gel1.png";
import Step1 from "../../../../public/assets/images/Step1.png";
import Gel2 from "../../../../public/assets/images/Gel2.png";
import Step2 from "../../../../public/assets/images/Step2.png";
import Gel3 from "../../../../public/assets/images/Gel3.png";
import Step3 from "../../../../public/assets/images/Step3.png";
import Gel4 from "../../../../public/assets/images/Gel4.png";
import Step4 from "../../../../public/assets/images/Step4.png";

export const ProduitsBase = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const drawerElement = document.getElementById("drawer");

    const handleClick = (event) => {
      event.preventDefault();
    };

    if (drawerElement) {
      drawerElement.addEventListener("click", handleClick);
    }

    return () => {
      // Cleanup the event listener when the component is unmounted
      if (drawerElement) {
        drawerElement.removeEventListener("click", handleClick);
      }
    };
  }, []);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

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
          id="drawer"
          className="text-[0.9rem] not-italic font-semibold p-6 "
          onClick={toggleDetails}
        >
          <span>{t("produits.question")}</span>
          <span className="text-[1.5rem]">{isOpen ? "-" : "+"}</span>
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
    </div>
  );
};

// useEffect(() => {
//   toggleDetails();
// }, []);

// const toggleDetails = () => {
//   setTimeout(() => {
//     setIsOpen((current) => !current);
//   }, 10);
// };

// function toggleDetailsTest() {
//   const newState = !isOpen;
//   setIsOpen(newState);
// }
