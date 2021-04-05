const { description } = require("../../package");

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "阿豪的个人博客",
    theme: "reco",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: "",
        editLinks: false,
        docsDir: "",
        editLinkText: "",
        codeTheme: "tomorrow",
        lastUpdated: false,
        type: "blog",
        // 导航栏
        nav: [
            {
                text: "首页",
                icon: "reco-home",
                link: "/",
            },
            // {
            //   text: "标签",
            //   icon: "reco-tag",
            //   link: "/",
            // },
            {
                text: "前端基础",
                icon: "reco-category",
                items: [
                    { text: "HTML&H5", link: "/Frontend/HTML/html" },
                    { text: "CSS&C3", link: "/Frontend/CSS/html" },
                    { text: "javaScript", link: "/Frontend/javaScript/html" },
                    { text: "Es6", link: "/Frontend/Es6/html" },
                    { text: "Promise", link: "/Frontend/Promise/html" },
                    { text: "JQuery", link: "/Frontend/JQuery/html" },
                    { text: "Ajax", link: "/Frontend/Ajax/html" },
                    { text: "Axios", link: "/Frontend/Axios/html" },
                ],
            },
            {
                text: "前端框架",
                icon: "reco-document",
                items: [
                    { text: "Vue", link: "/Frame/Vue/vue" },
                    { text: "React", link: "/Frame/React/react" },
                ],
            },
            // {
            //   text: "前端",
            //   link: "/config/",
            // },
            {
                text: "后端",
                link: "/Backend/",
                // items: [
                //   { text: "nodejs搭配mongoose", link: "/Backend/nodejs/mongoose" },
                //   { text: "React", link: "/Frame/React/react1" },
                // ],
            },
            {
                text: "VuePress",
                link: "https://v1.vuepress.vuejs.org",
            },
        ],
        // 侧边栏
        sidebar: {
            "/Frontend/": [
                {
                    title: "HTML",
                    collapsable: true,
                    children: ["HTML/html"],
                },
                {
                    title: "CSS",
                    collapsable: true,
                    children: ["CSS/html"],
                },
                {
                    title: "javaScript",
                    collapsable: true,
                    children: ["javaScript/html"],
                },
                {
                    title: "ES6",
                    collapsable: true,
                    children: ["ES6/html"],
                },
                {
                    title: "Promise",
                    collapsable: true,
                    children: ["Promise/html"],
                },
                {
                    title: "JQuery",
                    collapsable: true,
                    children: ["JQuery/html"],
                },
                {
                    title: "Ajax",
                    collapsable: true,
                    children: ["Ajax/html"],
                },
                {
                    title: "Axios",
                    collapsable: true,
                    children: ["Axios/html"],
                },
            ],
            "/Frame/Vue/": [
                {
                    title: "VUE",
                    collapsable: true,
                    children: ["vue"],
                },
                {
                    title: "Vue知识点",
                    collapsable: true,
                    children: ["vue2"],
                },
            ],
            "/Frame/React/": [
                {
                    title: "React",
                    collapsable: true,
                    children: ["react"],
                },
                {
                    title: "React2",
                    collapsable: true,
                    children: ["react2"],
                },
                {
                    title: "React3",
                    collapsable: true,
                    children: ["react3"],
                },
            ],
            "/Backend/": [
                {
                    title: "nodejs",
                    collapsable: true,
                    children: ["nodejs/node"],
                },
                {
                    title: "mongoose",
                    collapsable: true,
                    children: [
                        "mongoose/mongoose",
                        "mongoose/mongodb",
                        "mongoose/nomon",
                    ],
                },
                {
                    title: "php",
                    collapsable: true,
                    children: ["php/php"],
                },
            ],
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
