import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "文档",
    icon: "book",
    prefix: "/zh/docs/",
    children: [
      {
        text: "GameShell",
        icon: "gamepad",
        prefix: "gameshell/",
        children: [
          { text: "屏幕", icon: "screen", link: "screen" },
          { text: "摇杆", icon: "joypad", link: "joypad" },
        ],
      },
    ],
  },
]);
