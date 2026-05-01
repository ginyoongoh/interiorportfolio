import type { ProjectSection } from '@/data/projects';

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

function getGridCols(section: ProjectSection): string {
  if (section.type === 'process') return 'grid-cols-1 md:grid-cols-3';
  const allFlat = section.images.every(img => !img.fullBleed);
  if (allFlat && section.images.length === 3) return 'grid-cols-1 md:grid-cols-3';
  return 'grid-cols-1 md:grid-cols-2';
}

function ImageMeta({ caption, description }: { caption?: string; description?: string }) {
  if (!caption && !description) return null;
  return (
    <div className="mt-4 max-w-3xl">
      {caption && (
        <p className="font-mono text-xs uppercase tracking-widest text-muted leading-relaxed">
          {caption}
        </p>
      )}
      {description && (
        <p className={`${caption ? 'mt-2' : ''} text-base text-foreground/80 leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function ProjectGallery({ section }: { section: ProjectSection }) {
  const groups = groupImages(section.images);
  const isDrawing = section.type === 'plans' || section.type === 'details';
  const gridCols = getGridCols(section);

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
                  className="w-full h-auto"
                  loading="lazy"
                />
                <ImageMeta caption={img.caption} description={img.description} />
              </div>
            ))}
          </div>
        ) : (
          <div key={gi} className={`grid ${gridCols} gap-x-8 gap-y-12 mb-8`}>
            {group.items.map((img, ii) => (
              <div key={ii} className={isDrawing ? 'bg-white' : ''}>
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
    </>
  );
}
