import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getNextProject, projects } from "@/data/projects";
import type { ProjectSection } from "@/data/projects";

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

function ImageMeta({ caption, description }: { caption?: string; description?: string }) {
  if (!caption && !description) return null;
  return (
    <>
      {caption && (
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
          {caption}
        </p>
      )}
      {description && (
        <p className={`${caption ? "mt-2" : "mt-4"} text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl`}>
          {description}
        </p>
      )}
    </>
  );
}

function groupImages(images: ProjectSection["images"]) {
  const groups: Array<{ fullBleed: boolean; items: ProjectSection["images"] }> = [];
  for (const img of images) {
    const isFullBleed = img.fullBleed === true;
    const last = groups[groups.length - 1];
    if (last && last.fullBleed === isFullBleed) {
      last.items.push(img);
    } else {
      groups.push({ fullBleed: isFullBleed, items: [img] });
    }
  }
  return groups;
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

      {/* Project Header */}
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

      {/* Metadata Table */}
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

      {/* Full Description */}
      <p className="mt-16 max-w-2xl text-lg md:text-xl leading-relaxed">
        {project.fullDescription}
      </p>

      {/* Hero Image */}
      {project.heroImage && (
        <div className="my-24 md:my-32">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
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
        project.sections.map((section, i) => {
          const groups = groupImages(section.images);
          const isDrawing = section.type === "plans" || section.type === "details";

          return (
            <section key={i} className="mb-32 md:mb-48">
              {/* Section Header */}
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

              {/* Image Gallery */}
              <div className="mt-12">
                {groups.map((group, gi) =>
                  group.fullBleed ? (
                    <div key={gi}>
                      {group.items.map((img, ii) => (
                        <div key={ii} className="mb-8">
                          <img
                            src={img.src}
                            alt={img.caption ?? section.title}
                            className="w-full h-auto"
                            loading="lazy"
                          />
                          <ImageMeta caption={img.caption} description={img.description} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      key={gi}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                    >
                      {group.items.map((img, ii) => (
                        <div key={ii} className={isDrawing ? "bg-white" : ""}>
                          <img
                            src={img.src}
                            alt={img.caption ?? section.title}
                            className="w-full h-auto"
                            loading="lazy"
                          />
                          <ImageMeta caption={img.caption} description={img.description} />
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </section>
          );
        })
      )}

      {/* Next Project */}
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

    </div>
  );
}
