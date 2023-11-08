import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/images/Logo.png";
import { useRouter, useParams } from "next/navigation";

const MobileHeader = () => {
  const router = useRouter();
  const params = useParams();

  const handleLanguageChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    e.preventDefault();
    const newLanguage = e.target.value;
    router.push(`/${newLanguage}`);
  };

  return (
    <div className="flex justify-between w-full border-b border-solid border-[#FFDA00]">
      <div className="p-4">
        <Image src={Logo} alt="Logo" className="max-h-10" />
      </div>
      <div className="items-center gap-2.5 p-4">
        <div className="border border-solid rounded-lg border-[#BBBABA]">
          {params.locale === "fr" ? (
            <select
              className="font-semibold p-1 lg:p-2 lg:text-[1.25rem]"
              defaultValue="fr"
              onChange={handleLanguageChange}
            >
              <option value="fr">Français 🇫🇷</option>
              <option value="en">Anglais 🇬🇧</option>
            </select>
          ) : (
            <select
              className="text-[1.25rem] font-semibold p-2"
              defaultValue="en"
              onChange={handleLanguageChange}
            >
              <option value="en">Anglais 🇬🇧</option>
              <option value="fr">Français 🇫🇷</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
