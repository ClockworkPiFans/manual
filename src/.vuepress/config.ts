import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/manual",

  locales: {
    "/": {
      lang: "en-US",
      title: "ClockworkPi-Fans Manual",
      description: "A customized manual for all ClockworkPi-Fans.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "ClockworkPi-Fans 文档",
      description: "为 ClockworkPi-Fans 定制的手册",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
