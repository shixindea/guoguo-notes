<template><div><h2 id="_1-解决图标不显示的问题" tabindex="-1"><a class="header-anchor" href="#_1-解决图标不显示的问题"><span>1.解决图标不显示的问题</span></a></h2>
<blockquote>
<p>1.安装这个</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">npm install <span class="token operator">--</span>save @element<span class="token operator">-</span>plus<span class="token operator">/</span>icons</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>2.引入这个</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Search<span class="token punctuation">,</span> ChatRound <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@element-plus/icons'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>3.注册这个</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Options<span class="token punctuation">,</span> Vue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Search<span class="token punctuation">,</span> ChatRound <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@element-plus/icons'</span></span>
<span class="line">@<span class="token function">Options</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    Search<span class="token punctuation">,</span></span>
<span class="line">    ChatRound</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


