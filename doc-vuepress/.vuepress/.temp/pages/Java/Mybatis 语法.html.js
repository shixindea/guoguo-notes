import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/Java/Mybatis 语法.html.vue"
const data = JSON.parse("{\"path\":\"/Java/Mybatis%20%E8%AF%AD%E6%B3%95.html\",\"title\":\"Mybatis 语法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Mybatis 语法\",\"date\":\"2023-5-21\",\"tags\":[\"Java\",\"Mybatis\",\"语法\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"模糊查询\",\"slug\":\"模糊查询\",\"link\":\"#模糊查询\",\"children\":[]},{\"level\":2,\"title\":\"控制台打印sql\",\"slug\":\"控制台打印sql\",\"link\":\"#控制台打印sql\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"Java/Mybatis 语法.md\",\"excerpt\":\"<h2>模糊查询</h2>\\n<div class=\\\"language-xml\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>if</span> <span class=\\\"token attr-name\\\">test</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>username!=null<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">    username like  CONCAT('%',#{username},'%')</span>\\n<span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>if</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
