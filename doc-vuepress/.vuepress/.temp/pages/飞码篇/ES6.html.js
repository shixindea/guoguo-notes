import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/飞码篇/ES6.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%9E%E7%A0%81%E7%AF%87/ES6.html\",\"title\":\"ES6笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ES6笔记\",\"date\":\"2022-08-04T00:00:00.000Z\",\"tags\":[\"ES6\"],\"categories\":[\"飞码篇\"]},\"headers\":[{\"level\":2,\"title\":\"es6中 [...] 展开运算符\",\"slug\":\"es6中-展开运算符\",\"link\":\"#es6中-展开运算符\",\"children\":[]},{\"level\":2,\"title\":\"默认全部导入方法\",\"slug\":\"默认全部导入方法\",\"link\":\"#默认全部导入方法\",\"children\":[]},{\"level\":2,\"title\":\"对象转数组 Object.keys\",\"slug\":\"对象转数组-object-keys\",\"link\":\"#对象转数组-object-keys\",\"children\":[]},{\"level\":2,\"title\":\"解构赋值+重命名\",\"slug\":\"解构赋值-重命名\",\"link\":\"#解构赋值-重命名\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"飞码篇/ES6.md\",\"excerpt\":\"<h2>es6中 [...] 展开运算符</h2>\\n<p><a href=\\\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">展开运算符(spread operator)</a>，作用是和字面意思一样，就是把东西展开。可以用在<code>array</code>和<code>object</code>上都行。\\n比如:</p>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">let a = [1,2,3];</span>\\n<span class=\\\"line\\\">let b = [0, ...a, 4]; // [0,1,2,3,4]</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">let obj = { a: 1, b: 2 };</span>\\n<span class=\\\"line\\\">let obj2 = { ...obj, c: 3 }; // { a:1, b:2, c:3 }</span>\\n<span class=\\\"line\\\">let obj3 = { ...obj, a: 3 }; // { a:3, b:2 }</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
