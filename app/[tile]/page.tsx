import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TILES } from "../tiles";
import { getCategoryContent } from "../content";

export function generateStaticParams() {
  return TILES.map(({ id }) => ({ tile: id }));
}

export default async function TilePage({ params }: PageProps<"/[tile]">) {
  const { tile } = await params;
  const data = TILES.find((t) => t.id === tile);
  if (!data) notFound();

  const { id, name, bg, label, icon, Icon } = data;
  const content = getCategoryContent(id);
  if (!content) notFound();

  const textColor = label === "sr-only" ? "text-white" : label;

  return (
    // The page content fades in after the panel has grown; the panel itself is
    // a named shared element, so it is excluded from this snapshot.
    <ViewTransition enter="page" exit="page" default="none">
      <main className="relative min-h-screen overflow-hidden p-2">
        {/* The tapped tile grows into this card (same flat color, same corners). */}
        <ViewTransition name={`panel-${id}`} share="morph" default="none">
          <div className={`${bg} fixed inset-2 -z-10 rounded-lg`} aria-hidden />
        </ViewTransition>

        <div>
          <div
            className="pointer-events-none fixed inset-2 -z-10 overflow-hidden rounded-lg"
            aria-hidden
          >
            <Icon
              className={`${icon} absolute -bottom-24 -right-24 h-[28rem] w-[28rem] opacity-20`}
            />
          </div>

          <div className={`${textColor} relative mx-auto w-full max-w-7xl`}>
          <Link
            href="/"
            className="mt-2 ml-3 inline-block text-sm font-semibold tracking-tight opacity-70 transition-opacity duration-200 hover:opacity-100"
          >
            ← Volver
          </Link>

          <div className="px-5 py-14 md:px-12 md:py-20">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-7xl">
              {name}
            </h1>

            <div className="mt-8 max-w-4xl space-y-3 text-lg leading-relaxed md:text-xl">
              {content.intro.map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))}
            </div>

            {content.gallery.length > 0 && (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {content.gallery.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/20 shadow-sm"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {content.sections?.map((section) => (
              <section
                key={section.title}
                className="mt-14 max-w-5xl rounded-3xl bg-white/75 p-6 text-ink shadow-sm backdrop-blur-sm md:p-10"
              >
                <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-3 text-base leading-relaxed md:text-lg">
                  {section.lines.map((line, index) => (
                    <p key={`${line}-${index}`}>{line}</p>
                  ))}
                </div>
              </section>
            ))}

            {content.projects.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                  Proyectos
                </h2>
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {content.projects.map((project, index) => (
                    <Link
                      key={project.slug}
                      href={`/${id}/${encodeURIComponent(project.slug)}`}
                      className="group overflow-hidden rounded-2xl bg-white/85 text-ink shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                        <Image
                          src={project.cover.src}
                          alt={project.cover.alt}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                          {project.title}
                        </h3>
                        <span className="mt-3 inline-block text-sm font-semibold opacity-60">
                          Ver proyecto →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
          </div>
        </div>
      </main>
    </ViewTransition>
  );
}
