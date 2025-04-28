// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { Theme } from "vitepress";
import GridLinks from "./components/GridLinks.vue";
import GridLinkItem from "./components/GridLinkItem.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GridLinks', GridLinks);
    app.component('GridLinkItem', GridLinkItem);
  }
} satisfies Theme;
