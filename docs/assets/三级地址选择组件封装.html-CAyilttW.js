import{_ as n,c as a,a as t,o as p}from"./app-CduvU-Ml.js";const e="/guoguo-notes/assets/image-20240824193408442-Zdqsw0va.png",l="/guoguo-notes/assets/image-20240824195618427-f46U3hEN.png",o={};function c(u,s){return p(),a("div",null,s[0]||(s[0]=[t('<h1 id="三级地址组件-《page-select-address》" tabindex="-1"><a class="header-anchor" href="#三级地址组件-《page-select-address》"><span>三级地址组件 《page-select-address》</span></a></h1><p><img src="'+e+'" alt="image-20240824193408442"></p><p><img src="'+l+`" alt="image-20240824195618427"></p><blockquote><p>html</p></blockquote><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-select-address</span> <span class="token attr-name">@address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onGetAddress<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span></span>
<span class="line">								<span class="token attr-name">:defaultAddress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>theDefaultAddress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u--input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model.region<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span> <span class="token attr-name">inputAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span></span>
<span class="line">                    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请选择团队所在区域<span class="token punctuation">&quot;</span></span> <span class="token attr-name">readonly</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u--input</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>page-select-address</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>js</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">//变量定义</span></span>
<span class="line"><span class="token literal-property property">theDefaultAddress</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   </span>
<span class="line"><span class="token comment">// 接口后赋值	</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>theDefaultAddress<span class="token operator">=</span><span class="token punctuation">[</span>data<span class="token punctuation">.</span>province_id<span class="token punctuation">,</span> data<span class="token punctuation">.</span>city_id<span class="token punctuation">,</span> data<span class="token punctuation">.</span>district_id<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token function">onGetAddress</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;data ===&gt;&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token keyword">const</span> <span class="token punctuation">{</span> resultData<span class="token punctuation">,</span> region <span class="token punctuation">}</span> <span class="token operator">=</span> data</span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span></span>
<span class="line">				<span class="token operator">...</span>resultData<span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>theAddressDate <span class="token operator">=</span> resultData</span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span> <span class="token string">&#39;region&#39;</span><span class="token punctuation">,</span> region<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token keyword">this</span><span class="token punctuation">.</span>spanStyle <span class="token operator">=</span> <span class="token string">&#39;overflow:auto&#39;</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const r=n(o,[["render",c],["__file","三级地址选择组件封装.html.vue"]]),k=JSON.parse('{"path":"/%E4%B8%89%E7%BA%A7%E5%9C%B0%E5%9D%80%E9%80%89%E6%8B%A9%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85.html","title":"三级地址组件 《page-select-address》","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724749559000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"三级地址选择组件封装.md","excerpt":"\\n<p></p>\\n<p></p>\\n<blockquote>\\n<p>html</p>\\n</blockquote>\\n<div class=\\"language-html\\" data-highlighter=\\"prismjs\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"line\\">\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>page-select-address</span> <span class=\\"token attr-name\\">@address</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>onGetAddress<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">@close</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>close<span class=\\"token punctuation\\">\\"</span></span></span>\\n<span class=\\"line\\">\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"token attr-name\\">:defaultAddress</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>theDefaultAddress<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">                <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>u--input</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>model.region<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">border</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>none<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">inputAlign</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>right<span class=\\"token punctuation\\">\\"</span></span></span>\\n<span class=\\"line\\">                    <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>请选择团队所在区域<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">readonly</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>u--input</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>page-select-address</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{r as comp,k as data};
