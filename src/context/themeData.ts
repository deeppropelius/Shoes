import redModelUrl from "../assets/model/red-shoes.glb";
import blueModelUrl from "../assets/model/blue-shoes.glb";
import greenModelUrl from "../assets/model/green-shoes.glb";
import purpleModelUrl from "../assets/model/purple-shoes.glb";

export type ThemeColor = "red" | "blue" | "green" | "purple";
export type ThemeMode = "light" | "dark";

export interface ThemeConfig {
  id: ThemeColor;
  name: string;
  code: string;
  edition: string;
  color: string;
  lightAccent: string;
  darkAccent: string;
  shadow: string;
  modelUrl: string;
}

export const THEMES: Record<ThemeColor, ThemeConfig> = {
  red: {
    id: "red",
    name: "Crimson Royale",
    code: "#AE1125",
    edition: "EDITION 01 / HAUTE ROUGE",
    color: "#AE1125",
    lightAccent: "#9B0E23",
    darkAccent: "#E62B46",
    shadow: "#4A0711",
    modelUrl: redModelUrl,
  },
  blue: {
    id: "blue",
    name: "Monaco Azure",
    code: "#1162AE",
    edition: "EDITION 02 / BLEU DE MONACO",
    color: "#1162AE",
    lightAccent: "#0D4E8F",
    darkAccent: "#389BFF",
    shadow: "#0B2853",
    modelUrl: blueModelUrl,
  },
  green: {
    id: "green",
    name: "Jade Couture",
    code: "#2AAE11",
    edition: "EDITION 03 / JADE IMPÉRIAL",
    color: "#2AAE11",
    lightAccent: "#187A34",
    darkAccent: "#38E06A",
    shadow: "#0E3B1C",
    modelUrl: greenModelUrl,
  },
  purple: {
    id: "purple",
    name: "Imperial Amethyst",
    code: "#9A11AE",
    edition: "EDITION 04 / VIOLETTE ROYALE",
    color: "#9A11AE",
    lightAccent: "#7B1291",
    darkAccent: "#D441F5",
    shadow: "#380B42",
    modelUrl: purpleModelUrl,
  },
};
