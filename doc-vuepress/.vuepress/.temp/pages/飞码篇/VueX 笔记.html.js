import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/飞码篇/VueX 笔记.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%9E%E7%A0%81%E7%AF%87/VueX%20%E7%AC%94%E8%AE%B0.html\",\"title\":\"vueX笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vueX笔记\",\"date\":\"2022-08-04T00:00:00.000Z\",\"tags\":[\"vueX\",\"笔记\"],\"categories\":[\"飞码篇\"]},\"headers\":[{\"level\":2,\"title\":\"概念\",\"slug\":\"概念\",\"link\":\"#概念\",\"children\":[]},{\"level\":2,\"title\":\"npm i vueX --save\",\"slug\":\"npm-i-vuex-save\",\"link\":\"#npm-i-vuex-save\",\"children\":[]},{\"level\":2,\"title\":\"引入vuex并访问存储在vuex中的数据\",\"slug\":\"引入vuex并访问存储在vuex中的数据\",\"link\":\"#引入vuex并访问存储在vuex中的数据\",\"children\":[]},{\"level\":2,\"title\":\"访问state  中的数据\",\"slug\":\"访问state-中的数据\",\"link\":\"#访问state-中的数据\",\"children\":[]},{\"level\":2,\"title\":\"mutations改变state 中的数据\",\"slug\":\"mutations改变state-中的数据\",\"link\":\"#mutations改变state-中的数据\",\"children\":[]},{\"level\":2,\"title\":\"action和 mutations 模块化存储调用mapState、dispatch\",\"slug\":\"action和-mutations-模块化存储调用mapstate、dispatch\",\"link\":\"#action和-mutations-模块化存储调用mapstate、dispatch\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"飞码篇/VueX 笔记.md\",\"excerpt\":\"<h2>概念</h2>\\n<blockquote>\\n<p>一、Vuex的五个核心概念：state、getters、mutations、actions、modules\\n1、state: vuex的基本数据，用来存储变量；\\n2、getters: 从基本数据（state）派生的数据，相当于state的计算属性；\\n3、mutations: 提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个mution 都有一个字符串的事件类型（type）和一个回调函数（handler）。\\n回调函数就是我们实际进行状态更改的地方，并且它会接受 state作为第一个参数，提交载荷作为第二个参数。\\n4、action: 和mution的功能大致相同，不同之处在于 ①Action提交的是mution，而不是直接变更状态，②Action可以包含任意异步操作。\\n5、modules: 模块化vuex，可以让每一个模块拥有自己的 state、mutation、action、 getters，使得结构非常清晰，方便管理。</p>\\n</blockquote>\"}")
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
