import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/Echarts.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Echarts.html\",\"title\":\"ecahrts 笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ecahrts 笔记\",\"date\":\"2023-9-23\",\"tags\":[\"ecahrts\",\"笔记\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"柱状体 文字太长 导值底部文字不显示  省略号做法\",\"slug\":\"柱状体-文字太长-导值底部文字不显示-省略号做法\",\"link\":\"#柱状体-文字太长-导值底部文字不显示-省略号做法\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/Echarts.md\",\"excerpt\":\"<h2>柱状体 文字太长 导值底部文字不显示  省略号做法</h2>\\n<blockquote>\\n<p><strong>通过tootip展示文字</strong></p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token literal-property property\\\">xAxis</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token literal-property property\\\">type</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'category'</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token literal-property property\\\">data</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>allData<span class=\\\"token punctuation\\\">.</span>traineesNumberList<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">map</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">res</span> <span class=\\\"token operator\\\">=&gt;</span> res<span class=\\\"token punctuation\\\">.</span>workTypeName<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token literal-property property\\\">axisPointer</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">      <span class=\\\"token literal-property property\\\">type</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'shadow'</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token literal-property property\\\">axisLabel</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token comment\\\">// 设置底部文字的样式</span></span>\\n<span class=\\\"line\\\">      <span class=\\\"token function-variable function\\\">formatter</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">value</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span>value<span class=\\\"token punctuation\\\">.</span>length <span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token number\\\">5</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token comment\\\">// 如果文字长度超过5个字符，则使用省略号</span></span>\\n<span class=\\\"line\\\">          <span class=\\\"token keyword\\\">return</span> value<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">substr</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">5</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">'...'</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">else</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">          <span class=\\\"token keyword\\\">return</span> value<span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\">      <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">      <span class=\\\"token literal-property property\\\">textStyle</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token literal-property property\\\">color</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'#ffffff'</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">      <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">      <span class=\\\"token literal-property property\\\">rotate</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">45</span> <span class=\\\"token comment\\\">// 将底部文字旋转45度</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
