"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Especialidades", href: "/#areas-de-atuacao" },
  { label: "Sobre Nós", href: "/#sobre" },
  { label: "Consultório", href: "/#consultorio" },
  { label: "Contato", href: "/#footer" },
];

interface HeaderProps {
  /** Páginas sem foto de fundo no topo (ex: páginas de especialidade) devem passar `false`. */
  transparentAtTop?: boolean;
}

export default function Header({ transparentAtTop = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(!transparentAtTop);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparentAtTop) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentAtTop]);

  const textColor = isScrolled ? "text-brand-dark" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-bg-neutral shadow-md" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8 lg:px-20">
        <a href="#" className="block h-14 w-auto sm:h-16">
          <Image
            src={
              isScrolled
                ? "/images/logo_vivaclin.png"
                : "/images/logo_vivaclin_white.svg"
            }
            alt="VivaClin Saúde"
            width={2027}
            height={776}
            priority
            className="h-full w-auto object-contain"
          />
        </a>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          {isScrolled ? (
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-base whitespace-nowrap text-brand-dark"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ) : (
            <nav className="flex items-center gap-1 rounded-full bg-white/10 p-1.5 ring-1 ring-white/20 backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2.5 font-body text-sm whitespace-nowrap text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand-primary py-2 pl-5 pr-2 font-body text-sm font-semibold text-white shadow-lg shadow-black/30 transition-colors hover:bg-brand-primary/90"
          >
            Agendamento
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand-primary">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
              isScrolled ? "" : "bg-white/10 ring-1 ring-white/20 backdrop-blur-md"
            }`}
          >
            {isMenuOpen ? (
              <X className={`h-5 w-5 ${textColor}`} />
            ) : (
              <Menu className={`h-5 w-5 ${textColor}`} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-4 bg-bg-neutral px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-body text-brand-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
