import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/袁果锅生态/团队协作及规范/命名_ 开发期间的命名规范.html.vue"
const data = JSON.parse("{\"path\":\"/%E8%A2%81%E6%9E%9C%E9%94%85%E7%94%9F%E6%80%81/%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E5%8F%8A%E8%A7%84%E8%8C%83/%E5%91%BD%E5%90%8D_%20%E5%BC%80%E5%8F%91%E6%9C%9F%E9%97%B4%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"样式相关\",\"slug\":\"样式相关\",\"link\":\"#样式相关\",\"children\":[]},{\"level\":2,\"title\":\"Typescript 逻辑相关\",\"slug\":\"typescript-逻辑相关\",\"link\":\"#typescript-逻辑相关\",\"children\":[]},{\"level\":2,\"title\":\"分支命名规范\",\"slug\":\"分支命名规范\",\"link\":\"#分支命名规范\",\"children\":[]}],\"git\":{\"updatedTime\":1755349061000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"袁果锅生态/团队协作及规范/[命名] 开发期间的命名规范.md\",\"excerpt\":\"<h2>样式相关</h2>\\n<p>尽量使用全局唯一 class 写样式</p>\\n<table>\\n<thead>\\n<tr>\\n<th>类型</th>\\n<th>class 名</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>规则</td>\\n<td>（页面名字 或 组件名字） + 模块名 + 中横线 + 名字</td>\\n</tr>\\n<tr>\\n<td>示例</td>\\n<td>order-header-title (订单详情头部的标题)</td>\\n</tr>\\n</tbody>\\n</table>\\n<h2>Typescript 逻辑相关</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>类型</th>\\n<th>变量名字</th>\\n<th>方法</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>规则</td>\\n<td>the + 驼峰</td>\\n<td>on + 驼峰</td>\\n</tr>\\n<tr>\\n<td>示例</td>\\n<td>theProductList ( 商品列表数据 )</td>\\n<td>onGetProductList ( 获取商品列表 )</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
