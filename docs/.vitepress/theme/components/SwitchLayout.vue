<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <BackTop/>
    </template>
    <template #doc-before>
      <ArticleMetadata/>
    </template>
    <template #doc-after>
      <GiscusComment />
    </template>
    <template #doc-top>
      <NolebaseHighlightTargetedHeading/>
    </template>
    <template #aside-outline-before>
      <ShareButton/>
    </template>
    <template #layout-bottom>
      <SidebarTooltip :onlyEllipsis="true"/>
    </template>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu/>
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu/>
    </template>
    <template #home-features-after>
      <Confetti/>
      <HomeUnderline/>
      <LogoAnimate/>
    </template>
    <template #home-hero-info-after>
      <TypeIt
          strings="云原生是一种基于云计算的架构理念，通过容器、微服务、DevOps 和动态编排技术（如：Kubernetes）构建可扩展、高效和弹性的应用系统。"
          :options="{ speed: 200, breakLines: false }"
          class="hero-typeit"
      />
    </template>
  </DefaultTheme.Layout>
</template>

<script lang="ts" setup>
import BackTop from "./BackTop.vue";
import ArticleMetadata from "./ArticleMetadata.vue";
import GiscusComment from './GiscusComment.vue'
import {useData} from "vitepress";
import DefaultTheme from "vitepress/theme";
import {nextTick, provide} from "vue";
import {ShareButton} from "@theojs/lumen";
import Confetti from "./Confetti.vue";
import TypeIt from "./TypeIt.vue";
import HomeUnderline from "./HomeUnderline.vue";
import LogoAnimate from "./LogoAnimate.vue";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";
import {NolebaseHighlightTargetedHeading} from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";

import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import SidebarTooltip from './SidebarTooltip.vue'

const {isDark, theme} = useData();

console.log('@@@', theme.value)

const enableTransitions = () =>
    "startViewTransition" in document &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({clientX: x, clientY: y}: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
      {clipPath: isDark.value ? clipPath.reverse() : clipPath} ,
      {
        duration: 300,
        easing: "ease-in",
        pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
      } as any
  );
});
</script>

<style>
/* 全局样式调整 Hero 中的 TypeIt 大小 */
.hero-typeit {
  font-size: 1.5rem;
  color: var(--vp-c-text-2);
  margin-top: 1.5rem;
  font-weight: 500;
  display: block;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
