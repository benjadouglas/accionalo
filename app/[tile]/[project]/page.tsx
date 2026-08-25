import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectParams, getProjectContent } from "../../content";
import { TILES } from "../../tiles";

export function generateStaticParams() {
  return getAllProjectParams();
}

export default async function ProjectPage({
  params,
}: PageProps<"/[tile]/[project]">) {
  const { tile, project: projectSlug } = await params;
  const tileData = TILES.find(({ id }) => id === tile);
  const project = getProjectContent(tile, projectSlug);

  if (!tileData || !project) notFound();

  const { bg, label, icon, Icon, name } = tileData;
  const textColor = label === "sr-only" ? "text-white" : label;

  return (
    <main className={`${bg} relative min-h-screen overflow-hidden p-2`}>
      <Icon
        className={`${icon} pointer-events-none fixed -bottom-28 -right-28 h-[30rem] w-[30rem] opacity-15`}
        aria-hidden
      />

      <div className={`${textColor} relative mx-auto w-full max-w-6xl`}>
        <Link
          href={`/${tile}`}
          className="mt-2 ml-3 inline-block text-sm font-semibold tracking-tight opacity-70 transition-opacity hover:opacity-100"
        >
          ← {name}
        </Link>

        <article className="px-5 py-14 md:px-12 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] opacity-60">
            Proyecto
          </p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <div className="mt-10 rounded-3xl bg-white/80 p-6 text-ink shadow-sm backdrop-blur-sm md:p-10">
            <div className="mx-auto max-w-4xl space-y-3 text-base leading-relaxed md:text-lg">
              {project.lines.map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))}
            </div>
          </div>

          {project.images.length > 0 && (
            <section className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.images.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className={`relative overflow-hidden rounded-2xl bg-white/20 shadow-sm ${
                    index === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes={index === 0 ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
                    className="object-cover"
                  />
                </div>
              ))}
            </section>
          )}
        </article>
      </div>
    </main>
  );
}
