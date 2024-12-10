import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { notes } from "./notes/index";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "/logo.png",

  appearance: true,

  profile: {
    avatar: "https://theme-plume.vuejs.press/plume.png",
    name: "My Vuepress Site",
    description: ""
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [{ icon: "github", link: "/" }]
});
