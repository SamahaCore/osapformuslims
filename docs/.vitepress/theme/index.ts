// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
} satisfies Theme;
