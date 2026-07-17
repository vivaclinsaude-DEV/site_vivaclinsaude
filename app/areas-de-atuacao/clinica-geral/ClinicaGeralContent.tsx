"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Heart,
  MapPin,
  Star,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Symptom {
  title: string;
  image: string;
}

interface Review {
  name: string;
  meta: string;
  content: string;
  rating: number;
  time: string;
  initials: string;
}

const SYMPTOMS: Symptom[] = [
  { title: "Gripe e resfriado forte", image: "/images/img_gripe_refriado_forte.png" },
  { title: "Dor de garganta e infecção", image: "/images/img_dor_garganta_infec.png" },
  { title: "Febre que não passa", image: "/images/img_febre.png" },
  { title: "Sinusite e congestão", image: "/images/img_sinusite.png" },
  { title: "Bronquite e tosse persistente", image: "/images/img_bronquite.png" },
  { title: "Virose e mal-estar", image: "/images/img_virose.png" },
];

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/cRrJeuxN6TSghugS8";

const REVIEWS: Review[] = [
  {
    name: "Thabata Teixeira Almeida",
    meta: "Local Guide · 23 avaliações · 2 fotos",
    content:
      "Conheci a clínica pesquisando na internet e me encantei com o tratamento e a facilidade de explicar o que estava acontecendo comigo! Recomendo!",
    rating: 5,
    time: "Há 5 meses",
    initials: "TA",
  },
  {
    name: "Pedro Leonardi",
    meta: "12 avaliações · 2 fotos",
    content:
      "Consultei na vivaclin a primeira vez e agora só confio neles. Indico pra todos amigos e familiares! Excelente!",
    rating: 5,
    time: "Há 5 meses",
    initials: "PL",
  },
  {
    name: "Adonay Felipe",
    meta: "4 avaliações",
    content:
      "Gostei muito do atendimento da clínica. Profissionais sérias e competentes. Indico de olhos fechados.",
    rating: 5,
    time: "Há 6 meses",
    initials: "AF",
  },
  {
    name: "Sabrina Nascimento",
    meta: "Local Guide · 12 avaliações · 1 foto",
    content:
      "Ótima localização, ótimo atendimento e excelentes profissionais. Recomendo de olhos fechados, gostei muito.",
    rating: 5,
    time: "Há 5 meses",
    initials: "SN",
  },
  {
    name: "Paula",
    meta: "Local Guide · 25 avaliações",
    content:
      "Minha experiência na Vivaclin foi excelente. Dra. Juliana é uma profissional exemplar, atenciosa, cuidadosa, com muito carinho e dedicação orienta cada situação diante do tratamento, um atendimento humanizado e acolhedor. Gratidão! Super indico 🙏.",
    rating: 5,
    time: "Há 3 meses",
    initials: "P",
  },
  {
    name: "Alan Reis",
    meta: "7 avaliações",
    content: "Recomendo muito. Profissionais de altíssimo nível.",
    rating: 5,
    time: "Há 5 meses",
    initials: "AR",
  },
];

const SPACES = [
  {
    src: "/images/reumatologia-espaco-03.jpg",
    label: "Recepção VivaClin",
    desc: "Ambiente elegante, climatizado e com total acessibilidade",
  },
  {
    src: "/images/reumatologia-espaco-01.jpg",
    label: "Consultório Médico",
    desc: "Espaço humanizado projetado para consultas com escuta atenta",
  },
  {
    src: "/images/reumatologia-espaco-02.jpg",
    label: "Conforto e Atendimento",
    desc: "Detalhes preparados com carinho para o seu bem-estar",
  },
];

const WHATSAPP_CLINICA_URL =
  "https://wa.me/5531920090831?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20clínica%20geral%20com%20a%20Dra.%20Danielle%20Costa.";

