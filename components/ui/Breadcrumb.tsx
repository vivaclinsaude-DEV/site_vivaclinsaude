import Link from "next/link";

interface BreadcrumbProps {
  current: string;
}

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-[1536px] px-6 py-4 font-body text-sm text-text-body/70 sm:px-10 lg:px-20"
    >
      <Link href="/" className="hover:text-brand-primary">
        Início
      </Link>
      <span className="mx-2 text-text-body/40">»</span>
      <Link href="/#areas-de-atuacao" className="hover:text-brand-primary">
        Áreas de Atuação
      </Link>
      <span className="mx-2 text-text-body/40">»</span>
      <span className="text-brand-dark">{current}</span>
    </nav>
  );
}
