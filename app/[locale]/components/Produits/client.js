"use client";

import { ProduitsBase } from "./ProduitsBase";
import { useTranslation } from "../../../i18n/client";

export const Produits = ({ lng }) => {
  const { t } = useTranslation(lng, "default");
  return <ProduitsBase t={t} lng={lng} />;
};
