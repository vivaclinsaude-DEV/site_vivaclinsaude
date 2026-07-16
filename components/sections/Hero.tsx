import Image from "next/image";
import { LayoutGrid, MessageCircle, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden pt-28 sm:pt-0">
      <Image
        src="/images/bg_hero_section_jaleco_branco.jpeg"
        alt="Dra. Juliana Coimbra de Mendonça e Dra. Danielle Lima da Costa, médicas da VivaClin Saúde"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(74,27,12,0.5)_0%,rgba(74,27,12,0.15)_35%,transparent_55%)] sm:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(74,27,12,0.5)_0%,rgba(74,27,12,0.2)_30%,transparent_55%)] sm:block" />

      <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-20">
        <div className="flex max-w-md flex-col items-start gap-6 lg:max-w-lg">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/20 px-4 py-2 font-body text-sm text-white backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" />
            Atendimento humanizado e contínuo
          </span>

          <h1 className="font-heading text-4xl leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-6xl">
            Cuidar com empatia{" "}
            <em className="italic">é o nosso jeito de fazer medicina</em>
          </h1>

          <p className="max-w-[500px] font-body text-base font-light text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] sm:text-lg">
            Humanização e dedicação em cada atendimento.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-brand-primary px-6 py-3 font-body text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-primary">
                <MessageCircle className="h-4 w-4" />
              </span>
              Falar no WhatsApp
            </a>

            <a
              href="#areas-de-atuacao"
              className="inline-flex items-center gap-3 rounded-full border border-white px-6 py-3 font-body text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                <LayoutGrid className="h-4 w-4" />
              </span>
              Ver Áreas de Atuação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
