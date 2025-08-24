import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/组件封装/Editor/Editor.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/Editor/Editor.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1755344722000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"组件封装/Editor/Editor.md\",\"excerpt\":\"<blockquote>\\n<p>使用</p>\\n</blockquote>\\n<div class=\\\"language-vue\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"line\\\"> <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Editor</span> <span class=\\\"token attr-name\\\">height</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>300px<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">v-model</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>formData.content<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
