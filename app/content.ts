import legacyJson from "@/content/legacy.json";

type LegacyImage = {
  alt: string | null;
  src: string | null;
};

type LegacyLink = {
  href: string;
  text: string;
};

type LegacyPage = {
  title: string;
  url: string;
  text: string;
  links?: LegacyLink[];
  images: LegacyImage[];
};

type LegacyData = {
  categories: Record<string, LegacyPage>;
  projects: Record<string, LegacyPage>;
  about: Record<string, LegacyPage>;
};

export type ContentImage = {
  alt: string;
  src: string;
};

export type ProjectContent = {
  slug: string;
  title: string;
  cover: ContentImage;
  lines: string[];
  images: ContentImage[];
};

export type ContentSection = {
  title: string;
  lines: string[];
};

export type CategoryContent = {
  intro: string[];
  projects: ProjectContent[];
  gallery: ContentImage[];
  sections?: ContentSection[];
};

const legacy = legacyJson as LegacyData;

const HIDDEN_LINES = new Set(["Go to link", "Leer +", "sobre el proyecto Leer+"]);

export function cleanText(text: string): string[] {
  return text
    .replaceAll("\u00a0", " ")
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(
      (line) =>
        line.length > 0 &&
        !HIDDEN_LINES.has(line) &&
        !/^\d+\/\d+$/.test(line),
    );
}

function wixOriginalUrl(src: string): string {
  const match = src.match(
    /^(https:\/\/static\.wixstatic\.com\/media\/[^/]+\.(?:avif|gif|jpe?g|png|webp))/i,
  );
  return match?.[1] ?? src;
}

function toImage(image: LegacyImage | undefined, fallback: string): ContentImage {
  return {
    alt: image?.alt?.trim() || fallback,
    src: image?.src ? wixOriginalUrl(image.src) : "/leaf.svg",
  };
}

function uniqueImages(images: LegacyImage[], fallback: string): ContentImage[] {
  const seen = new Set<string>();

  return images.flatMap((image) => {
    if (!image.src) return [];
    const normalized = wixOriginalUrl(image.src);
    if (seen.has(normalized)) return [];
    seen.add(normalized);
    return [{ alt: image.alt?.trim() || fallback, src: normalized }];
  });
}

function projectSlug(url: string): string {
  return decodeURIComponent(new URL(url).pathname.split("/").filter(Boolean).at(-1) ?? "proyecto");
}

function projectFromLegacy(url: string, cover?: LegacyImage): ProjectContent | null {
  const project = legacy.projects[url];
  if (!project) return null;

  const title = project.title.replace(/\s*\|\s*Accionalo\s*$/i, "").trim();
  const images = uniqueImages(project.images, title);

  return {
    slug: projectSlug(url),
    title,
    cover: toImage(cover ?? project.images[0], title),
    lines: cleanText(project.text),
    images,
  };
}

function projectsFor(categoryId: string): ProjectContent[] {
  const category = legacy.categories[categoryId];
  if (!category?.links) return [];

  const seen = new Set<string>();

  return category.links.flatMap((link, index) => {
    if (seen.has(link.href)) return [];
    seen.add(link.href);
    const project = projectFromLegacy(link.href, category.images[index]);
    return project ? [project] : [];
  });
}

function standardCategory(categoryId: string): CategoryContent {
  const category = legacy.categories[categoryId];

  return {
    intro: cleanText(category?.text ?? ""),
    projects: projectsFor(categoryId),
    gallery: category?.links?.length
      ? []
      : uniqueImages(category?.images ?? [], category?.title ?? "accionALO"),
  };
}

const jugarteProjectUrl =
  "https://accionalos4.wixsite.com/accionalo/juego-extr-año";
const jugarteCover = legacy.categories.accionline.images[2];
const jugarteProject = projectFromLegacy(jugarteProjectUrl, jugarteCover);

const nosotros: CategoryContent = {
  intro: cleanText(legacy.about.quienes.text),
  projects: [],
  gallery: uniqueImages(legacy.about.quienes.images, "Equipo accionALO"),
  sections: [
    {
      title: "Equipo",
      lines: cleanText(legacy.about.equipo.text),
    },
    {
      title: "Declaración de artista",
      lines: cleanText(legacy.about.declaracion.text).filter(
        (line) => line !== "Declaración de Artista",
      ),
    },
  ],
};

const jugarte: CategoryContent = {
  intro: [
    "Experiencias lúdicas y colaborativas que invitan a participar, crear y construir con otros.",
  ],
  projects: jugarteProject ? [jugarteProject] : [],
  gallery: [],
};

const otros: CategoryContent = {
  ...standardCategory("otros"),
  intro: [
    "El arte para nosotras es un proceso en equipo de investigación y desarrollo creativo de proyectos junto a otros profesionales donde se diluyen las fronteras entre las diferentes disciplinas.",
  ],
};

const capsularte: CategoryContent = {
  ...standardCategory("capsularte"),
  intro: [
    "Generamos múltiples vivencias relacionadas al arte en un cruce de métodos tradicionales con nuevas tecnologías en pos de desarrollar la creatividad.",
    "“El pensamiento creativo consiste en la formación de nuevas combinaciones de elementos asociativos. Cuanto más remotas son dichas combinaciones más creativo es el proceso o la solución” Mednick (1964)",
  ],
};

const categories: Record<string, CategoryContent> = {
  museos: standardCategory("museos"),
  nosotros,
  otros,
  publico: standardCategory("publico"),
  xotros: standardCategory("xotros"),
  accionline: standardCategory("accionline"),
  capsularte,
  jugarte,
  extension: standardCategory("extension"),
};

export function getCategoryContent(id: string): CategoryContent | undefined {
  return categories[id];
}

export function getProjectContent(
  categoryId: string,
  slug: string,
): ProjectContent | undefined {
  return categories[categoryId]?.projects.find((project) => project.slug === slug);
}

export function getAllProjectParams() {
  return Object.entries(categories).flatMap(([tile, category]) =>
    category.projects.map(({ slug }) => ({ tile, project: slug })),
  );
}
