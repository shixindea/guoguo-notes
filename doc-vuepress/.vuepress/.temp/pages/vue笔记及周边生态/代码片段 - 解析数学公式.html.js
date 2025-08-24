import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/vue笔记及周边生态/代码片段 - 解析数学公式.html.vue"
const data = JSON.parse("{\"path\":\"/vue%E7%AC%94%E8%AE%B0%E5%8F%8A%E5%91%A8%E8%BE%B9%E7%94%9F%E6%80%81/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5%20-%20%E8%A7%A3%E6%9E%90%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":2,\"title\":\"组件代码\",\"slug\":\"组件代码\",\"link\":\"#组件代码\",\"children\":[]}],\"git\":{\"updatedTime\":1755347964000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue笔记及周边生态/代码片段 - 解析数学公式.md\",\"excerpt\":\"<h2>使用</h2>\\n<div class=\\\"language-vue\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>MathJaxRenderer</span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>msg aiMsg<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">:ref</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span><span class=\\\"token punctuation\\\">'</span>math' + item.id<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">              {{ item.content }}</span>\\n<span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>MathJaxRenderer</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
