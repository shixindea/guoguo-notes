import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/Vue3_Element Plus.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Vue3_Element%20Plus.html\",\"title\":\"Vue3+Element Plus\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Vue3+Element Plus\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"Vue3.0\",\"Element Plus\",\"笔记\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"1.获取单行中的一个字段值\",\"slug\":\"_1-获取单行中的一个字段值\",\"link\":\"#_1-获取单行中的一个字段值\",\"children\":[]},{\"level\":2,\"title\":\"2.获取单行中的 index 当前行的下标值\",\"slug\":\"_2-获取单行中的-index-当前行的下标值\",\"link\":\"#_2-获取单行中的-index-当前行的下标值\",\"children\":[]},{\"level\":2,\"title\":\"3.消息提示框\",\"slug\":\"_3-消息提示框\",\"link\":\"#_3-消息提示框\",\"children\":[]},{\"level\":2,\"title\":\"4.自定义表单校验\",\"slug\":\"_4-自定义表单校验\",\"link\":\"#_4-自定义表单校验\",\"children\":[{\"level\":3,\"title\":\"---确认密码\",\"slug\":\"确认密码\",\"link\":\"#确认密码\",\"children\":[]},{\"level\":3,\"title\":\"---验证手机号\",\"slug\":\"验证手机号\",\"link\":\"#验证手机号\",\"children\":[]}]},{\"level\":2,\"title\":\"5.全局配置Dialog点击遮罩层不关闭对话框\",\"slug\":\"_5-全局配置dialog点击遮罩层不关闭对话框\",\"link\":\"#_5-全局配置dialog点击遮罩层不关闭对话框\",\"children\":[]},{\"level\":2,\"title\":\"图片 点击可以放大预览\",\"slug\":\"图片-点击可以放大预览\",\"link\":\"#图片-点击可以放大预览\",\"children\":[]},{\"level\":2,\"title\":\"表格设置表头居中\",\"slug\":\"表格设置表头居中\",\"link\":\"#表格设置表头居中\",\"children\":[]},{\"level\":2,\"title\":\"图片嵌套在表格中放大预览 背后层级出现问题\",\"slug\":\"图片嵌套在表格中放大预览-背后层级出现问题\",\"link\":\"#图片嵌套在表格中放大预览-背后层级出现问题\",\"children\":[]},{\"level\":2,\"title\":\"\",\"slug\":\"\",\"link\":\"#\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/Vue3+Element Plus.md\",\"excerpt\":\"<h2>1.获取单行中的一个字段值</h2>\\n<div class=\\\"language-html\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"html\\\" data-title=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"line\\\">  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>el-table</span> <span class=\\\"token attr-name\\\">:data</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>formData<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">stripe</span> <span class=\\\"token special-attr\\\"><span class=\\\"token attr-name\\\">style</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span><span class=\\\"token value css language-css\\\"><span class=\\\"token property\\\">width</span><span class=\\\"token punctuation\\\">:</span> 100%</span><span class=\\\"token punctuation\\\">\\\"</span></span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>el-table-column</span> <span class=\\\"token attr-name\\\">fixed</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>right<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">label</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>Operations<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>template</span> <span class=\\\"token attr-name\\\">#default</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>scope<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>el-button</span> <span class=\\\"token attr-name\\\">link</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>primary<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">size</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>small<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">@click</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>deleteData(scope.row._id)<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>删除<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>el-button</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>el-button</span> <span class=\\\"token attr-name\\\">link</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>primary<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">size</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>small<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>修改<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>el-button</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>el-table-column</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>el-table</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
