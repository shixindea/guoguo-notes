import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/Element Plus --vue3.0.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Element%20Plus%20--vue3.0.html\",\"title\":\"Element Plus --vue3.0\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Element Plus --vue3.0\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"vue3.0\",\"Element Plus\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"1.解决图标不显示的问题\",\"slug\":\"_1-解决图标不显示的问题\",\"link\":\"#_1-解决图标不显示的问题\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/Element Plus --vue3.0.md\",\"excerpt\":\"<h2>1.解决图标不显示的问题</h2>\\n<blockquote>\\n<p>1.安装这个</p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\">npm install <span class=\\\"token operator\\\">--</span>save @element<span class=\\\"token operator\\\">-</span>plus<span class=\\\"token operator\\\">/</span>icons</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
