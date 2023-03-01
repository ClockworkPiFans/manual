import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "book",
      text: "文档",
      prefix: "docs/",
      children: "structure",
      collapsible: true,
    },
  ],
});
