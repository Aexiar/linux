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
            port: 6289,
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
            // 创建 markdown-it 插件
            md.use((md) => {
                // =========================================================================
                // 1. AST 级别精准翻译容器标题 (保留您原有的多语言逻辑)
                // =========================================================================
                const defaultRender = md.render;
                md.render = (...args) => {
                    const [content, env] = args;
                    const currentLang = env?.localeIndex || 'root';

                    // 调用原始渲染，拿到生成的 HTML
                    let defaultContent = defaultRender.apply(md, args);

                    // 精准替换 VitePress 容器标题，避免误伤代码和变量
                    const replaceContainerTitle = (html: string, enText: string, translatedText: string) => {
                        // 正则解释：匹配任意标签，只要 class 中包含 custom-block-title，且内部文本完全等于 enText
                        // 例如：精准匹配 <p class="custom-block-title">WARNING</p> 或 <p class="custom-block-title">NOTE</p>
                        const regex = new RegExp(
                            `(<[a-z0-9]+[^>]*\\bclass="[^"]*\\bcustom-block-title\\b[^"]*"[^>]*>)${enText}(<\\/[a-z0-9]+>)`,
                            'g'
                        );
                        return html.replace(regex, `$1${translatedText}$2`);
                    };

                    // 定义多语言映射字典
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
                            defaultContent = replaceContainerTitle(defaultContent, en, typeof translated === "string" ? translated : '');
                        }
                    }

                    return defaultContent;
                };

                // =========================================================================
                // 2. 重写 fence 渲染规则 (利用 AST 注入类名，保障打包与多签切换)
                // =========================================================================
                const defaultFence =
                    md.renderer.rules.fence?.bind(md.renderer.rules) ??
                    ((...args) => args[0][args[1]].content);

                md.renderer.rules.fence = (tokens, idx, options, env, self) => {
                    const token = tokens[idx];
                    const info = token.info.trim();

                    // 识别出我们的自定义块
                    const isMarkdown = info.includes("markdown");
                    const isMdImg = info.includes("md:img");

                    if (isMarkdown || isMdImg) {
                        // 核心修复点 1：通过修改 token.info，强行把 md:img 伪装成正常的 txt 传给 Shiki
                        // 这一步彻底消除了终端里烦人的 "The language 'md:img' is not loaded" 警告
                        if (isMdImg) {
                            token.info = token.info.replace("md:img", "txt");
                        } else {
                            token.info = token.info.replace("markdown", "txt");
                        }

                        // 核心修复点 2：在原生渲染之前，直接把自定义类名塞进 AST 树的 attrs 数组中
                        // 这样原生 defaultFence 跑完出来的 HTML 里，类名就是完美融合的，绝对不会有重复属性！
                        token.attrs = token.attrs || [];
                        const classIdx = token.attrIndex('class');
                        if (classIdx >= 0) {
                            // 如果原本就有 class 属性（比如带有 language-xxx active），在前面追加上我们的标识
                            token.attrs[classIdx][1] = `vp-raw-html-block ${token.attrs[classIdx][1]}`;
                        } else {
                            token.attrs.push(['class', 'vp-raw-html-block']);
                        }

                        // 让原生渲染器跑出完整包裹，它现在完美承载了切换所需要的全部逻辑
                        const originalHtml = defaultFence(tokens, idx, options, env, self);

                        // 渲染出里面真正的富文本内容
                        // 恢复真实的 token.info 用以做内部渲染
                        token.info = info;
                        const renderedHtml = md.render(token.content, env);

                        // 正则提取原生外层 <div> 的所有内容（包含融合后的 class、v-pre、以及内部各种动态 id 等）
                        const openTagMatch = originalHtml.match(/<div[^>]*>/);
                        const openTag = openTagMatch ? openTagMatch[0] : '<div class="vp-raw-html-block">';

                        // 组装返回，内层根据不同类型打上对应的标签样式
                        const innerClass = isMdImg ? "vp-custom-html-content rendered-md" : "vp-custom-html-content";
                        return `${openTag}<div class="${innerClass}">${renderedHtml}</div></div>`;
                    }

                    // 普通代码块原样放行
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
