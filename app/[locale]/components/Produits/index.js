import { useTranslation } from "../../../i18n";
import { ProduitsBase } from "./ProduitsBase";

export const Produits = async ({ lng }) => {
  const { t } = await useTranslation(lng, "default");
  return <ProduitsBase t={t} lng={lng} />;
};
