import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const SPECIALTIES = [
  {
    slug: "clinica-geral",
    title: "Clínica Geral",
    image: "/images/atuacao-clinica-geral-v2.jpeg",
    excerpt:
      "A Clínica Geral é considerada o ponto de partida para o cuidado com a saúde.",
  },
  {
    slug: "reumatologia",
    title: "Reumatologia",
    image: "/images/atuacao-reumatologia-v2.jpeg",
    excerpt:
      "As doenças reumatológicas englobam um conjunto de condições que afetam articulações, músculos, ossos e tecidos conjuntivos, além das chamadas doenças autoimunes sistêmicas.",
  },
  {
    slug: "saude-digestiva",
    title: "Saúde Digestiva",
    image: "/images/atuacao-saude-digestiva-v2.jpeg",
    excerpt: "A Saúde Digestiva é uma das áreas mais importantes da medicina.",
  },
  {
    slug: "saude-do-idoso",
    title: "Saúde do Idoso",
    image: "/images/atuacao-saude-do-idoso-v2.jpeg",
    excerpt:
      "A saúde do idoso é um segmento da medicina que acompanha as mudanças do envelhecimento, cuidando da saúde de pessoas na terceira idade de forma integral, contínua, preventiva e até paliativa.",
  },
  {
    slug: "nutricao",
    title: "Nutrição",
    image: "/images/atuacao-nutricao-v2.jpeg",
    excerpt:
      "A nutrição clínica é uma área essencial da saúde que utiliza a alimentação como ferramenta terapêutica e preventiva.",
  },
];

export default function EspecialidadesGrid() {
  return (
    <section
      id="areas-de-atuacao"
      className="scroll-mt-28 bg-bg-neutral px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark">
          <Heart className="h-4 w-4 fill-brand-primary text-brand-primary" />
          Cuidado Integral
        </span>

        <h2 className="text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
          <span className="font-body font-bold">Áreas de Atuação para</span>
          <br />
          <span className="font-heading italic">cada necessidade</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-body text-base text-text-body/80 sm:text-lg">
          Conheça as áreas que a VivaClin atua oferecendo acompanhamento
          integral em saúde – contínuo e humanizado.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1536px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SPECIALTIES.map((specialty, index) => (
          <div
            key={`${specialty.slug}-${index}`}
            className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={specialty.image}
                alt={specialty.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
              <h3 className="font-body text-xl font-semibold text-brand-dark">
                {specialty.title}
              </h3>
              <p className="line-clamp-3 h-[4.5rem] font-body text-sm text-text-body/80">
                {specialty.excerpt}
              </p>
              <Link
                href={`/areas-de-atuacao/${specialty.slug}`}
                className="mt-auto inline-flex items-center gap-1 font-body text-sm font-semibold text-brand-primary"
              >
                Saiba mais
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}

        <div className="relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-brand-primary to-brand-dark shadow-sm">
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-1 flex-col items-start justify-center gap-4 p-6 sm:p-8">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <Heart className="h-6 w-6 fill-white text-white" />
              <h3 className="mt-4 font-heading text-xl text-white italic">
                Não encontrou sua especialidade?
              </h3>
              <p className="mt-2 font-body text-sm text-white/85">
                Fale com a nossa equipe e vamos te ajudar a encontrar o
                cuidado certo pra você.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
