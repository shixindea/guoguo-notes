import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/飞码篇/常用正则表达式.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%9E%E7%A0%81%E7%AF%87/%E5%B8%B8%E7%94%A8%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html\",\"title\":\"常用正则表达式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常用正则表达式\",\"date\":\"2022-08-04T00:00:00.000Z\",\"tags\":[\"正则\"],\"categories\":[\"飞码篇\"]},\"headers\":[],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"飞码篇/常用正则表达式.md\",\"excerpt\":\"<p>常用正则 ：</p>\\n<p>推荐网站：<a href=\\\"https://www.sojson.com/regex/generate\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">正则表达式生成器，常用正则表达式在线生成</a></p>\\n<p><strong>一、校验数字的表达式</strong></p>\\n<p>1 数字：^[0-9]*$</p>\\n<p>2 n位的数字：^\\\\d{n}$</p>\\n<p>3 至少n位的数字：^\\\\d{n,}$</p>\\n<p>4 m-n位的数字：^\\\\d{m,n}$</p>\\n<p>5 零和非零开头的数字：^(0|[1-9][0-9]*)$</p>\"}")
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
