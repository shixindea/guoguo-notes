import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Hello VuePress\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hello VuePress\",\"slug\":\"hello-vuepress-1\",\"link\":\"#hello-vuepress-1\",\"children\":[{\"level\":3,\"title\":\"Hello VuePress\",\"slug\":\"hello-vuepress-2\",\"link\":\"#hello-vuepress-2\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"en/README.md\",\"excerpt\":\"\\n<h2>Hello VuePress</h2>\\n<h3>Hello VuePress</h3>\\n<h4>Hello VuePress</h4>\\n<h5>Hello VuePress</h5>\\n<div class=\\\"language-typescript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"ts\\\" data-title=\\\".vuepress/config.ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"line\\\"><span class=\\\"token doc-comment comment\\\">/**</span>\\n<span class=\\\"line\\\"> * Phone number verification</span>\\n<span class=\\\"line\\\"> */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">declare</span> <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">mobileCheck</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span>value<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token builtin\\\">boolean</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
