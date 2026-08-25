<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cómo trabajar en este repo (Accionalo)

Este proyecto es para que la mamá del dueño trabaje en el contenido y la app. Ella **no es técnica**: no usa Git, GitHub, ramas, pull requests, Vercel, ni Cloud Agents.

Cuando dice que arrances o empiezes o comienzes, lo que quiere decir es que corras el proyecto en un dev server o en algun lado (antes verifica si ya esta corriendo, no lo arranques de nuevo) y se lo muestres, si tienes un integrated browser usa eso, sino pasale el link de la pagina (accionalo.vercel.dev) para que vea los cambios que vas haciendo

## Responsabilidad del agente

Vos (el agente de Cursor) sos responsable de **todo** el flujo técnico. Ella solo describe lo que quiere. Nunca le pidas que:

- cree o cambie de rama
- haga commit, push, pull o merge
- abra, revise o mergee un pull request
- despliegue en Vercel
- resuelva conflictos de git
- use la terminal para git

Hacelo vos: `git add`, `git commit`, `git push`, resolver conflictos, y lo que haga falta para que el cambio quede publicado.

## Rama: todo a `master` por ahora

Hasta que ella se acostumbre a Cursor, **no uses ramas de feature ni pull requests**.

- La rama principal de este repo es `master` (equivalente a “main”).
- Trabajá **directamente en `master`**.
- Commité y hacé **push a `origin/master`** cuando el trabajo esté listo.
- No crees ramas `cursor/...`, no abras PRs, no pidas review.
- No dejes cambios solo en el entorno local: si el trabajo está hecho, tiene que quedar en `master` remoto.

Cuando más adelante tenga sentido usar ramas y PRs, se actualizará esta sección. Hasta entonces, **un solo trunk: `master`**.
