import { ViewTransition } from "react";
import Link from "next/link";
import { TILES } from "./tiles";

export default function Home() {
  return (
    <main className="bg-white p-2 md:h-screen md:overflow-hidden">
      <h1 className="sr-only">accionALO — plataformas de arte</h1>

      <div
        className="grid h-full gap-2 max-md:auto-rows-[9rem] max-md:grid-cols-2 md:grid-cols-[repeat(24,minmax(0,1fr))] md:grid-rows-[repeat(11,minmax(0,1fr))]"
      >
        {TILES.map(({ id, name, area, bg, label, icon, iconPos, Icon }) => (
          <Link
            key={id}
            href={`/${id}`}
            aria-label={name}
            className={`${area} group relative overflow-hidden rounded-lg transition-[filter] duration-300 hover:brightness-105`}
          >
            <ViewTransition name={`tile-${id}`} share="morph" default="none">
              <span
                className={`${bg} absolute inset-0 rounded-lg`}
                aria-hidden
              />
            </ViewTransition>
            <span
              className={`${label} absolute left-5 top-4 origin-top-left text-xl font-semibold tracking-tight transition-transform duration-300 ease-out group-hover:scale-110 md:text-2xl`}
            >
              {name}
            </span>
            <Icon
              className={`${icon} ${iconPos} absolute transition-transform duration-300 ease-out group-hover:scale-110 max-md:!bottom-2 max-md:!left-auto max-md:!right-2 max-md:!top-auto max-md:h-24 max-md:w-24 max-md:translate-x-0 max-md:translate-y-0`}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
