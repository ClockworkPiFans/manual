import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "文档",
    icon: "material-symbols:menu-book",
    prefix: "/zh/docs/",
    children: [
      {
        text: "GameShell 扩展",
        icon: "gamepad",
        prefix: "gameshell-ext/",
        children: [
          { text: "屏幕", icon: "material-symbols:privacy-screen", link: "screen" },
          { text: "摇杆", icon: "bi:joystick", link: "joypad" },
        ],
      },
    ],
  },
]);
