import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/Git 代码管理.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Git%20%E4%BB%A3%E7%A0%81%E7%AE%A1%E7%90%86.html\",\"title\":\"git 笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"git 笔记\",\"date\":\"2023-9-23\",\"tags\":[\"git\",\"笔记\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"插件安装   vue-tsc   == > pnpm lint:fix\",\"slug\":\"插件安装-vue-tsc-pnpm-lint-fix\",\"link\":\"#插件安装-vue-tsc-pnpm-lint-fix\",\"children\":[]},{\"level\":2,\"title\":\"插件安装   == >  pnpm gitcz\",\"slug\":\"插件安装-pnpm-gitcz\",\"link\":\"#插件安装-pnpm-gitcz\",\"children\":[]},{\"level\":2,\"title\":\"插件安装   == >  pnpm gitcz\",\"slug\":\"插件安装-pnpm-gitcz-1\",\"link\":\"#插件安装-pnpm-gitcz-1\",\"children\":[]},{\"level\":2,\"title\":\"推送 dist 文件夹到子分支 gh-pages\",\"slug\":\"推送-dist-文件夹到子分支-gh-pages\",\"link\":\"#推送-dist-文件夹到子分支-gh-pages\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/Git 代码管理.md\",\"excerpt\":\"<h2>插件安装   vue-tsc   <code>== &gt;</code> pnpm lint:fix</h2>\\n<p>安装：  npm i vue-tsc -D</p>\\n<p>安装：  npm install --save prettier -D</p>\\n<p>用法：vue-tsc --noEmit &amp;&amp; vite build</p>\\n<p>Vue 3 命令行类型检查工具基于 IDE 插件 <a href=\\\"https://github.com/vuejs/language-tools\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Volar</a>。</p>\"}")
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
