import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "book",
      text: "Docs",
      prefix: "docs/",
      children: "structure",
      collapsible: true,
    },
  ],
});
