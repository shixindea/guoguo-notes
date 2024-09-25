import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/TypeScript.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/TypeScript.html\",\"title\":\"TypeScript 笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TypeScript 笔记\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"TypeScript\",\"笔记\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"初始化定义\",\"slug\":\"初始化定义\",\"link\":\"#初始化定义\",\"children\":[]},{\"level\":2,\"title\":\"[TS --> JS] 转换\",\"slug\":\"ts-js-转换\",\"link\":\"#ts-js-转换\",\"children\":[]},{\"level\":2,\"title\":\"简化转换步骤\",\"slug\":\"简化转换步骤\",\"link\":\"#简化转换步骤\",\"children\":[]},{\"level\":2,\"title\":\"TypeScript 基础类型\",\"slug\":\"typescript-基础类型\",\"link\":\"#typescript-基础类型\",\"children\":[]},{\"level\":2,\"title\":\"类型注解 let age： number = 18\",\"slug\":\"类型注解-let-age-number-18\",\"link\":\"#类型注解-let-age-number-18\",\"children\":[]},{\"level\":2,\"title\":\"类型别名 type  定义\",\"slug\":\"类型别名-type-定义\",\"link\":\"#类型别名-type-定义\",\"children\":[]},{\"level\":2,\"title\":\"接口继承  extends\",\"slug\":\"接口继承-extends\",\"link\":\"#接口继承-extends\",\"children\":[]},{\"level\":2,\"title\":\"让用户可以自己选择值 ，字面量类型\",\"slug\":\"让用户可以自己选择值-字面量类型\",\"link\":\"#让用户可以自己选择值-字面量类型\",\"children\":[]},{\"level\":2,\"title\":\"类型上下文 typeof  的两个作用\",\"slug\":\"类型上下文-typeof-的两个作用\",\"link\":\"#类型上下文-typeof-的两个作用\",\"children\":[]},{\"level\":2,\"title\":\"Class类  构造函数\",\"slug\":\"class类-构造函数\",\"link\":\"#class类-构造函数\",\"children\":[]},{\"level\":2,\"title\":\"Class类 实例方法\",\"slug\":\"class类-实例方法\",\"link\":\"#class类-实例方法\",\"children\":[]},{\"level\":2,\"title\":\"Class类 继承\",\"slug\":\"class类-继承\",\"link\":\"#class类-继承\",\"children\":[]},{\"level\":2,\"title\":\"Class类 可见性修饰符\",\"slug\":\"class类-可见性修饰符\",\"link\":\"#class类-可见性修饰符\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/TypeScript.md\",\"excerpt\":\"<h2>初始化定义</h2>\\n<blockquote>\\n<p>从编程语言的动静来区分，TypeScript 属于静态类型的编程语言，JS 属于动态类型的编程语言。\\n静态类型:编译期做类型检查;动态类型:执行期做类型检查。\\n代码编译和代码执行的顺序: 1编译2执行。\\n对于JS来说:需要等到代码真正去执行的时候才能发现错误(晚)。\\n对于TS来说:在代码编译的时候(代码执行前)就可以发现错误(早)。\\n并且，配合VSCode等开发工具, TS可以提前到在编写代码的同时就发现代码中的错误，减少找Bug、改Bug时间。</p>\\n</blockquote>\\n<h2>[TS --&gt; JS] 转换</h2>\"}")
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
