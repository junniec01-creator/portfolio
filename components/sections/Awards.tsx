"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { awards } from "@/data/awards";
import ScrollReveal from "@/components/ui/ScrollReveal";

function renderDescription(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

function CountUp({ to, duration = 1200 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{value}</span>;
}

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <ScrollReveal>
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Awards
        </h2>
        <div className="mb-12 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-purple" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="mb-12 text-5xl font-bold sm:text-6xl">
          <span className="bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent">
            <CountUp to={awards.length} />
          </span>
          <span className="ml-3 text-xl font-medium text-muted">회 수상</span>
        </p>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {awards.map((award, i) => (
          <ScrollReveal key={award.id} delay={0.15 + i * 0.1}>
            <div className="h-full rounded-2xl border border-border-subtle bg-card p-6">
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold">{award.title}</h3>
                <span className="shrink-0 text-sm text-accent">{award.year}</span>
              </div>
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-gradient-to-r from-accent to-accent-purple px-2.5 py-0.5 text-xs font-semibold text-white">
                  {award.rank}
                </span>
                <p className="text-sm text-muted">{award.organizer}</p>
              </div>
              <p className="whitespace-pre-line text-[0.9375rem] leading-relaxed text-muted sm:text-sm">
                {renderDescription(award.description)}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
