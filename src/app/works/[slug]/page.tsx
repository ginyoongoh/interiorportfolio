import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getNextProject, projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectGallery from "@/components/ProjectGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Gin Yoong Oh`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getNextProject(project.slug);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-16">

      {/* Back Link */}
      <div className="pt-8">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
        >
          ← Back to Works
        </Link>
      </div>

      {/* Project Header + Metadata */}
      <ScrollReveal>
        <header className="py-16 md:py-32 max-w-4xl">
          <p className="text-7xl md:text-9xl font-light text-muted leading-none">
            {project.number}
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
            {project.category}
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl font-medium leading-tight tracking-tight">
            {project.title}
          </h1>
        </header>

        <div className="max-w-md grid grid-cols-[120px_1fr] gap-y-4 gap-x-8">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Location</span>
          <span className="text-base">{project.location}</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Year</span>
          <span className="text-base">{project.year}</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Status</span>
          <span className="text-base">{project.status}</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Type</span>
          <span className="text-base">{project.projectType}</span>
        </div>
      </ScrollReveal>

      {/* Full Description */}
      <ScrollReveal delay={100}>
        <p className="mt-16 max-w-2xl text-lg md:text-xl leading-relaxed">
          {project.fullDescription}
        </p>
      </ScrollReveal>

      {/* Hero Image */}
      {project.heroImage && (
        <ScrollReveal delay={200}>
          <div className="my-24 md:my-32">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      )}

      {/* Sections */}
      {project.sections.length === 0 ? (
        <div className="py-32 md:py-48 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-muted">
            Coming Soon
          </p>
          <p className="mt-4 text-base text-muted max-w-md mx-auto">
            This project is currently in development. Detailed documentation
            will be available soon.
          </p>
        </div>
      ) : (
        project.sections.map((section, i) => (
          <ScrollReveal key={i}>
            <section className="mb-32 md:mb-48">
              <div className="max-w-4xl mb-12 md:mb-16">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {section.type}
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
                    {section.description}
                  </p>
                )}
              </div>
              <div className="mt-12">
                <ProjectGallery section={section} />
              </div>
            </section>
          </ScrollReveal>
        ))
      )}

      {/* Next Project */}
      <ScrollReveal>
        <div className="py-32 border-t border-border">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Next Project
            </p>
            <Link
              href={`/works/${nextProject.slug}`}
              className="group mt-4 flex items-baseline justify-between"
            >
              <div>
                <p className="text-3xl md:text-5xl font-medium tracking-tight">
                  {nextProject.number} — {nextProject.title}
                </p>
                <p className="mt-2 text-base text-muted">{nextProject.category}</p>
              </div>
              <span className="inline-block text-3xl md:text-5xl font-medium transition-transform duration-200 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
