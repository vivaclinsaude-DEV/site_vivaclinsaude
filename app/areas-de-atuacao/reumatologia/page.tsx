import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CrossLinkEspecialidades from "@/components/sections/CrossLinkEspecialidades";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import ReumatologiaContent from "./ReumatologiaContent";

export const metadata: Metadata = {
  title: "Reumatologia em Contagem | VivaClin Saúde",
  description:
    "Atendimento reumatológico particular com a Dra. Juliana Mendonça na VivaClin Saúde, em Contagem - MG. Artrite reumatoide, fibromialgia, artrose, osteoporose e mais.",
};

export default function ReumatologiaPage() {
  return (
    <main>
      <Header transparentAtTop={false} />
      <div className="pt-24 sm:pt-28">
        <Breadcrumb current="Reumatologia" />
      </div>
      <ReumatologiaContent />
      <CrossLinkEspecialidades currentSlug="reumatologia" />
      <Footer />
    </main>
  );
}
