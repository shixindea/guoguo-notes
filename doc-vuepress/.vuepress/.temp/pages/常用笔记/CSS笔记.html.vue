<template><div><hr>
<p>title: CSS 笔记</p>
<p>date: 2024-8-4
tags:</p>
<ul>
<li>CSS</li>
<li>笔记
categories:</li>
<li>自学篇</li>
</ul>
<hr>
<h2 id="省略号-单行" tabindex="-1"><a class="header-anchor" href="#省略号-单行"><span>省略号 - 单行</span></a></h2>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.singe-line </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  &lt;p>单行省略&lt;/p></span>
<span class="line">  &lt;div class=<span class="token string">"singe-line box"</span> <span class="token punctuation">:</span>title=<span class="token string">"content"</span>></span>
<span class="line">    <span class="token punctuation">{</span><span class="token punctuation">{</span> content <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  &lt;/div></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="省略号-两行" tabindex="-1"><a class="header-anchor" href="#省略号-两行"><span>省略号 - 两行</span></a></h2>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">.double-line</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token selector">&lt;p>两行省略&lt;/p></span>
<span class="line">  &lt;div class="box"></span>
<span class="line">    &lt;div class="double-line" :title="content2"></span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token punctuation">{</span> content2 <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    &lt;/div></span>
<span class="line">  &lt;/div></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="超过元素宽高省略" tabindex="-1"><a class="header-anchor" href="#超过元素宽高省略"><span>超过元素宽高省略</span></a></h2>
<blockquote>
<p>需要设置元素宽度与高度,根据高度看下最多能放几行,再设置-webkit-line-clamp的值为最大行数</p>
</blockquote>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">.over-line</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 65px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">&lt;p>超过元素宽高省略&lt;/p></span>
<span class="line">  &lt;div class="box"></span>
<span class="line">    &lt;div class="over-line" :title="content"></span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token punctuation">{</span> content <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    &lt;/div></span>
<span class="line">  &lt;/div></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


