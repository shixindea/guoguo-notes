import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/Taro.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Taro.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"小程序触底刷新下一页\",\"slug\":\"小程序触底刷新下一页\",\"link\":\"#小程序触底刷新下一页\",\"children\":[{\"level\":3,\"title\":\"useReachBottom\",\"slug\":\"usereachbottom\",\"link\":\"#usereachbottom\",\"children\":[]}]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/Taro.md\",\"excerpt\":\"<h2>小程序触底刷新下一页</h2>\\n<h3><a class=\\\"header-anchor\\\" href=\\\"#usereachbottom\\\"><span>useReachBottom</span></a><a href=\\\"https://taro-docs.jd.com/docs/composition-api#usereachbottom\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"></a></h3>\\n<p>监听用户上拉触底事件。等同于 <code>onReachBottom</code> 页面生命周期钩子。</p>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">  onReachBottom() {</span>\\n<span class=\\\"line\\\">    if (this.theListCurrentPage &lt; this.theListPagination.lastPage) {</span>\\n<span class=\\\"line\\\">      this.theListCurrentPage++</span>\\n<span class=\\\"line\\\">      this.onGetList()</span>\\n<span class=\\\"line\\\">    }</span>\\n<span class=\\\"line\\\">  },</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
