import { useTranslation } from "../../../i18n";
import { AbonnementBase } from "./AbonnementBase";

export const Abonnement = async ({ lng }) => {
  const { t } = await useTranslation(lng, "default");
  return <AbonnementBase t={t} lng={lng} />;
};
