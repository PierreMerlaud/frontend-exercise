"use client";

import { AbonnementBase } from "./AbonnementBase";
import { useTranslation } from "../../../i18n/client";

export const Abonnement = ({ lng }) => {
  const { t } = useTranslation(lng, "default");
  return <AbonnementBase t={t} lng={lng} />;
};
