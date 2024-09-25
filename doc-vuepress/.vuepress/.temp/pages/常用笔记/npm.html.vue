<template><div><h2 id="上传包-如何上传自己的npm包-npm上传-csdn博客" tabindex="-1"><a class="header-anchor" href="#上传包-如何上传自己的npm包-npm上传-csdn博客"><span>上传包 <a href="https://blog.csdn.net/Her_smile/article/details/80519597" target="_blank" rel="noopener noreferrer">如何上传自己的npm包_npm上传-CSDN博客</a></span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> login</span>
<span class="line"><span class="token function">npm</span> publish  //上传</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> unpublish <span class="token parameter variable">--force</span>  //撤销上传</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="淘宝镜像-切换至淘宝镜像" tabindex="-1"><a class="header-anchor" href="#淘宝镜像-切换至淘宝镜像"><span>淘宝镜像  切换至淘宝镜像</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment">#最新地址 淘宝 NPM 镜像站喊你切换新域名啦!</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="恢复官方镜像源" tabindex="-1"><a class="header-anchor" href="#恢复官方镜像源"><span>恢复官方镜像源</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


