import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/React笔记/05_redux笔记.html.vue"
const data = JSON.parse("{\"path\":\"/React%E7%AC%94%E8%AE%B0/05_redux%E7%AC%94%E8%AE%B0.html\",\"title\":\"redux笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"redux笔记\",\"date\":\"2022-08-04T00:00:00.000Z\",\"tags\":[\"React\",\"redux\"],\"categories\":[\"自学篇\"]},\"headers\":[],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"React笔记/05_redux笔记.md\",\"excerpt\":\"\\n<pre><code>1. redux理解\\n2. redux相关API\\n3. redux核心概念(3个)\\n4. redux工作流程\\n5. 使用redux及相关库编码\\n</code></pre>\\n<p>#1. redux理解\\n什么?: redux是专门做状态管理的独立第3方库, 不是react插件\\n作用?: 对应用中状态进行集中式的管理(写/读)\\n开发: 与react-redux, redux-thunk等插件配合使用</p>\\n<h1>2. redux相关API</h1>\\n<pre><code>redux中包含: createStore(), applyMiddleware(), combineReducers()\\nstore对象: getState(), dispatch(), subscribe()\\nreact-redux: &lt;Provider&gt;, connect()()\\n</code></pre>\"}")
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
