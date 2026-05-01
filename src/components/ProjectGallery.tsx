'use client';
import { useState } from 'react';
import type { ProjectSection } from '@/data/projects';
import Lightbox from './Lightbox';

function groupImages(images: ProjectSection['images']) {
  const groups: Array<{ fullBleed: boolean; items: ProjectSection['images'] }> = [];
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
        <p
          className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl"
          style={{ marginTop: caption ? '0.5rem' : '1rem' }}
        >
          {description}
        </p>
      )}
    </>
  );
}

type LightboxState = { src: string; alt: string } | null;

export default function ProjectGallery({ section }: { section: ProjectSection }) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const groups = groupImages(section.images);
  const isDrawing = section.type === 'plans' || section.type === 'details';

  return (
    <>
      {groups.map((group, gi) =>
        group.fullBleed ? (
          <div key={gi}>
            {group.items.map((img, ii) => (
              <div key={ii} className="mb-8">
                <img
                  src={img.src}
                  alt={img.caption ?? section.title}
                  className="w-full h-auto cursor-zoom-in transition-opacity duration-300 hover:opacity-95"
                  loading="lazy"
                  onClick={() => setLightbox({ src: img.src, alt: img.caption ?? section.title })}
                />
                <ImageMeta caption={img.caption} description={img.description} />
              </div>
            ))}
          </div>
        ) : (
          <div key={gi} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {group.items.map((img, ii) => (
              <div key={ii} className={isDrawing ? 'bg-white' : ''}>
                <img
                  src={img.src}
                  alt={img.caption ?? section.title}
                  className="w-full h-auto cursor-zoom-in transition-opacity duration-300 hover:opacity-95"
                  loading="lazy"
                  onClick={() => setLightbox({ src: img.src, alt: img.caption ?? section.title })}
                />
                <ImageMeta caption={img.caption} description={img.description} />
              </div>
            ))}
          </div>
        )
      )}
      <Lightbox
        isOpen={lightbox !== null}
        imageSrc={lightbox?.src ?? ''}
        imageAlt={lightbox?.alt ?? ''}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}