export default function ClinicaGeralContent() {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);

  const handleNextSpace = () =>
    setActiveSpaceIndex((prev) => (prev + 1) % SPACES.length);

  const handlePrevSpace = () =>
    setActiveSpaceIndex((prev) => (prev - 1 + SPACES.length) % SPACES.length);

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

              <h1 className="font-heading text-3xl leading-[1.1] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                Gripe, dor de garganta, febre?{" "}
                <em className="font-light text-brand-primary italic">
                  A clínica geral que resolve, em Contagem.
                </em>
              </h1>

              <p className="max-w-2xl font-body text-base leading-relaxed text-text-body sm:text-lg">
                Atendimento particular com a{" "}
                <strong>Dra. Danielle Costa</strong>, presencial ou online. Sem
                fila de UPA, sem espera de posto — cuidado de verdade quando
                você não está bem.
              </p>

              <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:mt-4 sm:w-auto sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_CLINICA_URL}
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
                  Consulta presencial ou online
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-primary" />
                  Sem burocracia de convênio
                </span>
              </div>
            </div>

            <div className="relative flex w-full justify-center lg:col-span-5">
              <div className="group relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl lg:max-w-none">
                <Image
                  src="/images/about-us-danielle-branco.jpeg"
                  alt="Dra. Danielle Costa - Clínica Geral"
                  fill
                  quality={100}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-brand-soft/10 bg-white/95 p-4 shadow-md backdrop-blur-xs">
                  <span className="block font-heading text-lg font-bold text-brand-dark">
                    Dra. Danielle Costa
                  </span>
                  <span className="mt-0.5 block font-body text-xs font-medium tracking-wider text-brand-primary uppercase">
                    CRM-MG 97.775 • Clínica Geral e Gastroenterologia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — SINTOMAS */}
      <section
        id="sintomas"
        className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-[1536px]">
          <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center gap-4 text-center">
            <h2 className="text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
              <span className="font-body font-bold">
                Está com algum desses
              </span>
              <br />
              <span className="font-heading italic text-brand-primary">
                sintomas?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SYMPTOMS.map((symptom) => (
              <div
                key={symptom.title}
                className="flex items-center gap-4 rounded-2xl border border-brand-soft/15 bg-bg-neutral p-5 shadow-xs"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                  <Image
                    src={symptom.image}
                    alt=""
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <span className="font-body text-base font-medium text-brand-dark">
                  {symptom.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand-soft/15 bg-bg-neutral p-6 sm:p-8">
            <p className="font-body text-base leading-relaxed text-text-body sm:text-lg">
              São quadros que um clínico geral resolve sem você precisar
              enfrentar fila de pronto-socorro ou esperar dias por uma vaga.
              Atendimento{" "}
              <strong className="text-brand-dark">
                presencial ou online
              </strong>
              , do jeito que for melhor pra você.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — PRATICIDADE */}
      <section
        id="praticidade"
        className="border-y border-brand-soft/10 bg-[#FAFAF8] px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
              <span className="font-body font-bold">
                Atendimento rápido,
              </span>
              <br />
              <span className="font-heading italic text-brand-primary">
                sem burocracia
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                image: "/images/img_presencial.png",
                label: "Presencial",
                desc: "Consultório no Bairro Nacional, Contagem — estrutura completa, ambiente acolhedor.",
              },
              {
                image: "/images/img_online.png",
                label: "Online",
                desc: "Consulta por videochamada, de onde você estiver. Resolve a maioria dos quadros sem sair de casa.",
              },
              {
                image: "/images/img_atestado.png",
                label: "Atestado incluído",
                desc: "Precisa de atestado para o trabalho ou a faculdade? A consulta já resolve isso também.",
              },
            ].map(({ image, label, desc }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4 rounded-2xl border border-brand-soft/15 bg-white p-8 text-center shadow-sm"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary/10">
                  <Image
                    src={image}
                    alt=""
                    width={68}
                    height={68}
                    className="object-contain"
                  />
                </div>
                <span className="font-heading text-lg font-bold text-brand-dark">
                  {label}
                </span>
                <p className="font-body text-sm leading-relaxed text-text-body/80">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand-soft/10 bg-white p-6 font-body text-base leading-relaxed text-text-body shadow-sm sm:p-8 sm:text-lg">
            <p>
              Consulta particular, sem depender de convênio e sem papelada. A
              Dra. Danielle reserva tempo real para entender seu quadro e indicar
              o tratamento certo — e, quando a agenda permite, o atendimento
              acontece{" "}
              <strong className="text-brand-dark">no mesmo dia</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — AUTORIDADE */}
      <section
        id="autoridade"
        className="bg-bg-neutral px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">
                <Image
                  src="/images/about-us-danielle-branco.jpeg"
                  alt="Dra. Danielle Costa no consultório"
                  fill
                  quality={100}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover saturate-[0.95]"
                />
                <div className="pointer-events-none absolute inset-0 bg-brand-dark/10" />
              </div>
            </div>

            <div className="order-1 flex flex-col items-start gap-6 lg:order-2 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark">
                <Star className="h-4 w-4 shrink-0 fill-brand-primary text-brand-primary" />
                Dra. Danielle Costa
              </span>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
                  Dra. Danielle Costa
                </h3>
                <span className="font-body text-sm font-medium tracking-wide text-brand-primary sm:text-base">
                  CRM-MG 97.775 — Clínica Geral e Gastroenterologia
                </span>
              </div>

              <div className="flex flex-col gap-4 font-body text-base leading-relaxed text-text-body sm:text-lg">
                <p>
                  Atendimento humanizado, com escuta atenta e foco em resolver
                  seu problema de forma segura. Consulta particular, presencial
                  no bairro Nacional ou online de onde você estiver.
                </p>
              </div>

              <div className="mt-2 w-full rounded-xl border border-brand-soft/20 bg-brand-primary/5 p-5 font-body text-sm leading-relaxed text-brand-dark">
                <strong>Atendimento na VivaClin Saúde</strong> — estrutura
                completa de clínica geral, com agilidade e acolhimento.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — LOCALIZAÇÃO */}
      <section
        id="localizacao"
        className="border-y border-brand-soft/10 bg-[#FAFAF8] px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-12">

          {/* Linha 1: texto + endereço */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-4">
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
                Atendimento presencial no bairro Nacional, com fácil acesso
                para toda a região de Contagem e cidades vizinhas. Prefere ser
                atendido de casa? A consulta online resolve a maioria dos
                quadros sem você precisar sair.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 rounded-xl border border-brand-soft/10 bg-white p-6 font-body text-sm shadow-sm sm:p-8">
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
          </div>

          {/* Linha 2: galeria + mapa */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">

            {/* Galeria */}
            <div className="flex flex-col gap-3">
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
                      sizes="(min-width: 1024px) 50vw, 100vw"
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
                  </button>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl border border-brand-soft/20 bg-white shadow-md sm:h-[450px] lg:h-full lg:min-h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.483654497645!2d-44.0205809!3d-19.86178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa693e506699d7b%3A0x60f089625beee02!2sRua%20Sete%20de%20Setembro%2C%20863%20-%20Nacional%2C%20Contagem%20-%20MG%2C%2032185-120!5e0!3m2!1spt-BR!2sbr!4v1719220000000!5m2!1spt-BR!2sbr"
                className="h-full w-full border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização VivaClin Saúde"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 6 — PROVA SOCIAL */}
      <section
        id="avaliacoes"
        className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white px-4 py-2 font-body text-sm text-brand-dark shadow-xs">
              <Star className="h-4 w-4 shrink-0 fill-brand-primary text-brand-primary" />
              Avaliações do Google Meu Negócio
            </span>

            <h2 className="text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
              <span className="font-body font-bold">O que os pacientes</span>
              <br />
              <span className="font-heading italic text-brand-primary">
                dizem
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                key={review.name}
                className="flex flex-col gap-4 rounded-2xl border border-brand-soft/20 bg-bg-neutral/40 p-6 shadow-xs transition-shadow hover:shadow-md"
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
                      {review.meta}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center font-body text-xs text-brand-dark/50 sm:text-sm">
            <span>
              Avaliado com <strong>5.0/5.0 estrelas</strong> com base em
              depoimentos espontâneos do Google.
            </span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — CTA FINAL */}
      <section
        id="cta-final"
        className="relative overflow-hidden bg-brand-dark px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-20"
      >
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-primary/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-soft/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-body text-sm text-white">
            <Heart className="h-4 w-4 shrink-0 fill-white text-white" />
            Cuide disso agora
          </span>

          <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            <span className="font-body font-bold">
              Cuide disso agora,
            </span>
            <br />
            <span className="font-heading italic text-brand-soft">
              do jeito mais simples.
            </span>
          </h2>

          <p className="max-w-2xl font-body text-base leading-relaxed text-white/90 sm:text-lg">
            Atendimento particular de clínica geral, presencial ou online. Ligue
            ou mande mensagem — o que for mais fácil pra você.
          </p>

          <div className="mt-4 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_CLINICA_URL}
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
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 font-body text-white shadow-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                <Phone className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold tracking-wide sm:text-base">
                (31) 92009-0831
              </span>
            </a>
          </div>

          <p className="mt-8 max-w-md border-t border-white/10 pt-6 font-body text-xs leading-normal text-white/60">
            VivaClin Saúde — Rua Sete de Setembro, 863, Nacional, Contagem-MG
          </p>
        </div>
      </section>
    </>
  );
}
