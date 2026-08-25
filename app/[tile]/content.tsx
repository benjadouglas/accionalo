import type { ReactElement } from "react";

/** Per-tile page content, keyed by tile id. Tiles without an entry show a placeholder. */
export const TILE_CONTENT: Record<string, ReactElement> = {
  capsularte: (
    <div className="mt-6 max-w-prose space-y-8 text-lg">
      <p className="text-xl font-semibold tracking-tight md:text-2xl">
        Generamos múltiples vivencias relacionadas al arte en un cruce de
        métodos tradicionales con nuevas tecnologías en pos de desarrollar la
        creatividad.
      </p>

      <blockquote className="opacity-80">
        “El pensamiento creativo consiste en la formación de nuevas
        combinaciones de elementos asociativos. Cuanto más remotas son dichas
        combinaciones más creativo es el proceso o la solución” Mednick (1964)
      </blockquote>
    </div>
  ),
};
