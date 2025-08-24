import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/组件封装/查看 编辑对话框组件.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/%E6%9F%A5%E7%9C%8B%20%E7%BC%96%E8%BE%91%E5%AF%B9%E8%AF%9D%E6%A1%86%E7%BB%84%E4%BB%B6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"组件封装/查看 编辑对话框组件.md\",\"excerpt\":\"<blockquote>\\n<p><strong>调用组件</strong></p>\\n</blockquote>\\n<div class=\\\"language-vue\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>lookDialog</span> <span class=\\\"token attr-name\\\">v-if</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>showLookDialog<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">submit</span> <span class=\\\"token attr-name\\\">:arrayData</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>preinstallData<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">:rowData</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>innerFormData<span class=\\\"token punctuation\\\">\\\"</span></span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token attr-name\\\">title</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>查看详情<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">@close</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>showLookDialog = false<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">@submit</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>editDialogSaveClick<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
