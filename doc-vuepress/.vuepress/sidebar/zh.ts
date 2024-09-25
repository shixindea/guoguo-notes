import { listFiles } from './utils'

export const zhSidebar = {
    '/常用笔记/': [
        {
            text: '常用笔记',
            //可折叠侧边栏
            collapsible: false,
            children: await listFiles('doc-vuepress/常用笔记')   //[ {text: '网站配色', link: '网站配色' }]
        }
    ],
    '/飞码篇/': [
        {
            text: '飞码篇',
            //可折叠侧边栏
            collapsible: false,
            children: await listFiles('doc-vuepress/飞码篇')   //[ {text: '网站配色', link: '网站配色' }]
        }
    ],
    '/Java/': [
        {
            text: 'Java',
            //可折叠侧边栏
            collapsible: false,
            children: await listFiles('doc-vuepress/Java')   //[ {text: '网站配色', link: '网站配色' }]
        }
    ],
    '/React笔记/': [
        {
            text: 'React笔记',
            //可折叠侧边栏
            collapsible: false,
            children: await listFiles('doc-vuepress/React笔记')   //[ {text: '网站配色', link: '网站配色' }]
        }
    ],
}
