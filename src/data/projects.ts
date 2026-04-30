export type ProjectSection = {
  type: "concept" | "site" | "strategy" | "plans" | "renderings" | "details" | "process";
  title: string;
  description?: string;
  images: {
    src: string;
    caption?: string;
    fullBleed?: boolean;
  }[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  status: string;
  projectType: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  thumbnailImage: string;
  sections: ProjectSection[];
  nextSlug: string;
};

export const projects: Project[] = [
  {
    slug: "artist-residency",
    number: "01",
    title: "Artist Residency",
    category: "Mixed-Use",
    location: "150 Bowery, New York, NY",
    year: "2025",
    status: "Conceptual",
    projectType: "Mixed-Use",
    shortDescription:
      "A daytime residency at Interactive Park inviting public encounter through performative facades and multi-functional spaces in the Bowery.",
    fullDescription:
      "The residency at Interactive Park intends to provide a public space and program to invite more people who pass by Bowery and promote interaction between artists residing there. Interactive media on the LED screen will create works related to the public's movement within the site while plays occur in the theater. The writers' regular reading sessions will be open to the public. Various activities that mix the public in multi-functional spaces create a notable place, reviving the artistic vitality of the street.",
    heroImage: "/images/01-artist-residency/01-hero.png",
    thumbnailImage: "/images/01-artist-residency/01-hero.png",
    sections: [
      {
        type: "plans",
        title: "Elevations",
        description:
          "Two elevations capture the relationship between the building and the surrounding streetscape of Bowery.",
        images: [
          { src: "/images/01-artist-residency/02-elevation-1.png", caption: "Elevation 01", fullBleed: false },
          { src: "/images/01-artist-residency/03-elevation-2.png", caption: "Elevation 02", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Floor Plans",
        description:
          "The plans operate in two states—Closed and Open—allowing the spaces to transform based on programmatic needs and public engagement.",
        images: [
          { src: "/images/01-artist-residency/04-closed-floorplan-street.png", caption: "Street Level — Closed", fullBleed: false },
          { src: "/images/01-artist-residency/05-open-floorplan-street.png", caption: "Street Level — Open", fullBleed: false },
          { src: "/images/01-artist-residency/08-closed-floorplan-basement.png", caption: "Basement Level — Closed", fullBleed: false },
          { src: "/images/01-artist-residency/09-open-floorplan-basement.png", caption: "Basement Level — Open", fullBleed: false },
        ],
      },
      {
        type: "strategy",
        title: "Performative Facade",
        description:
          "Layered buffer spaces with movable walls and folding window facades enable the building to transform with the rhythm of public life. The facade itself becomes a participatory element, opening and closing in dialogue with the street.",
        images: [
          { src: "/images/01-artist-residency/06-closed-facade.png", caption: "Facade — Closed", fullBleed: true },
          { src: "/images/01-artist-residency/07-open-facade.png", caption: "Facade — Open", fullBleed: true },
        ],
      },
      {
        type: "concept",
        title: "Material Board",
        description:
          "Two material strategies drive the design: preserving the existing brick and concrete as found, and incorporating natural elements that bring softness and seasonality into the space.",
        images: [
          { src: "/images/01-artist-residency/10-material-board.png", fullBleed: false },
        ],
      },
      {
        type: "concept",
        title: "Spatial Programs",
        description:
          "Three core programs anchor the residency: a Playwrights' Studio for writing and reading, a Media Artist Studio for interactive work, and a Flexible Workplace that adapts to communal use.",
        images: [
          { src: "/images/01-artist-residency/11-playwrights-studio.png", caption: "Playwrights' Studio", fullBleed: false },
          { src: "/images/01-artist-residency/12-media-artist-studio.png", caption: "Media Artist Studio", fullBleed: false },
          { src: "/images/01-artist-residency/13-flexible-workplace.png", caption: "Flexible Workplace", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Sections",
        description:
          "Building sections reveal the vertical layering of programs and the relationship between street, ground, and basement levels.",
        images: [
          { src: "/images/01-artist-residency/14-section-1.png", caption: "Section 01", fullBleed: true },
          { src: "/images/01-artist-residency/15-section-2.png", caption: "Section 02", fullBleed: true },
        ],
      },
      {
        type: "renderings",
        title: "Renderings",
        images: [
          { src: "/images/01-artist-residency/16-render-1.png", fullBleed: true },
          { src: "/images/01-artist-residency/17-render-2.png", fullBleed: true },
        ],
      },
      {
        type: "process",
        title: "Design Process",
        description:
          "Iterative explorations and study models that shaped the project from initial site response to final spatial resolution.",
        images: [
          { src: "/images/01-artist-residency/18-process-1.png", fullBleed: false },
          { src: "/images/01-artist-residency/19-process-2.png", fullBleed: false },
          { src: "/images/01-artist-residency/20-process-3.png", fullBleed: false },
          { src: "/images/01-artist-residency/21-process-4.png", fullBleed: false },
          { src: "/images/01-artist-residency/22-process-5.png", fullBleed: false },
          { src: "/images/01-artist-residency/23-process-6.png", fullBleed: false },
          { src: "/images/01-artist-residency/24-process-7.png", fullBleed: false },
          { src: "/images/01-artist-residency/25-process-8.png", fullBleed: false },
        ],
      },
    ],
    nextSlug: "modern-hanok",
  },
  {
    slug: "modern-hanok",
    number: "02",
    title: "Modern Hanok",
    category: "Residential",
    location: "Mapo-gu, Seoul, South Korea",
    year: "2026",
    status: "In Progress — Conceptual",
    projectType: "Residential",
    shortDescription:
      "A reinterpretation of Hanok principles for contemporary public housing in Seoul, restoring intimacy and collective identity through layered spatial scales.",
    fullDescription:
      "The project reinterprets Hanok principles—layered intimacy and borrowed nature—as a framework for contemporary public housing in Seoul's Mapo District. Korea's standardized apartment typology has severed the relationship between residents and their community and natural environment. By translating the spatial logic of vernacular architecture into three scales of intervention—unit, floor, and building—the design creates layered communal interaction. Each scale reflects the core values of Hanok: borrowing nature inward and cultivating spaces of gradual intimacy. It offers a new housing typology that restores intimacy, collective identity, and environmental awareness within high-density urban living.",
    heroImage: "",
    thumbnailImage: "",
    sections: [],
    nextSlug: "library",
  },
  {
    slug: "library",
    number: "03",
    title: "Library As a Third Place",
    category: "Civic / Culture",
    location: "Brooklyn, New York",
    year: "2024",
    status: "Conceptual",
    projectType: "Civic / Culture",
    shortDescription:
      "A new Brooklyn Public Library branch reimagined as a third place — beyond reading, inviting diverse public use.",
    fullDescription:
      "The project designs a new Brooklyn Public Library branch at the Pfizer Building in Broadway Triangle. Through precedent and site research, the library supports the community based on local neighborhood needs. The new library extends beyond its conventional purpose—reading—to embrace diverse public uses that invite more people to come.",
    heroImage: "/images/03-library/01-hero.png",
    thumbnailImage: "/images/03-library/01-hero.png",
    sections: [
      {
        type: "site",
        title: "Site Analysis",
        description:
          "Located in the Pfizer Building in Broadway Triangle, the site sits at the intersection of multiple Brooklyn neighborhoods—an opportunity to serve a diverse community through a shared third place.",
        images: [
          { src: "/images/03-library/02-site-analysis-1.png", caption: "Site Analysis 01", fullBleed: false },
          { src: "/images/03-library/03-site-analysis-2.png", caption: "Site Analysis 02", fullBleed: false },
        ],
      },
      {
        type: "concept",
        title: "Concept Diagrams",
        description:
          "The library is structured as a sequence of layered programs—reading, gathering, learning, exhibiting—each calibrated to invite different modes of public engagement throughout the day.",
        images: [
          { src: "/images/03-library/04-concept-diagram-1.png", caption: "Concept 01", fullBleed: false },
          { src: "/images/03-library/05-concept-diagram-2.png", caption: "Concept 02", fullBleed: false },
          { src: "/images/03-library/06-concept-diagram-3.png", caption: "Concept 03", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Floor Plans",
        images: [
          { src: "/images/03-library/07-floorplan-1.png", caption: "Floor Plan 01", fullBleed: false },
          { src: "/images/03-library/08-floorplan-2.png", caption: "Floor Plan 02", fullBleed: false },
        ],
      },
      {
        type: "renderings",
        title: "Renderings",
        images: [
          { src: "/images/03-library/09-render-1.png", fullBleed: true },
          { src: "/images/03-library/10-render-2.png", fullBleed: true },
          { src: "/images/03-library/11-render-3.png", fullBleed: true },
          { src: "/images/03-library/12-render-4.png", fullBleed: true },
          { src: "/images/03-library/13-render-5.png", fullBleed: true },
          { src: "/images/03-library/14-render-6.png", fullBleed: true },
        ],
      },
    ],
    nextSlug: "atlantic-cafe",
  },
  {
    slug: "atlantic-cafe",
    number: "04",
    title: "Cafe in Atlantic Ave.",
    category: "Retail",
    location: "525 Atlantic Ave, Brooklyn, NY",
    year: "2025",
    status: "Conceptual",
    projectType: "Retail",
    shortDescription:
      "An adaptive reuse café that tells the story of its existing site through Revit-based construction documentation.",
    fullDescription:
      "The project designs a new cafe on the site of 525 Atlantic Ave, Brooklyn, NY. The café's space is a place where people interact and build community. This adaptive reuse project tells a story of the existing site through design for people visiting. Using Revit, it explores and focuses on the method of creating construction drawings and details of the construction process. It helps to understand the actual process of the construction field and how design comes to life in real-world applications.",
    heroImage: "/images/04-atlantic-cafe/01-hero.jpg",
    thumbnailImage: "/images/04-atlantic-cafe/01-hero.jpg",
    sections: [
      {
        type: "concept",
        title: "Concept Collage",
        description:
          "Material studies and atmospheric references that establish the café's design language—warmth, texture, and a sense of belonging within the existing neighborhood fabric.",
        images: [
          { src: "/images/04-atlantic-cafe/12-concept-collage-1.png", fullBleed: false },
          { src: "/images/04-atlantic-cafe/13-concept-collage-2.jpg", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Floor Plan & Section",
        description:
          "The plan organizes the café around a central counter, with seating zones that respond to the existing structural rhythm of the building.",
        images: [
          { src: "/images/04-atlantic-cafe/02-floorplan.jpg", caption: "Floor Plan", fullBleed: false },
          { src: "/images/04-atlantic-cafe/03-interior-section.jpg", caption: "Interior Section", fullBleed: false },
        ],
      },
      {
        type: "details",
        title: "Shop Drawings",
        description:
          "A detailed construction documentation set developed in Revit—translating design intent into the language of the construction field.",
        images: [
          { src: "/images/04-atlantic-cafe/04-shop-drawing-1.jpg", caption: "Shop Drawing 01", fullBleed: false },
          { src: "/images/04-atlantic-cafe/05-shop-drawing-2.jpg", caption: "Shop Drawing 02", fullBleed: false },
          { src: "/images/04-atlantic-cafe/06-shop-drawing-3.jpg", caption: "Shop Drawing 03", fullBleed: false },
          { src: "/images/04-atlantic-cafe/07-shop-drawing-4.jpg", caption: "Shop Drawing 04", fullBleed: false },
          { src: "/images/04-atlantic-cafe/08-shop-drawing-5.jpg", caption: "Shop Drawing 05", fullBleed: false },
          { src: "/images/04-atlantic-cafe/09-shop-drawing-6.jpg", caption: "Shop Drawing 06", fullBleed: false },
        ],
      },
      {
        type: "details",
        title: "Construction Details",
        description:
          "Floor-to-ceiling details and millwork specifications that resolve the relationship between the existing building envelope and new interior elements.",
        images: [
          { src: "/images/04-atlantic-cafe/10-details-1.jpg", caption: "Detail 01", fullBleed: false },
          { src: "/images/04-atlantic-cafe/11-details-2.jpg", caption: "Detail 02", fullBleed: false },
        ],
      },
    ],
    nextSlug: "kitchen",
  },
  {
    slug: "kitchen",
    number: "05",
    title: "Kitchen",
    category: "Residential (Internship)",
    location: "252 7th Ave, New York, NY",
    year: "2026",
    status: "In Progress",
    projectType: "Residential",
    shortDescription:
      "A condominium kitchen design exploring circulation, storage maximization, and material expression as part of a full-unit interior project.",
    fullDescription:
      "The project to design a kitchen for a condominium in Manhattan is part of a full-unit-sized interior design project at Studio Jari. Through site visits and meetings with the client, several options are explored that best fit the client's living style. It offers not only a convenient design—such as circulation and maximized storage—but also beauty. As an interior designer, the kitchen has been designated as an individual's task for design development. The process is currently in the construction drawing phase and will be developed further.",
    heroImage: "/images/05-kitchen/01-hero.jpg",
    thumbnailImage: "/images/05-kitchen/01-hero.jpg",
    sections: [
      {
        type: "concept",
        title: "Concept Collage",
        description:
          "Material and atmosphere studies that align the kitchen design with the client's living style and the unit's broader interior language.",
        images: [
          { src: "/images/05-kitchen/06-concept-collage-1.png", fullBleed: false },
          { src: "/images/05-kitchen/07-concept-collage-2.png", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Floor Plan & Materials",
        description:
          "The plan optimizes circulation and storage within the constraints of a Manhattan condominium, balancing functional efficiency with visual warmth.",
        images: [
          { src: "/images/05-kitchen/02-floorplan.jpg", caption: "Kitchen Floor Plan", fullBleed: false },
          { src: "/images/05-kitchen/03-material-board.png", caption: "Material Board", fullBleed: false },
        ],
      },
      {
        type: "details",
        title: "Construction Details",
        description:
          "Self-developed millwork details that translate the kitchen design into buildable specifications.",
        images: [
          { src: "/images/05-kitchen/04-details-1.jpg", caption: "Detail 01", fullBleed: false },
          { src: "/images/05-kitchen/05-details-2.jpg", caption: "Detail 02", fullBleed: false },
        ],
      },
    ],
    nextSlug: "artist-residency",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  return projects[(index + 1) % projects.length];
}
