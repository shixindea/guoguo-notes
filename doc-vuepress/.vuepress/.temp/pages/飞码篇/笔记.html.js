import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/飞码篇/笔记.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%9E%E7%A0%81%E7%AF%87/%E7%AC%94%E8%AE%B0.html\",\"title\":\"笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"笔记\",\"date\":\"2023-09-05T00:00:00.000Z\",\"tags\":[\"笔记\"],\"categories\":[\"飞码篇\"]},\"headers\":[{\"level\":2,\"title\":\"1. 利用:style写多个多元表达式\",\"slug\":\"_1-利用-style写多个多元表达式\",\"link\":\"#_1-利用-style写多个多元表达式\",\"children\":[]},{\"level\":2,\"title\":\"商品列表的单选和全选的实现[多选框]\",\"slug\":\"商品列表的单选和全选的实现-多选框\",\"link\":\"#商品列表的单选和全选的实现-多选框\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"飞码篇/笔记.md\",\"excerpt\":\"\\n<h2>1. 利用<code>:style</code>写多个多元表达式</h2>\\n<blockquote>\\n<p>两个条件的多元表达式</p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token operator\\\">&lt;</span>view <span class=\\\"token keyword\\\">class</span><span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"card-left\\\"</span> <span class=\\\"token operator\\\">:</span>style<span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"index ===1?'background-color:#3cb7ff;':''\\\"</span><span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token operator\\\">&lt;</span>view<span class=\\\"token operator\\\">&gt;</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
