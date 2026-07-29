import ScrollReveal from "@/components/ui/ScrollReveal";
import LottieGreeting from "@/components/ui/LottieGreeting";

const EMAIL = "junnie.c01@gmail.com";

// 주소를 채우면 해당 링크가 자동으로 노출된다 (비어 있으면 렌더링되지 않음)
const LINKS = [
  { label: "GitHub", href: "" },
  { label: "Instagram", href: "" },
];

export default function Contact() {
  const visibleLinks = LINKS.filter((link) => link.href);

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <ScrollReveal className="text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-purple" />

        <p className="mb-10 text-muted">
          협업이나 문의는 언제든 환영합니다.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
        >
          {EMAIL}
        </a>

        {visibleLinks.length > 0 && (
          <div className="mt-8 flex justify-center gap-6 text-sm text-muted">
            {visibleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="mt-28 flex flex-col items-center gap-3">
          <LottieGreeting />
          <p className="text-base font-semibold text-foreground sm:text-lg">
            끝까지 봐주셔서 감사합니다!
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
