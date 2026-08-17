import type { Metadata } from "next";
import SaudeDigestivaContent from "./SaudeDigestivaContent";

export const metadata: Metadata = {
  title: "Dor de Barriga e Saúde Digestiva em Contagem | Consulta Particular | VivaClin",
  description:
    "Dor de barriga, diarreia, refluxo ou gastrite? Consulta particular com foco em saúde digestiva com a Dra. Danielle Costa na VivaClin Saúde, em Contagem. Presencial ou online, sem semanas de espera.",
};

export default function SaudeDigestivaPage() {
  return (
    <main>
      <SaudeDigestivaContent />
    </main>
  );
}
