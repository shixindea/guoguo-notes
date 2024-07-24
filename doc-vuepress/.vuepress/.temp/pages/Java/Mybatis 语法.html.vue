<template><div><h2 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询"><span>模糊查询</span></a></h2>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username!=null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    username like  CONCAT('%',#{username},'%')</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制台打印sql" tabindex="-1"><a class="header-anchor" href="#控制台打印sql"><span>控制台打印sql</span></a></h2>
<p>在 <code v-pre>application.yml</code> 增加</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="line"><span class="token key atrule">mybatis</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">configuration</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


