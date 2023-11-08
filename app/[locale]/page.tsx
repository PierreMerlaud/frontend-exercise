import MobileHeader from "./components/MobileHeader";
import { Hero } from "./components/Hero/Herobase";
import { Planete } from "./components/Planete/PlaneteBase";
import { Abonnement } from "./components/Abonnement/AbonnementBase";
// import { Produits } from "./components/Produits/ProduitsBase";

interface RootPageProps {
  params: {
    locale: string;
  };
}
//Node.js 18.17
export default function Home({ params: { locale } }: RootPageProps) {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col pb-20">
        <MobileHeader />
        <Hero lng={locale} />
        <Planete lng={locale} />
        <Abonnement lng={locale} />
        {/* <Produits lng={locale} /> */}
      </div>
    </main>
  );
}
