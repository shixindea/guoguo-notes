import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/公共API接口.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E5%85%AC%E5%85%B1API%E6%8E%A5%E5%8F%A3.html\",\"title\":\"公共API\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"公共API\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"公共\",\"API\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"获取地理位置信息\",\"slug\":\"获取地理位置信息\",\"link\":\"#获取地理位置信息\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/公共API接口.md\",\"excerpt\":\"\\n<h2>获取地理位置信息</h2>\\n<div class=\\\"language-diff\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"diff\\\" data-title=\\\"diff\\\"><pre class=\\\"language-diff\\\"><code><span class=\\\"line\\\">http://whois.pconline.com.cn/ipJson.jsp?ip=121.29.9.239&amp;json=true</span>\\n<span class=\\\"line\\\"></span></code></pre></div><div class=\\\"language-diff\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"diff\\\" data-title=\\\"diff\\\"><pre class=\\\"language-diff\\\"><code><span class=\\\"line\\\">{</span>\\n<span class=\\\"line\\\"><span class=\\\"token unchanged\\\"><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"ip\\\": \\\"121.29.9.239\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"pro\\\": \\\"河北省\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"proCode\\\": \\\"130000\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"city\\\": \\\"石家庄市\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"cityCode\\\": \\\"130100\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"region\\\": \\\"\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"regionCode\\\": \\\"0\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"addr\\\": \\\"河北省石家庄市 联通ADSL\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"regionNames\\\": \\\"\\\",</span>\\n<span class=\\\"line\\\"></span><span class=\\\"token prefix unchanged\\\"> </span><span class=\\\"token line\\\"> \\\"err\\\": \\\"\\\"</span>\\n<span class=\\\"line\\\"></span></span>}</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
