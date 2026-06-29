import type { Metadata } from "next";
import ReumatologiaContent from "./ReumatologiaContent";

export const metadata: Metadata = {
  title: "Reumatologia em Contagem | VivaClin Saúde",
  description:
    "Atendimento reumatológico particular com a Dra. Juliana Mendonça na VivaClin Saúde, em Contagem - MG. Artrite reumatoide, fibromialgia, artrose, osteoporose e mais.",
};

export default function ReumatologiaPage() {
  return (
    <main>
      <ReumatologiaContent />
    </main>
  );
}
