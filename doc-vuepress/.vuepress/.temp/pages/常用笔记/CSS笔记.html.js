import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/CSS笔记.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/CSS%E7%AC%94%E8%AE%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"省略号 - 单行\",\"slug\":\"省略号-单行\",\"link\":\"#省略号-单行\",\"children\":[]},{\"level\":2,\"title\":\"省略号 - 两行\",\"slug\":\"省略号-两行\",\"link\":\"#省略号-两行\",\"children\":[]},{\"level\":2,\"title\":\"超过元素宽高省略\",\"slug\":\"超过元素宽高省略\",\"link\":\"#超过元素宽高省略\",\"children\":[]}],\"git\":{\"updatedTime\":1723790909000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":3}]},\"filePathRelative\":\"常用笔记/CSS笔记.md\",\"excerpt\":\"<hr>\\n<p>title: CSS 笔记</p>\\n<p>date: 2024-8-4\\ntags:</p>\\n<ul>\\n<li>CSS</li>\\n<li>笔记\\ncategories:</li>\\n<li>自学篇</li>\\n</ul>\\n<hr>\\n<h2>省略号 - 单行</h2>\\n<div class=\\\"language-scss\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"scss\\\" data-title=\\\"scss\\\"><pre class=\\\"language-scss\\\"><code><span class=\\\"line\\\"><span class=\\\"token selector\\\">.singe-line </span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token property\\\">text-overflow</span><span class=\\\"token punctuation\\\">:</span> ellipsis<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token property\\\">overflow</span><span class=\\\"token punctuation\\\">:</span> hidden<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token property\\\">word-break</span><span class=\\\"token punctuation\\\">:</span> break-all<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token property\\\">white-space</span><span class=\\\"token punctuation\\\">:</span> nowrap<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">  &lt;p&gt;单行省略&lt;/p&gt;</span>\\n<span class=\\\"line\\\">  &lt;div class=<span class=\\\"token string\\\">\\\"singe-line box\\\"</span> <span class=\\\"token punctuation\\\">:</span>title=<span class=\\\"token string\\\">\\\"content\\\"</span>&gt;</span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">{</span> content <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\">  &lt;/div&gt;</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
