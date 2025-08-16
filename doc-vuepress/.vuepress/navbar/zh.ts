export const zhNavbar = [
    //单层
    {
        text: '主页',
        link: '/',
        // 该元素将一直处于激活状态
        // activeMatch: '/',
    },

    //两层嵌套
    {
        text: '个人笔记',
        children:
            [
                {
                    text: '常用笔记',
                    link: '/常用笔记/网站配色'
                },
                {
                    text: '飞码篇',
                    link: '/飞码篇/Uni-App笔记'
                },
                {
                    text: 'Java',
                    link: '/Java/Java 基础'
                },  {
                    text: 'React笔记',
                    link: '/React笔记/React 笔记'
                },
                {
                    text: '袁果锅生态',
                    link: '/袁果锅生态/[重要]框架 - 初始化项目约束.md'
                },
            ],
    },
    
]
