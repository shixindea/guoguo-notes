import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/汇智腾远笔记.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E6%B1%87%E6%99%BA%E8%85%BE%E8%BF%9C%E7%AC%94%E8%AE%B0.html\",\"title\":\"汇智腾远笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"汇智腾远笔记\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"汇智腾远\",\"笔记\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"vxetable 保存选中状态\",\"slug\":\"vxetable-保存选中状态\",\"link\":\"#vxetable-保存选中状态\",\"children\":[]},{\"level\":2,\"title\":\"字典回显的时候调用组件返回值\",\"slug\":\"字典回显的时候调用组件返回值\",\"link\":\"#字典回显的时候调用组件返回值\",\"children\":[]},{\"level\":2,\"title\":\"下拉组合框加 树形组件\",\"slug\":\"下拉组合框加-树形组件\",\"link\":\"#下拉组合框加-树形组件\",\"children\":[]},{\"level\":2,\"title\":\"vxe-table 表格添加全选按钮\",\"slug\":\"vxe-table-表格添加全选按钮\",\"link\":\"#vxe-table-表格添加全选按钮\",\"children\":[]},{\"level\":2,\"title\":\"Array转tree 全局方法\",\"slug\":\"array转tree-全局方法\",\"link\":\"#array转tree-全局方法\",\"children\":[]},{\"level\":2,\"title\":\"跳转路由并传值\",\"slug\":\"跳转路由并传值\",\"link\":\"#跳转路由并传值\",\"children\":[]},{\"level\":2,\"title\":\"图片变成 base64\",\"slug\":\"图片变成-base64\",\"link\":\"#图片变成-base64\",\"children\":[]},{\"level\":2,\"title\":\"分页\",\"slug\":\"分页\",\"link\":\"#分页\",\"children\":[]},{\"level\":2,\"title\":\"上传\",\"slug\":\"上传\",\"link\":\"#上传\",\"children\":[]},{\"level\":2,\"title\":\"查看\",\"slug\":\"查看\",\"link\":\"#查看\",\"children\":[]},{\"level\":2,\"title\":\"下载\",\"slug\":\"下载\",\"link\":\"#下载\",\"children\":[]},{\"level\":2,\"title\":\"防止按钮重复点击\",\"slug\":\"防止按钮重复点击\",\"link\":\"#防止按钮重复点击\",\"children\":[]},{\"level\":2,\"title\":\"input输入限制只能输入大写字母/数字/汉字等\",\"slug\":\"input输入限制只能输入大写字母-数字-汉字等\",\"link\":\"#input输入限制只能输入大写字母-数字-汉字等\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/汇智腾远笔记.md\",\"excerpt\":\"<h2>vxetable 保存选中状态</h2>\\n<blockquote>\\n<p>vxe-table 实现 保留选中行\\nrow-id=\\\"id\\\"   配合   :checkbox-config=\\\"{ highlight: true,reserve:true }\\\"\\n即可实现</p>\\n</blockquote>\\n<p><img src=\\\"https://s1.ax1x.com/2023/06/30/pCBPx4U.png\\\" alt=\\\"\\\"></p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token function\\\">aaaaaa</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token keyword\\\">const</span> data1 <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getSelectData</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'vxeTable1'</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token keyword\\\">const</span> data2 <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getSelectData</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'vxeTable2'</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'data1===&gt;'</span><span class=\\\"token punctuation\\\">,</span>data1<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'data2===&gt;'</span><span class=\\\"token punctuation\\\">,</span>data2<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token function\\\">getSelectData</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">name</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">let</span> arr1 <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>$refs<span class=\\\"token punctuation\\\">[</span>name<span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getCheckboxRecords</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">let</span> arr2 <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>$refs<span class=\\\"token punctuation\\\">[</span>name<span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getCheckboxReserveRecords</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">let</span> array <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span></span>\\n<span class=\\\"line\\\">        array <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token operator\\\">...</span>arr1<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token operator\\\">...</span>arr2<span class=\\\"token punctuation\\\">]</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">return</span> array</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
