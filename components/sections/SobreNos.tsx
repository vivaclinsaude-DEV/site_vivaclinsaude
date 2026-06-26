import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

interface TeamMember {
  slug: string;
  namePrefix: string;
  nameRest: string;
  role: string;
  image: string;
  highlights?: string[];
  bio?: string[];
}

const TEAM: TeamMember[] = [
  {
    slug: "juliana",
    namePrefix: "Dra. Juliana",
    nameRest: "Coimbra de Mendonça",
    role: "Médica",
    image: "/images/about-us-juliana.jpeg",
    highlights: [
      "Graduada em medicina pela FAME – Faculdade de Medicina de Barbacena",
      "Pós-graduanda em Reumatologia e Geriatria",
    ],
    bio: [
      "A Dra. Juliana Coimbra de Mendonça é médica clínica geral pela FAME – Faculdade de Medicina de Barbacena, instituição reconhecida pela excelência no ensino e pela tradição em formar profissionais de destaque.",
      "Atualmente, segue ampliando seus conhecimentos com pós-graduação em Reumatologia e Geriatria, áreas que demandam sensibilidade, atualização constante e dedicação ao cuidado integral dos pacientes.",
      "Na VivaClin, a Dra. Juliana alia ciência e humanização no atendimento, com o objetivo de oferecer a clínica geral, acompanhamento próximo e tratamentos que respeitam as necessidades individuais. Seu compromisso é proporcionar qualidade de vida e bem-estar em todas as fases da saúde.",
    ],
  },
  {
    slug: "danielle",
    namePrefix: "Dra. Danielle",
    nameRest: "Lima da Costa",
    role: "Médica",
    image: "/images/about-us-danielle-v2.jpeg",
    highlights: [
      "Graduada em medicina pela FAMINAS – Faculdade de Minas",
      "Pós-graduanda em Gastroenterologia – Afya Educação Médica",
    ],
    bio: [
      "A Dra. Danielle Lima da Costa é formada em Medicina pela FAMINAS – Faculdade de Minas, reconhecida por sua tradição em formar profissionais éticos e de excelência.",
      "Atualmente, aprimora seus conhecimentos com pós-graduação em Gastroenterologia pela Afya Educação Médica, área que exige precisão, atualização e atenção ao bem-estar integral do paciente.",
      "Combinando conhecimento técnico e abordagem acolhedora, a Dra. Danielle oferece acompanhamento com atendimento personalizado. Esse conjunto de fatores, aliado ao conhecimento e visão humanizada, traz para cada paciente a confiança que todo tratamento merece.",
    ],
  },
  {
    slug: "silvia",
    namePrefix: "Silvia",
    nameRest: "Carvalho",
    role: "Nutricionista",
    image: "/images/about-us-silvia.jpeg",
    highlights: [
      "Formada pela PUC Minas",
      "Especializada em nutrição clínica e nutrição oncológica pelo Hospital Santa Casa de BH, pela Associação Brasileira de Nutrição Oncológica e pela Universidade Federal de São João Del Rei",
    ],
    bio: [
      "Sou nutricionista clínica e também especialista em nutrição oncológica.",
      "Formada pela PUC Minas, me especializei no Hospital Santa Casa de BH, pela Associação Brasileira de Nutrição Oncológica e pela Universidade Federal de São João Del Rei.",
      "Ofereço suporte nutricional especializado que promove a saúde, contribui para o emagrecimento, controle da glicose, pressão arterial e colesterol, previne o câncer e fortalece os pacientes em tratamento oncológico.",
      "Minha missão é proporcionar um atendimento humanizado e acolhedor, desenvolvendo planos alimentares individualizados que respeitem as necessidades e preferências de cada paciente, adequando e equilibrando o que é necessário para promover saúde e qualidade de vida.",
    ],
  },
  {
    slug: "jaqueline",
    namePrefix: "Jaqueline",
    nameRest: "Pantolfo",
    role: "Psicóloga",
    image: "/images/about-us-jaqueline.jpeg",
  },
];

export default function SobreNos() {
  return (
    <section
      id="sobre"
      className="scroll-mt-28 bg-[#FAFAF8] px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
          <span className="font-body font-bold">Profissionais que cuidam</span>
          <br />
          <span className="font-heading italic">de cada paciente</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-body text-base text-text-body/80 sm:text-lg">
          A VivaClin Saúde nasceu do desejo de oferecer um atendimento médico
          próximo, organizado e de qualidade para Contagem e região.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1536px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member) => (
          <div
            key={member.slug}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={member.image}
                alt={`${member.namePrefix} ${member.nameRest}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-body text-lg text-brand-dark">
                <span className="font-semibold">{member.namePrefix}</span>{" "}
                <span className="text-text-body/80">{member.nameRest}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-brand-primary px-6 py-3 font-body text-brand-primary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
            <MessageCircle className="h-4 w-4" />
          </span>
          Fale Conosco
        </a>
      </div>
    </section>
  );
}
