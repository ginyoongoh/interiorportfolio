'use client';

import { useState } from 'react';

type Props = {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function CollapsibleSection({ title, description, defaultOpen = false, children }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-full flex items-center justify-between py-4 border-b border-border transition-colors duration-200 hover:bg-foreground/[0.02]"
        aria-expanded={isOpen}
      >
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-left">
          {title}
        </h2>
        <span className="font-mono text-2xl text-muted transition-transform duration-300 group-hover:text-foreground">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-12 pb-16">
          {description && (
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-12">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
