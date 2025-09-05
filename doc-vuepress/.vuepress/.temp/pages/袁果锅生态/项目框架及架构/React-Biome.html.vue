<template><div><h2 id="biome格式化代码" tabindex="-1"><a class="header-anchor" href="#biome格式化代码"><span>Biome格式化代码</span></a></h2>
<blockquote>
<p>Package.json</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token property">"lint:format"</span><span class="token operator">:</span> <span class="token string">"git add . &amp;&amp; biome check --write --staged  &amp;&amp; git add . "</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"lint:format:fix"</span><span class="token operator">:</span> <span class="token string">"biome check --write ./src"</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>根目录新增  biome.json  文件</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"$schema"</span><span class="token operator">:</span> <span class="token string">"https://biomejs.dev/schemas/1.5.3/schema.json"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"formatter"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"indentStyle"</span><span class="token operator">:</span> <span class="token string">"space"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"indentWidth"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"lineWidth"</span><span class="token operator">:</span> <span class="token number">100</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"organizeImports"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"linter"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


