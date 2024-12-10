import { defineNotesConfig } from "vuepress-theme-plume";
import { themeConfig } from "./theme-config";
import { themeGuide } from "./theme-guide";
import { docs } from "./docs";

export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [themeGuide, themeConfig, docs]
});
