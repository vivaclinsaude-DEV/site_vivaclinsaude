import type { Metadata } from "next";
import ClinicaGeralContent from "./ClinicaGeralContent";

export const metadata: Metadata = {
  title: "Clínico Geral em Contagem | Consulta Particular Sem Fila | VivaClin",
  description:
    "Consulta particular de clínico geral em Contagem, sem convênio e sem fila. Atestado médico incluso. Presencial no bairro Nacional ou online. Agende com a Dra. Danielle Costa: (31) 92009-0831.",
};

export default function ClinicaGeralPage() {
  return (
    <main>
      <ClinicaGeralContent />
    </main>
  );
}
