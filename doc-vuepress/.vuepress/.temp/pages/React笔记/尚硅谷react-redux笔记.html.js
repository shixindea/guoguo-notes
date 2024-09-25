import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/React笔记/尚硅谷react-redux笔记.html.vue"
const data = JSON.parse("{\"path\":\"/React%E7%AC%94%E8%AE%B0/%E5%B0%9A%E7%A1%85%E8%B0%B7react-redux%E7%AC%94%E8%AE%B0.html\",\"title\":\"React redux笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"React redux笔记\",\"date\":\"2023-09-25T00:00:00.000Z\",\"tags\":[\"笔记\",\"React\",\"redux\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"1.求和案例_redux精简版\",\"slug\":\"_1-求和案例-redux精简版\",\"link\":\"#_1-求和案例-redux精简版\",\"children\":[]},{\"level\":2,\"title\":\"2.求和案例_redux完整版\",\"slug\":\"_2-求和案例-redux完整版\",\"link\":\"#_2-求和案例-redux完整版\",\"children\":[]},{\"level\":2,\"title\":\"3.求和案例_redux异步action版\",\"slug\":\"_3-求和案例-redux异步action版\",\"link\":\"#_3-求和案例-redux异步action版\",\"children\":[]},{\"level\":2,\"title\":\"4.求和案例_react-redux基本使用\",\"slug\":\"_4-求和案例-react-redux基本使用\",\"link\":\"#_4-求和案例-react-redux基本使用\",\"children\":[]},{\"level\":2,\"title\":\"5.求和案例_react-redux优化\",\"slug\":\"_5-求和案例-react-redux优化\",\"link\":\"#_5-求和案例-react-redux优化\",\"children\":[]},{\"level\":2,\"title\":\"6.求和案例_react-redux数据共享版\",\"slug\":\"_6-求和案例-react-redux数据共享版\",\"link\":\"#_6-求和案例-react-redux数据共享版\",\"children\":[]},{\"level\":2,\"title\":\"7.求和案例_react-redux开发者工具的使用\",\"slug\":\"_7-求和案例-react-redux开发者工具的使用\",\"link\":\"#_7-求和案例-react-redux开发者工具的使用\",\"children\":[]},{\"level\":2,\"title\":\"8.求和案例_react-redux最终版\",\"slug\":\"_8-求和案例-react-redux最终版\",\"link\":\"#_8-求和案例-react-redux最终版\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"React笔记/尚硅谷react-redux笔记.md\",\"excerpt\":\"<h2>1.求和案例_redux精简版</h2>\\n<pre><code>\\t(1).去除Count组件自身的状态\\n\\t(2).src下建立:\\n\\t\\t\\t\\t\\t-redux\\n\\t\\t\\t\\t\\t\\t-store.js\\n\\t\\t\\t\\t\\t\\t-count_reducer.js\\n\\n\\t(3).store.js：\\n\\t\\t\\t\\t1).引入redux中的createStore函数，创建一个store\\n\\t\\t\\t\\t2).createStore调用时要传入一个为其服务的reducer\\n\\t\\t\\t\\t3).记得暴露store对象\\n\\n\\t(4).count_reducer.js：\\n\\t\\t\\t\\t1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态\\n\\t\\t\\t\\t2).reducer有两个作用：初始化状态，加工状态\\n\\t\\t\\t\\t3).reducer被第一次调用时，是store自动触发的，\\n\\t\\t\\t\\t\\t\\t\\t\\t传递的preState是undefined,\\n\\t\\t\\t\\t\\t\\t\\t\\t传递的action是:{type:'@@REDUX/INIT_a.2.b.4}\\n\\n\\t(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染&lt;App/&gt;\\n\\t\\t\\t备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。\\n</code></pre>\"}")
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
