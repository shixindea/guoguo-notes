import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/组件封装/分页组件/分页组件.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/%E5%88%86%E9%A1%B5%E7%BB%84%E4%BB%B6/%E5%88%86%E9%A1%B5%E7%BB%84%E4%BB%B6.html\",\"title\":\"基于element-ui的分页组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"基于element-ui的分页组件\",\"date\":\"2023-5-21\",\"tags\":[\"element-ui\",\"组件\",\"封装\"],\"categories\":[\"汇智篇\"]},\"headers\":[{\"level\":2,\"title\":\"main.js全局注册\",\"slug\":\"main-js全局注册\",\"link\":\"#main-js全局注册\",\"children\":[]},{\"level\":2,\"title\":\"页面引用\",\"slug\":\"页面引用\",\"link\":\"#页面引用\",\"children\":[]},{\"level\":2,\"title\":\"data 参数\",\"slug\":\"data-参数\",\"link\":\"#data-参数\",\"children\":[]},{\"level\":2,\"title\":\"组件代码\",\"slug\":\"组件代码\",\"link\":\"#组件代码\",\"children\":[]},{\"level\":2,\"title\":\"scrool-to.js\",\"slug\":\"scrool-to-js\",\"link\":\"#scrool-to-js\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"组件封装/分页组件/分页组件.md\",\"excerpt\":\"<h2>main.js全局注册</h2>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> Pagination <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"@/components/Pagination\\\"</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">Vue<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">component</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'Pagination'</span><span class=\\\"token punctuation\\\">,</span> Pagination<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
