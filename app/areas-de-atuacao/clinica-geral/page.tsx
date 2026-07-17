import type { Metadata } from "next";
import ClinicaGeralContent from "./ClinicaGeralContent";

export const metadata: Metadata = {
  title: "Clínica Geral em Contagem | VivaClin Saúde",
  description:
    "Gripe, febre, dor de garganta? Atendimento de clínica geral particular com a Dra. Danielle Costa na VivaClin Saúde, em Contagem - MG. Presencial ou online, sem fila.",
};

export default function ClinicaGeralPage() {
  return (
    <main>
      <ClinicaGeralContent />
    </main>
  );
}
