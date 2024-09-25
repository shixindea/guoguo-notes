import{_ as n,c as s,a as t,o as e}from"./app-CduvU-Ml.js";const p="/guoguo-notes/assets/image-20240823232039376-O4SUMJ_Y.png",o={};function l(c,a){return e(),s("div",null,a[0]||(a[0]=[t('<h1 id="《page-upload组件》" tabindex="-1"><a class="header-anchor" href="#《page-upload组件》"><span>《page-upload组件》</span></a></h1><p><img src="'+p+`" alt="image-20240823232039376"></p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><blockquote><p>html</p></blockquote><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-upload</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageUpload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:maxCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onUploadChange<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>js</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> <span class="token comment">// 上传图片回调</span></span>
<span class="line">    <span class="token function">onUploadChange</span><span class="token punctuation">(</span><span class="token parameter">images</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//返回的数据格式[&quot;1.jpg&quot;，&quot;2.jpg&quot;]</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span> <span class="token string">&#39;image&#39;</span><span class="token punctuation">,</span> images<span class="token punctuation">)</span>   </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>得到数据后初始化组件</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>pageUpload<span class="token punctuation">.</span><span class="token function">onTheInit</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>images<span class="token punctuation">)</span>  <span class="token comment">//传递的数据格式[&quot;1.jpg&quot;，&quot;2.jpg&quot;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>扩展</p><p>maxCount 最大上传数量</p></blockquote>`,10)]))}const i=n(o,[["render",l],["__file","上传组件封装.html.vue"]]),r=JSON.parse('{"path":"/%E4%B8%8A%E4%BC%A0%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85.html","title":"《page-upload组件》","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"updatedTime":1724749559000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"上传组件封装.md","excerpt":"\\n<p></p>\\n<h2>使用</h2>\\n<blockquote>\\n<p>html</p>\\n</blockquote>\\n<div class=\\"language-vue\\" data-highlighter=\\"prismjs\\" data-ext=\\"vue\\" data-title=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>page-upload</span> <span class=\\"token attr-name\\">ref</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>pageUpload<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:maxCount</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>5<span class=\\"token punctuation\\">\\"</span></span>  <span class=\\"token attr-name\\">@change</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>onUploadChange<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{i as comp,r as data};
