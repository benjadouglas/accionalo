import { ViewTransition } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TILES } from "../tiles";
import { TILE_CONTENT } from "./content";

export function generateStaticParams() {
  return TILES.map(({ id }) => ({ tile: id }));
}

export default async function TilePage({ params }: PageProps<"/[tile]">) {
  const { tile } = await params;
  const data = TILES.find((t) => t.id === tile);
  if (!data) notFound();

  const { id, name, bg, label, icon, Icon } = data;

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden p-2">
      <ViewTransition name={`tile-${id}`} share="morph" default="none">
        <div className={`${bg} pointer-events-none absolute inset-0`} aria-hidden />
      </ViewTransition>

      <ViewTransition enter="tile-copy" exit="tile-copy" default="none">
        <div
          className={`${label === "sr-only" ? "text-white" : label} relative flex flex-1 flex-col`}
        >
          <Icon
            className={`${icon} pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] opacity-40`}
            aria-hidden
          />

          <Link
            href="/"
            className="mt-2 ml-3 self-start text-sm font-semibold tracking-tight opacity-70 transition-opacity duration-200 hover:opacity-100"
          >
            ← Volver
          </Link>

          <div className="flex flex-1 flex-col justify-center px-5 py-16 md:px-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {name}
            </h1>
            {TILE_CONTENT[id] ?? (
              <p className="mt-4 max-w-prose text-lg opacity-80">
                Contenido próximamente.
              </p>
            )}
          </div>
        </div>
      </ViewTransition>
    </main>
  );
}
