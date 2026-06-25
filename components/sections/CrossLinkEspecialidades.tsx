import Link from "next/link";
import { ArrowRight, Bone, HeartHandshake, Salad, Soup, Stethoscope } from "lucide-react";

const ALL_SPECIALTIES = [
  { slug: "clinica-geral", title: "Clínica Geral", icon: Stethoscope },
  { slug: "reumatologia", title: "Reumatologia", icon: Bone },
  { slug: "saude-digestiva", title: "Saúde Digestiva", icon: Soup },
  { slug: "saude-do-idoso", title: "Saúde do Idoso", icon: HeartHandshake },
  { slug: "nutricao", title: "Nutrição", icon: Salad },
];

interface CrossLinkEspecialidadesProps {
  currentSlug: string;
}

export default function CrossLinkEspecialidades({
  currentSlug,
}: CrossLinkEspecialidadesProps) {
  const others = ALL_SPECIALTIES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="bg-bg-neutral px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-2xl text-brand-dark sm:text-3xl">
          Outras áreas de atuação
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {others.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <Link
                key={specialty.slug}
                href={`/areas-de-atuacao/${specialty.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white px-5 py-2.5 font-body text-sm text-brand-dark transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                <Icon className="h-4 w-4" />
                {specialty.title}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
