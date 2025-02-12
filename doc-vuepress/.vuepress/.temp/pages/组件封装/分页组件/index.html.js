import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/组件封装/分页组件/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/%E5%88%86%E9%A1%B5%E7%BB%84%E4%BB%B6/\",\"title\":\"分页组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"分页组件\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
