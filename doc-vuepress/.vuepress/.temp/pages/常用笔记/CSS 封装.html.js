import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/CSS 封装.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/CSS%20%E5%B0%81%E8%A3%85.html\",\"title\":\"CSS 封装\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CSS 封装\",\"date\":\"2024-7-23\",\"tags\":[\"CSS\",\"封装\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"单行 多行 省略号 scss\",\"slug\":\"单行-多行-省略号-scss\",\"link\":\"#单行-多行-省略号-scss\",\"children\":[]}],\"git\":{\"updatedTime\":1739351223000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":2}]},\"filePathRelative\":\"常用笔记/CSS 封装.md\",\"excerpt\":\"<h2>单行 多行 省略号 scss</h2>\\n<div class=\\\"language-scss\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"scss\\\" data-title=\\\"scss\\\"><pre class=\\\"language-scss\\\"><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">/** @format */</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">@mixin</span> <span class=\\\"token function\\\">multi-ellipsis</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token property\\\"><span class=\\\"token variable\\\">$lines</span></span><span class=\\\"token punctuation\\\">:</span> 1<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">display</span><span class=\\\"token punctuation\\\">:</span> -webkit-box<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">line-clamp</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token variable\\\">$lines</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">-webkit-line-clamp</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token variable\\\">$lines</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">text-overflow</span><span class=\\\"token punctuation\\\">:</span> ellipsis<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">word-break</span><span class=\\\"token punctuation\\\">:</span> break-all<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/* autoprefixer: ignore next */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">-webkit-box-orient</span><span class=\\\"token punctuation\\\">:</span> vertical<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">overflow</span><span class=\\\"token punctuation\\\">:</span> hidden<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">/* autoprefixer: ignore next */</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">box-orient</span><span class=\\\"token punctuation\\\">:</span> vertical<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">@mixin</span> <span class=\\\"token selector\\\">ellipsis </span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">white-space</span><span class=\\\"token punctuation\\\">:</span> nowrap<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">overflow</span><span class=\\\"token punctuation\\\">:</span> hidden<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">text-overflow</span><span class=\\\"token punctuation\\\">:</span> ellipsis<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token property\\\">word-break</span><span class=\\\"token punctuation\\\">:</span> keep-all<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\">\\t\\t</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
