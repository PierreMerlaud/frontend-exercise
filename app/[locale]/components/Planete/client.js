"use client";

import { PlaneteBase } from "./PlaneteBase";
import { useTranslation } from "../../../i18n/client";

export const Planete = ({ lng }) => {
  const { t } = useTranslation(lng, "default");
  return <PlaneteBase t={t} lng={lng} />;
};
