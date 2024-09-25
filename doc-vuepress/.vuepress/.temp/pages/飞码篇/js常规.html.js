import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/飞码篇/js常规.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%9E%E7%A0%81%E7%AF%87/js%E5%B8%B8%E8%A7%84.html\",\"title\":\"JS常规\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JS常规\",\"date\":\"2022-08-04T00:00:00.000Z\",\"tags\":[\"JavaScript\"],\"categories\":[\"飞码篇\"]},\"headers\":[{\"level\":2,\"title\":\"1. js数组操作\",\"slug\":\"_1-js数组操作\",\"link\":\"#_1-js数组操作\",\"children\":[]},{\"level\":2,\"title\":\"2. 正则\",\"slug\":\"_2-正则\",\"link\":\"#_2-正则\",\"children\":[]},{\"level\":2,\"title\":\"3. Object  转换为 JSON 数据     JSON.stringify(OBJ对象数组)\",\"slug\":\"_3-object-转换为-json-数据-json-stringify-obj对象数组\",\"link\":\"#_3-object-转换为-json-数据-json-stringify-obj对象数组\",\"children\":[]},{\"level\":2,\"title\":\"4.强制刷新视图层  this.$forceUpdate();\",\"slug\":\"_4-强制刷新视图层-this-forceupdate\",\"link\":\"#_4-强制刷新视图层-this-forceupdate\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"飞码篇/js常规.md\",\"excerpt\":\"<h2>1. js数组操作</h2>\\n<h4>【删】</h4>\\n<blockquote>\\n<p>pop() 方法用于删除数组的<strong>最后一个元素并返回删除的元素</strong>。</p>\\n<p>**注意：**此方法改变数组的长度！</p>\\n<p><strong>提示：</strong> 移除数组第一个元素，请使用 <a href=\\\"https://www.w3cschool.cn/jsref/jsref-shift.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">shift()</a> 方法</p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">var</span> fruits <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"Banana\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"Orange\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"Apple\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"Mango\\\"</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">fruits<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">pop</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token operator\\\">*</span>fruits<span class=\\\"token operator\\\">*</span> 结果输出：</span>\\n<span class=\\\"line\\\">Banana<span class=\\\"token punctuation\\\">,</span>Orange<span class=\\\"token punctuation\\\">,</span>Apple</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
