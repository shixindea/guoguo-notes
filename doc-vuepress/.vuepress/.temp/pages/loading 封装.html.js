import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/loading 封装.html.vue"
const data = JSON.parse("{\"path\":\"/loading%20%E5%B0%81%E8%A3%85.html\",\"title\":\"page-loading\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1725441008000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"loading 封装.md\",\"excerpt\":\"\\n<div class=\\\"language-html\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"html\\\" data-title=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"line\\\"> <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>page-loading</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">     <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>view</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">      \\t内容....</span>\\n<span class=\\\"line\\\">      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>view</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"> <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>page-loading</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
