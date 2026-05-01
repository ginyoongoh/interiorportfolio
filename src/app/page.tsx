import Link from "next/link";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-16">

      {/* Hero Text */}
      <ScrollReveal>
        <section className="py-32 md:py-48">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]">
            Designing Spaces:<br />
            Where Stories Meet<br />
            and Communities Flourish.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted">
            Interior Designer based in Brooklyn
          </p>
        </section>
      </ScrollReveal>

      {/* Hero Image */}
      <ScrollReveal delay={100}>
        <div className="my-24 md:my-32">
          <img
            src="/images/hero/cover.jpg"
            alt="Artist Residency at 150 Bowery, New York"
            className="w-full h-auto"
          />
        </div>
      </ScrollReveal>

      {/* Selected Works Header */}
      <ScrollReveal>
        <div className="flex justify-between items-baseline pb-6 border-b border-border mb-4">
          <span className="text-xl font-medium">Selected Works</span>
          <span className="font-mono text-sm text-muted">2024 — 2026</span>
        </div>
      </ScrollReveal>

      {/* Project List */}
      <div>
        {projects.map((project, i) => (
          <ScrollReveal
            key={project.slug}
            delay={i * 100}
            className="border-b border-border last:border-b-0"
          >
            <Link
              href={`/works/${project.slug}`}
              className="group block transition-colors duration-300 hover:bg-foreground/[0.02]"
            >
              <div className="flex items-start justify-between py-6 md:py-8">
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="font-mono text-sm text-muted">{project.number}</span>
                  <span className="text-2xl md:text-3xl font-medium tracking-tight">{project.title}</span>
                </div>
                <div className="flex items-start gap-6 md:gap-8">
                  <div className="hidden md:block text-right">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">
                      {project.category} ⊛ {project.location}
                    </p>
                    <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-8 group-hover:opacity-100 transition-all duration-300 ease-out">
                      <p className="font-mono text-xs text-muted/70 mt-1">
                        {project.year} · {project.status}
                      </p>
                    </div>
                  </div>
                  <span className="text-xl text-muted transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* About Preview */}
      <ScrollReveal>
        <section className="max-w-2xl mx-auto py-32 md:py-48">
          <p className="italic text-xl md:text-2xl leading-relaxed">
            &ldquo;My design journey has been a continuous process of embracing
            &lsquo;difference&rsquo; and uncovering &lsquo;essence.&rsquo; Through
            the people I encountered along the way, I learned about communication
            and the value of building relationships.&rdquo;
          </p>
          <div className="mt-12 group inline-flex">
            <Link
              href="/about"
              className="font-mono text-sm uppercase tracking-widest inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
            >
              Read more →
            </Link>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
