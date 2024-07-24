<template><div><h2 id="toast消息提示" tabindex="-1"><a class="header-anchor" href="#toast消息提示"><span>Toast消息提示</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">&lt;u-toast ref="uToast">&lt;/u-toast></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">this.$refs.uToast.show({</span>
<span class="line">					type: 'success',</span>
<span class="line">					title: '成功主题(带图标)',</span>
<span class="line">					message: "庄生晓梦迷蝴蝶",</span>
<span class="line">					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'</span>
<span class="line">				})</span>
<span class="line">				</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">this.$u.toast(261)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="页面加载" tabindex="-1"><a class="header-anchor" href="#页面加载"><span>页面加载</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageloading<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isloading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u-loading-page</span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isloading<span class="token punctuation">"</span></span> <span class="token attr-name">loading-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading...<span class="token punctuation">"</span></span> <span class="token attr-name">bgColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ff0000<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u-loading-page</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token literal-property property">isloading</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">.pageloading</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line">		<span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


