import type { Metadata } from "next";
import SaudeDigestivaContent from "./SaudeDigestivaContent";

export const metadata: Metadata = {
  title: "Atendimento em Gastroenterologia em Contagem | Consulta Particular | VivaClin",
  description:
    "Atendimento em gastroenterologia com a Dra. Danielle Costa na VivaClin Saúde, em Contagem. Cuidado para azia, refluxo, gastrite ou má digestão. Presencial ou online, no bairro Nacional.",
};

export default function SaudeDigestivaPage() {
  return (
    <main>
      <SaudeDigestivaContent />
    </main>
  );
}
