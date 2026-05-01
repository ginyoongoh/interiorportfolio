import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Works — Gin Yoong Oh",
  description:
    "Selected interior design projects by Gin Yoong Oh, spanning mixed-use, residential, retail, and civic typologies.",
};

export default function WorksPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16 md:py-24">

      {/* Header */}
      <ScrollReveal>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Works</h1>
        <p className="mt-4 font-mono text-sm text-muted">2024 — 2026</p>
      </ScrollReveal>

      {/* Project Grid */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 100}>
            <Link href={`/works/${project.slug}`} className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-border">
                {project.thumbnailImage ? (
                  <img
                    src={project.thumbnailImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="font-mono text-sm uppercase tracking-widest text-muted">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 overflow-hidden">
                <p className="text-2xl md:text-3xl font-medium tracking-tight">
                  {project.number}&nbsp;&nbsp;{project.title}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                  {project.category} ⊛ {project.location}
                </p>
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div className="h-px bg-border w-full my-3" />
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    Year: {project.year}&nbsp;&nbsp;·&nbsp;&nbsp;Status: {project.status}&nbsp;&nbsp;·&nbsp;&nbsp;View Project →
                  </p>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

    </div>
  );
}
