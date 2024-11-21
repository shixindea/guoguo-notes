<template><div><h1 id="python代码片段" tabindex="-1"><a class="header-anchor" href="#python代码片段"><span>Python代码片段</span></a></h1>
<h2 id="发起一个get请求" tabindex="-1"><a class="header-anchor" href="#发起一个get请求"><span>发起一个Get请求</span></a></h2>
<blockquote>
<p>行内式</p>
</blockquote>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">'https://www.sogou.com/web?query=周杰伦'</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">'user-agent'</span><span class="token punctuation">:</span> <span class="token string">'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span>  headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">resp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 关掉请求</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>参数</p>
</blockquote>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">'https://www.sogou.com/web'</span></span>
<span class="line"></span>
<span class="line">param <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"query"</span><span class="token punctuation">:</span> <span class="token string">"周杰伦"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">'user-agent'</span><span class="token punctuation">:</span> <span class="token string">'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span>params<span class="token operator">=</span>param<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>text<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">resp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 关掉请求</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发起一个post请求" tabindex="-1"><a class="header-anchor" href="#发起一个post请求"><span>发起一个Post请求</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">'https://fanyi.baidu.com/sug'</span></span>
<span class="line"></span>
<span class="line">theData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">'kw'</span><span class="token punctuation">:</span> <span class="token string">'dog'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span>theData<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">resp<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 关掉请求</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


