import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/浏览器px to rem适配.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E6%B5%8F%E8%A7%88%E5%99%A8px%20to%20rem%E9%80%82%E9%85%8D.html\",\"title\":\"浏览器适配 pxtorem\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"浏览器适配 pxtorem\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"pxtorem\",\"笔记\",\"浏览器适配\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"使用postcss-px2rem适配已经做成功1920*1080适配为rem\",\"slug\":\"使用postcss-px2rem适配已经做成功1920-1080适配为rem\",\"link\":\"#使用postcss-px2rem适配已经做成功1920-1080适配为rem\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/浏览器px to rem适配.md\",\"excerpt\":\"<h2>使用<code>postcss-px2rem</code>适配已经做成功<code>1920*1080</code>适配为rem</h2>\\n<p>要使<code>postcss-px2rem</code>生效，您需要确保已经在项目中安装了<code>postcss-loader</code>和<code>postcss-px2rem</code>。然后，您需要在<code>webpack.config.js</code>中配置它们。以下是修改后的示例：</p>\\n<ol>\\n<li>首先，确保已经安装了<code>postcss-loader</code>：</li>\\n</ol>\\n<p>InsertCopy</p>\"}")
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
