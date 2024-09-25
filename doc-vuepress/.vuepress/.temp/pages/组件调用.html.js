import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/组件调用.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BB%84%E4%BB%B6%E8%B0%83%E7%94%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"点赞  收藏 图标 形式\",\"slug\":\"点赞-收藏-图标-形式\",\"link\":\"#点赞-收藏-图标-形式\",\"children\":[{\"level\":3,\"title\":\"用于写页面\",\"slug\":\"用于写页面\",\"link\":\"#用于写页面\",\"children\":[]},{\"level\":3,\"title\":\"用于写逻辑\",\"slug\":\"用于写逻辑\",\"link\":\"#用于写逻辑\",\"children\":[]}]}],\"git\":{\"updatedTime\":1723606007000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"组件调用.md\",\"excerpt\":\"<h2>点赞  收藏 图标 形式</h2>\\n<p> </p>\\n<h3>用于写页面</h3>\\n<div class=\\\"language-vue\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>page-icon</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>collect<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>page-icon</span><span class=\\\"token punctuation\\\">&gt;</span></span>   </span>\\n<span class=\\\"line\\\">//type 取值</span>\\n<span class=\\\"line\\\">collect 收藏</span>\\n<span class=\\\"line\\\">vote 点赞</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
