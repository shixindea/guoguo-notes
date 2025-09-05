export const zhNavbar = [
    //单层
    {
        text: '主页',
        link: '/',
        // 该元素将一直处于激活状态
        // activeMatch: '/',
    },
    {
        text: '常用笔记',
        link: '/常用笔记/网站配色'
    },
    {
        text: 'vue笔记及周边生态',
        link: '/vue笔记及周边生态/Vue 笔记.md'
       

    },
    {
        text: '袁果锅生态',
        // link: '/袁果锅生态/[重要]框架配置相关 - 初始化项目约束.md'
          children:
            [
                {
                    text: '团队协作及规范',
                    link: '袁果锅生态/团队协作及规范/[命名] 开发期间的命名规范.md'
                },
                {
                    text: '项目框架及架构',
                    link: '/袁果锅生态/项目框架及架构/[重要]框架配置相关 - 初始化项目约束.md'
                }
            ]
    },
    //两层嵌套
    {
        text: '个人笔记',
        children:
            [
         
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
          
               
            ],
    },
    
]
