import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/插件库.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E6%8F%92%E4%BB%B6%E5%BA%93.html\",\"title\":\"插件库\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"插件库\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"插件\"],\"categories\":[\"居家篇\"]},\"headers\":[],\"git\":{\"updatedTime\":1725441008000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":2}]},\"filePathRelative\":\"常用笔记/插件库.md\",\"excerpt\":\"<table>\\n<thead>\\n<tr>\\n<th>标题</th>\\n<th></th>\\n<th></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>uuid</td>\\n<td>生成唯一的随机ID数</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>nanoid</td>\\n<td>生成id   比uuid小</td>\\n<td>import { nanoid } from 'nanoid'<br>console.log('nanoid', nanoid())</td>\\n</tr>\\n<tr>\\n<td>npm i vue-print-nb</td>\\n<td>打印插件</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>npm i qrcode</td>\\n<td>生成二维码</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>npm i antd</td>\\n<td>ant design 组件库</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>nprogress</td>\\n<td>进度调插件</td>\\n<td>import nprogress from 'nprogress'<br>import 'nprogress/nprogress.css'<br><code>开始:</code>nprogress.start()<code>结束:</code> nprogress.done()</td>\\n</tr>\\n<tr>\\n<td>vxe tableb</td>\\n<td>vue表格插件</td>\\n<td>打印，树形、发杂表格等等</td>\\n</tr>\\n<tr>\\n<td>lodash</td>\\n<td>节流、防抖等等</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>vue-treeselect</td>\\n<td>级联根组件 树</td>\\n<td>待学</td>\\n</tr>\\n<tr>\\n<td>viser-vue</td>\\n<td>图表插件Viser</td>\\n<td><a href=\\\"https://blog.csdn.net/m0_37903882/article/details/106105047\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">初始化 (基于AntV-G2可视化引擎)</a>  <a href=\\\"https://viserjs.github.io/demo.html#/viser/pie/basic-pie\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Viser (viserjs官网地址)</a></td>\\n</tr>\\n<tr>\\n<td>vuedraggable</td>\\n<td>拖拽插件</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
