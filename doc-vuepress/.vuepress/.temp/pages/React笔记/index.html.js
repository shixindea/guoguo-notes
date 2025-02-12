import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/React笔记/index.html.vue"
const data = JSON.parse("{\"path\":\"/React%E7%AC%94%E8%AE%B0/\",\"title\":\"React笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"React笔记\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
