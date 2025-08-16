import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/vue生态及周边/Vue 全局封装 main.js.html.vue"
const data = JSON.parse("{\"path\":\"/vue%E7%94%9F%E6%80%81%E5%8F%8A%E5%91%A8%E8%BE%B9/Vue%20%E5%85%A8%E5%B1%80%E5%B0%81%E8%A3%85%20main.js.html\",\"title\":\"vue 全局封装\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vue 全局封装\",\"date\":\"2024-5-21\",\"tags\":[\"vue\",\"笔记\",\"全局封装\",\"全局\",\"封装\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"防止多次点击，做节流处理\",\"slug\":\"防止多次点击-做节流处理\",\"link\":\"#防止多次点击-做节流处理\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"vue生态及周边/Vue 全局封装 main.js.md\",\"excerpt\":\"<h2>防止多次点击，做节流处理</h2>\\n<blockquote>\\n<p>默认间隔时间 <code>3000</code></p>\\n</blockquote>\\n<div class=\\\"language-html\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"html\\\" data-title=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>button</span> <span class=\\\"token attr-name\\\">v-preventReClick</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>1000<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">@click</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>count++<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>点我加一<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>button</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
