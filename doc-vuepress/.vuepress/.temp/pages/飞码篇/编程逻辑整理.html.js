import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/飞码篇/编程逻辑整理.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%9E%E7%A0%81%E7%AF%87/%E7%BC%96%E7%A8%8B%E9%80%BB%E8%BE%91%E6%95%B4%E7%90%86.html\",\"title\":\"代码编程逻辑\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"代码编程逻辑\",\"date\":\"2022-08-04T00:00:00.000Z\",\"tags\":[\"逻辑\"],\"categories\":[\"飞码篇\"]},\"headers\":[{\"level\":2,\"title\":\"后台数据库字段创建\",\"slug\":\"后台数据库字段创建\",\"link\":\"#后台数据库字段创建\",\"children\":[]},{\"level\":2,\"title\":\"渲染列表由用户决定有多少个的情况\",\"slug\":\"渲染列表由用户决定有多少个的情况\",\"link\":\"#渲染列表由用户决定有多少个的情况\",\"children\":[]},{\"level\":2,\"title\":\"拍照图片上传到小程序中\",\"slug\":\"拍照图片上传到小程序中\",\"link\":\"#拍照图片上传到小程序中\",\"children\":[]},{\"level\":2,\"title\":\"保存图片到相册逻辑\",\"slug\":\"保存图片到相册逻辑\",\"link\":\"#保存图片到相册逻辑\",\"children\":[]},{\"level\":2,\"title\":\"组合框，下拉框，三级联动，等等等等\",\"slug\":\"组合框-下拉框-三级联动-等等等等\",\"link\":\"#组合框-下拉框-三级联动-等等等等\",\"children\":[]},{\"level\":2,\"title\":\"登录逻辑\",\"slug\":\"登录逻辑\",\"link\":\"#登录逻辑\",\"children\":[]},{\"level\":2,\"title\":\"上移、下移逻辑\",\"slug\":\"上移、下移逻辑\",\"link\":\"#上移、下移逻辑\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"飞码篇/编程逻辑整理.md\",\"excerpt\":\"<h2>后台数据库字段创建</h2>\\n<ol>\\n<li>createTime\\t创建时间\\tdate</li>\\n<li>creatorId\\t创建人编号\\tbigint</li>\\n<li>updator\\t更新人\\tvarchar</li>\\n<li>del\\t是否删除\\ttinyint\\t\\t0为正常，1为删除</li>\\n</ol>\\n<p>时间 <code>datetime</code></p>\\n<p>排序<code> sort</code>  《 1 2 3 4 5 6 》  用于后续排序使用</p>\\n<h2>渲染列表由用户决定有多少个的情况</h2>\\n<p>示例图片</p>\\n<p><img src=\\\"https://s1.ax1x.com/2022/07/02/j10IIg.png\\\" alt=\\\"\\\"></p>\"}")
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
