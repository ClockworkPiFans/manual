import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Docs",
    icon: "book",
    prefix: "/docs/",
    children: [
      {
        text: "GameShell",
        icon: "gamepad",
        prefix: "gameshell/",
        children: [
          { text: "Screen", icon: "screen", link: "screen" },
          { text: "Joypad", icon: "joypad", link: "joypad" },
        ],
      },
    ],
  },
]);
