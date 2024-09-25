import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/上传组件封装.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%B8%8A%E4%BC%A0%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85.html\",\"title\":\"《page-upload组件》\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]}],\"git\":{\"updatedTime\":1724749559000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"上传组件封装.md\",\"excerpt\":\"\\n<p></p>\\n<h2>使用</h2>\\n<blockquote>\\n<p>html</p>\\n</blockquote>\\n<div class=\\\"language-vue\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>page-upload</span> <span class=\\\"token attr-name\\\">ref</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>pageUpload<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">:maxCount</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>5<span class=\\\"token punctuation\\\">\\\"</span></span>  <span class=\\\"token attr-name\\\">@change</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>onUploadChange<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
