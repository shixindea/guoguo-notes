import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/Vue3 .html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Vue3%20.html\",\"title\":\"Vue3 笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Vue3 笔记\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"Vue3.0\",\"笔记\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"toRaw 和 markRaw（取消响应式）\",\"slug\":\"toraw-和-markraw-取消响应式\",\"link\":\"#toraw-和-markraw-取消响应式\",\"children\":[]},{\"level\":2,\"title\":\"provide() 和 inject()\",\"slug\":\"provide-和-inject\",\"link\":\"#provide-和-inject\",\"children\":[]},{\"level\":2,\"title\":\"watch监听函数\",\"slug\":\"watch监听函数\",\"link\":\"#watch监听函数\",\"children\":[]},{\"level\":2,\"title\":\"路由跳转\",\"slug\":\"路由跳转\",\"link\":\"#路由跳转\",\"children\":[]},{\"level\":2,\"title\":\"值存入缓存\",\"slug\":\"值存入缓存\",\"link\":\"#值存入缓存\",\"children\":[]},{\"level\":2,\"title\":\"TS报错 绑定元素“id”隐式具有“any”类型\",\"slug\":\"ts报错-绑定元素-id-隐式具有-any-类型\",\"link\":\"#ts报错-绑定元素-id-隐式具有-any-类型\",\"children\":[]},{\"level\":2,\"title\":\"TS报错 类型“never”上不存在属性“name”\",\"slug\":\"ts报错-类型-never-上不存在属性-name\",\"link\":\"#ts报错-类型-never-上不存在属性-name\",\"children\":[]},{\"level\":2,\"title\":\"TS报错 类型“any”的参数不能赋给类型“never”的参数\",\"slug\":\"ts报错-类型-any-的参数不能赋给类型-never-的参数\",\"link\":\"#ts报错-类型-any-的参数不能赋给类型-never-的参数\",\"children\":[]},{\"level\":2,\"title\":\"勾起整个页面刷新\",\"slug\":\"勾起整个页面刷新\",\"link\":\"#勾起整个页面刷新\",\"children\":[]},{\"level\":2,\"title\":\"使用命令跳转链接 （本窗口、新窗口）\",\"slug\":\"使用命令跳转链接-本窗口、新窗口\",\"link\":\"#使用命令跳转链接-本窗口、新窗口\",\"children\":[]},{\"level\":2,\"title\":\"setup 语法 script 中写name\",\"slug\":\"setup-语法-script-中写name\",\"link\":\"#setup-语法-script-中写name\",\"children\":[]},{\"level\":2,\"title\":\"props 中使用枚举 | props 中强调是否必传\",\"slug\":\"props-中使用枚举-props-中强调是否必传\",\"link\":\"#props-中使用枚举-props-中强调是否必传\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/Vue3 .md\",\"excerpt\":\"<p><a href=\\\"https://juejin.cn/post/7041038709906472974\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Vue3.2的setup语法糖和Hook函数 (强烈推荐) - 掘金 (juejin.cn)</a></p>\\n<h2>toRaw 和 markRaw（取消响应式）</h2>\\n<p>●toRaw:\\n。作用:将一个由reactive生成的响应式对象转为普通对象。\\nD使用场景:用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。\\n●markRaw:\\n。作用:标记一个对象，使其永远不会再成为响应式对象。\\n。应用场景:\\n1.有些值不应被设置为响应式的，例如复杂的第三方类库等。\\n2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
