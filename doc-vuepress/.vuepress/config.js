import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { zhNavbar, enNavbar, } from './navbar/switch.js'
import { zhSidebar, enSidebar, } from './sidebar/switch.js'
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
    "title": "Guoguo-notes",
    "description": "袁果锅笔记",
    port: '6688', //端口号
    "dest": "docs",
    base: "/guoguo-notes/",
    head: [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
    ],
    lang: 'zh-CN',
    // locales: {
    //     '/': {
    //         selectLanguageName: '简体中文',
    //         title: 'Guoguo-notes',
    //         description: '繁星似海 熠熠生辉',
    //     },
    //     '/en/': {
    //         selectLanguageName: 'English',
    //         title: 'Guoguo-notes',
    //         description: 'my book',
    //     },
    // },

    bundler: viteBundler(),
    theme: defaultTheme({
        // 以下所有配置写在这里！！！
        locales: {
            '/': {
                repo: 'https://github.com/shixindea/shixinde-notes',
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                navbar: zhNavbar,
                sidebar: zhSidebar,
                sidebarDepth: 2,
                notFound: ['没找到', '网页走丢了'],
                backToHome: '返回首页',

            },
            '/en/': {
                repo: 'https://github.com/shixindea/shixinde-notes',
                selectLanguageName: 'English',
                selectLanguageText: 'Language',
                navbar: enNavbar,
                sidebar: zhSidebar,
                encrypt: {
                    config: {
                        // 这会加密整个 guide 目录，并且两个密码都是可用的
                        "/袁果锅生态/": ["1234", "5678"],
                        // 这只会加密 /config/page.html
                        "/常用笔记/插件库.html": "1234",
                    },
                },


            }
        },


    }),
    plugins: [
        searchProPlugin({
            hotReload: true,
            indexContent: true,
            queryHistoryCount: 5,
            resultHistoryCount: 5,
        }),
        [
            'posts-encrypt',
            {
                route: '/auth',
                passwd: '123456',
                encryptInDev: true,
                expires: 1000 * 60
            }
        ]

    ],
})