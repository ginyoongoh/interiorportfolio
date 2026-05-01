import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Gin Yoong Oh",
  description:
    "Interior Designer based in Brooklyn, NY. MFA candidate at Pratt Institute, currently interning at Studio Jari.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-16 py-24 md:py-32">

      {/* Page Header */}
      <ScrollReveal>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight">
          About
        </h1>
      </ScrollReveal>

      {/* Quote */}
      <ScrollReveal delay={100}>
        <div className="mt-24 md:mt-32 max-w-3xl">
          <p className="italic text-3xl md:text-4xl leading-tight font-medium">
            <span>Designing Spaces:</span><br />
            <span>Where Stories Meet</span><br />
            <span>and Communities Flourish.</span>
          </p>
        </div>
      </ScrollReveal>

      {/* Divider */}
      <div className="my-16 w-16 h-[1px] bg-foreground" />

      {/* Bio */}
      <ScrollReveal>
        <div className="max-w-2xl text-lg md:text-xl leading-relaxed">
          <p className="mb-6">
            My design journey has been a continuous process of embracing
            &lsquo;difference&rsquo; and uncovering &lsquo;essence.&rsquo; Spanning from various Asian
            countries to the United States, my multicultural upbringing has
            provided me with an unbiased perspective and a foundation for
            critical thinking.
          </p>
          <p className="mb-6">
            Through the people I encountered along the way, I learned about
            communication and the value of building relationships. Design is
            more than just decorating a space; it is the process of listening
            to the stories of a place and its people, translating them into a
            spatial language, and reconstructing them into environments with
            new value.
          </p>
          <p>
            I believe interior space should serve as a &lsquo;medium&rsquo; that connects
            people. I aim for spaces where individuals from diverse backgrounds
            can harmonize, share profound experiences, and ultimately foster a
            sense of community.
          </p>
        </div>
      </ScrollReveal>

      {/* Divider */}
      <div className="my-24 md:my-32 w-16 h-[1px] bg-foreground" />

      {/* Education / Experience / Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

        <ScrollReveal delay={0}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
              Education
            </p>
            <div className="mb-8">
              <p className="text-base font-medium">Pratt Institute</p>
              <p className="text-sm text-muted">Brooklyn, NY</p>
              <p className="mt-2 text-base">MFA in Interior Design</p>
              <p className="mt-1 text-sm font-mono text-muted">Aug 2023 — May 2026</p>
            </div>
            <div>
              <p className="text-base font-medium">Gordon College</p>
              <p className="text-sm text-muted">Wenham, MA</p>
              <p className="mt-2 text-base">B.A. in Art / B.A. in Psychology</p>
              <p className="mt-1 text-sm font-mono text-muted">Aug 2019 — Dec 2022</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
              Experience
            </p>
            <div className="mb-8">
              <p className="text-base font-medium">Studio Jari</p>
              <p className="text-sm text-muted">Brooklyn, NY</p>
              <p className="mt-2 text-base">Intern</p>
              <p className="mt-1 text-sm font-mono text-muted">Dec 2025 — Present</p>
            </div>
            <div>
              <p className="text-base font-medium">With Architects</p>
              <p className="text-sm text-muted">Seoul, Korea</p>
              <p className="mt-2 text-base">Intern</p>
              <p className="mt-1 text-sm font-mono text-muted">Jul — Aug 2022</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
              Skills
            </p>
            <div>
              <p className="text-base font-medium mb-1">Software</p>
              <p className="text-base text-muted">AutoCAD · Revit · Rhino 3D · SketchUp</p>
            </div>
            <div className="mt-6">
              <p className="text-base font-medium mb-1">Visualization</p>
              <p className="text-base text-muted">Enscape · V-Ray · D5 Render</p>
            </div>
            <div className="mt-6">
              <p className="text-base font-medium mb-1">Design</p>
              <p className="text-base text-muted">Adobe Creative Suite</p>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Contact */}
      <ScrollReveal>
        <div className="mt-32 py-16 border-t border-border">
          <p className="font-mono text-sm uppercase tracking-widest text-muted mb-8">
            Contact
          </p>
          <a
            href="mailto:ogy00311@gmail.com"
            className="block text-xl md:text-2xl mb-4 hover:underline"
          >
            ogy00311@gmail.com
          </a>
          <p className="text-xl md:text-2xl font-mono mb-4">
            (857) 468-8077
          </p>
          <a
            href="https://linkedin.com/in/gin-yoong-oh-187589347"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl md:text-2xl mb-4 hover:underline"
          >
            linkedin.com/in/gin-yoong-oh-187589347
          </a>
        </div>
      </ScrollReveal>

    </div>
  );
}
