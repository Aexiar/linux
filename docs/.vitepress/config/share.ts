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
import multimdTable from "markdown-it-multimd-table";
import {qrcode} from "vite-plugin-qrcode";
import {ImagePreviewPlugin} from "vitepress-plugin-image-preview";
import {
    containerPreview,
    componentPreview,
} from "@vitepress-demo-preview/plugin";
import {AnnouncementPlugin} from 'vitepress-plugin-announcement'
import {customIcon} from "../theme/utils/customIcon";
import {customMarkdownPlugin} from '../theme/plugins/markdown-it-custom-plugin';
import vitepressPluginLegend from "vitepress-plugin-legend";
import AutoFrontmatter from "vitepress-plugin-auto-frontmatter";
import {randomUUID} from "node:crypto";
import {IndexPermalinkCompat} from "../theme/plugins/Index-permalink-compat-plugin";

const mode = process.env.NODE_ENV || "development";
const {VITE_BASE_URL} = loadEnv(mode, process.cwd());
console.log("Mode:", process.env.NODE_ENV);
console.log("VITE_BASE_URL:", VITE_BASE_URL);
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
            /* 自动生成 frontmatter */
            AutoFrontmatter({
                pattern: "**/*.md", // 扫描的规则
                // include: {}, // 包含 xxx: xxx 的 MD 文件，支持多个配置，如：include: { tag: true }
                // exclude: {}, // 排除 xxx: xxx 的 MD 文件，支持多个配置，如：exclude: { tag: true }
                transform: frontmatter => {
                    console.log("========== AutoFrontmatter ==========");
                    console.log(frontmatter);
                    // 如果文件本身存在了 permalink，则不生成
                    if (frontmatter.permalink) {
                        return;
                    }
                    const transformResult = {
                        ...frontmatter,
                        permalink: `/pages/${(
                            Math.random() + Math.random()
                        )
                            .toString(16)
                            .slice(2, 8)}`,
                    };

                    return Object.keys(transformResult).length
                        ? transformResult
                        : undefined;
                },
                // recoverTransform: false
            }),
            /* 公告 */
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
            // 一定放 Permalink 后面
            IndexPermalinkCompat()
        ],
        server: {
            port: 5173,
            strictPort: false
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
            // 注册抽取出来的插件
            md.use(customMarkdownPlugin);
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
        socialLinks: [
            {icon: "github", link: "https://github.com/Aexiar/linux"},
            {
                icon: {
                    svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
                },
                link: 'https://weixin.qq.com/',
                ariaLabel: 'wechat'
            }
        ],
        editLink: {
            pattern: "https://github.com/Aexiar/linux/edit/master/docs/:path",
            text: "Edit this page on GitHub",
        },
        externalLinkIcon: true,
        search: {
            provider: "algolia",
            options: {
                appId: "5BL5JALOP3",
                apiKey: "acc8640fabedd02c8d094b501ac9af38",
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
    useFolderLinkFromIndexFile: true,
    // Sidebar 标题直接来自文件名
    useTitleFromFrontmatter: false,
    // 排序完成后隐藏文件名前面的序号
    removePrefixAfterOrdering: true,
    prefixSeparator: /^[0-9]{1,2}[-._]/,
    keepMarkdownSyntaxFromTitle: true,
    // 使用实际文件路径进行数字排序
    sortMenusOrderNumericallyFromTitle: true,
    folderLinkNotIncludesFileName: true,
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
