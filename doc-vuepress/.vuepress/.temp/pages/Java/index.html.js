import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/Java/index.html.vue"
const data = JSON.parse("{\"path\":\"/Java/\",\"title\":\"Java\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
