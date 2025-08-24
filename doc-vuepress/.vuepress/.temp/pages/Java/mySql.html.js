import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/Java/mySql.html.vue"
const data = JSON.parse("{\"path\":\"/Java/mySql.html\",\"title\":\"Mysql\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Mysql\",\"date\":\"2023-5-21\",\"tags\":[\"Mysql\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"创建表\",\"slug\":\"创建表\",\"link\":\"#创建表\",\"children\":[]},{\"level\":2,\"title\":\"显示当前数据库中的表\",\"slug\":\"显示当前数据库中的表\",\"link\":\"#显示当前数据库中的表\",\"children\":[]},{\"level\":2,\"title\":\"显示表结构\",\"slug\":\"显示表结构\",\"link\":\"#显示表结构\",\"children\":[]},{\"level\":2,\"title\":\"代码片段\",\"slug\":\"代码片段\",\"link\":\"#代码片段\",\"children\":[]},{\"level\":2,\"title\":\"管理用户\",\"slug\":\"管理用户\",\"link\":\"#管理用户\",\"children\":[{\"level\":3,\"title\":\"查询用户\",\"slug\":\"查询用户\",\"link\":\"#查询用户\",\"children\":[]},{\"level\":3,\"title\":\"创建用户\",\"slug\":\"创建用户\",\"link\":\"#创建用户\",\"children\":[]}]},{\"level\":2,\"title\":\"自查询\",\"slug\":\"自查询\",\"link\":\"#自查询\",\"children\":[]},{\"level\":2,\"title\":\"合并  两个表查询后合并为新表\",\"slug\":\"合并-两个表查询后合并为新表\",\"link\":\"#合并-两个表查询后合并为新表\",\"children\":[]},{\"level\":2,\"title\":\"DISTINCT 去除重复项  去重\",\"slug\":\"distinct-去除重复项-去重\",\"link\":\"#distinct-去除重复项-去重\",\"children\":[]},{\"level\":2,\"title\":\"事务  四大特性 基本操作   隔离级别\",\"slug\":\"事务-四大特性-基本操作-隔离级别\",\"link\":\"#事务-四大特性-基本操作-隔离级别\",\"children\":[{\"level\":3,\"title\":\"四大特性ACID\",\"slug\":\"四大特性acid\",\"link\":\"#四大特性acid\",\"children\":[]},{\"level\":3,\"title\":\"事务的基本操作\",\"slug\":\"事务的基本操作\",\"link\":\"#事务的基本操作\",\"children\":[]}]},{\"level\":2,\"title\":\"索引\",\"slug\":\"索引\",\"link\":\"#索引\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"Java/mySql.md\",\"excerpt\":\"\\n<h2>创建表</h2>\\n<div class=\\\"language-mysql\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"mysql\\\" data-title=\\\"mysql\\\"><pre class=\\\"language-mysql\\\"><code><span class=\\\"line\\\">CREATE TABLE student(</span>\\n<span class=\\\"line\\\">id int comment \\\"编号\\\",</span>\\n<span class=\\\"line\\\">name VARCHAR(50) COMMENT \\\"姓名\\\",</span>\\n<span class=\\\"line\\\">age int COMMENT '年龄',</span>\\n<span class=\\\"line\\\">gender VARCHAR(1) comment '性别')</span>\\n<span class=\\\"line\\\">comment '用户表'</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
