import { useTranslation } from "../../../i18n";
import { PlaneteBase } from "./PlaneteBase";

export const Planete = async ({ lng }) => {
  const { t } = await useTranslation(lng, "default");
  return <PlaneteBase t={t} lng={lng} />;
};
