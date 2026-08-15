import type { HeadConfig } from "vitepress";
import { VITE_BASE_URL } from "./context";

export const head: HeadConfig[] = [
    ["link", { rel: "shortcut icon", href: `${VITE_BASE_URL}logo.svg` }],
    ["link", { rel: "icon", href: `${VITE_BASE_URL}logo.svg`, type: "image/svg+xml" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap",
        rel: "stylesheet",
    }],
    ["meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no",
    }],
    ["meta", {
        name: "keywords",
        content: "许大仙、Java、C、C++、大数据、前端、云原生、Go、Python",
    }],
    ["meta", { charset: "UTF-8" }],
];

export const siteConfig = {
    rewrites: { "zh/:rest*": ":rest*" },
    metaChunk: true,
    lang: "zh-CN",
    title: "为知笔记",
    titleTemplate: "Hi，终于等到你",
    description: "许大仙、前端、Java、大数据、云原生",
    head,
    appearance: true,
    base: VITE_BASE_URL,
    lastUpdated: true,
    sitemap: { hostname: `https://linux.weiweixu.cn${VITE_BASE_URL}` },
};

