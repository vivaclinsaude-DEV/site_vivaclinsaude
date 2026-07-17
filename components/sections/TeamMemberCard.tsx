"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface TeamMember {
  slug: string;
  namePrefix: string;
  nameRest: string;
  role: string;
  image: string;
  highlights?: string[];
  bio?: string[];
}

const SOCIALS = [
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 8.5h-1.5a2 2 0 0 0-2 2V13H8v2h2.5v6h2v-6h2l.5-2h-2.5v-2a.5.5 0 0 1 .5-.5H15z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="8" cy="8.5" r="0.6" fill="currentColor" stroke="none" />
        <path d="M8 11v6" />
        <path d="M12.5 17v-3.5a2 2 0 0 1 4 0V17" />
        <path d="M12.5 11v6" />
      </svg>
    ),
  },
];

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const [title, ...firstNameParts] = member.namePrefix.split(" ");
  const fullName = [...firstNameParts, member.nameRest].join(" ");

  useGSAP(
    () => {
      gsap.to(innerRef.current, {
        rotateY: isFlipped ? 180 : 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
    { dependencies: [isFlipped] },
  );

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setIsFlipped((flipped) => !flipped)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsFlipped((flipped) => !flipped);
        }
      }}
      aria-label={`Saiba mais sobre ${member.namePrefix} ${member.nameRest}`}
      className="h-full cursor-pointer [perspective:1200px]"
    >
      <div
        ref={innerRef}
        className="relative h-full [transform-style:preserve-3d]"
      >
        {/* FRENTE */}
        <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm [backface-visibility:hidden]">
          <div className="relative aspect-[4/5]">
            <Image
              src={member.image}
              alt={`${member.namePrefix} ${member.nameRest}`}
              fill
              quality={100}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-between gap-2 p-6">
            <h3 className="font-body text-lg text-brand-dark">
              <span className="font-semibold">{member.namePrefix}</span>{" "}
              <span className="text-text-body/80">{member.nameRest}</span>
            </h3>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
              <span className="h-4 w-4">{SOCIALS[0].icon}</span>
            </span>
          </div>
        </div>

        {/* VERSO */}
        <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <h3 className="text-5xl leading-tight">
              <span className="font-body text-brand-dark">{title}</span>{" "}
              <span className="font-heading text-brand-dark italic">
                {fullName}
              </span>
            </h3>
            <span className="font-body text-sm font-medium tracking-wide text-brand-primary uppercase">
              {member.role}
            </span>
          </div>

          {member.highlights && member.highlights.length > 0 ? (
            <ul className="mt-4 flex flex-col gap-2 font-body text-sm text-text-body/80">
              {member.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="text-brand-primary">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 font-body text-sm text-text-body/80">
              Em breve, mais informações sobre {member.namePrefix}{" "}
              {member.nameRest}.
            </p>
          )}

          <div className="mt-auto flex items-center gap-2 pt-4">
            {SOCIALS.map((social) => (
              <span
                key={social.label}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary"
              >
                <span className="h-4 w-4">{social.icon}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
