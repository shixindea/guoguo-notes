import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/飞码篇/uView基本使用.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%9E%E7%A0%81%E7%AF%87/uView%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html\",\"title\":\"uView 代码片段\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"uView 代码片段\",\"date\":\"2022-08-04T00:00:00.000Z\",\"tags\":[\"uniapp\",\"uView\",\"代码片段\"],\"categories\":[\"飞码篇\"]},\"headers\":[{\"level\":2,\"title\":\"Toast消息提示\",\"slug\":\"toast消息提示\",\"link\":\"#toast消息提示\",\"children\":[]},{\"level\":2,\"title\":\"页面加载\",\"slug\":\"页面加载\",\"link\":\"#页面加载\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"飞码篇/uView基本使用.md\",\"excerpt\":\"<h2>Toast消息提示</h2>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">&lt;u-toast ref=\\\"uToast\\\"&gt;&lt;/u-toast&gt;</span>\\n<span class=\\\"line\\\"></span></code></pre></div><div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">this.$refs.uToast.show({</span>\\n<span class=\\\"line\\\">\\t\\t\\t\\t\\ttype: 'success',</span>\\n<span class=\\\"line\\\">\\t\\t\\t\\t\\ttitle: '成功主题(带图标)',</span>\\n<span class=\\\"line\\\">\\t\\t\\t\\t\\tmessage: \\\"庄生晓梦迷蝴蝶\\\",</span>\\n<span class=\\\"line\\\">\\t\\t\\t\\t\\ticonUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'</span>\\n<span class=\\\"line\\\">\\t\\t\\t\\t})</span>\\n<span class=\\\"line\\\">\\t\\t\\t\\t</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
