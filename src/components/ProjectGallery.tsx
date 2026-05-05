import Image from 'next/image';
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
  if (section.columnsCount === 1) return 'grid-cols-1';
  if (section.columnsCount === 2) return 'grid-cols-1 md:grid-cols-2';
  if (section.columnsCount === 3) return 'grid-cols-1 md:grid-cols-3';
  if (section.type === 'process') return 'grid-cols-1 md:grid-cols-3';
  const allFlat = section.images.every(img => !img.fullBleed);
  if (allFlat && section.images.length === 2) return 'grid-cols-1 md:grid-cols-2';
  if (allFlat && section.images.length === 3) return 'grid-cols-1 md:grid-cols-3';
  return 'grid-cols-1 md:grid-cols-2';
}

function getSizes(gridCols: string): string {
  if (gridCols === 'grid-cols-1') return '(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px';
  if (gridCols.includes('md:grid-cols-3')) return '(max-width: 768px) 100vw, 33vw';
  return '(max-width: 768px) 100vw, 50vw';
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
  const isDrawing = section.type === 'plans' || section.type === 'details';

  if (section.gridGroups && section.images.some(img => img.gridGroup)) {
    const orderedGroups: Array<{ groupId: string; images: ProjectSection['images'] }> = [];
    let currentGroupId: string | null = null;
    let currentImages: ProjectSection['images'] = [];

    for (const img of section.images) {
      const gid = img.gridGroup ?? 'default';
      if (gid !== currentGroupId) {
        if (currentImages.length > 0 && currentGroupId !== null) {
          orderedGroups.push({ groupId: currentGroupId, images: currentImages });
        }
        currentGroupId = gid;
        currentImages = [img];
      } else {
        currentImages.push(img);
      }
    }
    if (currentImages.length > 0 && currentGroupId !== null) {
      orderedGroups.push({ groupId: currentGroupId, images: currentImages });
    }

    return (
      <div className="space-y-8">
        {orderedGroups.map(({ groupId, images }, idx) => {
          const cols = section.gridGroups![groupId] ?? 1;
          const gridCols =
            cols === 1 ? 'grid-cols-1' :
            cols === 2 ? 'grid-cols-1 md:grid-cols-2' :
            'grid-cols-1 md:grid-cols-3';
          const sizes = getSizes(gridCols);
          return (
            <div key={idx} className={`grid ${gridCols} gap-x-8 gap-y-12`}>
              {images.map((img, ii) => (
                <div key={ii} className={isDrawing ? 'bg-white' : ''}>
                  <Image
                    src={img.src}
                    alt={img.caption ?? img.description ?? section.title}
                    width={1920}
                    height={1440}
                    sizes={sizes}
                    quality={75}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <ImageMeta caption={img.caption} description={img.description} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  const groups = groupImages(section.images);
  const gridCols = getGridCols(section);
  const colSizes = getSizes(gridCols);

  return (
    <>
      {groups.map((group, gi) =>
        group.fullBleed ? (
          <div key={gi}>
            {group.items.map((img, ii) => (
              <div key={ii} className="mb-8">
                <Image
                  src={img.src}
                  alt={img.caption ?? img.description ?? section.title}
                  width={1920}
                  height={1440}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
                  quality={75}
                  style={{ width: '100%', height: 'auto' }}
                />
                <ImageMeta caption={img.caption} description={img.description} />
              </div>
            ))}
          </div>
        ) : (
          <div key={gi} className={`grid ${gridCols} gap-x-8 gap-y-12 mb-8`}>
            {group.items.map((img, ii) => (
              <div key={ii} className={isDrawing ? 'bg-white' : ''}>
                <Image
                  src={img.src}
                  alt={img.caption ?? img.description ?? section.title}
                  width={1920}
                  height={1440}
                  sizes={colSizes}
                  quality={75}
                  style={{ width: '100%', height: 'auto' }}
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
