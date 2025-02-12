<template><div><h2 id="单行-多行-省略号-scss" tabindex="-1"><a class="header-anchor" href="#单行-多行-省略号-scss"><span>单行 多行 省略号 scss</span></a></h2>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">/** @format */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">multi-ellipsis</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$lines</span></span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-clamp</span><span class="token punctuation">:</span> <span class="token variable">$lines</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> <span class="token variable">$lines</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/* autoprefixer: ignore next */</span></span>
<span class="line">  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/* autoprefixer: ignore next */</span></span>
<span class="line">  <span class="token property">box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">ellipsis </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">word-break</span><span class="token punctuation">:</span> keep-all<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">		</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


