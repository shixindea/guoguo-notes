import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/Java/Java 注解.html.vue"
const data = JSON.parse("{\"path\":\"/Java/Java%20%E6%B3%A8%E8%A7%A3.html\",\"title\":\"Java 注解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java 注解\",\"date\":\"2023-5-21\",\"tags\":[\"Java\",\"注解\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"Java注解\",\"slug\":\"java注解\",\"link\":\"#java注解\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"Java/Java 注解.md\",\"excerpt\":\"<h2>Java注解</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>注解名</th>\\n<th>作用</th>\\n<th>备注</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>@Override</td>\\n<td>用来重写父类中的定义的方法</td>\\n<td>Static 和 private 里面的方法不能被重写</td>\\n</tr>\\n<tr>\\n<td>@RequestParam</td>\\n<td>集合方式请求参数名与集合变量名相同</td>\\n<td>通过 @RequestParam 绑定集合关系</td>\\n</tr>\\n<tr>\\n<td>@PathVariable</td>\\n<td>路径参数标注</td>\\n<td>@RequestMapping(\\\"/path/{id}\\\")<br>public String path(@PathVariable Integer id) {<br>    System.<em>out</em>.println(id);<br>    return \\\"ok\\\";<br>}</td>\\n</tr>\\n<tr>\\n<td>@RequestParam</td>\\n<td>默认值注解</td>\\n<td>public Result page(<br>@RequestParam(defaultValue = \\\"1\\\") Integer page,<br>@RequestParam(defaultValue = \\\"10\\\") Integer pageSize)</td>\\n</tr>\\n<tr>\\n<td>@JsonProperty(\\\"uType\\\")</td>\\n<td>当定义uId,uName,uType的情况，可以使用这个注解来<br>指定转义， 否则可能会出现前端传值，但是后端接收不到的情况</td>\\n<td>//    目前类型  1送养 2寻宠  3溜宠物<br>@JsonProperty(\\\"uType\\\")<br>private String uType;</td>\\n</tr>\\n<tr>\\n<td>@JsonIgnore</td>\\n<td><a href=\\\"https://so.csdn.net/so/search?q=%E5%AE%9E%E4%BD%93%E7%B1%BB&amp;spm=1001.2101.3001.7020\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">实体类</a>字段加@JsonIgnore注解 可以 不返回给前端</td>\\n<td>@JsonIgnore<br>private int pageNum;<br>@JsonIgnore<br>private int pageSize;</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
