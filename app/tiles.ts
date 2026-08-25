import type { SVGProps } from "react";
import {
  IconAsterisk,
  IconCapsule,
  IconCube,
  IconLeaf,
  IconMoon,
  IconPlus,
  IconWifi,
  IconPlay,
  IconX,
} from "@/components/icons";

export type Tile = {
  id: string;
  name: string;
  /** Tailwind class placing the tile on the 24x11 grid (md and up) */
  area: string;
  bg: string;
  label: string;
  icon: string;
  /** where the icon sits inside the tile, mirroring the reference layout */
  iconPos: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
};

/**
 * Full-viewport mosaic. Grid: 24 columns x 11 rows.
 * Column bands: 1-4 | 5-12 | 13-19 | 20-24, with the small tile
 * tucked between the two center columns, like the reference.
 */
export const TILES: Tile[] = [
  {
    id: "museos",
    name: "Noche de los Museos",
    area: "md:[grid-area:1/1/7/5]",
    bg: "bg-indigo",
    label: "text-sky/90",
    icon: "text-sky/70",
    iconPos:
      "bottom-5 left-1/2 h-auto w-[min(11rem,calc(100%-1.75rem))] origin-bottom aspect-square -translate-x-1/2",
    Icon: IconMoon,
  },
  {
    id: "nosotros",
    name: "X Nosotros",
    area: "md:[grid-area:7/1/12/5]",
    bg: "bg-lime",
    label: "text-[#1d5c2a]",
    icon: "text-[#1d5c2a]",
    iconPos:
      "bottom-5 left-1/2 h-auto w-[min(11rem,calc(100%-1.75rem))] origin-bottom aspect-square -translate-x-1/2",
    Icon: IconLeaf,
  },
  {
    id: "otros",
    name: "+ Otros",
    area: "md:[grid-area:1/5/6/13]",
    bg: "bg-ochre",
    label: "text-[#6b4a08]",
    icon: "text-[#6b4a08]",
    iconPos: "left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-[40%]",
    Icon: IconPlus,
  },
  {
    id: "publico",
    name: "Espacio Público",
    area: "md:[grid-area:6/5/12/11]",
    bg: "bg-orange",
    label: "text-[#78400c]",
    icon: "text-[#78400c]",
    iconPos: "bottom-4 left-1/2 h-56 w-56 -translate-x-1/2",
    Icon: IconCube,
  },
  {
    id: "xotros",
    name: "X Otros",
    area: "md:[grid-area:6/11/7/13]",
    bg: "bg-coral",
    label: "sr-only",
    icon: "text-white",
    iconPos: "left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2",
    Icon: IconX,
  },
  {
    id: "accionline",
    name: "acciONLINE",
    area: "md:[grid-area:1/13/7/20]",
    bg: "bg-sky",
    label: "text-[#0b4a6e]",
    icon: "text-[#0b4a6e]",
    iconPos: "bottom-4 right-4 h-56 w-56",
    Icon: IconWifi,
  },
  {
    id: "capsularte",
    name: "CAPSULarte",
    area: "md:[grid-area:7/11/12/20]",
    bg: "bg-teal",
    label: "text-[#0c4f4a]",
    icon: "text-[#0c4f4a]",
    iconPos: "bottom-3 left-1/2 h-56 w-56 -translate-x-1/2",
    Icon: IconCapsule,
  },
  {
    id: "jugarte",
    name: "JugARTE",
    area: "md:[grid-area:1/20/6/25]",
    bg: "bg-purple",
    label: "text-[#3f0b57]",
    icon: "text-[#3f0b57]",
    iconPos: "bottom-3 left-1/2 h-52 w-52 -translate-x-1/2",
    Icon: IconPlay,
  },
  {
    id: "extension",
    name: "Extensión",
    area: "md:[grid-area:6/20/12/25]",
    bg: "bg-pink",
    label: "text-[#5e0a34]",
    icon: "text-[#5e0a34]",
    iconPos: "bottom-3 left-1/2 h-52 w-52 -translate-x-1/2",
    Icon: IconAsterisk,
  },
];
