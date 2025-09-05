<template><div><h2 id="插件生命周期钩子文档" tabindex="-1"><a class="header-anchor" href="#插件生命周期钩子文档"><span>插件生命周期钩子文档</span></a></h2>
<p><a href="https://vitejs.cn/vite3-cn/guide/api-plugin.html#vite-specific-hooks" target="_blank" rel="noopener noreferrer">插件 API | Vite 官方中文文档</a></p>
<h2 id="手写插件" tabindex="-1"><a class="header-anchor" href="#手写插件"><span>手写插件</span></a></h2>
<blockquote>
<p>导入 和 引入</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> MyVitePlugin <span class="token keyword">from</span> <span class="token string">"./plugins/vite-aliases.ts"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"> plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token function">MyVitePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>vite-aliases.ts 文件</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/**</span>
<span class="line">         * </span>
<span class="line">         * @param config vite.config.ts 中写的配置会原封不动的返回</span>
<span class="line">        * @param env { mode: 'development', command: 'serve',isSsrBuild: false, isPreview: false }</span>
<span class="line">         * @returns Object</span>
<span class="line">         */</span></span>
<span class="line">        <span class="token function">config</span><span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> env<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// console.log('😁😁😁config, env ===>', config, env);</span></span>
<span class="line">            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'😁😁😁1111111111111'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">transformIndexHtml</span><span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> html<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span></span>
<span class="line">                <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;title>(.*?)&lt;\/title></span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;title>网站标题!&lt;/title></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">            <span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写插件已学配置" tabindex="-1"><a class="header-anchor" href="#编写插件已学配置"><span>编写插件已学配置</span></a></h2>
<p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241124094133403.png" alt="image-20241124094133403"></p>
</div></template>


