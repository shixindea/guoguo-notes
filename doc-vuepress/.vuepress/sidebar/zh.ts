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
    '/vue笔记及周边生态/': [
        {
            text: 'vue笔记及周边生态',
            //可折叠侧边栏
            collapsible: false,
            children: await listFiles('doc-vuepress/vue笔记及周边生态')   //[ {text: '网站配色', link: '网站配色' }]
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
    // '/袁果锅生态/': [
    //     {
    //         text: '袁果锅生态',
    //         //可折叠侧边栏
    //         collapsible: false,
    //         children: await listFiles('doc-vuepress/袁果锅生态')   //[ {text: '网站配色', link: '网站配色' }]
    //     }
    // ],

    '/袁果锅生态/团队协作及规范/': [
        {
            text: '团队协作及规范',
            //可折叠侧边栏
            collapsible: false,
            children: await listFiles('doc-vuepress/袁果锅生态/团队协作及规范')   //[ {text: '网站配色', link: '网站配色' }]
        }
    ],
    '/袁果锅生态/项目框架及架构/': [
        {
            text: '项目框架及架构',
            //可折叠侧边栏
            collapsible: false,
            children: await listFiles('doc-vuepress/袁果锅生态/项目框架及架构')   //[ {text: '网站配色', link: '网站配色' }]
        }
    ],
}
