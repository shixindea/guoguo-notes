import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"其他开源项目\",\"slug\":\"其他开源项目\",\"link\":\"#其他开源项目\",\"children\":[]},{\"level\":3,\"title\":\"作者\",\"slug\":\"作者\",\"link\":\"#作者\",\"children\":[]}],\"git\":{\"updatedTime\":1725506476000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"<div align=\\\"center\\\" style=\\\"margin-top: 150px;\\\">\\n  <a href=\\\"https://github.com/shaojintian/Best_README_template/\\\">\\n    \\n  </a>\\n  <h3 align=\\\"center\\\">欢迎访问我的个人笔记 —— Guoguo notes</h3>\\n  <p align=\\\"center\\\">\\n    在这里，我分享并记录了我的学习、思考和发现。希望这些笔记能够对你有所帮助！\\n  </p>\\n</div>\\n<!-- 欢迎大家批评 -->\\n<h3>其他开源项目</h3>\\n<ul>\\n<li><a href=\\\"https://shixindea.github.io/#/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Vue3 组件库 Guoguo-ui</a></li>\\n<li><a href=\\\"https://www.npmjs.com/package/@shixinde/guoguo-cz\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Git 提交规范 Guoguo-cz</a></li>\\n<li><a href=\\\"https://shixindea.github.io/shixinde-utils/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">JavaScript 工具类 Guoguo-utils</a></li>\\n<li><a href=\\\"https://www.npmjs.com/package/@shixinde/vuepress-theme-init\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">vuepress 快速模板 Guoguo-vuepress</a></li>\\n<li><a href=\\\"https://shixindea.github.io/guoguo-notes/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">个人笔记 guoguo-notes</a></li>\\n</ul>\"}")
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
