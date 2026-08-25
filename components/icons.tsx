import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
};

export function IconPlus(props: P) {
  return (
    <svg {...base} {...props}>
      <g stroke="currentColor" strokeWidth="8" strokeLinecap="round">
        <path d="M24 8v32" />
        <path d="M8 24h32" />
      </g>
    </svg>
  );
}

export function IconDots(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="24" r="5" fill="currentColor" />
      <circle cx="24" cy="24" r="5" fill="currentColor" />
      <circle cx="37" cy="24" r="5" fill="currentColor" />
    </svg>
  );
}

export function IconWifi(props: P) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8 20a24 24 0 0 1 32 0"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M14 27a15 15 0 0 1 20 0"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="36" r="4" fill="currentColor" />
    </svg>
  );
}

export function IconMoon(props: P) {
  return (
    <svg {...base} {...props}>
      <g transform="translate(24 24) scale(0.78) translate(-24 -24)">
        <path
          d="M30 5a20 20 0 1 0 12 36A23 23 0 0 1 30 5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function IconLeaf(props: P) {
  return (
    <svg {...base} {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 4.5C37 13.8 40 23.2 40 30.8C40 38.6 33 43.2 24 43.2C15 43.2 8 38.6 8 30.8C8 23.2 11 13.8 24 4.5Z" />
        <path d="M24 43.2V12" />
        <path d="M24 34.5 32 26.5M24 34.5 16 26.5" />
        <path d="M24 26.6 30.4 20.2M24 26.6 17.6 20.2" />
        <path d="M24 19.5 28.8 14.7M24 19.5 19.2 14.7" />
      </g>
    </svg>
  );
}

export function IconX(props: P) {
  return (
    <svg {...base} {...props}>
      <path
        d="M14.3 8.6 24 18.3l9.7-9.7 5.7 5.7L29.7 24l9.7 9.7-5.7 5.7L24 29.7l-9.7 9.7-5.7-5.7L18.3 24 8.6 14.3l5.7-5.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconAsterisk(props: P) {
  return (
    <svg {...base} {...props}>
      <g stroke="currentColor" strokeWidth="6.5" strokeLinecap="round">
        <path d="M24 7v34" />
        <path d="M9.3 15.5l29.4 17" />
        <path d="M38.7 15.5l-29.4 17" />
      </g>
    </svg>
  );
}

export function IconCapsule(props: P) {
  return (
    <svg {...base} {...props}>
      <rect
        x="14"
        y="5"
        width="20"
        height="38"
        rx="10"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        d="M14 24h20v9a10 10 0 0 1-20 0v-9z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconCube(props: P) {
  return (
    <svg {...base} {...props}>
      <path
        d="M9 17.5 24 10l15 7.5v15L24 40 9 32.5v-15z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M9 17.5 24 25l15-7.5M24 25v15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPlay(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M16 9.5 40 24 16 38.5v-29z" fill="currentColor" />
    </svg>
  );
}

export function IconHand(props: P) {
  return (
    <svg {...base} {...props}>
      <path
        d="M17 23V10.5a2.8 2.8 0 1 1 5.6 0V21m0-13a2.8 2.8 0 1 1 5.6 0v13m0-10.5a2.8 2.8 0 1 1 5.6 0V28c0 8-5 13.5-12.5 13.5-5.5 0-8.5-2.8-11.3-7.8l-3.6-7a2.9 2.9 0 0 1 5-2.8l2.6 3.6"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconQuestion(props: P) {
  return (
    <svg {...base} {...props}>
      <path
        d="M15 16.5c.5-6 4.5-9.5 9.5-9.5S34 10.5 34 15.5c0 4-2.5 6-5.5 8-2.7 1.8-4 3.5-4 7"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="24.5" cy="39.5" r="3.5" fill="currentColor" />
    </svg>
  );
}

export type Platform = {
  id: string;
  name: string;
  bg: string;
  fg: string;
  Icon: (props: P) => React.ReactElement;
};

/** The 13 platform tiles from the original accionALO site, in order. */
export const PLATFORMS: Platform[] = [
  { id: "otros", name: "+OTROS", bg: "bg-ochre", fg: "text-white", Icon: IconPlus },
  { id: "progreso", name: "En progreso", bg: "bg-magenta", fg: "text-white", Icon: IconDots },
  { id: "accionline", name: "acciONLINE", bg: "bg-sky", fg: "text-white", Icon: IconWifi },
  { id: "museos", name: "Noche de los Museos", bg: "bg-indigo", fg: "text-white", Icon: IconMoon },
  { id: "nosotros", name: "X Nosotros", bg: "bg-lime", fg: "text-white", Icon: IconLeaf },
  { id: "xotros", name: "X OTROS", bg: "bg-coral", fg: "text-white", Icon: IconX },
  { id: "extension", name: "Extensión", bg: "bg-pink", fg: "text-white", Icon: IconAsterisk },
  { id: "capsularte", name: "cápsulARTE", bg: "bg-teal", fg: "text-white", Icon: IconCapsule },
  { id: "privado", name: "Espacio Privado", bg: "bg-bone", fg: "text-orange", Icon: IconCube },
  { id: "publico", name: "Espacio Público", bg: "bg-orange", fg: "text-white", Icon: IconCube },
  { id: "jugarte", name: "JugARTE", bg: "bg-purple", fg: "text-white", Icon: IconPlay },
  { id: "objetobra", name: "objetOBRA", bg: "bg-mint", fg: "text-white", Icon: IconHand },
  { id: "quienes", name: "Quiénes y qué?", bg: "bg-acid", fg: "text-white", Icon: IconQuestion },
];
