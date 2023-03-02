import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Docs",
    icon: "material-symbols:menu-book",
    prefix: "/docs/",
    children: [
      {
        text: "GameShell Extension",
        icon: "gamepad",
        prefix: "gameshell-ext/",
        children: [
          { text: "Screen", icon: "material-symbols:privacy-screen", link: "screen" },
          { text: "Joypad", icon: "bi:joystick", link: "joypad" },
        ],
      },
    ],
  },
]);
