import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/Java/StringBoot.html.vue"
const data = JSON.parse("{\"path\":\"/Java/StringBoot.html\",\"title\":\"springboot笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"springboot笔记\",\"date\":\"2023-5-21\",\"tags\":[\"springboot\",\"Java\",\"笔记\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"第一个get和Post 请求\",\"slug\":\"第一个get和post-请求\",\"link\":\"#第一个get和post-请求\",\"children\":[]},{\"level\":2,\"title\":\"简单数据类型和复杂数据类型 接收数据\",\"slug\":\"简单数据类型和复杂数据类型-接收数据\",\"link\":\"#简单数据类型和复杂数据类型-接收数据\",\"children\":[]},{\"level\":2,\"title\":\"集合或者数组接收数据\",\"slug\":\"集合或者数组接收数据\",\"link\":\"#集合或者数组接收数据\",\"children\":[]},{\"level\":2,\"title\":\"路径参数\",\"slug\":\"路径参数\",\"link\":\"#路径参数\",\"children\":[]},{\"level\":2,\"title\":\"日期参数\",\"slug\":\"日期参数\",\"link\":\"#日期参数\",\"children\":[]},{\"level\":2,\"title\":\"JWT 令牌   token\",\"slug\":\"jwt-令牌-token\",\"link\":\"#jwt-令牌-token\",\"children\":[{\"level\":3,\"title\":\"自己封装版本\",\"slug\":\"自己封装版本\",\"link\":\"#自己封装版本\",\"children\":[]}]},{\"level\":2,\"title\":\"filter 路径拦截\",\"slug\":\"filter-路径拦截\",\"link\":\"#filter-路径拦截\",\"children\":[]},{\"level\":2,\"title\":\"md5加密\",\"slug\":\"md5加密\",\"link\":\"#md5加密\",\"children\":[]},{\"level\":2,\"title\":\"后端解决接口跨域问题  @CrossOrigin\",\"slug\":\"后端解决接口跨域问题-crossorigin\",\"link\":\"#后端解决接口跨域问题-crossorigin\",\"children\":[]},{\"level\":2,\"title\":\"解决跨域问题  [全部接口]\",\"slug\":\"解决跨域问题-全部接口\",\"link\":\"#解决跨域问题-全部接口\",\"children\":[]},{\"level\":2,\"title\":\"mybatis 控制台打印sql\",\"slug\":\"mybatis-控制台打印sql\",\"link\":\"#mybatis-控制台打印sql\",\"children\":[]},{\"level\":2,\"title\":\"后端解决  Long   Id丢失精度问题\",\"slug\":\"后端解决-long-id丢失精度问题\",\"link\":\"#后端解决-long-id丢失精度问题\",\"children\":[]},{\"level\":2,\"title\":\"新版 pageHelper  分页参数为0时不能查询全部\",\"slug\":\"新版-pagehelper-分页参数为0时不能查询全部\",\"link\":\"#新版-pagehelper-分页参数为0时不能查询全部\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"Java/StringBoot.md\",\"excerpt\":\"\\n<h2>第一个get和Post 请求</h2>\\n<blockquote>\\n<p>如果<code> 请求参数名</code>  和 <code>形参</code> 名称对应不上可以使用注解 <code>@RequestParam(name=\\\"name\\\") </code></p>\\n<p>如果加上这个``@RequestParam`注解以后表示为必传项 ，可以使用下面这种方式吧</p>\\n<p>@RequestParam(name=\\\"name\\\",required = false)</p>\\n</blockquote>\\n<div class=\\\"language-java\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">//http://localhost:8080/getparams?name=张三&amp;age=18</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token annotation punctuation\\\">@RestController</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">class</span> hellowComtroller <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    <span class=\\\"token annotation punctuation\\\">@RequestMapping</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"/hello\\\"</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token keyword\\\">public</span> <span class=\\\"token class-name\\\">String</span> <span class=\\\"token function\\\">hello</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"hello\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">return</span> <span class=\\\"token string\\\">\\\"hello World~~~\\\"</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">//@RequestParam(name=\\\"name\\\")</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token annotation punctuation\\\">@RequestMapping</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"/getparams\\\"</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token keyword\\\">public</span> <span class=\\\"token class-name\\\">String</span> <span class=\\\"token function\\\">getparams</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token annotation punctuation\\\">@RequestParam</span><span class=\\\"token punctuation\\\">(</span>name<span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"name\\\"</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token class-name\\\">String</span> username<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token class-name\\\">Integer</span> age<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span>username<span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\":\\\"</span> <span class=\\\"token operator\\\">+</span> age<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">return</span> <span class=\\\"token string\\\">\\\"ok\\\"</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
