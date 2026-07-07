import {defineConfig} from "vitepress";
import timeline from "vitepress-markdown-timeline";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
    localIconLoader,
} from "vitepress-plugin-group-icons";
import {figure} from "@mdit/plugin-figure";
import {loadEnv} from "vite";
import Permalink from "vitepress-plugin-permalink";
import {InlineLinkPreviewElementTransform} from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import terser from "@rollup/plugin-terser";
import {vitepressDemoPlugin} from "vitepress-demo-plugin";
// @ts-ignore
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import path, {resolve} from "path";
import {VitePressSidebarOptions} from "vitepress-sidebar/types";
import {withSidebar} from "vitepress-sidebar";
import {vitepressPluginLegend} from "vitepress-plugin-legend";
import multimdTable from "markdown-it-multimd-table";
import {qrcode} from "vite-plugin-qrcode";
import {ImagePreviewPlugin} from "vitepress-plugin-image-preview";
import {RSSOptions, RssPlugin} from "vitepress-plugin-rss";
import dayjs from "dayjs";
import {
    containerPreview,
    componentPreview,
} from "@vitepress-demo-preview/plugin";
import {AnnouncementPlugin} from 'vitepress-plugin-announcement'
import {customIcon} from "../theme/utils/customIcon";

const mode = process.env.NODE_ENV || "development";
const {VITE_BASE_URL} = loadEnv(mode, process.cwd());
console.log("Mode:", process.env.NODE_ENV);
console.log("VITE_BASE_URL:", VITE_BASE_URL);

const RSS: RSSOptions = {
    title: "为知笔记",
    baseUrl: "https://linux.weiweixu.cn/",
    copyright: `Copyright © ${dayjs().format("YYYY")} 许大仙`,
};

const alias = {
    "@": resolve(__dirname, "../../public/demo"),
};

