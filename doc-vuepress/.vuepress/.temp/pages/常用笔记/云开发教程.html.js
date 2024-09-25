import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/云开发教程.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E4%BA%91%E5%BC%80%E5%8F%91%E6%95%99%E7%A8%8B.html\",\"title\":\"云开发教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"云开发教程\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"云开发\",\"笔记\",\"腾讯云\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"1.买一个环境，可以得到一个环境ID\",\"slug\":\"_1-买一个环境-可以得到一个环境id\",\"link\":\"#_1-买一个环境-可以得到一个环境id\",\"children\":[]},{\"level\":2,\"title\":\"2.在app.vue 里面写\",\"slug\":\"_2-在app-vue-里面写\",\"link\":\"#_2-在app-vue-里面写\",\"children\":[]},{\"level\":2,\"title\":\"3. 在页面中调用\",\"slug\":\"_3-在页面中调用\",\"link\":\"#_3-在页面中调用\",\"children\":[{\"level\":3,\"title\":\"小程序路径转电脑端=> 临时路径\",\"slug\":\"小程序路径转电脑端-临时路径\",\"link\":\"#小程序路径转电脑端-临时路径\",\"children\":[]}]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/云开发教程.md\",\"excerpt\":\"<h2>1.买一个环境，可以得到一个环境ID</h2>\\n<h2>2.在app.vue 里面写</h2>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token function-variable function\\\">onShow</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    wx<span class=\\\"token punctuation\\\">.</span>cloud<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">init</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token literal-property property\\\">env</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"guoguo-school-9gyphpbe161a19f9\\\"</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'App Show'</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
