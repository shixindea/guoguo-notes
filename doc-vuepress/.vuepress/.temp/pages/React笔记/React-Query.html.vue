<template><div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>
<h4 id="_1-querykey-url-query" tabindex="-1"><a class="header-anchor" href="#_1-querykey-url-query"><span>1. <code v-pre>queryKey: [...url, query]</code></span></a></h4>
<ul>
<li>
<p><strong>作用</strong>：作为查询的唯一标识符，用于缓存和去重。</p>
</li>
<li>
<p>说明</p>
<p>：</p>
<ul>
<li>React Query 会根据 <code v-pre>queryKey</code> 来判断是否是同一个请求。</li>
<li>如果 <code v-pre>queryKey</code> 相同，React Query 会复用缓存，而不是重新发起请求。</li>
<li>通常 <code v-pre>queryKey</code> 是一个数组，可以包含请求的 URL、参数、页码等。</li>
</ul>
</li>
</ul>
<h4 id="_2-queryfn-requestclient-request-url-query-as-any" tabindex="-1"><a class="header-anchor" href="#_2-queryfn-requestclient-request-url-query-as-any"><span>2. <code v-pre>queryFn: () =&gt; requestClient.request(url, { query } as any)</code></span></a></h4>
<ul>
<li>
<p><strong>作用</strong>：定义数据获取的逻辑。</p>
</li>
<li>
<p>说明</p>
<p>：</p>
<ul>
<li><code v-pre>queryFn</code> 是一个返回 Promise 的函数，React Query 会自动调用它来获取数据。</li>
<li>这里使用了 <code v-pre>requestClient.request</code> 来发起请求，并传递 <code v-pre>url</code> 和 <code v-pre>query</code> 参数。</li>
<li><code v-pre>as any</code> 是 TypeScript 的类型断言，表示忽略类型检查（通常用于临时解决类型不匹配的问题）。</li>
</ul>
</li>
</ul>
<h4 id="_3-refetchonmount-true" tabindex="-1"><a class="header-anchor" href="#_3-refetchonmount-true"><span>3. <code v-pre>refetchOnMount: true</code></span></a></h4>
<ul>
<li>
<p><strong>作用</strong>：当组件挂载时，是否重新获取数据。</p>
</li>
<li>
<p>说明</p>
<p>：</p>
<ul>
<li>如果 <code v-pre>true</code>，每次组件挂载时都会重新发起请求（即使缓存中有数据）。</li>
<li>如果 <code v-pre>false</code>，则优先使用缓存数据，不会自动重新获取。</li>
</ul>
</li>
</ul>
<h4 id="_4-refetchonwindowfocus-true" tabindex="-1"><a class="header-anchor" href="#_4-refetchonwindowfocus-true"><span>4. <code v-pre>refetchOnWindowFocus: true</code></span></a></h4>
<ul>
<li>
<p><strong>作用</strong>：当浏览器窗口重新获得焦点时，是否重新获取数据。</p>
</li>
<li>
<p>说明</p>
<p>：</p>
<ul>
<li>如果 <code v-pre>true</code>，用户切换回浏览器标签页时会自动刷新数据。</li>
<li>适用于需要实时数据的场景（如聊天、通知）。</li>
</ul>
</li>
</ul>
<h4 id="_5-staletime-0" tabindex="-1"><a class="header-anchor" href="#_5-staletime-0"><span>5. <code v-pre>staleTime: 0</code></span></a></h4>
<ul>
<li>
<p><strong>作用</strong>：数据被视为“陈旧”的时间（单位：毫秒）。</p>
</li>
<li>
<p>说明</p>
<p>：</p>
<ul>
<li>如果 <code v-pre>staleTime: 0</code>，数据会立即被视为陈旧，React Query 会尝试重新获取。</li>
<li>如果 <code v-pre>staleTime: 5000</code>，数据在 5 秒内会被视为“新鲜”，不会重新获取。</li>
<li>设置为 <code v-pre>0</code> 表示每次都会重新获取数据（除非缓存被禁用）。</li>
</ul>
</li>
</ul>
<h4 id="_6-gctime-0" tabindex="-1"><a class="header-anchor" href="#_6-gctime-0"><span>6. <code v-pre>gcTime: 0</code></span></a></h4>
<ul>
<li>
<p><strong>作用</strong>：缓存数据的垃圾回收时间（单位：毫秒）。</p>
</li>
<li>
<p>说明</p>
<p>：</p>
<ul>
<li>如果 <code v-pre>gcTime: 0</code>，数据会在不再使用时立即从缓存中移除。</li>
<li>如果 <code v-pre>gcTime: 5000</code>，数据会在 5 秒后从缓存中移除。</li>
<li>适用于内存敏感的场景，但会增加请求次数。</li>
</ul>
</li>
</ul>
<h2 id="usequery" tabindex="-1"><a class="header-anchor" href="#usequery"><span>useQuery</span></a></h2>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre v-pre class="language-tsx"><code><span class="line"> <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    queryKey<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>url<span class="token punctuation">,</span> requestData<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">queryFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> requestClient<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      data<span class="token operator">:</span> requestData</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    enabled<span class="token operator">:</span> options<span class="token operator">?.</span>enabled <span class="token operator">??</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    refetchOnMount<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    refetchOnWindowFocus<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    staleTime<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token comment">// 5 * 60 * 1000, // 5分钟缓存</span></span>
<span class="line">    gcTime<span class="token operator">:</span> <span class="token number">0</span><span class="token comment">//10 * 60 * 1000, // 10分钟垃圾回收</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    data<span class="token operator">:</span> data<span class="token operator">?.</span>data<span class="token operator">?.</span>data<span class="token operator">?.</span>list <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token operator">...</span>rest<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usequery-系统自动触发" tabindex="-1"><a class="header-anchor" href="#usequery-系统自动触发"><span>useQuery 系统自动触发</span></a></h2>
<h2 id="usemutation-自动处理请求" tabindex="-1"><a class="header-anchor" href="#usemutation-自动处理请求"><span>useMutation 自动处理请求</span></a></h2>
<p>useMutation点
目的:用于服务器端的副作用,如POST,PUT,DELETE。
mutationFn：执行数据变更的异步函数。
mutate:你调用来触发变更的函数。
onSuccess:变更成功后用于处理副作用的回调函数。</p>
</div></template>