const vitePressOptions = defineConfig({
    rewrites: {
        "zh/:rest*": ":rest*",
    },
    metaChunk: true,
    lang: "zh-CN", // 语言
    title: "为知笔记", // 站点名称
    titleTemplate: "Hi，终于等到你", // 网页标题
    description: "许大仙、前端、Java、大数据、云原生", // 站点描述
    head: [
        // favicon.ico 图标等
        ["link", {rel: "shortcut icon", href: `${VITE_BASE_URL || "/"}logo.svg`}],
        // 网站 favicon.ico 图标
        [
            "link",
            {
                rel: "icon",
                href: `${VITE_BASE_URL || "/"}logo.svg`,
                type: "image/svg+xml",
            },
        ],
        // 引入 Google Fonts
        ["link", {rel: "preconnect", href: "https://fonts.googleapis.com"}],
        [
            "link",
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
        ],
        [
            "link",
            {
                href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap",
                rel: "stylesheet",
            },
        ],
        // 网页视口
        [
            "meta",
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no",
            },
        ],
        // 关键词和描述
        [
            "meta",
            {
                name: "keywords",
                content: "许大仙、Java、C、C++、大数据、前端、云原生、Go、Python",
            },
        ],
        ["meta", {charset: "UTF-8"}],
    ],
    appearance: true, // 主题模式，默认浅色且开启切换
    base: VITE_BASE_URL,
    lastUpdated: true, // 上次更新
    vite: {
        resolve: {
            alias,
        },
        build: {
            chunkSizeWarningLimit: 2000,
        },
        ssr: {
            noExternal: [
                "dayjs",
                "@nolebase/vitepress-plugin-enhanced-readabilities",
                "@nolebase/ui",
                "@nolebase/vitepress-plugin-highlight-targeted-heading",
                "@nolebase/vitepress-plugin-inline-link-preview",
            ],
        },
        optimizeDeps: {
            exclude: [
                "@nolebase/vitepress-plugin-enhanced-readabilities/client",
                "vitepress",
                "@nolebase/vitepress-plugin-inline-link-preview/client",
            ],
        },
        plugins: [
            AnnouncementPlugin({
                title: '公告',
                duration: 2,
                mobileMinify: true,
                body: [
                    {type: 'text', content: '👇 文章中 emoji 详解 👇'},
                    {
                        type: 'text',
                        content: '🌱 ➡️ 了解',
                        style: ''
                    },
                    {
                        type: 'text',
                        content: '🔥 ➡️ 熟悉',
                        style: ''
                    },
                    {
                        type: 'text',
                        content: '🎯 ➡️ 掌握',
                        style: ''
                    },
                    {
                        type: 'text',
                        content: '💾 ➡️ 过时',
                        style: ''
                    },
                ],
            }),
            qrcode(),
            ImagePreviewPlugin(),
            terser(),
            //代码组图标
            groupIconVitePlugin({
                customIcon: customIcon
            }) as any,
            Permalink(),
        ],
        server: {
            // port: 12289,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler", // or 'modern'
                },
            },
        },
    },
    sitemap: {
        hostname: `https://linux.weiweixu.cn${VITE_BASE_URL}`,
    },
    markdown: {
        // markdown 配置
        math: true,
        lineNumbers: true, // 行号显示
        image: {
            // 开启图片懒加载
            lazyLoading: true,
        },
        // md 配置
        config: async (md) => {
            /**
             * SSR 兼容性
             * @link https://vitepress.dev/guide/ssr-compat
             * 如果组件不支持 SSR，可以指定 clientOnly 以禁用 SSR。
             */
            md.use(containerPreview, {clientOnly: true, alias});
            md.use(componentPreview, {clientOnly: true, alias});
            md.use(multimdTable, {
                multiline: true, // 启用多行支持
                rowspan: true, // 启用 rowspan
                headerless: true, // 可选：支持无表头表格
                multibody: true, // 可选：支持多 tbody
                autolabel: true, // 可选：自动标签
            });

            vitepressPluginLegend(md, {
                markmap: {
                    showToolbar: true,
                },
                mermaid: {
                    showToolbar: true,
                },
            });
            // 创建 markdown-it 插件
            md.use((md) => {
                const defaultRender = md.render;
                md.render = (...args) => {
                    const [content, env] = args;
                    const currentLang = env?.localeIndex;
                    // 调用原始渲染
                    let defaultContent = defaultRender.apply(md, args);
                    // 精准替换 VitePress 容器标题，避免误伤代码和变量
                    const replaceContainerTitle = (html: any, enText: any, translatedText: any) => {
                        // 正则解释：匹配任意标签，只要 class 中包含 custom-block-title，且内部文本完全等于 enText
                        // 例如：精准匹配 <p class="custom-block-title">WARNING</p>
                        const regex = new RegExp(
                            `(<[a-z0-9]+[^>]*\\bclass="[^"]*\\bcustom-block-title\\b[^"]*"[^>]*>)${enText}(<\\/[a-z0-9]+>)`,
                            'g'
                        );
                        return html.replace(regex, `$1${translatedText}$2`);
                    };

                    // 定义多语言映射字典，方便维护
                    const translations = {
                        root: {
                            NOTE: "提醒", TIP: "建议", IMPORTANT: "重要", WARNING: "警告", CAUTION: "注意"
                        },
                        ko: {
                            NOTE: "알림", TIP: "팁", IMPORTANT: "중요", WARNING: "경고", CAUTION: "주의"
                        }
                    };

                    // 根据当前语言执行精准替换
                    // @ts-ignore
                    const langMap = translations[currentLang];
                    if (langMap) {
                        for (const [en, translated] of Object.entries(langMap)) {
                            defaultContent = replaceContainerTitle(defaultContent, en, translated);
                        }
                    }

                    return defaultContent;
                };

                // 获取原始的 fence 渲染规则
                const defaultFence =
                    md.renderer.rules.fence?.bind(md.renderer.rules) ??
                    ((...args) => args[0][args[1]].content);

                // 重写 fence 渲染规则
                md.renderer.rules.fence = (tokens, idx, options, env, self) => {
                    const token = tokens[idx];
                    const info = token.info.trim();

                    // 判断是否为 md:img 类型的代码块
                    if (info.includes("md:img")) {
                        // 只渲染图片，不再渲染为代码块
                        return `<div class="rendered-md">${md.render(token.content)}</div>`;
                    }

                    // 其他代码块按默认规则渲染（如 java, js 等）
                    return defaultFence(tokens, idx, options, env, self);
                };
            });
            md.use(timeline);
            md.use(groupIconMdPlugin); //代码组图标
            md.use(InlineLinkPreviewElementTransform);
            md.use(figure, {figcaption: "alt", copyAttrs: "^class$", lazy: true});
            md.use(markdownItTaskCheckbox);
            md.use(vitepressDemoPlugin, {
                demoDir: path.resolve(__dirname, "../demos"),
            });
        },
    },
    themeConfig: {
        // 主题设置
        logo: "/logo.svg", // 左上角logo
        //社交链接
        socialLinks: [{icon: "github", link: "https://github.com/Aexiar/linux"}],
        editLink: {
            pattern: "https://github.com/Aexiar/linux/edit/master/docs/:path",
            text: "Edit this page on GitHub",
        },
        externalLinkIcon: true,
        search: {
            provider: "algolia",
            options: {
                appId: "LVMA83X0DG",
                apiKey: "a8cbc88742b5e45d822f3a9607ff5122",
                indexName: "linux-weiweixu",
                locales: {
                    zh: {
                        placeholder: "搜索文档",
                        translations: {
                            button: {
                                buttonText: "搜索文档",
                                buttonAriaLabel: "搜索文档",
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: "清除查询条件",
                                    resetButtonAriaLabel: "清除查询条件",
                                    cancelButtonText: "取消",
                                    cancelButtonAriaLabel: "取消",
                                },
                                startScreen: {
                                    recentSearchesTitle: "搜索历史",
                                    noRecentSearchesText: "没有搜索历史",
                                    saveRecentSearchButtonTitle: "保存至搜索历史",
                                    removeRecentSearchButtonTitle: "从搜索历史中移除",
                                    favoriteSearchesTitle: "收藏",
                                    removeFavoriteSearchButtonTitle: "从收藏中移除",
                                },
                                errorScreen: {
                                    titleText: "无法获取结果",
                                    helpText: "你可能需要检查你的网络连接",
                                },
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                    closeText: "关闭",
                                    searchByText: "搜索提供者",
                                },
                                noResultsScreen: {
                                    noResultsText: "无法找到相关结果",
                                    suggestedQueryText: "你可以尝试查询",
                                    reportMissingResultsText: "你认为该查询应该有结果？",
                                    reportMissingResultsLinkText: "点击反馈",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});

const vitePressSidebarOption:
    | VitePressSidebarOptions
    | VitePressSidebarOptions[] = {
    documentRootPath: "docs",
    debugPrint: true,
    basePath: `${VITE_BASE_URL}`,
    collapsed: true,
    excludeByGlobPattern: ["assets", "public", "index.md", "about"],
    includeDotFiles: true,
    includeRootIndexFile: false,
    includeEmptyFolder: true,
    includeFolderIndexFile: false,
    removePrefixAfterOrdering: true,
    prefixSeparator: /^[0-9]{1,2}[-._]/,
    useFolderLinkFromIndexFile: true,
    useTitleFromFrontmatter: true,
    folderLinkNotIncludesFileName: true,
    keepMarkdownSyntaxFromTitle: true,
    sortMenusOrderNumericallyFromTitle: true,
};

const rootLocale = "zh";
const supportedLocales = [rootLocale, "en"];

const vitePressSidebarOptions = [
    ...supportedLocales.map((lang) => {
        return {
            ...vitePressSidebarOption,
            ...(rootLocale === lang ? {} : {basePath: `/${lang}/`}), // If using `rewrites` option
            documentRootPath: `/docs/${lang}`,
            resolvePath: rootLocale === lang ? "/" : `/${lang}/`,
        };
    }),
];

export const sharedConfig = withSidebar(
    vitePressOptions,
    vitePressSidebarOptions,
);
