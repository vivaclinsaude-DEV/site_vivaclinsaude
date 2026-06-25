"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Heart,
  Activity,
  Flame,
  Bone,
  Sparkles,
  HelpCircle,
  FileText,
  MapPin,
  Star,
  CalendarCheck,
  ClipboardList,
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Condition {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Review {
  name: string;
  role: string;
  tag: "Fibromialgia" | "Atendimento" | "Acolhimento";
  content: string;
  rating: number;
  time: string;
  initials: string;
}

const CONDITIONS: Condition[] = [
  {
    title: "Artrite Reumatoide",
    description:
      "Inflamação crônica que afeta as articulações, causando dor intensa, rigidez matinal e inchaço, principalmente nas mãos e pés.",
    icon: Activity,
  },
  {
    title: "Fibromialgia",
    description:
      "Dor generalizada associada a fadiga crônica, distúrbios de sono, alterações de memória e sensibilidade amplificada pelo corpo.",
    icon: Flame,
  },
  {
    title: "Artrose",
    description:
      "Desgaste progressivo da cartilagem das articulações, provocando dor profunda, estalos e limitação de movimentos em joelhos, quadris e coluna.",
    icon: Sparkles,
  },
  {
    title: "Osteoporose",
    description:
      "Enfraquecimento silencioso da estrutura óssea que aumenta significativamente o risco de fraturas com mínimos impactos.",
    icon: Bone,
  },
  {
    title: "Lúpus",
    description:
      "Doença autoimune complexa que pode afetar articulações, pele, rins, células sanguíneas, cérebro, coração e pulmões.",
    icon: CheckCircle2,
  },
  {
    title: "Dor Articular Crônica",
    description:
      "Casos persistentes de desconforto nas articulações que ainda não possuem um diagnóstico fechado, necessitando de uma investigação detalhada.",
    icon: HelpCircle,
  },
];

const REVIEWS: Review[] = [
  {
    name: "Rita de Cássia S.",
    role: "Paciente de Fibromialgia • Contagem, MG",
    tag: "Fibromialgia",
    content:
      "Depois de passar por 4 médicos que diziam que minha dor era estresse, a Dra. Juliana me ouviu com paciência por quase uma hora. Explicou cada detalhe do tratamento da fibromialgia. Hoje durmo melhor e voltei a caminhar sem dor.",
    rating: 5,
    time: "Há 2 meses",
    initials: "RS",
  },
  {
    name: "Carlos Alberto G.",
    role: "Acompanhante (Filho) • Betim, MG",
    tag: "Atendimento",
    content:
      "Levei minha mãe de 76 anos que sofria muito com artrose nos joelhos. O atendimento da Dra. Juliana é diferenciado, muito humana e atenciosa. A estrutura da clínica VivaClin é ótima, fácil de estacionar e o retorno foi muito tranquilo.",
    rating: 5,
    time: "Há 1 mês",
    initials: "CG",
  },
  {
    name: "Mariana Oliveira L.",
    role: "Paciente de Dor Crônica • Contagem, MG",
    tag: "Acolhimento",
    content:
      "Dra. Juliana é maravilhosa! Muito detalhista na investigação das minhas dores nos dedos. Excelente profissional, muito segura e o acompanhamento dos laudos para o meu afastamento foi impecável.",
    rating: 5,
    time: "Há 3 semanas",
    initials: "ML",
  },
];

const SPACES = [
  {
    src: "/images/reumatologia-espaco-01.jpg",
    label: "Recepção VivaClin",
    desc: "Ambiente elegante, climatizado e com total acessibilidade",
  },
  {
    src: "/images/reumatologia-espaco-02.jpg",
    label: "Consultório Médico",
    desc: "Espaço humanizado projetado para consultas com escuta atenta",
  },
  {
    src: "/images/reumatologia-espaco-03.jpg",
    label: "Conforto e Atendimento",
    desc: "Detalhes preparados com carinho para o seu bem-estar",
  },
];

const WHATSAPP_REUMATO_URL =
  "https://wa.me/5531920090831?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20reumatológica%20com%20a%20Dra.%20Juliana%20Mendonça.";

export default function ReumatologiaContent() {
  const [activeReviewTag, setActiveReviewTag] = useState<
    "Todos" | "Fibromialgia" | "Atendimento" | "Acolhimento"
  >("Todos");
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);

  const handleNextSpace = () => {
    setActiveSpaceIndex((prev) => (prev + 1) % SPACES.length);
  };

  const handlePrevSpace = () => {
    setActiveSpaceIndex((prev) => (prev - 1 + SPACES.length) % SPACES.length);
  };

  const filteredReviews =
    activeReviewTag === "Todos"
      ? REVIEWS
      : REVIEWS.filter((r) => r.tag === activeReviewTag);

  return (
    <>
      {/* SEÇÃO 1 — HERO */}
      <section
        id="hero"
        className="relative overflow-hidden bg-bg-neutral px-6 pt-4 pb-12 sm:px-10 sm:pt-12 sm:pb-20 lg:px-20"
      >
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-logo/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand-soft/5 blur-2xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col items-start gap-4 sm:gap-6 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark shadow-xs">
                <Heart className="h-4 w-4 shrink-0 fill-brand-primary text-brand-primary" />
                Atendimento Particular em Contagem, MG
              </span>

              <h1 className="font-heading text-3xl leading-[1.12] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                Dor nas articulações que não passa?{" "}
                <em className="font-light text-brand-primary italic">
                  Pode ser hora de procurar um reumatologista.
                </em>
              </h1>

              <p className="max-w-2xl font-body text-base leading-relaxed text-text-body sm:text-lg">
                Atendimento particular com a <strong>Dra. Juliana Mendonça</strong>,
                na <strong>VivaClin</strong>, em Contagem. Diagnóstico cuidadoso e
                acompanhamento contínuo para quem já tentou de tudo e ainda sente
                dor.
              </p>

              <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:mt-4 sm:w-auto sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_REUMATO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-primary px-6 py-3.5 font-body text-white shadow-md transition-all hover:bg-brand-primary/95 hover:shadow-lg sm:w-auto"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary">
                    <MessageCircle className="h-4 w-4 fill-brand-primary text-brand-primary" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide sm:text-base">
                    Agendar pelo WhatsApp
                  </span>
                </a>

                <a
                  href="tel:+5531920090831"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-brand-primary bg-white px-6 py-3 font-body text-brand-primary shadow-sm transition-all hover:bg-brand-primary/5 sm:w-auto"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                    <Phone className="h-4 w-4 fill-white text-white" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide sm:text-base">
                    (31) 92009-0831
                  </span>
                </a>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-xs text-brand-dark/60 sm:mt-2 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-primary" />
                  Sem burocracia de convênios
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-primary" />
                  Estrutura confortável e segura
                </span>
              </div>
            </div>

            <div className="relative flex w-full justify-center lg:col-span-5">
              <div className="group relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl lg:max-w-none">
                <Image
                  src="/images/about-us-juliana.jpeg"
                  alt="Dra. Juliana Mendonça - Reumatologista"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-brand-soft/10 bg-white/95 p-4 shadow-md backdrop-blur-xs">
                  <span className="block font-heading text-lg font-bold text-brand-dark">
                    Dra. Juliana Mendonça
                  </span>
                  <span className="mt-0.5 block text-xs font-medium tracking-wider text-brand-primary uppercase font-body">
                    CRM-MG 100919 • Reumatologia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — O PROBLEMA */}
      <section id="problema" className="bg-bg-neutral px-6 py-20 sm:px-10 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-soft/30 bg-brand-primary/10 text-brand-primary shadow-xs">
                <Activity className="h-6 w-6 fill-brand-primary/20 text-brand-primary" />
              </div>

              <h2 className="text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
                <span className="font-body font-bold">
                  Quando a dor vira sua rotina,
                </span>
                <br />
                <span className="font-heading italic text-brand-primary">
                  ela tem explicação e tratamento
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 rounded-2xl border border-brand-soft/10 bg-white p-8 text-base leading-relaxed text-text-body shadow-sm sm:p-10 sm:text-lg">
              <p className="font-body">
                Dor que vai e volta. Exame que não mostra nada de grave, mas o
                desconforto continua. Rigidez de manhã, cansaço que não tem
                explicação, articulação inchada sem motivo claro.
              </p>

              <p className="rounded-r-lg border-l-4 border-brand-primary bg-brand-primary/5 py-3 pl-4 font-body font-medium text-brand-dark italic">
                Se isso descreve sua rotina, talvez o problema não seja
                &quot;estresse&quot; ou &quot;idade&quot; — pode ser uma condição
                reumatológica, e ela tem nome, explicação e tratamento.
              </p>

              <div className="mt-2 flex flex-col items-start justify-between gap-6 border-t border-brand-soft/10 pt-4 sm:flex-row sm:items-center">
                <span className="font-body text-sm text-brand-dark/60">
                  Não sofra em silêncio. Nós podemos ajudar a restabelecer sua
                  qualidade de vida.
                </span>
                <a
                  href="#hero"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-all hover:translate-x-1 hover:text-brand-dark"
                >
                  Quero agendar consulta <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — AUTORIDADE */}
      <section
        id="autoridade"
        className="border-y border-brand-soft/10 bg-[#FAFAF8] px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">
                <Image
                  src="/images/about-us-juliana.jpeg"
                  alt="Dra. Juliana Mendonça no consultório"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover saturate-[0.95]"
                />
                <div className="pointer-events-none absolute inset-0 bg-brand-dark/10" />
              </div>
            </div>

            <div className="order-1 flex flex-col items-start gap-6 lg:order-2 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark">
                <Star className="h-4 w-4 shrink-0 fill-brand-primary text-brand-primary" />
                Dra. Juliana Mendonça
              </span>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
                  Dra. Juliana Mendonça
                </h3>
                <span className="font-body text-sm font-medium tracking-wide text-brand-primary sm:text-base">
                  CRM-MG 100919 — Pós-graduanda em Reumatologia, Geriatria e Dor
                  e Inflamações
                </span>
              </div>

              <h2 className="mt-2 text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
                <span className="font-body font-bold">Investigação detalhada</span>
                <br />
                <span className="font-heading italic text-brand-primary">
                  e plano de tratamento contínuo
                </span>
              </h2>

              <div className="flex flex-col gap-4 font-body text-base leading-relaxed text-text-body sm:text-lg">
                <p>
                  Atendimento individualizado, com tempo real para ouvir o
                  histórico antes de qualquer conduta. A consulta não termina em
                  uma receita genérica — começa um acompanhamento, porque doença
                  reumatológica se trata com continuidade, não com solução única.
                </p>
                <p>
                  Para quem já circulou por vários médicos sem resposta clara, a
                  proposta aqui é simples: investigar a fundo, explicar o que
                  está acontecendo e construir um plano de tratamento que faça
                  sentido pra sua rotina.
                </p>
              </div>

              <div className="mt-6 w-full rounded-xl border border-brand-soft/20 bg-brand-primary/5 p-4 font-body text-sm leading-relaxed text-brand-dark">
                <strong>Atendimento na VivaClin Saúde</strong> — estrutura
                própria para acompanhamento contínuo, com exames de apoio e
                retorno facilitado.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — CONDIÇÕES ATENDIDAS */}
      <section id="tratamos" className="bg-bg-neutral px-6 py-20 sm:px-10 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-[1536px]">
          <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-4 text-center">
            <h2 className="text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
              <span className="font-body font-bold">O que tratamos</span>
              <br />
              <span className="font-heading italic text-brand-primary">
                em nosso consultório
              </span>
            </h2>

            <p className="max-w-2xl font-body text-base text-text-body sm:text-lg">
              Não sabe ainda qual é o problema? Sem diagnóstico fechado também é
              motivo válido para consultar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS.map((condition) => {
              const Icon = condition.icon;
              return (
                <div
                  key={condition.title}
                  className="group flex flex-col rounded-2xl border border-brand-soft/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-soft/40 hover:shadow-md sm:p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-brand-soft/20 bg-brand-primary/10 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-bold text-brand-dark transition-colors group-hover:text-brand-primary">
                    {condition.title}
                  </h3>

                  <p className="font-body text-sm leading-relaxed text-text-body/90 sm:text-base">
                    {condition.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 font-body text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-primary/95 sm:text-base"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Falar com equipe de atendimento
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — ACOMPANHAMENTO CONTÍNUO */}
      <section
        id="acompanhamento"
        className="border-y border-brand-soft/10 bg-[#FAFAF8] px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
            <div className="flex flex-col items-start gap-4 md:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark">
                <ClipboardList className="h-4 w-4 shrink-0 fill-brand-primary text-brand-primary" />
                Segurança Legal e Acompanhamento
              </span>

              <h2 className="text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
                <span className="font-body font-bold">Acompanhamento</span>
                <br />
                <span className="font-heading italic text-brand-primary">
                  com regularidade e precisão
                </span>
              </h2>

              <p className="mt-2 font-body text-base leading-relaxed text-text-body sm:text-lg">
                Quem já tem diagnóstico de fibromialgia ou outra condição
                crônica sabe como é importante manter os relatórios e laudos
                atualizados. Aqui esse acompanhamento tem rotina — sem precisar
                correr atrás às vésperas do prazo.
              </p>
            </div>

            <div className="flex justify-center md:col-span-4">
              <div className="group flex h-48 w-48 flex-col items-center justify-center rounded-2xl border border-brand-soft/20 bg-white p-6 text-center shadow-sm sm:h-56 sm:w-56">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary transition-transform duration-300 group-hover:scale-110">
                  <FileText className="h-8 w-8" />
                </div>
                <span className="font-heading text-lg font-bold text-brand-dark">
                  Laudos Emitidos
                </span>
                <span className="mt-1 font-body text-xs font-medium text-brand-primary">
                  Rotina Sem Complicação
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — LOCALIZAÇÃO E ACESSO */}
      <section id="localizacao" className="bg-bg-neutral px-6 py-20 sm:px-10 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col items-start gap-6 lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark">
                <MapPin className="h-4 w-4 shrink-0 fill-brand-primary/25 text-brand-primary" />
                Presencial e Online
              </span>

              <h2 className="text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
                <span className="font-body font-bold">VivaClin Saúde</span>
                <br />
                <span className="font-heading italic text-brand-primary">
                  Bairro Nacional, Contagem
                </span>
              </h2>

              <p className="font-body text-base leading-relaxed text-text-body sm:text-lg">
                Consultório de fácil acesso, com atendimento presencial e
                online conforme a necessidade. Pacientes de Contagem e região,
                incluindo Betim, já fazem parte da rotina da clínica.
              </p>

              <div className="flex w-full flex-col gap-3 rounded-xl border border-brand-soft/10 bg-white p-5 font-body text-sm shadow-sm">
                <span className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                  <span className="leading-normal text-brand-dark">
                    <strong>Endereço:</strong> Rua Sete de Setembro, 863,
                    Nacional, Contagem - MG, CEP 32185-120
                  </span>
                </span>
                <span className="flex items-center gap-2.5">
                  <CalendarCheck className="h-5 w-5 shrink-0 text-brand-primary" />
                  <span className="text-brand-dark">
                    <strong>Atendimento:</strong> Segunda a Sexta, com hora
                    marcada
                  </span>
                </span>
              </div>

              <div className="flex w-full flex-col gap-3">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-brand-soft/20 bg-brand-dark/5 shadow-md">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSpaceIndex}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={SPACES[activeSpaceIndex].src}
                        alt={SPACES[activeSpaceIndex].label}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="pointer-events-none absolute inset-y-0 inset-x-3 flex items-center justify-between">
                    <button
                      onClick={handlePrevSpace}
                      className="pointer-events-auto rounded-full bg-white/90 p-1.5 text-brand-dark shadow-md transition-all hover:scale-105 hover:bg-white active:scale-95 sm:p-2"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                    <button
                      onClick={handleNextSpace}
                      className="pointer-events-auto rounded-full bg-white/90 p-1.5 text-brand-dark shadow-md transition-all hover:scale-105 hover:bg-white active:scale-95 sm:p-2"
                      aria-label="Próxima foto"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 backdrop-blur-xs">
                    {SPACES.map((space, idx) => (
                      <button
                        key={space.src}
                        onClick={() => setActiveSpaceIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeSpaceIndex === idx
                            ? "w-4 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Ir para foto ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-brand-soft/10 bg-white/65 p-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-heading text-sm font-bold leading-tight text-brand-dark">
                      {SPACES[activeSpaceIndex].label}
                    </span>
                    <span className="font-body text-xs leading-normal text-text-body">
                      {SPACES[activeSpaceIndex].desc}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {SPACES.map((space, idx) => (
                    <button
                      key={space.src}
                      onClick={() => setActiveSpaceIndex(idx)}
                      className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                        activeSpaceIndex === idx
                          ? "scale-[1.02] border-brand-primary shadow-sm"
                          : "border-transparent opacity-65 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={space.src}
                        alt={space.label}
                        fill
                        sizes="33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/5 transition-colors hover:bg-transparent" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl border border-brand-soft/20 bg-white shadow-md sm:h-[450px] lg:col-span-7 lg:h-[550px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.483654497645!2d-44.0205809!3d-19.86178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa693e506699d7b%3A0x60f089625beee02!2sRua%20Sete%20de%20Setembro%2C%20863%20-%20Nacional%2C%20Contagem%20-%20MG%2C%2032185-120!5e0!3m2!1spt-BR!2sbr!4v1719220000000!5m2!1spt-BR!2sbr"
                className="h-full w-full border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização VivaClin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — PROVA SOCIAL */}
      <section
        id="avaliacoes"
        className="border-y border-brand-soft/10 bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white px-4 py-2 font-body text-sm text-brand-dark shadow-xs">
              <Star className="h-4 w-4 shrink-0 fill-brand-primary text-brand-primary" />
              Avaliações do Google Meu Negócio
            </span>

            <h2 className="text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
              <span className="font-body font-bold">O que os pacientes dizem</span>
              <br />
              <span className="font-heading italic text-brand-primary">
                recomendações e relatos reais
              </span>
            </h2>

            <p className="max-w-xl font-body text-base text-text-body sm:text-lg">
              Cada estrela aqui é de alguém que também já passou por dor sem
              resposta.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 font-body text-sm">
              {(["Todos", "Fibromialgia", "Atendimento", "Acolhimento"] as const).map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveReviewTag(tag)}
                    className={`rounded-full border px-4 py-2 font-medium transition-all duration-300 ${
                      activeReviewTag === tag
                        ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                        : "border-brand-soft/30 bg-bg-neutral/40 text-brand-dark hover:bg-bg-neutral"
                    }`}
                  >
                    {tag}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((review) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={review.name}
                  className="flex flex-col gap-4 rounded-2xl border border-brand-soft/20 bg-bg-neutral/40 p-6 shadow-xs"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex gap-0.5 text-brand-primary">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 shrink-0 fill-brand-primary text-brand-primary"
                        />
                      ))}
                    </div>
                    <span className="font-body text-xs font-medium text-brand-dark/50">
                      {review.time}
                    </span>
                  </div>

                  <p className="font-body text-sm leading-relaxed text-brand-dark/90 italic sm:text-base">
                    &quot;{review.content}&quot;
                  </p>

                  <hr className="my-1 border-brand-soft/10" />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary font-body text-sm font-bold text-white">
                      {review.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading text-sm font-bold text-brand-dark">
                        {review.name}
                      </span>
                      <span className="font-body text-xs font-medium text-brand-primary">
                        {review.role}
                      </span>
                    </div>
                  </div>

                  <div className="self-start">
                    <span className="inline-block rounded-md bg-brand-soft/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-brand-dark/40 uppercase">
                      {review.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5 font-body text-xs text-brand-dark/50 sm:text-sm">
            <span>
              Avaliado com <strong>5.0/5.0 estrelas</strong> com base em
              depoimentos espontâneos do Google.
            </span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — CTA FINAL */}
      <section
        id="cta-final"
        className="relative overflow-hidden bg-brand-dark px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-primary/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-soft/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-body text-sm text-white">
            <Heart className="h-4 w-4 shrink-0 fill-white text-white" />
            Recupere seu bem-estar
          </span>

          <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            <span className="font-body font-bold">O primeiro passo é simples:</span>
            <br />
            <span className="font-heading italic text-brand-soft">
              marcar a consulta
            </span>
          </h2>

          <p className="max-w-2xl font-body text-base leading-relaxed text-white/90 sm:text-lg">
            Atendimento particular, sem burocracia de convênio. Ligue ou mande
            mensagem — o que for mais fácil pra você.
          </p>

          <div className="mt-4 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_REUMATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-primary px-6 py-3.5 font-body text-white shadow-md transition-all hover:bg-brand-primary/95 hover:shadow-lg sm:w-auto"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary">
                <MessageCircle className="h-4 w-4 fill-brand-primary text-brand-primary" />
              </span>
              <span className="text-sm font-semibold tracking-wide sm:text-base">
                Agendar pelo WhatsApp
              </span>
            </a>

            <a
              href="tel:+5531920090831"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-primary px-6 py-3.5 font-body text-white shadow-md transition-all hover:bg-brand-primary/95 hover:shadow-lg sm:w-auto"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary">
                <Phone className="h-4 w-4 fill-brand-primary text-brand-primary" />
              </span>
              <span className="text-sm font-semibold tracking-wide sm:text-base">
                (31) 92009-0831
              </span>
            </a>
          </div>

          <p className="mt-8 max-w-md border-t border-white/10 pt-6 font-body text-xs leading-normal text-white/60">
            Dra. Juliana Mendonça • CRM-MG 100919 — Estética e termos médicos
            de acordo com o Manual de Publicidade Médica do CFM.
          </p>
        </div>
      </section>
    </>
  );
}
