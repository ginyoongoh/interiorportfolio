export type ProjectSection = {
  type: "concept" | "site" | "strategy" | "plans" | "renderings" | "details" | "process";
  title: string;
  description?: string;
  collapsible?: boolean;
  columnsCount?: 1 | 2 | 3;
  images: {
    src: string;
    caption?: string;
    description?: string;
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
  heroDescription?: string;
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
          { src: "/images/01-artist-residency/06-closed-facade.png", caption: "Facade — Closed", fullBleed: false },
          { src: "/images/01-artist-residency/07-open-facade.png", caption: "Facade — Open", fullBleed: false },
        ],
      },
      {
        type: "concept",
        title: "Material Board",
        description:
          "Two material strategies drive the design: preserving the existing brick and concrete as found, and incorporating natural elements that bring softness and seasonality into the space.",
        images: [
          { src: "/images/01-artist-residency/10-material-board.jpg", fullBleed: false },
        ],
      },
      {
        type: "concept",
        title: "Spatial Programs",
        description:
          "Three core programs anchor the residency: a Playwrights' Studio for writing and reading, a Media Artist Studio for interactive work, and a Flexible Workplace that adapts to communal use.",
        images: [
          { src: "/images/01-artist-residency/11-playwrights-studio.png", caption: "Playwrights' Studio", fullBleed: false },
          { src: "/images/01-artist-residency/12-interactive-media-artist-studio.png", caption: "Interactive Media Artist Studio", fullBleed: false },
          { src: "/images/01-artist-residency/13-flexible-workplace.png", caption: "Flexible Workplace", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Sections",
        description:
          "Building sections reveal the vertical layering of programs and the relationship between street, ground, and basement levels.",
        images: [
          { src: "/images/01-artist-residency/14-section-1.png", caption: "Section 01", fullBleed: false },
          { src: "/images/01-artist-residency/15-section-2.png", caption: "Section 02", fullBleed: false },
        ],
      },
      {
        type: "renderings",
        title: "Renderings",
        images: [
          { src: "/images/01-artist-residency/16-render-1.png", description: "Wellness Program in Urban Park", fullBleed: true },
          { src: "/images/01-artist-residency/17-render-2.png", description: "Interactive Media Exhibition on Basement", fullBleed: true },
        ],
      },
      {
        type: "process",
        title: "Design Process",
        collapsible: true,
        columnsCount: 2,
        description:
          "Iterative explorations and study models that shaped the project from initial site response to final spatial resolution.",
        images: [
          { src: "/images/01-artist-residency/18-process-1.png", description: "Site Research", fullBleed: false },
          { src: "/images/01-artist-residency/19-process-2.png", description: "Program Matrix", fullBleed: false },
          { src: "/images/01-artist-residency/20-process-3.png", fullBleed: false },
          { src: "/images/01-artist-residency/21-process-4.png", fullBleed: false },
          { src: "/images/01-artist-residency/22-process-5.png", fullBleed: false },
          { src: "/images/01-artist-residency/23-process-6.png", fullBleed: false },
          { src: "/images/01-artist-residency/24-process-7.png", fullBleed: false },
          { src: "/images/01-artist-residency/25-process-8.png", fullBleed: false },
          { src: "/images/01-artist-residency/26-process-9.png", fullBleed: false },
          { src: "/images/01-artist-residency/27-process-10.png", fullBleed: false },
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
    year: "2026 (Academic)",
    status: "Conceptual",
    projectType: "Residential",
    shortDescription:
      "A reinterpretation of Hanok spatial principles—layered intimacy and borrowed nature—applied to contemporary high-density housing in Seoul's Mapo District.",
    fullDescription:
      "The project reinterprets Hanok principles—layered intimacy and borrowed nature—as a framework for contemporary public housing in Seoul's Mapo District. Korea's standardized apartment typology has severed the relationship between residents and their community and natural environment. By translating the spatial logic of vernacular architecture into three scales of intervention—unit, floor, and building—the design creates layered communal interaction. Each scale reflects the core values of Hanok, the traditional Korean home: borrowing nature inward and cultivating spaces of gradual intimacy. It offers a new housing typology that restores intimacy, collective identity, and environmental awareness within high-density urban living.",
    heroImage: "/images/02-modern-hanok/01-hero.png",
    thumbnailImage: "/images/02-modern-hanok/01-hero.png",
    heroDescription: "Floor Scale Intervention",
    sections: [
      {
        type: "process",
        title: "Process",
        collapsible: true,
        columnsCount: 2,
        description:
          "Research and exploration of vernacular Korean architecture, including studies on Madang and Daecheong as buffers between public/private and outdoor/indoor, and material studies on Hanji as a sustainable traditional material.",
        images: [
          { src: "/images/02-modern-hanok/02-process-1.png", fullBleed: false },
          { src: "/images/02-modern-hanok/03-process-2.png", fullBleed: false },
          { src: "/images/02-modern-hanok/04-process-3.jpg", fullBleed: false },
          { src: "/images/02-modern-hanok/05-process-4.jpg", fullBleed: false },
          { src: "/images/02-modern-hanok/06-process-5.png", fullBleed: false },
          { src: "/images/02-modern-hanok/07-process-6.jpg", fullBleed: false },
        ],
      },
      {
        type: "site",
        title: "Site",
        columnsCount: 1,
        images: [
          {
            src: "/images/02-modern-hanok/08-site-diagram.png",
            description: "More details on process",
            fullBleed: false,
          },
        ],
      },
      {
        type: "strategy",
        title: "Design Strategy Diagram",
        description:
          "Strategic frameworks visualizing how Hanok principles are translated into a contemporary residential typology, addressing both spatial organization and environmental performance.",
        images: [
          { src: "/images/02-modern-hanok/09-strategy-1.jpg", description: "Design Strategy 1", fullBleed: false },
          { src: "/images/02-modern-hanok/10-strategy-2.jpg", description: "Design Strategy 2", fullBleed: false },
        ],
      },
      {
        type: "concept",
        title: "Program",
        description:
          "Programmatic distribution across five tiers of communal scale—from intimate spaces between units to public-facing areas connecting residents and the broader community.",
        images: [
          { src: "/images/02-modern-hanok/11-program-1.jpg", description: "Proposed Program", fullBleed: false },
          { src: "/images/02-modern-hanok/12-program-2.png", description: "Design Approach", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Living",
        columnsCount: 1,
        description:
          "Unit and floor scale interventions creating double-height living spaces with cross-ventilation and in-between flexibility, reinterpreting the Hanok principle of borrowed nature within the dwelling unit.",
        images: [
          { src: "/images/02-modern-hanok/13-living-1.png", description: "Unit Axon 1", fullBleed: false },
          { src: "/images/02-modern-hanok/14-living-2.png", description: "Unit Axon 2", fullBleed: false },
          { src: "/images/02-modern-hanok/15-living-3.png", description: "Floor Axon", fullBleed: false },
          { src: "/images/02-modern-hanok/16-living-4.jpg", fullBleed: false },
          { src: "/images/02-modern-hanok/17-living-5.jpg", fullBleed: false },
          { src: "/images/02-modern-hanok/18-living-6.jpg", fullBleed: false },
          { src: "/images/02-modern-hanok/19-unit-1.png", description: "Unit Material Board", fullBleed: false },
          { src: "/images/02-modern-hanok/20-unit-2.jpg", description: "Unit Render 1", fullBleed: false },
          { src: "/images/02-modern-hanok/21-unit-3.jpg", description: "Unit Render 2", fullBleed: false },
        ],
      },
      {
        type: "renderings",
        title: "Communal",
        columnsCount: 1,
        description:
          "Building-scale interventions creating Urban Daecheong—a contemporary reinterpretation of the traditional Korean transition space—that hosts diverse communal activities while maintaining visual and spatial connections to nature.",
        images: [
          { src: "/images/02-modern-hanok/22-communal-1.png", description: "Ground Floorplan", fullBleed: false },
          { src: "/images/02-modern-hanok/23-communal-2.jpg", fullBleed: false },
          { src: "/images/02-modern-hanok/24-communal-3.png", description: "Material Board", fullBleed: false },
          { src: "/images/02-modern-hanok/25-communal-4.jpg", description: "Modern Daecheong", fullBleed: false },
          { src: "/images/02-modern-hanok/26-communal-5.jpg", description: "Lobby", fullBleed: false },
          { src: "/images/02-modern-hanok/27-communal-6.jpg", description: "Office", fullBleed: false },
          { src: "/images/02-modern-hanok/28-communal-7.jpg", description: "Community Activity & Pop up Events", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Overview",
        description:
          "Overall building organization showing the integration of unit, floor, and building scale interventions into a cohesive residential typology.",
        images: [
          { src: "/images/02-modern-hanok/29-section-perspective.png", caption: "Section Perspective", fullBleed: true },
          { src: "/images/02-modern-hanok/30-exploded-axon.png", caption: "Exploded Axonometric", fullBleed: true },
        ],
      },
      {
        type: "process",
        title: "Precedent Model",
        collapsible: true,
        columnsCount: 1,
        description:
          "Physical models exploring spatial relationships, material qualities, and the translation of vernacular principles into contemporary form.",
        images: [
          { src: "/images/02-modern-hanok/31-precedent-model-1.jpg", fullBleed: false },
          { src: "/images/02-modern-hanok/32-precedent-model-2.jpg", fullBleed: false },
          { src: "/images/02-modern-hanok/33-precedent-model-3.jpg", fullBleed: false },
        ],
      },
    ],
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
    heroDescription: "Overview",
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
          { src: "/images/03-library/04-concept-diagram-1.png", caption: "Programming", fullBleed: false },
          { src: "/images/03-library/05-concept-diagram-2.png", caption: "Consumption Ideation", fullBleed: false },
          { src: "/images/03-library/06-concept-diagram-3.png", caption: "Developed Plan", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Floor Plans",
        images: [
          { src: "/images/03-library/07-floorplan-1.png", caption: "Street Level Plan", fullBleed: false },
          { src: "/images/03-library/08-floorplan-2.png", caption: "Mezzanine Level Plan", fullBleed: false },
        ],
      },
      {
        type: "renderings",
        title: "Renderings",
        columnsCount: 1,
        images: [
          { src: "/images/03-library/12-render-1.png", description: "Production with Vertical Farm and Information Station", fullBleed: false },
          { src: "/images/03-library/13-render-2.png", description: "Use of Production Area", fullBleed: false },
          { src: "/images/03-library/14-render-3.png", description: "Consumption Area with Cooking and Dining", fullBleed: false },
          { src: "/images/03-library/15-render-4.png", description: "Communal Dining", fullBleed: false },
          { src: "/images/03-library/16-render-5.png", description: "Research Area with Gardening Classroom", fullBleed: false },
          { src: "/images/03-library/17-render-6.png", description: "Conventional Reading Area", fullBleed: false },
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
          { src: "/images/04-atlantic-cafe/03-interior-elevation.jpg", caption: "Interior Section", fullBleed: false },
        ],
      },
      {
        type: "details",
        title: "Shop Drawings",
        description:
          "A detailed construction documentation set developed in Revit—translating design intent into the language of the construction field.",
        images: [
          { src: "/images/04-atlantic-cafe/04-shop-drawings-1.jpg", caption: "Bartable Plan", fullBleed: false },
          { src: "/images/04-atlantic-cafe/09-shop-drawings-6.jpg", caption: "Back Bartable Transverse", fullBleed: false },
          { src: "/images/04-atlantic-cafe/05-shop-drawings-2.jpg", caption: "Bartable Elevation", fullBleed: false },
          { src: "/images/04-atlantic-cafe/06-shop-drawings-3.jpg", caption: "Bartable Section", fullBleed: false },
          { src: "/images/04-atlantic-cafe/08-shop-drawings-5.jpg", caption: "Front Bartable Longitudinal", fullBleed: false },
        ],
      },
      {
        type: "details",
        title: "Construction Details",
        description:
          "Floor-to-ceiling details and millwork specifications that resolve the relationship between the existing building envelope and new interior elements.",
        images: [
          { src: "/images/04-atlantic-cafe/07-shop-drawings-4.jpg", caption: "Floor to Ceiling Detail", fullBleed: false },
          { src: "/images/04-atlantic-cafe/10-details-1.jpg", caption: "Front Bartable Detail", fullBleed: false },
          { src: "/images/04-atlantic-cafe/11-details-2.jpg", caption: "Back Bartable Detail", fullBleed: false },
        ],
      },
    ],
    nextSlug: "252-7th-ave",
  },
  {
    slug: "252-7th-ave",
    number: "05",
    title: "252 7th Ave",
    category: "Residential (Internship)",
    location: "252 7th Ave, New York, NY",
    year: "2026",
    status: "In Progress",
    projectType: "Residential",
    shortDescription:
      "A condominium kitchen design exploring circulation, storage maximization, and material expression as part of a full-unit interior project.",
    fullDescription:
      "The project to design a kitchen for a condominium in Manhattan is part of a full-unit-sized interior design project at Studio Jari. Through site visits and meetings with the client, several options are explored that best fit the client's living style. It offers not only a convenient design—such as circulation and maximized storage—but also beauty. As an interior designer, the kitchen has been designated as an individual's task for design development. The process is currently in the construction drawing phase and will be developed further.",
    heroImage: "/images/05-252-7th-ave/01-hero.jpg",
    heroDescription: "Kitchen View",
    thumbnailImage: "/images/05-252-7th-ave/01-hero.jpg",
    sections: [
      {
        type: "concept",
        title: "Concept Collage",
        description:
          "Material and atmosphere studies that align the kitchen design with the client's living style and the unit's broader interior language.",
        images: [
          { src: "/images/05-252-7th-ave/06-concept-collage-1.png", fullBleed: false },
          { src: "/images/05-252-7th-ave/07-concept-collage-2.png", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Floor Plan & Materials",
        description:
          "The plan optimizes circulation and storage within the constraints of a Manhattan condominium, balancing functional efficiency with visual warmth.",
        images: [
          { src: "/images/05-252-7th-ave/02-floorplan.jpg", caption: "Kitchen Floor Plan", fullBleed: false },
          { src: "/images/05-252-7th-ave/03-material-board.png", caption: "Kitchen Material Board", fullBleed: false },
        ],
      },
      {
        type: "details",
        title: "Construction Details",
        description:
          "Self-developed millwork details that translate the kitchen design into buildable specifications.",
        images: [
          { src: "/images/05-252-7th-ave/04-details-1.jpg", caption: "Kitchen Plan", fullBleed: false },
          { src: "/images/05-252-7th-ave/05-details-2.jpg", caption: "Kitchen Interior Elevation", fullBleed: false },
        ],
      },
      {
        type: "plans",
        title: "Powder Room",
        images: [
          { src: "/images/05-252-7th-ave/08-powder-room.png", caption: "Powder Room", fullBleed: true },
          { src: "/images/05-252-7th-ave/09-material-board.png", caption: "Powder Room Material Board", fullBleed: false },
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
