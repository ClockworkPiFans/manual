import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "material-symbols:menu-book",
      text: "Docs",
      prefix: "docs/",
      children: "structure",
      collapsible: true,
    },
  ],
});
